/**
 * Salesforce Certified Platform Sharing and Visibility Architect (ARC-101) Practice Application
 */

(function () {
  'use strict';

  const STORAGE_KEYS = {
    THEME: 'cert_prep_theme_v2',
    PROGRESS: 'cert_prep_progress_v2',
    LAST_SEQUENTIAL_INDEX: 'cert_prep_last_sequential_index'
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

  // --- Gemini Neural Audio Engine ---
  let activeAudio = null;
  let activeAudioType = null; // 'question' | 'explanation'

  function stopSpeech() {
    if (activeAudio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
      activeAudio = null;
    }
    activeAudioType = null;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    updateSpeechUI();
  }

  function updateSpeechUI() {
    if (el.btnSpeakQuestion) {
      if (activeAudioType === 'question') {
        el.btnSpeakQuestion.classList.add('is-speaking');
        if (el.btnSpeakQuestionText) el.btnSpeakQuestionText.textContent = 'Stop Audio';
      } else {
        el.btnSpeakQuestion.classList.remove('is-speaking');
        if (el.btnSpeakQuestionText) el.btnSpeakQuestionText.textContent = 'Read Aloud';
      }
    }

    if (el.btnSpeakExplanation) {
      if (activeAudioType === 'explanation') {
        el.btnSpeakExplanation.classList.add('is-speaking');
        if (el.btnSpeakExplanationText) el.btnSpeakExplanationText.textContent = 'Stop Audio';
      } else {
        el.btnSpeakExplanation.classList.remove('is-speaking');
        if (el.btnSpeakExplanationText) el.btnSpeakExplanationText.textContent = 'Read Solution';
      }
    }
  }

  function playNeuralAudio(audioPath, type) {
    if (activeAudioType === type) {
      stopSpeech();
      return;
    }

    stopSpeech();

    const audio = new Audio(audioPath);
    activeAudio = audio;
    activeAudioType = type;
    updateSpeechUI();

    audio.onended = () => {
      stopSpeech();
    };

    audio.onerror = (e) => {
      console.warn('Audio playback error for:', audioPath, e);
      stopSpeech();
    };

    audio.play().catch(err => {
      console.warn('Audio play interrupted or blocked:', err);
      stopSpeech();
    });
  }

  function toggleSpeakQuestion() {
    const q = state.activeQuestions[state.currentIndex];
    if (!q) return;

    const audioSrc = `audio/${q.id}_question.mp3`;
    playNeuralAudio(audioSrc, 'question');
  }

  function toggleSpeakExplanation() {
    const q = state.activeQuestions[state.currentIndex];
    if (!q) return;

    const audioSrc = `audio/${q.id}_explanation.mp3`;
    playNeuralAudio(audioSrc, 'explanation');
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
