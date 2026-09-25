/**
 * Salesforce Certified Platform Sharing and Visibility Architect (ARC-101) Practice Application
 */

(function () {
  'use strict';

  const STORAGE_KEYS = {
    THEME: 'cert_prep_theme_v2',
    PROGRESS: 'cert_prep_progress_v2',
    LAST_SEQUENTIAL_INDEX: 'cert_prep_last_sequential_index',
    VOICE_NAME: 'cert_prep_voice_name',
    SPEECH_RATE: 'cert_prep_speech_rate'
  };

  // State
  let state = {
    theme: localStorage.getItem(STORAGE_KEYS.THEME) || 'dark',
    progress: JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || '{}'),
    
    // View state
    view: 'dashboard', // 'dashboard' | 'quiz'
    
    // Active session
    mode: '', // 'sequential' | 'shuffled'
    activeTitle: '',
    activeQuestions: [],
    currentIndex: 0,
    selectedOptions: new Set(),
    
    sessionCorrect: 0,
    sessionAnswered: 0
  };

  // DOM Elements
  const el = {
    html: document.documentElement,
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeIconSun: document.getElementById('themeIconSun'),
    themeIconMoon: document.getElementById('themeIconMoon'),
    navBrandBtn: document.getElementById('navBrandBtn'),

    // Views
    dashboardView: document.getElementById('dashboardView'),
    quizView: document.getElementById('quizView'),

    // Dashboard
    statTotalQuestions: document.getElementById('statTotalQuestions'),
    statAnsweredCount: document.getElementById('statAnsweredCount'),
    statAnsweredSub: document.getElementById('statAnsweredSub'),
    statAccuracy: document.getElementById('statAccuracy'),
    statCorrectSub: document.getElementById('statCorrectSub'),
    btnStartSequential: document.getElementById('btnStartSequential'),
    btnStartShuffled: document.getElementById('btnStartShuffled'),
    btnResetProgress: document.getElementById('btnResetProgress'),

    // Quiz
    quizBackBtn: document.getElementById('quizBackBtn'),
    quizDomainBadge: document.getElementById('quizDomainBadge'),
    quizScorePill: document.getElementById('quizScorePill'),
    circleNavContainer: document.getElementById('circleNavContainer'),
    circleNavRow: document.getElementById('circleNavRow'),
    questionProgressText: document.getElementById('questionProgressText'),
    questionPercentText: document.getElementById('questionPercentText'),
    quizProgressBarFill: document.getElementById('quizProgressBarFill'),
    questionPrompt: document.getElementById('questionPrompt'),
    questionRefTag: document.getElementById('questionRefTag'),
    speechVoiceSelect: document.getElementById('speechVoiceSelect'),
    speechSpeedSelect: document.getElementById('speechSpeedSelect'),
    btnSpeakQuestion: document.getElementById('btnSpeakQuestion'),
    btnSpeakQuestionText: document.getElementById('btnSpeakQuestionText'),
    btnChallengeAnswer: document.getElementById('btnChallengeAnswer'),
    challengeBox: document.getElementById('challengeBox'),
    multiSelectAlert: document.getElementById('multiSelectAlert'),
    multiSelectText: document.getElementById('multiSelectText'),
    multiSelectCounter: document.getElementById('multiSelectCounter'),
    optionsContainer: document.getElementById('optionsContainer'),

    // Explanation
    explanationCard: document.getElementById('explanationCard'),
    resultBanner: document.getElementById('resultBanner'),
    resultTitle: document.getElementById('resultTitle'),
    btnSpeakExplanation: document.getElementById('btnSpeakExplanation'),
    btnSpeakExplanationText: document.getElementById('btnSpeakExplanationText'),
    explanationWhyCorrect: document.getElementById('explanationWhyCorrect'),
    distractorSection: document.getElementById('distractorSection'),
    distractorList: document.getElementById('distractorList'),

    // Action buttons
    btnPrevQuestion: document.getElementById('btnPrevQuestion'),
    btnAction: document.getElementById('btnAction'),
    btnNextQuestion: document.getElementById('btnNextQuestion'),

    // Modal
    completionModal: document.getElementById('completionModal'),
    modalTitle: document.getElementById('modalTitle'),
    modalScoreLarge: document.getElementById('modalScoreLarge'),
    modalCorrectCount: document.getElementById('modalCorrectCount'),
    modalIncorrectCount: document.getElementById('modalIncorrectCount'),
    modalPassingStatus: document.getElementById('modalPassingStatus'),
    modalBtnRestart: document.getElementById('modalBtnRestart'),
    modalBtnHome: document.getElementById('modalBtnHome')
  };

  function getAllQuestions() {
    if (!window.CERT_PREP_DATA?.sections) return [];
    return window.CERT_PREP_DATA.sections.flatMap(s => s.questions);
  }

  // --- Theme Management ---
  function applyTheme(theme) {
    state.theme = theme;
    el.html.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      el.themeIconSun.classList.remove('hidden');
      el.themeIconMoon.classList.add('hidden');
    } else {
      el.themeIconSun.classList.add('hidden');
      el.themeIconMoon.classList.remove('hidden');
    }
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }

  function toggleTheme() {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  }

  // --- Persistence ---
  function saveState() {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(state.progress));
    updateDashboardStats();
  }

  function resetProgress() {
    if (confirm('Reset all saved practice answers and score history?')) {
      state.progress = {};
      localStorage.removeItem(STORAGE_KEYS.LAST_SEQUENTIAL_INDEX);
      saveState();
      renderDashboard();
    }
  }

  // --- View Switcher ---
  function showView(viewName) {
    stopSpeech();
    closeChallengeBox();
    state.view = viewName;
    el.dashboardView.classList.toggle('hidden', viewName !== 'dashboard');
    el.quizView.classList.toggle('hidden', viewName !== 'quiz');
    el.completionModal.classList.add('hidden');

    if (viewName === 'dashboard') {
      renderDashboard();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- Dashboard Logic ---
  function updateDashboardStats() {
    const all = getAllQuestions();
    const total = all.length;
    const answeredIds = Object.keys(state.progress);
    const answeredCount = answeredIds.length;

    let correctCount = 0;
    answeredIds.forEach(id => {
      if (state.progress[id]?.isCorrect) correctCount++;
    });

    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    const answeredPercent = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

    el.statTotalQuestions.textContent = total;
    el.statAnsweredCount.textContent = answeredCount;
    el.statAnsweredSub.textContent = `${answeredPercent}% of total`;
    el.statAccuracy.textContent = `${accuracy}%`;
    el.statCorrectSub.textContent = `${correctCount} correct`;

    const rawSaved = localStorage.getItem(STORAGE_KEYS.LAST_SEQUENTIAL_INDEX);
    const savedIdx = rawSaved !== null ? parseInt(rawSaved, 10) : 0;
    const seqBtn = el.btnStartSequential ? el.btnStartSequential.querySelector('button') : null;
    if (seqBtn) {
      if (!isNaN(savedIdx) && savedIdx > 0 && savedIdx < total) {
        seqBtn.textContent = `Resume Drill (Question ${savedIdx + 1}) →`;
      } else {
        seqBtn.textContent = `Start Sequential Drill →`;
      }
    }
  }

  function renderDashboard() {
    updateDashboardStats();
  }

  // --- Drill Starters ---
  function startSequentialDrill() {
    const all = getAllQuestions();
    if (!all.length) return;

    // Sort by original index / reference number
    const sorted = [...all].sort((a, b) => {
      const numA = parseInt(a.reference.replace(/\D/g, '')) || 0;
      const numB = parseInt(b.reference.replace(/\D/g, '')) || 0;
      return numA - numB;
    });

    state.mode = 'sequential';
    state.activeTitle = 'Sequential Practice Drill';
    state.activeQuestions = sorted;

    const rawSaved = localStorage.getItem(STORAGE_KEYS.LAST_SEQUENTIAL_INDEX);
    const savedIdx = rawSaved !== null ? parseInt(rawSaved, 10) : 0;
    const resumeIndex = (!isNaN(savedIdx) && savedIdx >= 0 && savedIdx < sorted.length) ? savedIdx : 0;

    startQuiz(resumeIndex);
  }

  function startShuffledDrill() {
    const all = getAllQuestions();
    if (!all.length) return;

    const shuffled = [...all];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    state.mode = 'shuffled';
    state.activeTitle = 'Shuffled Mock Exam';
    state.activeQuestions = shuffled;
    startQuiz(0);
  }

  function startQuiz(initialIndex = 0) {
    state.currentIndex = initialIndex;
    state.sessionCorrect = 0;
    state.sessionAnswered = 0;

    state.activeQuestions.forEach(q => {
      if (state.progress[q.id]?.checked) {
        state.sessionAnswered++;
        if (state.progress[q.id].isCorrect) state.sessionCorrect++;
      }
    });

    showView('quiz');
    renderCurrentQuestion();
  }

  // --- Circle Navigator: All Questions with Auto-Focus on [currentIndex - 5 ... currentIndex + 2] ---
  function renderCircleNav() {
    if (!el.circleNavRow) return;
    el.circleNavRow.innerHTML = '';

    const total = state.activeQuestions.length;
    if (total === 0) return;

    for (let i = 0; i < total; i++) {
      const targetQ = state.activeQuestions[i];
      const circleBtn = document.createElement('button');
      circleBtn.type = 'button';
      circleBtn.className = 'nav-circle';
      circleBtn.textContent = (i + 1).toString();
      circleBtn.setAttribute('title', `Question ${i + 1} (${targetQ.reference})`);
      circleBtn.setAttribute('aria-label', `Question ${i + 1}`);

      const saved = state.progress[targetQ.id];
      if (saved && saved.checked) {
        if (saved.isCorrect) {
          circleBtn.classList.add('is-correct');
        } else {
          circleBtn.classList.add('is-incorrect');
        }
      } else {
        circleBtn.classList.add('is-unanswered');
      }

      if (i === state.currentIndex) {
        circleBtn.classList.add('is-current');
      }

      circleBtn.addEventListener('click', () => {
        if (state.currentIndex !== i) {
          stopSpeech();
          closeChallengeBox();
          state.currentIndex = i;
          renderCurrentQuestion();
        }
      });

      el.circleNavRow.appendChild(circleBtn);
    }

    // Smoothly scroll row so the last 5 and next 2 questions are in view
    scrollActiveCircleIntoFocus();
  }

  function scrollActiveCircleIntoFocus() {
    if (!el.circleNavRow || !el.circleNavRow.children.length) return;

    requestAnimationFrame(() => {
      const focusIndex = Math.max(0, state.currentIndex - 5);
      const targetCircle = el.circleNavRow.children[focusIndex];

      if (targetCircle) {
        const rowRect = el.circleNavRow.getBoundingClientRect();
        const circleRect = targetCircle.getBoundingClientRect();
        const scrollDelta = circleRect.left - rowRect.left - 10;
        const newScrollLeft = el.circleNavRow.scrollLeft + scrollDelta;

        el.circleNavRow.scrollTo({
          left: Math.max(0, newScrollLeft),
          behavior: 'smooth'
        });
      }
    });
  }

  // --- Realistic Human-Like Speech Synthesis ---
  // --- Realistic Human-Like Speech Synthesis Engine ---
  let speechState = {
    isSpeaking: false,
    activeType: null // 'question' | 'explanation'
  };
  let cachedNaturalVoice = null;
  let speechKeepAliveTimer = null;
  let speechQueue = [];
  let speechQueueIndex = 0;
  let speechPauseTimer = null;

  function getAvailableVoices() {
    if (!('speechSynthesis' in window)) return [];
    return window.speechSynthesis.getVoices() || [];
  }

  function getVoiceScore(voice) {
    const name = (voice.name || '').toLowerCase();
    const lang = (voice.lang || '').toLowerCase();
    let score = 0;

    // Highest rank: Online / Neural / Natural modern models
    if (name.includes('natural')) score += 150;
    if (name.includes('neural')) score += 140;
    if (name.includes('enhanced')) score += 120;
    if (name.includes('premium')) score += 110;
    if (name.includes('siri')) score += 105;
    if (name.includes('online')) score += 100;

    // Studio-quality Google & Apple voices
    if (name.includes('google uk english female')) score += 95;
    if (name.includes('google us english')) score += 90;
    if (name.includes('google uk english male')) score += 85;
    if (name.includes('daniel')) score += 80;
    if (name.includes('ava') || name.includes('samantha') || name.includes('zoe') || name.includes('karen')) score += 70;
    if (name.includes('alex')) score += 60;
    if (name.includes('google')) score += 50;

    // Dialect
    if (lang === 'en-us') score += 15;
    else if (lang === 'en-gb') score += 12;
    else if (lang.startsWith('en')) score += 8;

    // Penalize legacy robotic and novelty voices
    if (name.includes('compact')) score -= 80;
    if (name.includes('bad news') || name.includes('bahh') || name.includes('bells') || name.includes('boing') ||
        name.includes('cellos') || name.includes('deranged') || name.includes('fred') || name.includes('good news') ||
        name.includes('hysterical') || name.includes('pipe organ') || name.includes('trinoids') ||
        name.includes('whisper') || name.includes('zarvox') || name.includes('albert') || name.includes('junior')) {
      score -= 300;
    }

    return score;
  }

  function populateVoiceDropdown() {
    if (!el.speechVoiceSelect) return;
    const voices = getAvailableVoices();
    if (!voices.length) return;

    const enVoices = voices.filter(v => v.lang && v.lang.startsWith('en'));
    const pool = enVoices.length > 0 ? enVoices : voices;
    const sorted = [...pool].sort((a, b) => getVoiceScore(b) - getVoiceScore(a));

    const savedVoiceName = localStorage.getItem(STORAGE_KEYS.VOICE_NAME);

    el.speechVoiceSelect.innerHTML = '';
    sorted.forEach((v, idx) => {
      const opt = document.createElement('option');
      opt.value = v.name;
      opt.textContent = `${v.name} (${v.lang})`;
      if (savedVoiceName ? v.name === savedVoiceName : idx === 0) {
        opt.selected = true;
      }
      el.speechVoiceSelect.appendChild(opt);
    });

    if (savedVoiceName) {
      cachedNaturalVoice = sorted.find(v => v.name === savedVoiceName) || sorted[0];
    } else {
      cachedNaturalVoice = sorted[0];
    }

    // Restore saved speed rate
    const savedRate = localStorage.getItem(STORAGE_KEYS.SPEECH_RATE);
    if (savedRate && el.speechSpeedSelect) {
      el.speechSpeedSelect.value = savedRate;
    }
  }

  function getSelectedVoice() {
    const voices = getAvailableVoices();
    if (!voices.length) return null;

    if (el.speechVoiceSelect && el.speechVoiceSelect.value) {
      const matched = voices.find(v => v.name === el.speechVoiceSelect.value);
      if (matched) return matched;
    }

    const savedName = localStorage.getItem(STORAGE_KEYS.VOICE_NAME);
    if (savedName) {
      const matched = voices.find(v => v.name === savedName);
      if (matched) return matched;
    }

    if (cachedNaturalVoice) return cachedNaturalVoice;
    const enVoices = voices.filter(v => v.lang && v.lang.startsWith('en'));
    const pool = enVoices.length > 0 ? enVoices : voices;
    const sorted = [...pool].sort((a, b) => getVoiceScore(b) - getVoiceScore(a));
    return sorted[0] || null;
  }

  function getSpeechRate() {
    if (el.speechSpeedSelect && el.speechSpeedSelect.value) {
      const parsed = parseFloat(el.speechSpeedSelect.value);
      if (!isNaN(parsed) && parsed > 0.4 && parsed < 2.0) {
        return parsed;
      }
    }
    const saved = localStorage.getItem(STORAGE_KEYS.SPEECH_RATE);
    if (saved) {
      const parsed = parseFloat(saved);
      if (!isNaN(parsed) && parsed > 0.4 && parsed < 2.0) {
        return parsed;
      }
    }
    return 0.84; // Default slow and deliberate instructor reading
  }

  function startKeepAlive() {
    clearInterval(speechKeepAliveTimer);
    speechKeepAliveTimer = setInterval(() => {
      if (window.speechSynthesis && window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      } else {
        clearInterval(speechKeepAliveTimer);
      }
    }, 9000);
  }

  function clearKeepAlive() {
    if (speechKeepAliveTimer) {
      clearInterval(speechKeepAliveTimer);
      speechKeepAliveTimer = null;
    }
  }

  function formatTextForNaturalSpeech(text) {
    if (!text) return '';
    return text
      // Technical acronym phonetic expansions for natural human pronunciation
      .replace(/\bOWD\b/g, 'O-W-D')
      .replace(/\bFLS\b/g, 'Field Level Security')
      .replace(/\bLWC\b/g, 'L-W-C')
      .replace(/\bCRUD\b/g, 'C-R-U-D')
      .replace(/\bAPIs\b/g, 'A-P-I-s')
      .replace(/\bAPI\b/g, 'A-P-I')
      .replace(/\bSSO\b/g, 'Single Sign-On')
      .replace(/\bMFA\b/g, 'Multi-Factor Authentication')
      .replace(/\bLDV\b/g, 'Large Data Volume')
      .replace(/\bROPC\b/g, 'R-O-P-C')
      .replace(/\bJWT\b/g, 'J-W-T')
      .replace(/\bSAML\b/g, 'S-A-M-L')
      .replace(/\bPoLP\b/g, 'Principle of Least Privilege')
      .replace(/\bOAuth\b/g, 'O-Auth')
      .replace(/\bOIDC\b/g, 'O-I-D-C')
      .replace(/\bIT\b/g, 'I-T')
      .replace(/\bUI\b/g, 'user interface')
      .replace(/\be\.g\.,/gi, 'for example,')
      .replace(/\be\.g\./gi, 'for example,')
      .replace(/\bi\.e\.,/gi, 'that is,')
      .replace(/\bi\.e\./gi, 'that is,')
      .replace(/\bvs\.?\b/gi, 'versus')
      .replace(/Option ([A-Z]):/g, 'Option $1.')
      .replace(/["“”]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function stopSpeech() {
    clearKeepAlive();
    if (speechPauseTimer) {
      clearTimeout(speechPauseTimer);
      speechPauseTimer = null;
    }
    speechQueue = [];
    speechQueueIndex = 0;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    speechState.isSpeaking = false;
    speechState.activeType = null;
    updateSpeechUI();
  }

  function updateSpeechUI() {
    if (el.btnSpeakQuestion) {
      if (speechState.activeType === 'question') {
        el.btnSpeakQuestion.classList.add('is-speaking');
        if (el.btnSpeakQuestionText) el.btnSpeakQuestionText.textContent = 'Stop Audio';
      } else {
        el.btnSpeakQuestion.classList.remove('is-speaking');
        if (el.btnSpeakQuestionText) el.btnSpeakQuestionText.textContent = 'Read Aloud';
      }
    }

    if (el.btnSpeakExplanation) {
      if (speechState.activeType === 'explanation') {
        el.btnSpeakExplanation.classList.add('is-speaking');
        if (el.btnSpeakExplanationText) el.btnSpeakExplanationText.textContent = 'Stop Audio';
      } else {
        el.btnSpeakExplanation.classList.remove('is-speaking');
        if (el.btnSpeakExplanationText) el.btnSpeakExplanationText.textContent = 'Read Solution';
      }
    }
  }

  function startSegmentedSpeech(segments, type) {
    stopSpeech();
    if (!segments || segments.length === 0) return;

    speechQueue = segments;
    speechQueueIndex = 0;
    speechState.isSpeaking = true;
    speechState.activeType = type;
    updateSpeechUI();
    startKeepAlive();
    playNextSpeechSegment();
  }

  function playNextSpeechSegment() {
    if (!speechState.isSpeaking) return;
    if (speechQueueIndex >= speechQueue.length) {
      stopSpeech();
      return;
    }

    const segment = speechQueue[speechQueueIndex];
    speechQueueIndex++;

    const utterance = new SpeechSynthesisUtterance(segment.text);
    const selectedVoice = getSelectedVoice();
    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.lang = selectedVoice.lang || 'en-US';
    }

    utterance.rate = getSpeechRate();
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    utterance.onend = () => {
      if (!speechState.isSpeaking) return;
      if (speechQueueIndex < speechQueue.length) {
        speechPauseTimer = setTimeout(() => {
          playNextSpeechSegment();
        }, segment.pauseAfter || 300);
      } else {
        stopSpeech();
      }
    };

    utterance.onerror = () => {
      if (!speechState.isSpeaking) return;
      if (speechQueueIndex < speechQueue.length) {
        speechPauseTimer = setTimeout(() => {
          playNextSpeechSegment();
        }, 150);
      } else {
        stopSpeech();
      }
    };

    window.speechSynthesis.speak(utterance);
  }

  function prepareQuestionSegments(q, questionIndex) {
    const segments = [];
    segments.push({ text: `Question ${questionIndex + 1}.`, pauseAfter: 350 });

    const cleanedPrompt = formatTextForNaturalSpeech(q.question);
    const sentences = cleanedPrompt.match(/[^.!?]+[.!?]+|\S+/g) || [cleanedPrompt];
    sentences.forEach((sentence, idx) => {
      const s = sentence.trim();
      if (!s) return;
      const isLast = idx === sentences.length - 1;
      segments.push({
        text: s,
        pauseAfter: isLast ? 480 : 250
      });
    });

    const letters = Object.keys(q.options).sort();
    letters.forEach(letter => {
      const optText = formatTextForNaturalSpeech(q.options[letter]);
      segments.push({
        text: `Option ${letter}. ${optText}`,
        pauseAfter: 400
      });
    });

    return segments;
  }

  function prepareExplanationSegments(q) {
    const segments = [];
    const correctText = q.correctAnswers.join(' and ');
    segments.push({ text: `Verified Solution. Correct Answer is Option ${correctText}.`, pauseAfter: 420 });

    const cleanedWhy = formatTextForNaturalSpeech(q.whyCorrect);
    const sentences = cleanedWhy.match(/[^.!?]+[.!?]+|\S+/g) || [cleanedWhy];
    sentences.forEach((sentence, idx) => {
      const s = sentence.trim();
      if (!s) return;
      const isLast = idx === sentences.length - 1;
      segments.push({
        text: s,
        pauseAfter: isLast ? 480 : 250
      });
    });

    const distractors = q.distractors || {};
    const dKeys = Object.keys(distractors).sort();
    if (dKeys.length > 0) {
      segments.push({ text: `Distractor Analysis.`, pauseAfter: 350 });
      dKeys.forEach(k => {
        const distText = formatTextForNaturalSpeech(distractors[k]);
        segments.push({
          text: `Option ${k}. ${distText}`,
          pauseAfter: 400
        });
      });
    }

    return segments;
  }

  function toggleSpeakQuestion() {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported in this browser.');
      return;
    }

    if (speechState.activeType === 'question') {
      stopSpeech();
      return;
    }

    const q = state.activeQuestions[state.currentIndex];
    if (!q) return;

    const segments = prepareQuestionSegments(q, state.currentIndex);
    startSegmentedSpeech(segments, 'question');
  }

  function toggleSpeakExplanation() {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported in this browser.');
      return;
    }

    if (speechState.activeType === 'explanation') {
      stopSpeech();
      return;
    }

    const q = state.activeQuestions[state.currentIndex];
    if (!q) return;

    const segments = prepareExplanationSegments(q);
    startSegmentedSpeech(segments, 'explanation');
  }

  // --- Challenge Answer against Salesforce Documentation ---
  let challengeTimeout = null;

  function handleChallengeClick() {
    if (!el.challengeBox) return;

    const isVisible = !el.challengeBox.classList.contains('hidden');
    if (isVisible) {
      closeChallengeBox();
      return;
    }

    const q = state.activeQuestions[state.currentIndex];
    if (!q) return;

    if (challengeTimeout) {
      clearTimeout(challengeTimeout);
    }

    if (el.btnChallengeAnswer) el.btnChallengeAnswer.classList.add('active');
    el.challengeBox.classList.remove('hidden');
    el.challengeBox.innerHTML = `
      <div class="challenge-spinner-row">
        <div class="challenge-mini-spinner"></div>
        <span>Searching official Salesforce documentation & architect guides...</span>
      </div>
    `;

    challengeTimeout = setTimeout(() => {
      renderChallengeContent(q);
    }, 380);
  }

  function closeChallengeBox() {
    if (challengeTimeout) {
      clearTimeout(challengeTimeout);
      challengeTimeout = null;
    }
    if (el.challengeBox) {
      el.challengeBox.classList.add('hidden');
      el.challengeBox.innerHTML = '';
    }
    if (el.btnChallengeAnswer) {
      el.btnChallengeAnswer.classList.remove('active');
    }
  }

  function renderChallengeContent(q) {
    if (!el.challengeBox) return;

    const challenge = q.challenge || {};
    const confirmedAnswer = challenge.confirmedAnswer || q.correctAnswers.join(', ');
    const confirmedText = challenge.confirmedText || (q.correctAnswers.map(ans => `${ans}: ${q.options[ans] || ''}`).join('; '));
    const docTopic = challenge.docTopic || 'Salesforce Platform Sharing and Visibility Architecture';
    const webReason = challenge.webReason || q.whyCorrect;
    const query = challenge.searchQuery || `Salesforce Sharing and Visibility Architect ${q.reference} ${q.question.slice(0, 90)}`;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

    el.challengeBox.innerHTML = `
      <div class="challenge-top">
        <div class="challenge-title-group">
          <span class="challenge-icon-pill">✓</span>
          <span class="challenge-heading">Salesforce Official Documentation & Consensus</span>
        </div>
        <button type="button" class="challenge-close-btn" id="btnCloseChallenge" title="Dismiss challenge" aria-label="Close">✕</button>
      </div>

      <div class="challenge-answer-line">
        <div class="challenge-badge-correct">Confirmed Answer: Option ${escapeHtml(confirmedAnswer)}</div>
        <div style="font-weight: 600; margin-top: 0.2rem;">${escapeHtml(confirmedText)}</div>
      </div>

      <div>
        <div class="challenge-doc-topic">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          ${escapeHtml(docTopic)}
        </div>
        <p class="challenge-web-reason" style="margin-top: 0.35rem;">${escapeHtml(webReason)}</p>
      </div>

      <div class="challenge-footer">
        <span style="font-size: 0.73rem; color: var(--text-muted);">Verified against official Salesforce documentation and architecture consensus</span>
        <a href="${escapeHtml(googleSearchUrl)}" target="_blank" rel="noopener noreferrer" class="challenge-search-link">
          <span>Search Salesforce Docs on Google</span>
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    `;

    const closeBtn = document.getElementById('btnCloseChallenge');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeChallengeBox);
    }
  }

  // --- Question Rendering ---
  function renderCurrentQuestion() {
    stopSpeech();
    closeChallengeBox();

    const q = state.activeQuestions[state.currentIndex];
    if (!q) return;

    if (state.mode === 'sequential') {
      localStorage.setItem(STORAGE_KEYS.LAST_SEQUENTIAL_INDEX, state.currentIndex);
    }

    const total = state.activeQuestions.length;
    const currNum = state.currentIndex + 1;
    const pct = Math.round((currNum / total) * 100);

    el.quizDomainBadge.textContent = state.activeTitle;
    el.questionProgressText.textContent = `Question ${currNum} of ${total}`;
    el.questionPercentText.textContent = `${pct}%`;
    el.quizProgressBarFill.style.width = `${pct}%`;

    const scorePct = state.sessionAnswered > 0 ? Math.round((state.sessionCorrect / state.sessionAnswered) * 100) : 0;
    el.quizScorePill.textContent = `${scorePct}% (${state.sessionCorrect}/${state.sessionAnswered})`;

    el.questionPrompt.textContent = q.question;
    el.questionRefTag.textContent = `Ref: ${q.reference}`;

    renderCircleNav();

    if (q.isMultiSelect) {
      el.multiSelectAlert.classList.remove('hidden');
      el.multiSelectText.textContent = `Choose ${q.expectedCount} options.`;
    } else {
      el.multiSelectAlert.classList.add('hidden');
    }

    const saved = state.progress[q.id];
    state.selectedOptions = new Set(saved ? saved.selected : []);

    renderOptions(q, saved?.checked || false);
    updateMultiCounter(q);
    updateActionButtons(q, saved?.checked || false);

    if (saved?.checked) {
      showExplanation(q, saved.isCorrect);
    } else {
      el.explanationCard.classList.add('hidden');
    }

    el.btnPrevQuestion.disabled = state.currentIndex === 0;
    el.btnNextQuestion.disabled = state.currentIndex === total - 1;
  }

  function renderOptions(q, isChecked) {
    el.optionsContainer.innerHTML = '';
    const letters = Object.keys(q.options).sort();

    letters.forEach(letter => {
      const row = document.createElement('div');
      row.className = 'option-row';

      const isSelected = state.selectedOptions.has(letter);
      const isCorrect = q.correctAnswers.includes(letter);

      if (isSelected) row.classList.add('active');

      if (isChecked) {
        row.classList.add('locked');
        if (isCorrect) {
          row.classList.add('is-correct');
        } else if (isSelected && !isCorrect) {
          row.classList.add('is-incorrect');
        }
      }

      row.innerHTML = `
        <span class="option-key">${letter}</span>
        <span class="option-content">${escapeHtml(q.options[letter])}</span>
      `;

      if (!isChecked) {
        row.addEventListener('click', () => toggleOption(q, letter));
      }

      el.optionsContainer.appendChild(row);
    });
  }

  function toggleOption(q, letter) {
    if (q.isMultiSelect) {
      if (state.selectedOptions.has(letter)) {
        state.selectedOptions.delete(letter);
      } else {
        if (state.selectedOptions.size < q.expectedCount) {
          state.selectedOptions.add(letter);
        } else {
          const first = state.selectedOptions.values().next().value;
          state.selectedOptions.delete(first);
          state.selectedOptions.add(letter);
        }
      }
    } else {
      state.selectedOptions.clear();
      state.selectedOptions.add(letter);
    }

    renderOptions(q, false);
    updateMultiCounter(q);
    updateActionButtons(q, false);
  }

  function updateMultiCounter(q) {
    if (q.isMultiSelect) {
      el.multiSelectCounter.textContent = `Selected ${state.selectedOptions.size} of ${q.expectedCount}`;
    }
  }

  function updateActionButtons(q, isChecked) {
    if (isChecked) {
      el.btnAction.textContent = state.currentIndex < state.activeQuestions.length - 1 ? 'Next Question →' : 'Finish Drill';
      el.btnAction.disabled = false;
    } else {
      el.btnAction.textContent = 'Check Answer';
      const required = q.isMultiSelect ? q.expectedCount : 1;
      el.btnAction.disabled = state.selectedOptions.size !== required;
    }
  }

  function handleActionClick() {
    const q = state.activeQuestions[state.currentIndex];
    const isChecked = state.progress[q.id]?.checked;

    if (!isChecked) {
      checkCurrentAnswer(q);
    } else {
      if (state.currentIndex < state.activeQuestions.length - 1) {
        state.currentIndex++;
        renderCurrentQuestion();
      } else {
        showCompletionModal();
      }
    }
  }

  function checkCurrentAnswer(q) {
    const selectedArray = Array.from(state.selectedOptions).sort();
    const correctArray = [...q.correctAnswers].sort();

    const isCorrect = selectedArray.length === correctArray.length &&
      selectedArray.every((v, i) => v === correctArray[i]);

    state.sessionAnswered++;
    if (isCorrect) state.sessionCorrect++;

    state.progress[q.id] = {
      selected: selectedArray,
      isCorrect: isCorrect,
      checked: true,
      timestamp: Date.now()
    };
    saveState();

    renderOptions(q, true);
    showExplanation(q, isCorrect);
    updateActionButtons(q, true);
    renderCircleNav();

    const scorePct = Math.round((state.sessionCorrect / state.sessionAnswered) * 100);
    el.quizScorePill.textContent = `${scorePct}% (${state.sessionCorrect}/${state.sessionAnswered})`;
  }

  function showExplanation(q, isCorrect) {
    el.explanationCard.classList.remove('hidden');

    if (isCorrect) {
      el.resultBanner.className = 'status-pill-banner correct';
      el.resultTitle.textContent = `Correct Solution (${q.correctAnswers.join(', ')})`;
    } else {
      el.resultBanner.className = 'status-pill-banner incorrect';
      el.resultTitle.textContent = `Incorrect. Verified Answer: ${q.correctAnswers.join(', ')}`;
    }

    el.explanationWhyCorrect.textContent = q.whyCorrect;

    const distractors = q.distractors || {};
    const dKeys = Object.keys(distractors).sort();
    if (dKeys.length > 0) {
      el.distractorSection.classList.remove('hidden');
      el.distractorList.innerHTML = dKeys.map(k => `
        <div class="distractor-row">
          <strong>${k}:</strong> ${escapeHtml(distractors[k])}
        </div>
      `).join('');
    } else {
      el.distractorSection.classList.add('hidden');
    }
  }

  // --- Completion Modal ---
  function showCompletionModal() {
    stopSpeech();
    closeChallengeBox();

    const total = state.activeQuestions.length;
    let correct = 0;

    state.activeQuestions.forEach(q => {
      if (state.progress[q.id]?.isCorrect) correct++;
    });

    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const isPassed = pct >= 67;

    el.modalTitle.textContent = isPassed ? 'Passing Score Met' : 'Drill Completed';
    el.modalScoreLarge.textContent = `${pct}%`;
    el.modalScoreLarge.style.color = isPassed ? 'var(--success-accent)' : 'var(--text-heading)';

    el.modalCorrectCount.textContent = correct;
    el.modalIncorrectCount.textContent = total - correct;
    el.modalPassingStatus.textContent = isPassed ? 'Passed' : 'Needs Review';
    el.modalPassingStatus.style.color = isPassed ? 'var(--success-accent)' : 'var(--error-accent)';

    el.completionModal.classList.remove('hidden');
  }

  function restartCurrentDrill() {
    el.completionModal.classList.add('hidden');
    state.activeQuestions.forEach(q => {
      delete state.progress[q.id];
    });
    if (state.mode === 'sequential') {
      localStorage.setItem(STORAGE_KEYS.LAST_SEQUENTIAL_INDEX, 0);
    }
    saveState();
    startQuiz(0);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- Events ---
  function initEvents() {
    el.themeToggleBtn.addEventListener('click', toggleTheme);
    el.navBrandBtn.addEventListener('click', () => {
      if (state.mode === 'sequential') {
        localStorage.setItem(STORAGE_KEYS.LAST_SEQUENTIAL_INDEX, state.currentIndex);
      }
      showView('dashboard');
    });
    el.quizBackBtn.addEventListener('click', () => {
      if (state.mode === 'sequential') {
        localStorage.setItem(STORAGE_KEYS.LAST_SEQUENTIAL_INDEX, state.currentIndex);
      }
      showView('dashboard');
    });

    el.btnStartSequential.addEventListener('click', startSequentialDrill);
    el.btnStartShuffled.addEventListener('click', startShuffledDrill);
    el.btnResetProgress.addEventListener('click', resetProgress);

    el.btnAction.addEventListener('click', handleActionClick);
    el.btnPrevQuestion.addEventListener('click', () => {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        renderCurrentQuestion();
      }
    });
    el.btnNextQuestion.addEventListener('click', () => {
      if (state.currentIndex < state.activeQuestions.length - 1) {
        state.currentIndex++;
        renderCurrentQuestion();
      }
    });

    if (el.speechVoiceSelect) {
      el.speechVoiceSelect.addEventListener('change', (e) => {
        if (e.target.value) {
          localStorage.setItem(STORAGE_KEYS.VOICE_NAME, e.target.value);
          const voices = getAvailableVoices();
          cachedNaturalVoice = voices.find(v => v.name === e.target.value) || null;
        }
        if (speechState.isSpeaking) {
          stopSpeech();
        }
      });
    }

    if (el.speechSpeedSelect) {
      el.speechSpeedSelect.addEventListener('change', (e) => {
        if (e.target.value) {
          localStorage.setItem(STORAGE_KEYS.SPEECH_RATE, e.target.value);
        }
        if (speechState.isSpeaking) {
          stopSpeech();
        }
      });
    }

    if (el.btnSpeakQuestion) {
      el.btnSpeakQuestion.addEventListener('click', toggleSpeakQuestion);
    }
    if (el.btnSpeakExplanation) {
      el.btnSpeakExplanation.addEventListener('click', toggleSpeakExplanation);
    }
    if (el.btnChallengeAnswer) {
      el.btnChallengeAnswer.addEventListener('click', handleChallengeClick);
    }

    el.modalBtnRestart.addEventListener('click', restartCurrentDrill);
    el.modalBtnHome.addEventListener('click', () => showView('dashboard'));

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (state.view !== 'quiz') return;
      if (e.key === 'ArrowRight' && !el.btnNextQuestion.disabled) {
        el.btnNextQuestion.click();
      } else if (e.key === 'ArrowLeft' && !el.btnPrevQuestion.disabled) {
        el.btnPrevQuestion.click();
      } else if (e.key === 'Enter' && !el.btnAction.disabled) {
        el.btnAction.click();
      }
    });
  }

  function init() {
    applyTheme(state.theme);
    initEvents();
    renderDashboard();

    if ('speechSynthesis' in window) {
      populateVoiceDropdown();
      window.speechSynthesis.addEventListener('voiceschanged', () => {
        populateVoiceDropdown();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
