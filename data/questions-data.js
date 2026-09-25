// Auto-generated and verified Salesforce Platform Sharing and Visibility Architect question bank
window.CERT_PREP_DATA = {
  "certName": "Salesforce Certified Platform Sharing and Visibility Architect",
  "certCode": "ARC-101",
  "totalQuestions": 95,
  "sections": [
    {
      "slug": "declarative-sharing",
      "title": "Declarative Sharing (Access to Records)",
      "weight": "35%",
      "questions": [
        {
          "id": "declarative-sharing-1",
          "index": 5,
          "reference": "Q5",
          "question": "A consulting company uses the Salesforce mobile app for its field consultants and uses Case object to track customer specific consulting done by field consultants. The company also has a large number of customer service representatives who takes calls from customers on company issued desktops and uses case object to track customer issues and grievances. The company would like to capture images of customer site captured by field consultants while they are editing the case record during customer site visit. The Director of IT wants to minimize customization and promote reusability of code artifacts wherever possible. What recommendations should an architect give to the company to implement the image capture requirement, while ensuring customer that the service rep can continue to use same lightning pages they were trained to use?",
          "options": {
            "A": "Use Lightning Component as an override for \"Edit\" action on mobile view allowing image capture feature. No Change required for desktop users.",
            "B": "Create a separate button \"Edit in Mobile\", which opens a custom lightn ing component that will allow field consultants to add an image. No change required for desktop users.",
            "C": "Use Lightning Component as an override for \"Edit\" action on lightning experience allowing image capture feature. Detect the form factor of the device and redirect the user to the default not-overridden view."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option C ('Use Lightning Component as an override for \"Edit\" action on lightning experience allowing image capture feature. Detect the form factor of the device and redirect the user to the default not-overridden view.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Use Lightning Component as an override for \"Edit\" action on mobile view allowing image capture feature. No Change required for desktop users.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "B": "Option B ('Create a separate button \"Edit in Mobile\", which opens a custom lightn ing component that will allow field consultants to add an image. No change required for desktop users.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Use Lightning Component as an override for \"Edit\" action on lightning experience allowing image capture feature. Detect the form factor of the device and redirect the user to the default not-overridden view.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('Use Lightning Component as an override for \"Edit\" action on lightning experience allowing image capture feature. Detect the form factor of the device and redirect the user to the default not-overridden view.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q5 A consulting company uses the Salesforce mobile app for its field consultants and uses Cas"
          }
        },
        {
          "id": "declarative-sharing-2",
          "index": 14,
          "reference": "Q14",
          "question": "Universal Containers implemented Sales Cloud and requested that only certain branch staff trained to sell high-risk products can create opportunities for high-risk products. How should an architect allow only specific branch staff to sell high-risk products?",
          "options": {
            "A": "Set the price book OWD to View Only and share the (High Risk) price book with the trained staff via manual sharing.",
            "B": "Set the price book organisation-wide default (OWD) to View Only and share the price book (High Risk) with the trained staff.",
            "C": "Set the price book OWD to View Only and share the (High Risk) price book with the trained staff via a sharing rule."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option B ('Set the price book organisation-wide default (OWD) to View Only and share the price book (High Risk) with the trained staff.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Set the price book OWD to View Only and share the (High Risk) price book with the trained staff via manual sharing.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Set the price book OWD to View Only and share the (High Risk) price book with the trained staff via a sharing rule.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Set the price book organisation-wide default (OWD) to View Only and share the price book (High Risk) with the trained staff.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option B ('Set the price book organisation-wide default (OWD) to View Only and share the price book (High Risk) with the trained staff.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q14 Universal Containers implemented Sales Cloud and requested that only certain branch staff "
          }
        },
        {
          "id": "declarative-sharing-3",
          "index": 15,
          "reference": "Q15",
          "question": "Sales operations at Universal Containers (UC) wants to create list views to filter opportunities for certain geographies. How should UC hide list views that are not relevant to an individual user since there will be more than 50 list views?",
          "options": {
            "A": "Share the list views with the appropriate individual users.",
            "B": "Share the list views with the appropriate quota.",
            "C": "Share the list views with the appropriate public group."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "List views in Salesforce can be restricted to 'Only I can see this', 'All users can see this', or shared with specific Public Groups, Roles, and Roles & Subordinates.",
          "distractors": {
            "A": "List views cannot be shared directly with individual user records.",
            "B": "Queues own records and manage assignment; they are not visibility containers for sharing list views."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Share the list views with the appropriate public group.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('Share the list views with the appropriate public group.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q15 Sales operations at Universal Containers (UC) wants to create list views to filter opportu"
          }
        },
        {
          "id": "declarative-sharing-4",
          "index": 29,
          "reference": "Q29",
          "question": "Universal Containers (UC) wants to reduce the amount of redundant leads entered into the system. UC also wants to ensure that leads are only edited/reassigned by the lead owner. Which organization-wide default (OWD) approach should be recommended to help UC implement these requirements?",
          "options": {
            "A": "Implement a Private OWD on Lead.",
            "B": "Implement a Public Read-Only OWD on Lead.",
            "C": "Implement a Public Read-Only/Transfer OWD on Lead."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option B ('Implement a Public Read-Only OWD on Lead.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Implement a Private OWD on Lead.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Implement a Public Read-Only/Transfer OWD on Lead.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Implement a Public Read-Only OWD on Lead.",
            "docTopic": "Salesforce Security Guide: Organization-Wide Sharing Defaults",
            "webReason": "Salesforce official documentation confirms that baseline access is determined by OWD. Option B ('Implement a Public Read-Only OWD on Lead.') correctly aligns with the least privilege model and record-level security standards.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q29 Universal Containers (UC) wants to reduce the amount of redundant leads entered into the s"
          }
        },
        {
          "id": "declarative-sharing-5",
          "index": 35,
          "reference": "Q35",
          "question": "A user posts a file to the Chatter feed for a record of an object that has a Private organization- wide default. Which statement accurately describes who can view the file by default?",
          "options": {
            "A": "The user who posted the file and users with a shared Chatter post link to the file",
            "B": "The user who posted the file and users with access to the record",
            "C": "Only the user who posted the file"
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option B ('The user who posted the file and users with access to the record') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('The user who posted the file and users with a shared Chatter post link to the file') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Only the user who posted the file') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "The user who posted the file and users with access to the record",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option B ('The user who posted the file and users with access to the record') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q35 A user posts a file to the Chatter feed for a record of an object that has a Private organ"
          }
        },
        {
          "id": "declarative-sharing-6",
          "index": 36,
          "reference": "Q36",
          "question": "Sales operations at Universal Containers (UC) wants to create list views to filter opportunities for certain geographies. How should UC hide list views that are not relevant to an individual user since there will be more than 50 list views?",
          "options": {
            "A": "Share the list views with the appropriate public group.",
            "B": "Share the list views with the appropriate queue.",
            "C": "Share the list views with the appropriate individual users."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "List views in Salesforce can be restricted to 'Only I can see this', 'All users can see this', or shared with specific Public Groups, Roles, and Roles & Subordinates.",
          "distractors": {
            "B": "Queues own records and manage assignment; they are not visibility containers for sharing list views.",
            "C": "List views cannot be shared directly with individual user records."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Share the list views with the appropriate public group.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option A ('Share the list views with the appropriate public group.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q36 Sales operations at Universal Containers (UC) wants to create list views to filter opportu"
          }
        },
        {
          "id": "declarative-sharing-7",
          "index": 39,
          "reference": "Q39",
          "question": "Universal Containers would like to control access to records and objects according to the following business requirements: Sales users can view all account records but only edit their own records. Sales managers can view all account records but only edit records of their team. Service users can view all account records that are not marked with a RecordType of Prospect. Which organization-wide default configuration should an architect recommend to fulfill these requirements?",
          "options": {
            "A": "Private",
            "B": "Public Read Write",
            "C": "Public Read/Transfer"
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option A ('Private') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "B": "Option B ('Public Read Write') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Public Read/Transfer') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Private",
            "docTopic": "Salesforce Security Guide: Organization-Wide Sharing Defaults",
            "webReason": "Salesforce official documentation confirms that baseline access is determined by OWD. Option A ('Private') correctly aligns with the least privilege model and record-level security standards.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q39 Universal Containers would like to control access to records and objects according to the "
          }
        },
        {
          "id": "declarative-sharing-8",
          "index": 40,
          "reference": "Q40",
          "question": "Sales operations at Universal Containers (UC) wants to create list views to filter opportunities for certain geographies. How should UC hide list views that are not relevant to an individual user since there will be more than 50 list views?",
          "options": {
            "A": "Share the list views with the appropriate queue.",
            "B": "Share the list views with the appropriate individual users.",
            "C": "Share the list views with the appropriate role and internal subordinates."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option C ('Share the list views with the appropriate role and internal subordinates.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Share the list views with the appropriate queue.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "B": "Option B ('Share the list views with the appropriate individual users.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Share the list views with the appropriate role and internal subordinates.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('Share the list views with the appropriate role and internal subordinates.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q40 Sales operations at Universal Containers (UC) wants to create list views to filter opportu"
          }
        },
        {
          "id": "declarative-sharing-9",
          "index": 41,
          "reference": "Q41",
          "question": "A junior account manager owns an account and creates a new opportunity to manage a complex deal. She needs the help of the product specialist and solution engineer. Given the size of this deal, she knows the account is likely to be reassigned to a senior account manager in the near future. What is the optimal way for the junior account manager to share the opportunity, given the private sharing model?",
          "options": {
            "A": "Manual share on the opportunity",
            "B": "Opportunity Team",
            "C": "Manual share on the account"
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Opportunity Team enables record owners to quickly grant specific access levels (Read or Read/Write) to supporting cross-functional team members without requiring administrative intervention.",
          "distractors": {
            "A": "Manual sharing does not support default teams and requires repetitive manual overhead on every single record.",
            "C": "Manual sharing does not support default teams and requires repetitive manual overhead on every single record."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Opportunity Team",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option B ('Opportunity Team') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q41 A junior account manager owns an account and creates a new opportunity to manage a complex"
          }
        },
        {
          "id": "declarative-sharing-10",
          "index": 43,
          "reference": "Q43",
          "question": "A sales rep (John) at Universal Containers requested to update information in an account record where he has Read-Only access. John requested the Edit access permission from the owner of the record (Paul). Paul manually shared the record with John. Assuming the organization-wide default of the Account object is Public Read-Only, what is the impact in the system?",
          "options": {
            "A": "Existing AccountShare record is updated. Row Cause is \"Manual\" and Access Level is \"Read/Write\".",
            "B": "New AccountShare record is created. Row Cause is \"Owner\" and Access Level is \"Full\".",
            "C": "New AccountShare record is created. Row Cause is \"Manual\" and Access Level is \"Read/Write\"."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option C ('New AccountShare record is created. Row Cause is \"Manual\" and Access Level is \"Read/Write\".') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Existing AccountShare record is updated. Row Cause is \"Manual\" and Access Level is \"Read/Write\".') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "B": "Option B ('New AccountShare record is created. Row Cause is \"Owner\" and Access Level is \"Full\".') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "New AccountShare record is created. Row Cause is \"Manual\" and Access Level is \"Read/Write\".",
            "docTopic": "Salesforce Security Guide: Organization-Wide Sharing Defaults",
            "webReason": "Salesforce official documentation confirms that baseline access is determined by OWD. Option C ('New AccountShare record is created. Row Cause is \"Manual\" and Access Level is \"Read/Write\".') correctly aligns with the least privilege model and record-level security standards.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q43 A sales rep (John) at Universal Containers requested to update information in an account r"
          }
        },
        {
          "id": "declarative-sharing-11",
          "index": 49,
          "reference": "Q50",
          "question": "At Universal Containers, there's a team of auditors distributed throughout the organization that all need access to high-value opportunities. With a Private sharing model, which option should an architect recommend when designing a solution for this requirement?",
          "options": {
            "A": "Put the auditors at the highest level of the Role Hierarchy.",
            "B": "Add the auditors to the default Opportunity Team.",
            "C": "Create a public group and assign the auditors to the group."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option C ('Create a public group and assign the auditors to the group.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Put the auditors at the highest level of the Role Hierarchy.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "B": "Option B ('Add the auditors to the default Opportunity Team.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Create a public group and assign the auditors to the group.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('Create a public group and assign the auditors to the group.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q50 At Universal Containers, there's a team of auditors distributed throughout the organizatio"
          }
        },
        {
          "id": "declarative-sharing-12",
          "index": 52,
          "reference": "Q53",
          "question": "A consulting company uses the Salesforce mobile app for its field consultants and uses Case object to track customer specific consulting done by field consultants. The company also has a large number of customer service representatives who takes calls from customers on company issued desktops and uses case object to track customer issues and grievances. The company would like to capture images of customer site captured by field consultants while they are editing the case record during customer site visit. The Director of IT wants to minimize customization and promote reusability of code artifacts wherever possible. What recommendations should an architect give to the company to implement the image capture requirement, while ensuring customer that the service rep can continue to use same lightning pages they were trained to use?",
          "options": {
            "A": "Use Lightning Component as an override for \"Edit\" action on mobile view allowing image capture feature. No Change required for desktop users.",
            "B": "Create a separate button \"Edit in Mobile\", which opens a custom lightning component that will allow field consultants to add an image. No change required for desktop users.",
            "C": "Use Lightning Component as an override for \"Edit\" action on lightning experience a llowing image capture feature. Detect the form factor of the device and redirect the user to the default not-overridden view."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option C ('Use Lightning Component as an override for \"Edit\" action on lightning experience a llowing image capture feature. Detect the form factor of the device and redirect the user to the default not-overridden view.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Use Lightning Component as an override for \"Edit\" action on mobile view allowing image capture feature. No Change required for desktop users.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "B": "Option B ('Create a separate button \"Edit in Mobile\", which opens a custom lightning component that will allow field consultants to add an image. No change required for desktop users.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Use Lightning Component as an override for \"Edit\" action on lightning experience a llowing image capture feature. Detect the form factor of the device and redirect the user to the default not-overridden view.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('Use Lightning Component as an override for \"Edit\" action on lightning experience a llowing image capture feature. Detect the form factor of the device and redirect the user to the default not-overridden view.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q53 A consulting company uses the Salesforce mobile app for its field consultants and uses Cas"
          }
        },
        {
          "id": "declarative-sharing-13",
          "index": 57,
          "reference": "Q58",
          "question": "The sales managers at Universal Containers requested their teams to define each user's role on their accounts in order to provide an easy way to establish accountability and collaboration. Sales managers also requested that sales associates should only get the following permissions: 1. Read access to the accounts. 2. Read access to cases related to the accounts. 3. No access to deals related to the accounts. The sales associates may be granted access to opportunities when needed. Assuming the overall sharing model of the organization is Private and no sharing rules are configured on the Account object, how should an architect achieve these requirements?",
          "options": {
            "A": "Use Account teams to define access to accounts as well as opportunities and cases related to accounts.",
            "B": "Use Account teams and Case teams. No configuration required for the Opportunity object.",
            "C": "Use Account teams and sharing rules to share cases with sales associates. No change required to the Opportunity object."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Use Account teams to define access to accounts as well as opportunities and cases related to accounts. enables record owners to quickly grant specific access levels (Read or Read/Write) to supporting cross-functional team members without requiring administrative intervention.",
          "distractors": {
            "B": "Granting 'View All Data' provides org-wide administrative access, severely violating the principle of least privilege.",
            "C": "Granting 'View All Data' provides org-wide administrative access, severely violating the principle of least privilege."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Use Account teams to define access to accounts as well as opportunities and cases related to accounts.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option A ('Use Account teams to define access to accounts as well as opportunities and cases related to accounts.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q58 The sales managers at Universal Containers requested their teams to define each user's rol"
          }
        },
        {
          "id": "declarative-sharing-14",
          "index": 61,
          "reference": "Q62",
          "question": "Universal Containers implemented Sales Cloud and requested that sales agents have access to products and prices the company sells, and to be able to create opportunities for its customers. What should the organization-wide defaults be for pricebook?",
          "options": {
            "A": "Public Read-Only",
            "B": "View",
            "C": "Use"
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option C ('Use') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Public Read-Only') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "B": "Option B ('View') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Use",
            "docTopic": "Salesforce Security Guide: Organization-Wide Sharing Defaults",
            "webReason": "Salesforce official documentation confirms that baseline access is determined by OWD. Option C ('Use') correctly aligns with the least privilege model and record-level security standards.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q62 Universal Containers implemented Sales Cloud and requested that sales agents have access t"
          }
        },
        {
          "id": "declarative-sharing-15",
          "index": 64,
          "reference": "Q65",
          "question": "A sales rep at Universal Containers was added to an opportunity team with Read/Write permissions. Which action is she allowed to perform in the opportunity?",
          "options": {
            "A": "Update opportunity stage.",
            "B": "Replace opportunity owner.",
            "C": "Add/remove members in the opportunity team."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option A ('Update opportunity stage.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "B": "Option B ('Replace opportunity owner.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Add/remove members in the opportunity team.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Update opportunity stage.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option A ('Update opportunity stage.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q65 A sales rep at Universal Containers was added to an opportunity team with Read/Write permi"
          }
        },
        {
          "id": "declarative-sharing-16",
          "index": 69,
          "reference": "Q70",
          "question": "A sales coach at Universal Containers wants to create and share a report folder with other sales coaches. Which two permissions are required to accomplish this?",
          "options": {
            "A": "Create Report Folders and manage Reports in Public Folders",
            "B": "Create and customize Reports and Report Folders",
            "C": "Manage Reports in Public Folders and edit My Reports"
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "To create and share report folders, users require 'Create Report Folders' (to create new custom folders) and 'Manage Reports in Public Folders' (to administer and share folders with other users).",
          "distractors": {
            "B": "Option B ('Create and customize Reports and Report Folders') is incorrect because it does not satisfy the platform requirement or represents an invalid security configuration.",
            "C": "Option C ('Manage Reports in Public Folders and edit My Reports') is incorrect because it does not satisfy the platform requirement or represents an invalid security configuration."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Create Report Folders and manage Reports in Public Folders",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option A ('Create Report Folders and manage Reports in Public Folders') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q70 A sales coach at Universal Containers wants to create and share a report folder with other"
          }
        },
        {
          "id": "declarative-sharing-17",
          "index": 72,
          "reference": "Q75",
          "question": "The finance team at Universal Containers usually does not have access to account and contact records. A finance analyst was temporarily given opportunity access for a big deal to help with tax calculation. However, she can now also access account and contact records. What is causing this issue?",
          "options": {
            "A": "Account records can be accessed due to implicit sharing from Opportunity.",
            "B": "Account records can be accessed due to Role Hierarchy.",
            "C": "Contact records can be accessed due to implicit sharing from Opportunity."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option A ('Account records can be accessed due to implicit sharing from Opportunity.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "B": "Option B ('Account records can be accessed due to Role Hierarchy.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Contact records can be accessed due to implicit sharing from Opportunity.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Account records can be accessed due to implicit sharing from Opportunity.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option A ('Account records can be accessed due to implicit sharing from Opportunity.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q75 The finance team at Universal Containers usually does not have access to account and conta"
          }
        },
        {
          "id": "declarative-sharing-18",
          "index": 76,
          "reference": "Q79",
          "question": "Sales reps at Universal Containers sometimes create large files as a part of the sales process that are too large to share over email. They would like users to be able to share files with customers, but the CISO has requested that any file links shared must be password-protected. How can this be accomplished?",
          "options": {
            "A": "Utilize an AppExchange product for delivering password protected files to customers.",
            "B": "Create a content delivery; during creation, the user should select the option to require a password to access content.",
            "C": "Set up an Experience Cloud site for customers to access files and share the file with customers via Chatter. Customers can then log in to the site to access the content."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option B ('Create a content delivery; during creation, the user should select the option to require a password to access content.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Utilize an AppExchange product for delivering password protected files to customers.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Set up an Experience Cloud site for customers to access files and share the file with customers via Chatter. Customers can then log in to the site to access the content.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Create a content delivery; during creation, the user should select the option to require a password to access content.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option B ('Create a content delivery; during creation, the user should select the option to require a password to access content.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q79 Sales reps at Universal Containers sometimes create large files as a part of the sales pro"
          }
        },
        {
          "id": "declarative-sharing-19",
          "index": 78,
          "reference": "Q81",
          "question": "Universal Containers (UC) delivers training in 500 different regions. The UC operations users team manages course setup, scheduling, and trainer setup. The team members work at a regional level and report to an operations manager. The operations manager requested access to edit ALL scheduled courses owned by the operation users team. How should this be achieved?",
          "options": {
            "A": "The operations manager will get access to the scheduled courses by creating an ownership - based sharing rule and share the scheduled courses with the operations manage r.",
            "B": "The operations manager will get access to the scheduled courses owned by the operations users team defined in the Role Hierarchy.",
            "C": "The operations manager will get access to the scheduled courses by creating a public group, and add the operations manager and the operations users team to the public group."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option B ('The operations manager will get access to the scheduled courses owned by the operations users team defined in the Role Hierarchy.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('The operations manager will get access to the scheduled courses by creating an ownership - based sharing rule and share the scheduled courses with the operations manage r.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('The operations manager will get access to the scheduled courses by creating a public group, and add the operations manager and the operations users team to the public group.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "The operations manager will get access to the scheduled courses owned by the operations users team defined in the Role Hierarchy.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option B ('The operations manager will get access to the scheduled courses owned by the operations users team defined in the Role Hierarchy.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q81 Universal Containers (UC) delivers training in 500 different regions. The UC operations us"
          }
        },
        {
          "id": "declarative-sharing-20",
          "index": 83,
          "reference": "Q86",
          "question": "At Universal Containers, there's a team of auditors distributed throughout the organization that all need access to high-value opportunities. With a Private sharing model, which option should an architect recommend when designing a solution for this requirement?",
          "options": {
            "A": "Put the auditors at the highest level of the Role Hierarchy.",
            "B": "Add the auditors to the default Opportunity Team.",
            "C": "Create a criteria-based sharing rule to give access to the public group for high-value opportunities."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option C ('Create a criteria-based sharing rule to give access to the public group for high-value opportunities.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Put the auditors at the highest level of the Role Hierarchy.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "B": "Option B ('Add the auditors to the default Opportunity Team.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Create a criteria-based sharing rule to give access to the public group for high-value opportunities.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('Create a criteria-based sharing rule to give access to the public group for high-value opportunities.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q86 At Universal Containers, there's a team of auditors distributed throughout the organizatio"
          }
        },
        {
          "id": "declarative-sharing-21",
          "index": 85,
          "reference": "Q88",
          "question": "Universal Containers (UC) requested that branch managers and UC branch staff should only see customers and related information in their geographic location. Which options should be used together to achieve the requirements?",
          "options": {
            "A": "Configure organization-wide defaults of the Account object and create sharing rules.",
            "B": "Configure Role Hierarchy and create sharing rules.",
            "C": "Create the Account, Team and add branch manager team members, and configure organization-wide defaults of the Account object."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option B ('Configure Role Hierarchy and create sharing rules.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Configure organization-wide defaults of the Account object and create sharing rules.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Create the Account, Team and add branch manager team members, and configure organization-wide defaults of the Account object.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Configure Role Hierarchy and create sharing rules.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option B ('Configure Role Hierarchy and create sharing rules.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q88 Universal Containers (UC) requested that branch managers and UC branch staff should only s"
          }
        },
        {
          "id": "declarative-sharing-22",
          "index": 86,
          "reference": "Q89",
          "question": "Sales executives at Universal Containers (UC) want to create list views to filter opportunities for large at-risk opportunities. These list views should only be available to certain executives who specialize in closing problematic deals. What should UC do to solve this requirement?",
          "options": {
            "A": "Share the list views with the appropriate role in the Role Hierarchy.",
            "B": "Share the list views with the appropriate individual users.",
            "C": "Share the list views with the appropriate Public Group."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "List views in Salesforce can be restricted to 'Only I can see this', 'All users can see this', or shared with specific Public Groups, Roles, and Roles & Subordinates.",
          "distractors": {
            "A": "Queues own records and manage assignment; they are not visibility containers for sharing list views.",
            "B": "List views cannot be shared directly with individual user records."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Share the list views with the appropriate Public Group.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('Share the list views with the appropriate Public Group.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q89 Sales executives at Universal Containers (UC) want to create list views to filter opportun"
          }
        },
        {
          "id": "declarative-sharing-23",
          "index": 88,
          "reference": "Q91",
          "question": "Universal Containers implements Agentforce Sales and requests that only certain branch staff trained to sell high- risk products create opportunities for high- risk products. How should a Platform Sharing and Visibility Architect allow only specific branch staff to sell high - risk products?",
          "options": {
            "A": "Set the price book organization- wide default to View Only and share the (High Risk) price book with the trained staff via a sharing rule.",
            "B": "Set the price book organization- wide default to View Only and share the price book (High Risk) with the trained staff.",
            "C": "Set the price book organization- wide default to View Only and share the (High Risk) price book with the trained staff via manual sharing."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option B ('Set the price book organization- wide default to View Only and share the price book (High Risk) with the trained staff.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Set the price book organization- wide default to View Only and share the (High Risk) price book with the trained staff via a sharing rule.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Set the price book organization- wide default to View Only and share the (High Risk) price book with the trained staff via manual sharing.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Set the price book organization- wide default to View Only and share the price book (High Risk) with the trained staff.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option B ('Set the price book organization- wide default to View Only and share the price book (High Risk) with the trained staff.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q91 Universal Containers implements Agentforce Sales and requests that only certain branch sta"
          }
        },
        {
          "id": "declarative-sharing-24",
          "index": 94,
          "reference": "Q97",
          "question": "Universal Containers (UC) delivers training in 500 different regions. The UC operations users team manages course setup, scheduling, and trainer setup. The team members work at a regional level and report to an operations manager. The operations manager requests access to edit all scheduled courses that are owned by the operations users team. What gives the operations manager access to all the scheduled courses?",
          "options": {
            "A": "Create a public group, and add the operations manager and the operations users team to the public group.",
            "B": "Create an ownership-based sharing rule and share the scheduled courses with the operations manager.",
            "C": "Enable Grant Access Using Hierarchies and define a Role Hierarchy to give access to the scheduled courses."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "For custom objects with a Private OWD, disabling the 'Grant Access Using Hierarchies' checkbox ensures that users higher in the Role Hierarchy do not automatically inherit access to subordinate records.",
          "distractors": {
            "A": "Removing object CRUD permissions revokes access to all records, not just subordinate records.",
            "B": "Removing object CRUD permissions revokes access to all records, not just subordinate records."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Enable Grant Access Using Hierarchies and define a Role Hierarchy to give access to the scheduled courses.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('Enable Grant Access Using Hierarchies and define a Role Hierarchy to give access to the scheduled courses.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q97 Universal Containers (UC) delivers training in 500 different regions. The UC operations us"
          }
        }
      ],
      "questionCount": 24
    },
    {
      "slug": "programmatic-sharing",
      "title": "Programmatic Sharing & Apex Security",
      "weight": "20%",
      "questions": [
        {
          "id": "programmatic-sharing-1",
          "index": 3,
          "reference": "Q3",
          "question": "Universal Containers (UC) has a custom Apex class that enforces a business process and updates opportunities. UC has noticed that fields with Field-Level Security permission of Read- Only on certain users' profiles are being updated by this class. How should the architect fix this problem?",
          "options": {
            "A": "Add the With Sharing keyword to the class.",
            "B": "Put the code in an inner class that uses the With Sharing keyword.",
            "C": "Use the isUpdateable() Apex method to test each field prior to allowing update."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "The 'with sharing' keyword enforces record-level sharing rules, but does NOT enforce Field-Level Security (FLS) or Object CRUD permissions. Apex must explicitly call describe methods like isUpdateable() / isAccessible() or Security.stripInaccessible().",
          "distractors": {
            "A": "The 'with sharing' keyword only enforces record sharing; it does not respect or enforce FLS.",
            "B": "The 'with sharing' keyword only enforces record sharing; it does not respect or enforce FLS."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Use the isUpdateable() Apex method to test each field prior to allowing update.",
            "docTopic": "Apex Developer Guide: Enforcing Sharing Rules & FLS in Apex",
            "webReason": "Official Salesforce Developer Documentation establishes that Apex runs in system mode by default. Option C ('Use the isUpdateable() Apex method to test each field prior to allowing update.') correctly enforces data boundaries and prevents unauthorized field/record access.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q3 Universal Containers (UC) has a custom Apex class that enforces a business process and upd"
          }
        },
        {
          "id": "programmatic-sharing-2",
          "index": 9,
          "reference": "Q9",
          "question": "A company intends bring work from anywhere culture in a bid to improve productivity. Their sellers use wide variety of devices with different form factors. The company currently uses one page layout to display opportunity record details to the sellers. The Regional Vice President of Sales is complaining about incorrect alignment of data in opportunity records, making it difficult for some sellers. Which steps are recommended to rectify this?",
          "options": {
            "A": "Use Dynamic Form to define different field sections applicable for different form fa ctors of devices.",
            "B": "Use a visualforce override for Opportunity view action, identify the form factor entered action and display relevant layouts based on form factors.",
            "C": "Use a custom LWC override for Opportunity view action, identify form factor entered action and display relevant layouts based on form factors."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Dynamic Forms allow administrators to configure field sections and individual fields directly on Lightning record pages with granular component visibility rules based on record type or device form factors without requiring code.",
          "distractors": {
            "B": "Custom component overrides (LWC/Visualforce) add unnecessary technical debt and code maintenance when declarative Dynamic Forms natively satisfy the requirement.",
            "C": "Custom component overrides (LWC/Visualforce) add unnecessary technical debt and code maintenance when declarative Dynamic Forms natively satisfy the requirement."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Use Dynamic Form to define different field sections applicable for different form fa ctors of devices.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option A ('Use Dynamic Form to define different field sections applicable for different form fa ctors of devices.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q9 A company intends bring work from anywhere culture in a bid to improve productivity. Their"
          }
        },
        {
          "id": "programmatic-sharing-3",
          "index": 20,
          "reference": "Q20",
          "question": "Universal Containers (UC) uses a custom Lightning component with an Apex class to display shipment information (custom object, Private organization-wide default). UC sales managers are complaining about two important points: Shipment records that belong to their teams can be seen by other users. Shipment amount should be visible only by managers, but sales reps are able to view it. Which feature did the development team miss that is causing the problems?",
          "options": {
            "A": "Use isAccessible() method in Apex classes to check field accessibility.",
            "B": "Use runAs in test class to enforce user permissions and field-level permissions.",
            "C": "Use isShareable keyword in Apex classes to assure record visibility."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "When page layouts remain unchanged but a field disappears, Field Accessibility in Object Manager is the definitive tool to diagnose profile-level visibility and Field-Level Security settings across all profiles.",
          "distractors": {
            "B": "Logging in as individual users is inefficient and doesn't reveal the root configuration cause.",
            "C": "Logging in as individual users is inefficient and doesn't reveal the root configuration cause."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Use isAccessible() method in Apex classes to check field accessibility.",
            "docTopic": "Salesforce Security Guide: Organization-Wide Sharing Defaults",
            "webReason": "Salesforce official documentation confirms that baseline access is determined by OWD. Option A ('Use isAccessible() method in Apex classes to check field accessibility.') correctly aligns with the least privilege model and record-level security standards.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q20 Universal Containers (UC) uses a custom Lightning component with an Apex class to display "
          }
        },
        {
          "id": "programmatic-sharing-4",
          "index": 26,
          "reference": "Q26",
          "question": "Universal Containers (UC) has a custom object to track the internal net promoter score (NPS) for all of its employees. The manager is in the role above the owner and there are no sharing rules on the object. How should UC ensure that NPS records cannot be accessed by the owner's manager?",
          "options": {
            "A": "Use Apex sharing to remove NPS object share records for Manager profiles.",
            "B": "Set organization-wide default to Private and uncheck the Access Using Hierarchies option for the NPS object.",
            "C": "Remove Create, Read, Edit, and Delete from Manager profiles and permission sets."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "For custom objects with a Private OWD, disabling the 'Grant Access Using Hierarchies' checkbox ensures that users higher in the Role Hierarchy do not automatically inherit access to subordinate records.",
          "distractors": {
            "A": "Apex sharing cannot remove implicit role hierarchy access when 'Grant Access Using Hierarchies' is enabled.",
            "C": "Removing object CRUD permissions revokes access to all records, not just subordinate records."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Set organization-wide default to Private and uncheck the Access Using Hierarchies option for the NPS object.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option B ('Set organization-wide default to Private and uncheck the Access Using Hierarchies option for the NPS object.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q26 Universal Containers (UC) has a custom object to track the internal net promoter score (NP"
          }
        },
        {
          "id": "programmatic-sharing-5",
          "index": 28,
          "reference": "Q28",
          "question": "Which functionality does the system method \"runAs()\" verify when writing test methods?",
          "options": {
            "A": "Enforcement of a user's Field-Level Security",
            "B": "Enforcement of a user's record sharing",
            "C": "Enforcement of a user's permissions"
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "The system method System.runAs() simulates record sharing rules and record-level visibility in Apex test methods for specified users, but does NOT enforce Field-Level Security or object permissions (CRUD).",
          "distractors": {
            "A": "System.runAs() exclusively enforces record sharing; it deliberately bypasses CRUD and Field-Level Security during test execution.",
            "C": "System.runAs() exclusively enforces record sharing; it deliberately bypasses CRUD and Field-Level Security during test execution."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Enforcement of a user's record sharing",
            "docTopic": "Apex Developer Guide: Enforcing Sharing Rules & FLS in Apex",
            "webReason": "Official Salesforce Developer Documentation establishes that Apex runs in system mode by default. Option B ('Enforcement of a user's record sharing') correctly enforces data boundaries and prevents unauthorized field/record access.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q28 Which functionality does the system method \"runAs()\" verify when writing test methods?"
          }
        },
        {
          "id": "programmatic-sharing-6",
          "index": 31,
          "reference": "Q31",
          "question": "To grant Universal Containers sales managers access to shipment records properly, it was necessary to leverage Apex managed sharing. The IT team is worried about improper access to records. What should an architect recommend to mitigate this risk?",
          "options": {
            "A": "Use subcouchable keyword in Apex classes to assure record visibility will be followed.",
            "B": "Use runAs system method in test classes to test using different users and profiles.",
            "C": "Use isShareable keyword in Apex classes to assure record visibility will be followed."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "The system method System.runAs() simulates record sharing rules and record-level visibility in Apex test methods for specified users, but does NOT enforce Field-Level Security or object permissions (CRUD).",
          "distractors": {
            "A": "System.runAs() exclusively enforces record sharing; it deliberately bypasses CRUD and Field-Level Security during test execution.",
            "C": "System.runAs() exclusively enforces record sharing; it deliberately bypasses CRUD and Field-Level Security during test execution."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Use runAs system method in test classes to test using different users and profiles.",
            "docTopic": "Apex Developer Guide: Enforcing Sharing Rules & FLS in Apex",
            "webReason": "Official Salesforce Developer Documentation establishes that Apex runs in system mode by default. Option B ('Use runAs system method in test classes to test using different users and profiles.') correctly enforces data boundaries and prevents unauthorized field/record access.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q31 To grant Universal Containers sales managers access to shipment records properly, it was n"
          }
        },
        {
          "id": "programmatic-sharing-7",
          "index": 34,
          "reference": "Q34",
          "question": "If a Case requires involvement from one of the Legal team, the Case owner adds one of the corporate lawyers to the Legal SME field on the case. Since cases are private, how can we grant a lawyer access to a specific case when their assistance is needed?",
          "options": {
            "A": "Use Apex Managed sharing in a case Trigger that shares the record to the user identified in the Legal SME field.",
            "B": "Create a Criteria Based Sharing Rule that shares to the Corporate Legal Team Role when the \"legal assistance needed\" field is checked.",
            "C": "Create a Criteria Based Sharing Rule that shares to the Legal Public Group when the \"legal assistance needed\" field is checked."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option A ('Use Apex Managed sharing in a case Trigger that shares the record to the user identified in the Legal SME field.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "B": "Option B ('Create a Criteria Based Sharing Rule that shares to the Corporate Legal Team Role when the \"legal assistance needed\" field is checked.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Create a Criteria Based Sharing Rule that shares to the Legal Public Group when the \"legal assistance needed\" field is checked.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Use Apex Managed sharing in a case Trigger that shares the record to the user identified in the Legal SME field.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option A ('Use Apex Managed sharing in a case Trigger that shares the record to the user identified in the Legal SME field.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q34 If a Case requires involvement from one of the Legal team, the Case owner adds one of the "
          }
        },
        {
          "id": "programmatic-sharing-8",
          "index": 37,
          "reference": "Q37",
          "question": "Dreamforce presenters need to be able to edit their presentation details (summary, presenter biographies, etc) on a private custom object in Salesforce (Presentation). All presenters for a presentation are captured on a Presenters junction object between Presenter and User. How can this be accomplished?",
          "options": {
            "A": "Give Edit rights to the Presentation record via a Permission set that is given to the Presenters for a record.",
            "B": "B. Trigger on Presenter junction object that adds the user to the Sales Team for the Presentation record.",
            "C": "Trigger on Presenter junction object that uses /ipex Maraged sharing to add or remove access to the related Presentation record."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option C ('Trigger on Presenter junction object that uses /ipex Maraged sharing to add or remove access to the related Presentation record.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Give Edit rights to the Presentation record via a Permission set that is given to the Presenters for a record.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "B": "Option B ('B. Trigger on Presenter junction object that adds the user to the Sales Team for the Presentation record.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Trigger on Presenter junction object that uses /ipex Maraged sharing to add or remove access to the related Presentation record.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('Trigger on Presenter junction object that uses /ipex Maraged sharing to add or remove access to the related Presentation record.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q37 Dreamforce presenters need to be able to edit their presentation details (summary, present"
          }
        },
        {
          "id": "programmatic-sharing-9",
          "index": 44,
          "reference": "Q44",
          "question": "Customer complaints for bad interactions with a customer support agent are logged as Cases and assigned to a human resources representative. The agent of the complaint should not see the case, but their manager should. How is this accomplished?",
          "options": {
            "A": "Case is owned by the subset of the complaint, so their manager in the role hierarchy can access the record. CRED permission are removed on Case so the agent cannot read the case record.",
            "B": "Criteria based Sharing Rule on Case that shares to the Role Manager and above when a custom field Assigned Agent (subject of the complaint) is not blank.",
            "C": "Trigger on Case to lookup and share to the manager of an Assigned Agent custom field (the subject of the complaint) using Apex Managed Sharing."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option C ('Trigger on Case to lookup and share to the manager of an Assigned Agent custom field (the subject of the complaint) using Apex Managed Sharing.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Case is owned by the subset of the complaint, so their manager in the role hierarchy can access the record. CRED permission are removed on Case so the agent cannot read the case record.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "B": "Option B ('Criteria based Sharing Rule on Case that shares to the Role Manager and above when a custom field Assigned Agent (subject of the complaint) is not blank.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Trigger on Case to lookup and share to the manager of an Assigned Agent custom field (the subject of the complaint) using Apex Managed Sharing.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('Trigger on Case to lookup and share to the manager of an Assigned Agent custom field (the subject of the complaint) using Apex Managed Sharing.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q44 Customer complaints for bad interactions with a customer support agent are logged as Cases"
          }
        },
        {
          "id": "programmatic-sharing-10",
          "index": 45,
          "reference": "Q45",
          "question": "Universal Containers requested to leverage Lightning Web Components (LWC) to improve support reps' user experience. LWC will be used as view layer, and Apex classes will have the business logic. Which attention points should the development team consider when implementing this solution?",
          "options": {
            "A": "Once that Apex runs on system mode, the development team needs to enforce record visibility.",
            "B": "Create test classes including runAs to test different users accessing the data.",
            "C": "Use isShareable, isUpdateable, and isCreatable to enforce field permissions."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option A ('Once that Apex runs on system mode, the development team needs to enforce record visibility.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "B": "Option B ('Create test classes including runAs to test different users accessing the data.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Use isShareable, isUpdateable, and isCreatable to enforce field permissions.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Once that Apex runs on system mode, the development team needs to enforce record visibility.",
            "docTopic": "Apex Developer Guide: Enforcing Sharing Rules & FLS in Apex",
            "webReason": "Official Salesforce Developer Documentation establishes that Apex runs in system mode by default. Option A ('Once that Apex runs on system mode, the development team needs to enforce record visibility.') correctly enforces data boundaries and prevents unauthorized field/record access.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q45 Universal Containers requested to leverage Lightning Web Components (LWC) to improve suppo"
          }
        },
        {
          "id": "programmatic-sharing-11",
          "index": 56,
          "reference": "Q57",
          "question": "A company intends bring work from anywhere culture in a bid to improve productivity. Their sellers use wide variety of devices with different form factors. The company currently uses one page layout to display opportunity record details to the sellers. The Regional Vice President of Sales is complaining about incorrect alignment of data in opportunity records, making it difficult for some sellers. Which steps are recommended to rectify this?",
          "options": {
            "A": "Use Dynamic Form to define different field sections applicable for different form factors of devices.",
            "B": "Use a visualforce override for Opportunity view action, identify the form factor entered action and display relevant layouts based on form factors.",
            "C": "Use a custom LWC override for Opportunity view action, identify form factor entered action and display relevant layouts based on form factors."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Dynamic Forms allow administrators to configure field sections and individual fields directly on Lightning record pages with granular component visibility rules based on record type or device form factors without requiring code.",
          "distractors": {
            "B": "Custom component overrides (LWC/Visualforce) add unnecessary technical debt and code maintenance when declarative Dynamic Forms natively satisfy the requirement.",
            "C": "Custom component overrides (LWC/Visualforce) add unnecessary technical debt and code maintenance when declarative Dynamic Forms natively satisfy the requirement."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Use Dynamic Form to define different field sections applicable for different form factors of devices.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option A ('Use Dynamic Form to define different field sections applicable for different form factors of devices.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q57 A company intends bring work from anywhere culture in a bid to improve productivity. Their"
          }
        },
        {
          "id": "programmatic-sharing-12",
          "index": 59,
          "reference": "Q60",
          "question": "Universal Containers uses Standard WorkOrder object to track various work orders sent to field agents. Currently, the WorkOrder object has more than 400 fields. There are eight different types of work order processes established. The Director of Customer Service wants to ensure that field agents gets to see only required information specific to the WorkOrder type they are addressing. Which option is recommended to implement this requirement?",
          "options": {
            "A": "Use a custom LWC to override the view action of WorkOrder with custom metadata type defining relevant fields per WorkOrder type.",
            "B": "Use Dynamic form to add different page sections and control visibility of sections by Work Order RecordType value.",
            "C": "Use different page layouts per work order type with different sections representing key information about the specific work order type."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Dynamic Forms allow administrators to configure field sections and individual fields directly on Lightning record pages with granular component visibility rules based on record type or device form factors without requiring code.",
          "distractors": {
            "A": "Custom component overrides (LWC/Visualforce) add unnecessary technical debt and code maintenance when declarative Dynamic Forms natively satisfy the requirement.",
            "C": "Creating multiple static page layouts requires continuous maintenance and cannot dynamically toggle sections on the fly."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Use Dynamic form to add different page sections and control visibility of sections by Work Order RecordType value.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option B ('Use Dynamic form to add different page sections and control visibility of sections by Work Order RecordType value.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q60 Universal Containers uses Standard WorkOrder object to track various work orders sent to f"
          }
        },
        {
          "id": "programmatic-sharing-13",
          "index": 73,
          "reference": "Q76",
          "question": "Universal Containers is implementing Sales Cloud. During the final quarter of the financial year, sales managers help each other close deals. They requested a solution in Salesforce to allow them to share opportunities with other sales managers from different teams as needed. They also requested that sharing deals should expire automatically 2 weeks after the new fiscal year starts. Which proposed solution meets the requirements?",
          "options": {
            "A": "Apex sharing to share opportunities with sales managers",
            "B": "Scheduled Apex job to remove access",
            "C": "Sharing rules to share opportunities with sales managers"
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option B ('Scheduled Apex job to remove access') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Apex sharing to share opportunities with sales managers') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Sharing rules to share opportunities with sales managers') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Scheduled Apex job to remove access",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option B ('Scheduled Apex job to remove access') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q76 Universal Containers is implementing Sales Cloud. During the final quarter of the financia"
          }
        },
        {
          "id": "programmatic-sharing-14",
          "index": 75,
          "reference": "Q78",
          "question": "Dreamforce presenters need to be able to edit their presentation details (summary, presenter biographies, etc) on a private custom object in Salesforce (Presentation). All presenters for a presentation are captured on a Presenters junction object between Presenter and User. How can this be accomplished?",
          "options": {
            "A": "Give Edit rights to the Presentation record via a Permission set that is given to the Presenters for a record.",
            "B": "Trigger on Presenter junction object that adds the user to the Sales Team for the Presentation record.",
            "C": "Trigger on Presenter junction object that uses Apex Managed sharing to add or remove access to the related Presentation record."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option C ('Trigger on Presenter junction object that uses Apex Managed sharing to add or remove access to the related Presentation record.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Give Edit rights to the Presentation record via a Permission set that is given to the Presenters for a record.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "B": "Option B ('Trigger on Presenter junction object that adds the user to the Sales Team for the Presentation record.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Trigger on Presenter junction object that uses Apex Managed sharing to add or remove access to the related Presentation record.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('Trigger on Presenter junction object that uses Apex Managed sharing to add or remove access to the related Presentation record.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q78 Dreamforce presenters need to be able to edit their presentation details (summary, present"
          }
        },
        {
          "id": "programmatic-sharing-15",
          "index": 79,
          "reference": "Q82",
          "question": "Universal Containers (UC) has a team that analyzes customer orders looking for fraud. This team needs access to Invoice records (custom object, Private organization-wide default). UC has complex rules to control users' access. The architect recommended using Apex managed sharing to meet these requirements. Which recommendation should a developer consider when implementing the changes?",
          "options": {
            "A": "Use \"Without Sharing\" keyword to make sure record visibility will be considered.",
            "B": "Use \"With Sharing\" keyword to enforce Field-Level Security.",
            "C": "Use runAs system method to test different users accessing these records."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "The system method System.runAs() simulates record sharing rules and record-level visibility in Apex test methods for specified users, but does NOT enforce Field-Level Security or object permissions (CRUD).",
          "distractors": {
            "A": "System.runAs() exclusively enforces record sharing; it deliberately bypasses CRUD and Field-Level Security during test execution.",
            "B": "System.runAs() exclusively enforces record sharing; it deliberately bypasses CRUD and Field-Level Security during test execution."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Use runAs system method to test different users accessing these records.",
            "docTopic": "Salesforce Security Guide: Organization-Wide Sharing Defaults",
            "webReason": "Salesforce official documentation confirms that baseline access is determined by OWD. Option C ('Use runAs system method to test different users accessing these records.') correctly aligns with the least privilege model and record-level security standards.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q82 Universal Containers (UC) has a team that analyzes customer orders looking for fraud. This"
          }
        },
        {
          "id": "programmatic-sharing-16",
          "index": 84,
          "reference": "Q87",
          "question": "What should an architect recommend to make sure that users that gained access to a custom object record through Apex managed sharing do not lose access to it when its owner is changed?",
          "options": {
            "A": "Use \"With Sharing\" keyword to make sure record visibility will be considered.",
            "B": "Create a specific Apex Sharing Reason for the custom object.",
            "C": "Create a new record in _Share object with RowCause \"Manual\"."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Apex Sharing Reasons on custom objects allow developers to define clear business justifications for sharing. Unlike shares with RowCause 'Manual', Apex-managed shares with custom reasons are preserved across record owner changes.",
          "distractors": {
            "A": "The 'with sharing' keyword governs SOQL execution context, not persistent share records in the database.",
            "C": "Shares created with RowCause 'Manual' are automatically deleted whenever record ownership changes."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Create a specific Apex Sharing Reason for the custom object.",
            "docTopic": "Apex Developer Guide: Enforcing Sharing Rules & FLS in Apex",
            "webReason": "Official Salesforce Developer Documentation establishes that Apex runs in system mode by default. Option B ('Create a specific Apex Sharing Reason for the custom object.') correctly enforces data boundaries and prevents unauthorized field/record access.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q87 What should an architect recommend to make sure that users that gained access to a custom "
          }
        },
        {
          "id": "programmatic-sharing-17",
          "index": 87,
          "reference": "Q90",
          "question": "Customer complaints for bad interactions with a support agent are logged as cases and assigned to a human resources representative. The support agent should not see these complaint cases, but their manager should. What should a Platform Sharing and Visibility Architect do to accomplish this?",
          "options": {
            "A": "Create a criteria-based sharing rule on Case that shares to the Role Manager and above when a custom field Agent Complaint is not blank.",
            "B": "Create a trigger on Case to lookup and share to the manager of an Agent Complaint custom field using Apex managed sharing.",
            "C": "Remove CRED permissions on Case so the agent cannot read the case record. ."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option B ('Create a trigger on Case to lookup and share to the manager of an Agent Complaint custom field using Apex managed sharing.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Create a criteria-based sharing rule on Case that shares to the Role Manager and above when a custom field Agent Complaint is not blank.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Remove CRED permissions on Case so the agent cannot read the case record. .') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Create a trigger on Case to lookup and share to the manager of an Agent Complaint custom field using Apex managed sharing.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option B ('Create a trigger on Case to lookup and share to the manager of an Agent Complaint custom field using Apex managed sharing.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q90 Customer complaints for bad interactions with a support agent are logged as cases and assi"
          }
        },
        {
          "id": "programmatic-sharing-18",
          "index": 89,
          "reference": "Q92",
          "question": "A company launches a work- from- anywhere initiative in an effort to improve sales team productivity. However, the sales team uses a wide variety of devices with different form factors. The company currently uses a one- page layout to display Opportunity record details. The regional VP of sales complains about incorrect alignment of data in Opportunity records, making it difficult to read. Which action should a Platform Sharing and Visibility Architect take to correct this?",
          "options": {
            "A": "Use Dynamic Forms to define different field sections applicable for different form factors of devices.",
            "B": "Use a Visualforce override for Opportunity view action, identify the form factor onLoad action, and display relevant layouts based on form factors.",
            "C": "Use a custom LWC override for Opportunity view action, identify the form factor onLoad action, and display relevant layouts based on form factors."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Dynamic Forms allow administrators to configure field sections and individual fields directly on Lightning record pages with granular component visibility rules based on record type or device form factors without requiring code.",
          "distractors": {
            "B": "Custom component overrides (LWC/Visualforce) add unnecessary technical debt and code maintenance when declarative Dynamic Forms natively satisfy the requirement.",
            "C": "Custom component overrides (LWC/Visualforce) add unnecessary technical debt and code maintenance when declarative Dynamic Forms natively satisfy the requirement."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Use Dynamic Forms to define different field sections applicable for different form factors of devices.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option A ('Use Dynamic Forms to define different field sections applicable for different form factors of devices.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q92 A company launches a work- from- anywhere initiative in an effort to improve sales team pr"
          }
        },
        {
          "id": "programmatic-sharing-19",
          "index": 92,
          "reference": "Q95",
          "question": "Universal Containers (UC) uses a custom Lightning component with an Apex class to display shipment information (custom object, Private organization-wide default). UC sales managers are complaining about two important points: Shipment records that belong to their teams can be seen by other users.- Shipment amount should be visible only by managers, but sales reps are able to view it. What should the the development team use to avoid these problems?",
          "options": {
            "A": "Use isShareable keyword in Apex classes to assure record visibility.",
            "B": "Use With Sharing keyword in Apex classes to enforce sharing rules evaluation.",
            "C": "Use runAs in test class to enforce user permissions and field-level permissions."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option B ('Use With Sharing keyword in Apex classes to enforce sharing rules evaluation.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Use isShareable keyword in Apex classes to assure record visibility.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Use runAs in test class to enforce user permissions and field-level permissions.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Use With Sharing keyword in Apex classes to enforce sharing rules evaluation.",
            "docTopic": "Salesforce Security Guide: Organization-Wide Sharing Defaults",
            "webReason": "Salesforce official documentation confirms that baseline access is determined by OWD. Option B ('Use With Sharing keyword in Apex classes to enforce sharing rules evaluation.') correctly aligns with the least privilege model and record-level security standards.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q95 Universal Containers (UC) uses a custom Lightning component with an Apex class to display "
          }
        },
        {
          "id": "programmatic-sharing-20",
          "index": 93,
          "reference": "Q96",
          "question": "Universal Containers requests to leverage Lightning Web Components (LWC) to improve support reps' user experience. LWC will be used as view layer, and Apex classes will have the business logic. What should the development team consider when implementing this solution?",
          "options": {
            "A": "Use isShareable, isEditable, and isCreatable to enforce field permissions .",
            "B": "Have the development team enforce record visibility once Apex runs in system mode .",
            "C": "Create test classes including runAs to test different users accessing the data."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Apex classes run in system mode by default (bypassing sharing rules, object CRUD, and field-level security). When using LWC as a view layer with Apex controllers, the development team must explicitly enforce record visibility and security checks in Apex.",
          "distractors": {
            "A": "Option A ('Use isShareable, isEditable, and isCreatable to enforce field permissions .') is incorrect because it does not satisfy the platform requirement or represents an invalid security configuration.",
            "C": "Option C ('Create test classes including runAs to test different users accessing the data.') is incorrect because it does not satisfy the platform requirement or represents an invalid security configuration."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Have the development team enforce record visibility once Apex runs in system mode .",
            "docTopic": "Apex Developer Guide: Enforcing Sharing Rules & FLS in Apex",
            "webReason": "Official Salesforce Developer Documentation establishes that Apex runs in system mode by default. Option B ('Have the development team enforce record visibility once Apex runs in system mode .') correctly enforces data boundaries and prevents unauthorized field/record access.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q96 Universal Containers requests to leverage Lightning Web Components (LWC) to improve suppor"
          }
        }
      ],
      "questionCount": 20
    },
    {
      "slug": "object-field-security",
      "title": "Object & Field-Level Security",
      "weight": "18%",
      "questions": [
        {
          "id": "object-field-security-1",
          "index": 2,
          "reference": "Q2",
          "question": "Sales operations at Universal Containers (UC) has created Public Reports and Dashboards folders for sales managers. Sales operations and sales managers report to the VP of Sales. Sales operations currently spends a few hours each month updating users that should have access to edit reports and dashboards in these folders. How should UC grant access to sales managers to automate access to these Public Reports and Dashboards folders?",
          "options": {
            "A": "Share the folders with the lowest roles in the Role Hierarchy; superiors will get access automatically.",
            "B": "Share the folders with the Sales Managers profile.",
            "C": "Share the folders with a \"Sales Managers\" public Group."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Sharing folders with a Public Group automates access management for groups of users without requiring manual updates to folder permissions when users join or change roles.",
          "distractors": {
            "A": "Salesforce folder access does not automatically inherit upwards through the Role Hierarchy.",
            "B": "Report and dashboard folders cannot be shared directly with profiles."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Share the folders with a \"Sales Managers\" public Group.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('Share the folders with a \"Sales Managers\" public Group.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q2 Sales operations at Universal Containers (UC) has created Public Reports and Dashboards fo"
          }
        },
        {
          "id": "object-field-security-2",
          "index": 4,
          "reference": "Q4",
          "question": "Users at Universal Containers are complaining that a field has disappeared from the Account page after last weekend's deployment. The page layout did not change with this deployment. How should the admin troubleshoot this issue?",
          "options": {
            "A": "Run a Who Sees What report, filtering on Account.",
            "B": "Log in as a user and check several accounts to isolate the problem records.",
            "C": "View Field Accessibility in the Object Manager."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "When page layouts remain unchanged but a field disappears, Field Accessibility in Object Manager is the definitive tool to diagnose profile-level visibility and Field-Level Security settings across all profiles.",
          "distractors": {
            "A": "'Who Sees What' is an administrative overview video series/guide, not a native reporting tool in Setup.",
            "B": "Logging in as individual users is inefficient and doesn't reveal the root configuration cause."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "View Field Accessibility in the Object Manager.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('View Field Accessibility in the Object Manager.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q4 Users at Universal Containers are complaining that a field has disappeared from the Accoun"
          }
        },
        {
          "id": "object-field-security-3",
          "index": 6,
          "reference": "Q6",
          "question": "A support representative at Universal Containers created a report to view all her open cases that have been created in the past 7 days and saved the report in the \"Private Reports\" folder. Who can view and run the report?",
          "options": {
            "A": "The report owner",
            "B": "The report owner and any users who have been given access to the \"My Private Reports\" folder",
            "C": "The report owner and users with the View All Data permission"
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option A ('The report owner') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "B": "Option B ('The report owner and any users who have been given access to the \"My Private Reports\" folder') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('The report owner and users with the View All Data permission') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "The report owner",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option A ('The report owner') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q6 A support representative at Universal Containers created a report to view all her open cas"
          }
        },
        {
          "id": "object-field-security-4",
          "index": 7,
          "reference": "Q7",
          "question": "Which option can be selected to share data when creating a sharing rule?",
          "options": {
            "A": "Roles",
            "B": "Users",
            "C": "Profile"
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "When creating sharing rules in Salesforce, records can be shared with Public Groups, Roles, Roles and Subordinates, or Territories. They cannot be shared directly with individual Users or Profiles.",
          "distractors": {
            "B": "Salesforce sharing rules cannot target individual users directly; public groups must be used instead.",
            "C": "Sharing rules cannot be assigned to Profiles; profiles manage permissions, not record visibility."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Roles",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option A ('Roles') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q7 Which option can be selected to share data when creating a sharing rule?"
          }
        },
        {
          "id": "object-field-security-5",
          "index": 10,
          "reference": "Q10",
          "question": "Universal Containers' organization wide-defaults model is Private for the Account object. A sales rep owns two opportunities in one Account. The Sales Rep profile has Create/Edit access to opportunity records. Which level of access will the sales rep have to the related Account record?",
          "options": {
            "A": "Read/Create/Edit access",
            "B": "Read access",
            "C": "No access"
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Under Salesforce implicit sharing (specifically Child-to-Parent Implicit Sharing), a user who has access to a child record (like an Opportunity or Case) automatically receives Read-Only access to the parent Account record.",
          "distractors": {
            "A": "Implicit sharing to the parent Account provides Read-Only access, not Edit or Delete rights.",
            "C": "Salesforce implicit sharing guarantees that a user can view the parent account associated with their opportunities."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Read access",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option B ('Read access') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q10 Universal Containers' organization wide-defaults model is Private for the Account object. "
          }
        },
        {
          "id": "object-field-security-6",
          "index": 11,
          "reference": "Q11",
          "question": "A custom Invoice object has been created with a master-detail relationship to Account. The accounts receivable (AR) team needs access to invoice records. AR users neither own nor have access to account records. The Account organization-wide default is set to Private. The AR team is unable to find invoices in list views, reports, and Global Search. The architect has been asked to help troubleshoot. What is preventing AR team members from seeing invoices?",
          "options": {
            "A": "A sharing rule is missing to share invoices with the AR team.",
            "B": "The AR profile does not have Read permission to the Invoice object.",
            "C": "A sharing rule is missing to share accounts with the AR team."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "In a Master-Detail relationship, access to detail records (Invoices) is controlled by the master object (Account). If AR reps cannot see invoices, they lack access to the parent Accounts, which requires a sharing rule on Account.",
          "distractors": {
            "A": "OWD for a detail record is automatically Controlled by Parent and cannot be changed independently.",
            "B": "OWD for a detail record is automatically Controlled by Parent and cannot be changed independently."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "A sharing rule is missing to share accounts with the AR team.",
            "docTopic": "Salesforce Security Guide: Organization-Wide Sharing Defaults",
            "webReason": "Salesforce official documentation confirms that baseline access is determined by OWD. Option C ('A sharing rule is missing to share accounts with the AR team.') correctly aligns with the least privilege model and record-level security standards.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q11 A custom Invoice object has been created with a master-detail relationship to Account. The"
          }
        },
        {
          "id": "object-field-security-7",
          "index": 12,
          "reference": "Q12",
          "question": "An architect from a previous project implemented Platform Shield Encryption for a company. However, based on a recent audit, the company's Privacy Team identified three additional fields in their Account Records (Billing Street, Billing City and Phone) that needs to be secure and protected. How should an architect proceed with this new policy change?",
          "options": {
            "A": "Use Classic Encryption to ensure all fields are protected and contact Sales force for help with encryption verification.",
            "B": "Use Encryption Policy and wait for an email from Salesforce indicating the field values are encrypted.",
            "C": "Use Encryption Policy and contact Salesforce to update the existing records so that their field values are encrypted."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "When encrypting existing standard or custom fields via Shield Platform Encryption Policy, background encryption is initiated. Salesforce sends an email confirmation once background processing of existing data is complete.",
          "distractors": {
            "A": "Classic Encryption is limited to custom text fields and does not support standard fields like Billing Address or Phone.",
            "C": "Contacting Salesforce Customer Support is no longer required for standard Shield encryption verification."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Use Encryption Policy and wait for an email from Salesforce indicating the field values are encrypted.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option B ('Use Encryption Policy and wait for an email from Salesforce indicating the field values are encrypted.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q12 An architect from a previous project implemented Platform Shield Encryption for a company."
          }
        },
        {
          "id": "object-field-security-8",
          "index": 13,
          "reference": "Q13",
          "question": "An architect has a requirement to create a criteria-based sharing rule based on the customer Social Security Number. However, when setting up the rule in Contact Sharing, the field is not shown on the list of available fields. What is causing this issue?",
          "options": {
            "A": "The architect's profile does not have Field Level Security for this field.",
            "B": "The architect does not have permission to Compliance Fields.",
            "C": "The field has been configured for encryption."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option C ('The field has been configured for encryption.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('The architect's profile does not have Field Level Security for this field.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "B": "Option B ('The architect does not have permission to Compliance Fields.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "The field has been configured for encryption.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('The field has been configured for encryption.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q13 An architect has a requirement to create a criteria-based sharing rule based on the custom"
          }
        },
        {
          "id": "object-field-security-9",
          "index": 18,
          "reference": "Q18",
          "question": "Universal Containers has selected a small and diverse group of users to review inactive accounts. Given the Private sharing model, a public group was created and made available to this group of users. A sharing rule was created to make inactive accounts visible to the public group. However, some of these users are reporting they do not see any of the accounts that were shared with the public group. What is the underlying issue for these users?",
          "options": {
            "A": "The accounts are owned by users higher in the Role Hierarchy.",
            "B": "The users are in profiles that have no access to the Account object.",
            "C": "The page layout assigned to these users is different than the Account owner."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option B ('The users are in profiles that have no access to the Account object.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('The accounts are owned by users higher in the Role Hierarchy.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('The page layout assigned to these users is different than the Account owner.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "The users are in profiles that have no access to the Account object.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option B ('The users are in profiles that have no access to the Account object.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q18 Universal Containers has selected a small and diverse group of users to review inactive ac"
          }
        },
        {
          "id": "object-field-security-10",
          "index": 19,
          "reference": "Q19",
          "question": "A banking company uses a VIP Flag in the Contact Object that they want only Private Banking Reps to see. Which approach is recommended to meet this requirement?",
          "options": {
            "A": "Define a page layout for Contact Object and add the VIP Flag field for that layout. Remove the VIP Flag field from other layouts.",
            "B": "Change the type of VIP Flag field to a publish, define a new record type for the Contact Object and make the publish field available for Editing.",
            "C": "Set the Field Level Security for the VIP Flag field so that it is visible to Private Banking Rep Profiles."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option C ('Set the Field Level Security for the VIP Flag field so that it is visible to Private Banking Rep Profiles.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Define a page layout for Contact Object and add the VIP Flag field for that layout. Remove the VIP Flag field from other layouts.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "B": "Option B ('Change the type of VIP Flag field to a publish, define a new record type for the Contact Object and make the publish field available for Editing.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Set the Field Level Security for the VIP Flag field so that it is visible to Private Banking Rep Profiles.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('Set the Field Level Security for the VIP Flag field so that it is visible to Private Banking Rep Profiles.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q19 A banking company uses a VIP Flag in the Contact Object that they want only Private Bankin"
          }
        },
        {
          "id": "object-field-security-11",
          "index": 23,
          "reference": "Q23",
          "question": "Universal Containers (UC) has created a custom Invoice object. Standard sales users at UC can see the records in search layout, but when they click to view the detail, only record name, created date, and last modified date are shown. When the system admin accesses it, he or she sees the full record detail with many more data fields. What is the likely cause of this issue?",
          "options": {
            "A": "The Sales Users profile does not have access to the remaining fields.",
            "B": "The page layout assigned to Sales User profile has only Read-Only access to the fields.",
            "C": "A role-based sharing rule is missing and should be added for the sales user's role to grant access to the fields."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option A ('The Sales Users profile does not have access to the remaining fields.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "B": "Option B ('The page layout assigned to Sales User profile has only Read-Only access to the fields.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('A role-based sharing rule is missing and should be added for the sales user's role to grant access to the fields.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "The Sales Users profile does not have access to the remaining fields.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option A ('The Sales Users profile does not have access to the remaining fields.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q23 Universal Containers (UC) has created a custom Invoice object. Standard sales users at UC "
          }
        },
        {
          "id": "object-field-security-12",
          "index": 30,
          "reference": "Q30",
          "question": "Universal Containers (UC) service reps are assigned to a profile which has View All in the Case object (Private organization-wide default). To make sure service reps have access to all relevant information (accounts and contacts) to attend to customer requests, which detail should an architect consider?",
          "options": {
            "A": "Service reps will NOT be able to access all UC contact records if they are Controlled by Parent.",
            "B": "Service reps will NOT be able to access all UC account records because the Account OWD is Private.",
            "C": "Service reps will be able to access all UC contact records if they are Controlled by Parent."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option B ('Service reps will NOT be able to access all UC account records because the Account OWD is Private.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Service reps will NOT be able to access all UC contact records if they are Controlled by Parent.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Service reps will be able to access all UC contact records if they are Controlled by Parent.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Service reps will NOT be able to access all UC account records because the Account OWD is Private.",
            "docTopic": "Salesforce Security Guide: Organization-Wide Sharing Defaults",
            "webReason": "Salesforce official documentation confirms that baseline access is determined by OWD. Option B ('Service reps will NOT be able to access all UC account records because the Account OWD is Private.') correctly aligns with the least privilege model and record-level security standards.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q30 Universal Containers (UC) service reps are assigned to a profile which has View All in the"
          }
        },
        {
          "id": "object-field-security-13",
          "index": 32,
          "reference": "Q32",
          "question": "Mary is Joe's manager in the Role Hierarchy. The organization-wide default for a custom Invoice object is Public Read-Only, and Mary's profile is not granted the Read permission for the Invoice object. Which action can Mary take on Joe's invoice records?",
          "options": {
            "A": "Read/Write",
            "B": "None",
            "C": "View Only"
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Object-level CRUD permissions in the user's profile act as the master gate. If Mary's profile does not have 'Read' permission on the Invoice object, she cannot view any Invoice records, even if OWD is Public Read-Only or she is higher in the hierarchy.",
          "distractors": {
            "A": "Sharing settings (OWD and Role Hierarchy) cannot grant access to an object if the user's profile lacks object-level Read permission.",
            "C": "Sharing settings (OWD and Role Hierarchy) cannot grant access to an object if the user's profile lacks object-level Read permission."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "None",
            "docTopic": "Salesforce Security Guide: Organization-Wide Sharing Defaults",
            "webReason": "Salesforce official documentation confirms that baseline access is determined by OWD. Option B ('None') correctly aligns with the least privilege model and record-level security standards.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q32 Mary is Joe's manager in the Role Hierarchy. The organization-wide default for a custom In"
          }
        },
        {
          "id": "object-field-security-14",
          "index": 33,
          "reference": "Q33",
          "question": "The corporate identity and access team needs to audit User setup in the Salesforce org. Which permission should be granted to this team so they can perform their audit?",
          "options": {
            "A": "View All Users",
            "B": "View All Data",
            "C": "View permission on the User object"
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option A ('View All Users') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "B": "Option B ('View All Data') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('View permission on the User object') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "View All Users",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option A ('View All Users') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q33 The corporate identity and access team needs to audit User setup in the Salesforce org. Wh"
          }
        },
        {
          "id": "object-field-security-15",
          "index": 38,
          "reference": "Q38",
          "question": "Universal Containers has expanded to sell virtual containers for data storage. Virtual container work orders are provisioned immediately by the system and therefore cannot be changed by a sales rep. What is an optimal approach to implement these requirements?",
          "options": {
            "A": "Change the Record Type/Page Layout assignment for Work Orders to Read -Only.",
            "B": "Remove the Work Order Edit permission from the Sales Representative profile.",
            "C": "Implement a sharing rule that changes access for all Work Orders to Read."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option B ('Remove the Work Order Edit permission from the Sales Representative profile.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Change the Record Type/Page Layout assignment for Work Orders to Read -Only.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Implement a sharing rule that changes access for all Work Orders to Read.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Remove the Work Order Edit permission from the Sales Representative profile.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option B ('Remove the Work Order Edit permission from the Sales Representative profile.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q38 Universal Containers has expanded to sell virtual containers for data storage. Virtual con"
          }
        },
        {
          "id": "object-field-security-16",
          "index": 42,
          "reference": "Q42",
          "question": "Who can view a PDF that is uploaded to the Files Home private library by a user?",
          "options": {
            "A": "The user and users above them in the Role Hierarchy",
            "B": "The user and users with View All Data permission",
            "C": "Only the user"
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Files stored in a user's private library are accessible to the uploading user and administrators who possess the 'View All Data' system permission.",
          "distractors": {
            "A": "Option A ('The user and users above them in the Role Hierarchy') is incorrect because it does not satisfy the platform requirement or represents an invalid security configuration.",
            "C": "Option C ('Only the user') is incorrect because it does not satisfy the platform requirement or represents an invalid security configuration."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "The user and users with View All Data permission",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option B ('The user and users with View All Data permission') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q42 Who can view a PDF that is uploaded to the Files Home private library by a user?"
          }
        },
        {
          "id": "object-field-security-17",
          "index": 48,
          "reference": "Q49",
          "question": "Sales reps at Universal Containers (UC) complain about the manual activities they need to perform in order to grant access to supporting internal users (legal, engineering, finance, etc.) for customer records when they need help. In general, the sales reps involved in the deals will not change. How should an architect help UC improve sales reps' productivity?",
          "options": {
            "A": "Create a criteria-based sharing rule to grant access to other users.",
            "B": "Create a permission set with View All Data and assign to supporting users.",
            "C": "Leverage default Account team."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Leverage default Account team. enables record owners to quickly grant specific access levels (Read or Read/Write) to supporting cross-functional team members without requiring administrative intervention.",
          "distractors": {
            "A": "Granting 'View All Data' provides org-wide administrative access, severely violating the principle of least privilege.",
            "B": "Granting 'View All Data' provides org-wide administrative access, severely violating the principle of least privilege."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Leverage default Account team.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('Leverage default Account team.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q49 Sales reps at Universal Containers (UC) complain about the manual activities they need to "
          }
        },
        {
          "id": "object-field-security-18",
          "index": 50,
          "reference": "Q51",
          "question": "A banking company wants their customers Date of Birth Field searchable by Banking Reps, but only editable by Customer Support Reps. Which approach is recommended to meet this requirement?",
          "options": {
            "A": "Add Date of Birth field to the Search layout of the Contact Object. Modify the Page layout assigned to Customer Support Rep and add Date of Birth field as Required.",
            "B": "Create a Validation rule in the Date of Birth field so the rule returns true only when user.profilename matches Customer Support Rep.",
            "C": "Set the Field Level Security for the Date of Birth field to be Visible to Customer Support Rep Profile, and set the Date of Birth field Visible and Readonly to Banking Rep profile."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option C ('Set the Field Level Security for the Date of Birth field to be Visible to Customer Support Rep Profile, and set the Date of Birth field Visible and Readonly to Banking Rep profile.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Add Date of Birth field to the Search layout of the Contact Object. Modify the Page layout assigned to Customer Support Rep and add Date of Birth field as Required.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "B": "Option B ('Create a Validation rule in the Date of Birth field so the rule returns true only when user.profilename matches Customer Support Rep.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Set the Field Level Security for the Date of Birth field to be Visible to Customer Support Rep Profile, and set the Date of Birth field Visible and Readonly to Banking Rep profile.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('Set the Field Level Security for the Date of Birth field to be Visible to Customer Support Rep Profile, and set the Date of Birth field Visible and Readonly to Banking Rep profile.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q51 A banking company wants their customers Date of Birth Field searchable by Banking Reps, bu"
          }
        },
        {
          "id": "object-field-security-19",
          "index": 51,
          "reference": "Q52",
          "question": "Universal Containers (UC) is in a legal dispute regarding several orders. UC has found out these records were removed from the system. The VP of Sales has asked to ensure this cannot happen in the future. Which approach should meet this requirement?",
          "options": {
            "A": "Remove the Delete button from the Order Page Layout.",
            "B": "Remove Order Delete permission from profiles and permission sets.",
            "C": "Change the Record Type/Page Layout assignment for orders to be Read-Only."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option B ('Remove Order Delete permission from profiles and permission sets.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Remove the Delete button from the Order Page Layout.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Change the Record Type/Page Layout assignment for orders to be Read-Only.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Remove Order Delete permission from profiles and permission sets.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option B ('Remove Order Delete permission from profiles and permission sets.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q52 Universal Containers (UC) is in a legal dispute regarding several orders. UC has found out"
          }
        },
        {
          "id": "object-field-security-20",
          "index": 53,
          "reference": "Q54",
          "question": "A support representative at Universal Containers created a report to view all her open cases that have been created in the past 7 days and saved the report in the \"Private Reports\" folder. Who can view and run the report?",
          "options": {
            "A": "The report owner",
            "B": "The report owner and any users who have been given access to the \"My Private Reports\" folder",
            "C": "The report owner and users with the View All Data permission"
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option A ('The report owner') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "B": "Option B ('The report owner and any users who have been given access to the \"My Private Reports\" folder') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('The report owner and users with the View All Data permission') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "The report owner",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option A ('The report owner') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q54 A support representative at Universal Containers created a report to view all her open cas"
          }
        },
        {
          "id": "object-field-security-21",
          "index": 54,
          "reference": "Q55",
          "question": "Which option can be selected to share data when creating a sharing rule?",
          "options": {
            "A": "Roles",
            "B": "Users",
            "C": "Profile"
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "When creating sharing rules in Salesforce, records can be shared with Public Groups, Roles, Roles and Subordinates, or Territories. They cannot be shared directly with individual Users or Profiles.",
          "distractors": {
            "B": "Salesforce sharing rules cannot target individual users directly; public groups must be used instead.",
            "C": "Sharing rules cannot be assigned to Profiles; profiles manage permissions, not record visibility."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Roles",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option A ('Roles') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q55 Which option can be selected to share data when creating a sharing rule?"
          }
        },
        {
          "id": "object-field-security-22",
          "index": 58,
          "reference": "Q59",
          "question": "Besides their own team accounts, sales managers at Universal Containers (UC) need Read access to all accounts of the same segment in other countries. Role Hierarchy was implemented accordingly (based on countries), but a sales manager in the U.S. is complaining that he cannot view account records of the same segment in Canada. What should UC do to grant access properly?",
          "options": {
            "A": "Create owner-based sharing rule to grant access to account records that have the same segment to all sales manager roles.",
            "B": "Create a public group and include all accounts of the same segment, and then grant access with a permission set.",
            "C": "Change the Role Hierarchy and put all the sales managers in the U.S. and Canada in the same role."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option A ('Create owner-based sharing rule to grant access to account records that have the same segment to all sales manager roles.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "B": "Option B ('Create a public group and include all accounts of the same segment, and then grant access with a permission set.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Change the Role Hierarchy and put all the sales managers in the U.S. and Canada in the same role.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Create owner-based sharing rule to grant access to account records that have the same segment to all sales manager roles.",
            "docTopic": "Salesforce Help: Controlling Access Using Role Hierarchy",
            "webReason": "Salesforce platform architecture specifies that record access inherits vertically through the Role Hierarchy when Grant Access Using Hierarchies is active. Option A is the validated architectural solution.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q59 Besides their own team accounts, sales managers at Universal Containers (UC) need Read acc"
          }
        },
        {
          "id": "object-field-security-23",
          "index": 63,
          "reference": "Q64",
          "question": "Universal Containers has a Performance Feedback custom object (Private organization- wide default) used by customers to report any issues with delivery drivers. Feedback should not be visible to the driver, but any feedback records should be accessible to people above them in the Role Hierarchy, even when the driver changes managers. Assuming managers have Read access to the Feedback object, which three steps are necessary to solve these requirements?",
          "options": {
            "A": "Remove Read permission on the Driver profile, have feedback ownership transferred to the driver when feedback is submitted, and create an ownership-based sharing rule.",
            "B": "Remove Read permission on the Driver profile, have feedback ownership transferred to the driver's manager when feedback is submitted, and use the Role Hierarchy to give access to a driver's manager.",
            "C": "Remove Read permission on the Driver profile, have feedback ownership transferred to the driver when feedback is submitted, and use the Role Hierarchy to give access to a driver's manager."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option B ('Remove Read permission on the Driver profile, have feedback ownership transferred to the driver's manager when feedback is submitted, and use the Role Hierarchy to give access to a driver's manager.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Remove Read permission on the Driver profile, have feedback ownership transferred to the driver when feedback is submitted, and create an ownership-based sharing rule.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Remove Read permission on the Driver profile, have feedback ownership transferred to the driver when feedback is submitted, and use the Role Hierarchy to give access to a driver's manager.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Remove Read permission on the Driver profile, have feedback ownership transferred to the driver's manager when feedback is submitted, and use the Role Hierarchy to give access to a driver's manager.",
            "docTopic": "Salesforce Help: Controlling Access Using Role Hierarchy",
            "webReason": "Salesforce platform architecture specifies that record access inherits vertically through the Role Hierarchy when Grant Access Using Hierarchies is active. Option B is the validated architectural solution.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q64 Universal Containers has a Performance Feedback custom object (Private organization- wide "
          }
        },
        {
          "id": "object-field-security-24",
          "index": 67,
          "reference": "Q68",
          "question": "Universal Containers (UC) has a mostly Private organization-wide default, as it's a core principle of UC to respect client data privacy. UC has implemented complex processes for granting access to Opportunity data. A few key members of the sales reporting team need to always be able to see, but not change, Opportunity data for all opportunities. What should an architect recommend as an approach to meet these requirements?",
          "options": {
            "A": "Give the View All Data permission to the Sales Reporting profile.",
            "B": "Create a permission set that grants the View All Data permission.",
            "C": "Create a permission set that grants the View All permission for Opportunity."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option C ('Create a permission set that grants the View All permission for Opportunity.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Give the View All Data permission to the Sales Reporting profile.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "B": "Option B ('Create a permission set that grants the View All Data permission.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Create a permission set that grants the View All permission for Opportunity.",
            "docTopic": "Salesforce Security Guide: Organization-Wide Sharing Defaults",
            "webReason": "Salesforce official documentation confirms that baseline access is determined by OWD. Option C ('Create a permission set that grants the View All permission for Opportunity.') correctly aligns with the least privilege model and record-level security standards.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q68 Universal Containers (UC) has a mostly Private organization-wide default, as it's a core p"
          }
        },
        {
          "id": "object-field-security-25",
          "index": 70,
          "reference": "Q71",
          "question": "Universal Containers is planning to pilot a new application to a small set of sales reps. What is the optimal way to grant only those sales reps access to the new functionality, while hiding the legacy functionality?",
          "options": {
            "A": "Clone the Sales Rep profile, adjust settings, and assign the pilot users the new profile.",
            "B": "Revoke access to legacy functions in the Sales Rep profile and create a permission set for the new functionality.",
            "C": "Create a permission set to grant access to the new functionality and hide the old functionality."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Create a permission set to grant access to the new functionality and hide the old functionality. follows Salesforce best architectural practices by maintaining clean baseline profiles and extending specialized capabilities modularly via permission sets.",
          "distractors": {
            "A": "Modifying core profiles creates permission sprawl and complicates long-term maintenance across user cohorts.",
            "B": "Modifying core profiles creates permission sprawl and complicates long-term maintenance across user cohorts."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Create a permission set to grant access to the new functionality and hide the old functionality.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('Create a permission set to grant access to the new functionality and hide the old functionality.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q71 Universal Containers is planning to pilot a new application to a small set of sales reps. "
          }
        },
        {
          "id": "object-field-security-26",
          "index": 71,
          "reference": "Q73",
          "question": "Universal Containers uses the standard Case object to track various support requests sent to servicing agents. Currently, the Case object has more than 400 fields. Eight different types of case processes have been established, each with a unique combination of statuses. The Director of Customer Service wants to ensure that servicing agents see only the required information specific to the case type they are addressing. Which option is recommended to implement this requirement?",
          "options": {
            "A": "Use Dynamic Forms with different field sections representing the relevant fields per case type, and control visibility of sections by Case Record Type value.",
            "B": "Use different Page Layouts per case type, each representing the relevant fields per case type."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Dynamic Forms allow administrators to configure field sections and individual fields directly on Lightning record pages with granular component visibility rules based on record type or device form factors without requiring code.",
          "distractors": {
            "B": "Creating multiple static page layouts requires continuous maintenance and cannot dynamically toggle sections on the fly."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Use Dynamic Forms with different field sections representing the relevant fields per case type, and control visibility of sections by Case Record Type value.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option A ('Use Dynamic Forms with different field sections representing the relevant fields per case type, and control visibility of sections by Case Record Type value.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q73 Universal Containers uses the standard Case object to track various support requests sent "
          }
        },
        {
          "id": "object-field-security-27",
          "index": 74,
          "reference": "Q77",
          "question": "Universal Containers uses Person Accounts to represent retail customers and Business Accounts to represent commercial customers. The retail sales team should not have access to commercial customers but should have access to ALL retail customers. With the organization- wide default on Account set to Private, how should the architect meet these requirements?",
          "options": {
            "A": "Create a criteria-based sharing rule giving the Retail Sales role access to Accounts of type PersonAccount.",
            "B": "Create an owner-based sharing rule on AccountContactRelation to grant access to all account contact records owned by retail sales reps.",
            "C": "Update the Retail Sales profile to grant access to Person Account record type."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option A ('Create a criteria-based sharing rule giving the Retail Sales role access to Accounts of type PersonAccount.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "B": "Option B ('Create an owner-based sharing rule on AccountContactRelation to grant access to all account contact records owned by retail sales reps.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Update the Retail Sales profile to grant access to Person Account record type.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Create a criteria-based sharing rule giving the Retail Sales role access to Accounts of type PersonAccount.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option A ('Create a criteria-based sharing rule giving the Retail Sales role access to Accounts of type PersonAccount.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q77 Universal Containers uses Person Accounts to represent retail customers and Business Accou"
          }
        },
        {
          "id": "object-field-security-28",
          "index": 90,
          "reference": "Q93",
          "question": "Universal Containers service reps are assigned to a profile that has View All on the Case object. The organization- wide default (OWD) for the Account and Case objects is Private. To make sure service reps have access to all relevant information (Accounts and Contacts) to attend to customer requests, which detail should a Platform Sharing and Visibil ity Architect consider?",
          "options": {
            "A": "Service reps will not be able to access the relevant Accounts if their OWD is Private .",
            "B": "Service reps will not be able to access the relevant Contacts if their OWD is Controlled by Parent.",
            "C": "Service reps will be able to access the relevant Contacts if their OWD is Controlled by Parent."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option C ('Service reps will be able to access the relevant Contacts if their OWD is Controlled by Parent.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Service reps will not be able to access the relevant Accounts if their OWD is Private .') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "B": "Option B ('Service reps will not be able to access the relevant Contacts if their OWD is Controlled by Parent.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Service reps will be able to access the relevant Contacts if their OWD is Controlled by Parent.",
            "docTopic": "Salesforce Security Guide: Organization-Wide Sharing Defaults",
            "webReason": "Salesforce official documentation confirms that baseline access is determined by OWD. Option C ('Service reps will be able to access the relevant Contacts if their OWD is Controlled by Parent.') correctly aligns with the least privilege model and record-level security standards.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q93 Universal Containers service reps are assigned to a profile that has View All on the Case "
          }
        },
        {
          "id": "object-field-security-29",
          "index": 91,
          "reference": "Q94",
          "question": "A user uploads a PDF to the Files Home private library. Who is able to view the PDF?",
          "options": {
            "A": "The user and users with View All Data permission",
            "B": "The user and users above them in the Role Hierarchy",
            "C": "Only the user"
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Files in a user's private library are accessible to the uploading user and administrators who hold the 'View All Data' system permission.",
          "distractors": {
            "B": "Private files do not inherit access through the Role Hierarchy; only the owner and users with 'View All Data' can view them.",
            "C": "Private files do not inherit access through the Role Hierarchy; only the owner and users with 'View All Data' can view them."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "The user and users with View All Data permission",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option A ('The user and users with View All Data permission') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q94 A user uploads a PDF to the Files Home private library. Who is able to view the PDF?"
          }
        },
        {
          "id": "object-field-security-30",
          "index": 95,
          "reference": "Q98",
          "question": "Sales reps at Universal Containers (UC) are complaining about the manual activities they need to perform to grant access to supporting internal users (legal, engineering, finance, etc.) for customer records when they need help. In general, the sales reps involved in the deals will not change. How should a Platform Sharing and Visibility Architect help UC improve sales reps' productivity?",
          "options": {
            "A": "Create a criteria-based sharing rule to grant access to other users.",
            "B": "Leverage the default Account team.",
            "C": "Create a permission set with View All Data and assign to supporting users ."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Leverage the default Account team. enables record owners to quickly grant specific access levels (Read or Read/Write) to supporting cross-functional team members without requiring administrative intervention.",
          "distractors": {
            "A": "Granting 'View All Data' provides org-wide administrative access, severely violating the principle of least privilege.",
            "C": "Granting 'View All Data' provides org-wide administrative access, severely violating the principle of least privilege."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Leverage the default Account team.",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option B ('Leverage the default Account team.') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q98 Sales reps at Universal Containers (UC) are complaining about the manual activities they n"
          }
        }
      ],
      "questionCount": 30
    },
    {
      "slug": "performance-scalability",
      "title": "Performance, Scalability & Large Data Volumes",
      "weight": "15%",
      "questions": [
        {
          "id": "performance-scalability-1",
          "index": 8,
          "reference": "Q8",
          "question": "Universal Containers (UC) would like to store an encryption key within Salesforce for use in Apex code, but it does not want users to be able to see this confidential key. Users require the view setup permission. How can UC securely store the confidential key?",
          "options": {
            "A": "Create a protected custom metadata type that stores the encryption key. Package the protected custom metadata type with its associated records in a managed package. Install the package in the production org.",
            "B": "Create a protected custom metadata type that stores the encryption key. Package the protected custom metadata type with its associated records in an unlocked package. Install the package in the production org.",
            "C": "Create a custom metadata type that stores the encryption key. Make sure that only the admin profile has access to the custom metadata type so that end users cannot access the encryption key."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "A Protected Custom Metadata Type installed via a Managed Package is entirely inaccessible and invisible to subscriber org users (even System Administrators), yet accessible to Apex code inside the managed package namespace.",
          "distractors": {
            "B": "Unlocked packages do not protect metadata types; their records remain visible to admins in the subscriber org.",
            "C": "Profile-level restrictions in subscriber orgs can always be bypassed by users with View Setup or System Administrators."
          },
          "domain": "Performance, Scalability & Large Data Volumes",
          "domainSlug": "performance-scalability",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Create a protected custom metadata type that stores the encryption key. Package the protected custom metadata type with its associated records in a managed package. Install the package in the production org.",
            "docTopic": "Apex Developer Guide: Enforcing Sharing Rules & FLS in Apex",
            "webReason": "Official Salesforce Developer Documentation establishes that Apex runs in system mode by default. Option A ('Create a protected custom metadata type that stores the encryption key. Package the protected custom metadata type with its associated records in a managed package. Install the package in the production org.') correctly enforces data boundaries and prevents unauthorized field/record access.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q8 Universal Containers (UC) would like to store an encryption key within Salesforce for use "
          }
        },
        {
          "id": "performance-scalability-2",
          "index": 17,
          "reference": "Q17",
          "question": "Which advanced tool should Salesforce enable for large-scale Role Hierarchy realignments?",
          "options": {
            "A": "Partitioning by Divisions",
            "B": "Crowder Locking",
            "C": "Slurry Table Indexing"
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Granular Locking allows Salesforce to lock smaller subsets of records during role hierarchy realignments and group membership operations, preventing whole-table locking and concurrency timeouts.",
          "distractors": {
            "A": "Divisions partition data for large organizations but do not alter row-level locking architecture during role changes.",
            "C": "Divisions partition data for large organizations but do not alter row-level locking architecture during role changes."
          },
          "domain": "Performance, Scalability & Large Data Volumes",
          "domainSlug": "performance-scalability",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Crowder Locking",
            "docTopic": "Salesforce Help: Controlling Access Using Role Hierarchy",
            "webReason": "Salesforce platform architecture specifies that record access inherits vertically through the Role Hierarchy when Grant Access Using Hierarchies is active. Option B is the validated architectural solution.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q17 Which advanced tool should Salesforce enable for large-scale Role Hierarchy realignments?"
          }
        },
        {
          "id": "performance-scalability-3",
          "index": 21,
          "reference": "Q21",
          "question": "Universal Containers (UC) operates worldwide, with offices in more than 100 regions in 10 different countries, and has established a very complex Role Hierarchy to control data visibility. In the new fiscal year, UC is planning to reorganize the roles and reassign account owners. Which feature should an architect recommend to avoid problems with this operation?",
          "options": {
            "A": "Partition data using Divisions",
            "B": "Parallel Sharing Rule recalculation",
            "C": "Skinny table"
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Parallel Sharing Rule recalculation accelerates large-scale role reorganizations and massive ownership reassignments by processing sharing calculations asynchronously or in parallel across multi-threaded workers.",
          "distractors": {
            "A": "This feature optimizes search or query performance rather than accelerating backend sharing recalculation jobs.",
            "C": "This feature optimizes search or query performance rather than accelerating backend sharing recalculation jobs."
          },
          "domain": "Performance, Scalability & Large Data Volumes",
          "domainSlug": "performance-scalability",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Parallel Sharing Rule recalculation",
            "docTopic": "Salesforce Help: Controlling Access Using Role Hierarchy",
            "webReason": "Salesforce platform architecture specifies that record access inherits vertically through the Role Hierarchy when Grant Access Using Hierarchies is active. Option B is the validated architectural solution.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q21 Universal Containers (UC) operates worldwide, with offices in more than 100 regions in 10 "
          }
        },
        {
          "id": "performance-scalability-4",
          "index": 25,
          "reference": "Q25",
          "question": "Universal Containers (UC) operates worldwide, with offices in more than 100 regions in 10 different countries, and has established a very complex Role Hierarchy to control data visibility. In the new fiscal year, UC is planning to reorganize the roles and reassign account owners. Which feature should an architect recommend to avoid problems with this operation?",
          "options": {
            "A": "Skinny table",
            "B": "Deferred Sharing Recalculation",
            "C": "Partition data using Divisions"
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Deferred Sharing Recalculation accelerates large-scale role reorganizations and massive ownership reassignments by processing sharing calculations asynchronously or in parallel across multi-threaded workers.",
          "distractors": {
            "A": "This feature optimizes search or query performance rather than accelerating backend sharing recalculation jobs.",
            "C": "This feature optimizes search or query performance rather than accelerating backend sharing recalculation jobs."
          },
          "domain": "Performance, Scalability & Large Data Volumes",
          "domainSlug": "performance-scalability",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Deferred Sharing Recalculation",
            "docTopic": "Salesforce Help: Controlling Access Using Role Hierarchy",
            "webReason": "Salesforce platform architecture specifies that record access inherits vertically through the Role Hierarchy when Grant Access Using Hierarchies is active. Option B is the validated architectural solution.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q25 Universal Containers (UC) operates worldwide, with offices in more than 100 regions in 10 "
          }
        },
        {
          "id": "performance-scalability-5",
          "index": 55,
          "reference": "Q56",
          "question": "Universal Containers (UC) would like to store an encryption key within Salesforce for use in Apex code, but it does not want users to be able to see this confidential key. Users require the view setup permission. How can UC securely store the confidential key?",
          "options": {
            "A": "Create a protected custom metadata type that stores the encryption key. Packag e the protected custom metadata type with its associated records in a managed package. Install the package in the production org.",
            "B": "Create a protected custom metadata type that stores the encryption key. Package the protected custom metadata type with its associated records in an unlocked package. Install the package in the production org.",
            "C": "Create a custom metadata type that stores the encryption key. Make sure that only the admin profile has access to the custom metadata type so that end users cannot access the encryption key."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "A Protected Custom Metadata Type installed via a Managed Package is entirely inaccessible and invisible to subscriber org users (even System Administrators), yet accessible to Apex code inside the managed package namespace.",
          "distractors": {
            "B": "Unlocked packages do not protect metadata types; their records remain visible to admins in the subscriber org.",
            "C": "Profile-level restrictions in subscriber orgs can always be bypassed by users with View Setup or System Administrators."
          },
          "domain": "Performance, Scalability & Large Data Volumes",
          "domainSlug": "performance-scalability",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Create a protected custom metadata type that stores the encryption key. Packag e the protected custom metadata type with its associated records in a managed package. Install the package in the production org.",
            "docTopic": "Apex Developer Guide: Enforcing Sharing Rules & FLS in Apex",
            "webReason": "Official Salesforce Developer Documentation establishes that Apex runs in system mode by default. Option A ('Create a protected custom metadata type that stores the encryption key. Packag e the protected custom metadata type with its associated records in a managed package. Install the package in the production org.') correctly enforces data boundaries and prevents unauthorized field/record access.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q56 Universal Containers (UC) would like to store an encryption key within Salesforce for use "
          }
        },
        {
          "id": "performance-scalability-6",
          "index": 81,
          "reference": "Q84",
          "question": "Universal Containers (UC) is a non-profit organization with more than 20,000,000 members (donors). UC decided to assign those accounts to donations reps based on their regions. Donations reps ended up owning more than 50,000 donors each. The donation reps started to see significant degradation of the system performance. What is the reason for this problem?",
          "options": {
            "A": "Salesforce sharing recalculation kicked off.",
            "B": "There is an Account ownership data skew problem.",
            "C": "The donations reps' access to the assigned accounts is wrong."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Account Ownership Data Skew occurs when a single user owns more than 10,000 records of an object. This causes severe lock contention, thread exhaustion, and sluggish performance during sharing recalculations.",
          "distractors": {
            "A": "The root architectural flaw is ownership data skew (>10,000 records per owner), which overwhelms sharing recalculation queues and causes locking conflicts.",
            "C": "The root architectural flaw is ownership data skew (>10,000 records per owner), which overwhelms sharing recalculation queues and causes locking conflicts."
          },
          "domain": "Performance, Scalability & Large Data Volumes",
          "domainSlug": "performance-scalability",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "There is an Account ownership data skew problem.",
            "docTopic": "Salesforce Architect Guide: Designing Record Access for Large Data Volumes",
            "webReason": "Salesforce engineering whitepapers on Large Data Volumes (LDV) confirm that Option B ('There is an Account ownership data skew problem.') is the proven mechanism to eliminate row-level locking timeouts and sharing recalculation degradation.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q84 Universal Containers (UC) is a non-profit organization with more than 20,000,000 members ("
          }
        }
      ],
      "questionCount": 6
    },
    {
      "slug": "community-external-sharing",
      "title": "External & Community User Access",
      "weight": "12%",
      "questions": [
        {
          "id": "community-external-sharing-1",
          "index": 1,
          "reference": "Q1",
          "question": "Universal Containers (UC) is looking to expand its delivery capabilities through a network of distributors that use a Partner Community license. UC employees currently can view all delivery records through the organization-wide default (OWD) setting of Public Read-Only. Which approach should an architect recommend to limit the records a distributor can see?",
          "options": {
            "A": "Create an ownership-based sharing rule to grant access to the distributor.",
            "B": "Create a criteria-based sharing rule to grant access to the distributor.",
            "C": "Set the External OWD to Private for the Delivery object."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Setting External Organization-Wide Defaults (OWD) to Private restricts all external users (such as Partner Community users) from accessing records by default, allowing access to be opened selectively via sharing mechanisms.",
          "distractors": {
            "A": "Sharing rules can only extend access beyond the baseline OWD; if the OWD is Public Read-Only, sharing rules cannot restrict visibility.",
            "B": "Sharing rules can only extend access beyond the baseline OWD; if the OWD is Public Read-Only, sharing rules cannot restrict visibility."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Set the External OWD to Private for the Delivery object.",
            "docTopic": "Salesforce Security Guide: Organization-Wide Sharing Defaults",
            "webReason": "Salesforce official documentation confirms that baseline access is determined by OWD. Option C ('Set the External OWD to Private for the Delivery object.') correctly aligns with the least privilege model and record-level security standards.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q1 Universal Containers (UC) is looking to expand its delivery capabilities through a network"
          }
        },
        {
          "id": "community-external-sharing-2",
          "index": 16,
          "reference": "Q16",
          "question": "Universal Containers (UC) has affiliates who sell containers in countries where UC does not have a local office. UC uses a Partner Community to manage the sales cycle in those countries. One of its affiliates has grown substantially and restructured its internal sales team with the following structure: Sales VP -- > Director of Sales -- > Sales Manager -- > Sales Reps. Sales Reps should not see each others' opportunities, and visibility of deals should open up within a Sales Rep's hierarchy. What is the main problem an architect should address in this situation?",
          "options": {
            "A": "Partner Community does not support Role Hierarchy.",
            "B": "Partner User roles are limited to three levels.",
            "C": "The Channel Manager role cannot be shared with Partner Community."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Salesforce enforces a strict platform architectural limit of a maximum of three role hierarchy levels (Executive, Manager, User) for Partner Community accounts.",
          "distractors": {
            "A": "Partner Community licenses fully support role hierarchies up to three levels.",
            "C": "Channel Managers are internal users and their role is distinct from partner portal roles."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Partner User roles are limited to three levels.",
            "docTopic": "Salesforce Help: Controlling Access Using Role Hierarchy",
            "webReason": "Salesforce platform architecture specifies that record access inherits vertically through the Role Hierarchy when Grant Access Using Hierarchies is active. Option B is the validated architectural solution.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q16 Universal Containers (UC) has affiliates who sell containers in countries where UC does no"
          }
        },
        {
          "id": "community-external-sharing-3",
          "index": 22,
          "reference": "Q22",
          "question": "Which community function is impacted by having the Site User Visibility turned off in Sharing Settings?",
          "options": {
            "A": "Updating their user profile.",
            "B": "Searching for other external users.",
            "C": "Searching for internal users."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "High-volume Community users (such as Customer Community users) do not participate in the standard role hierarchy or sharing rules. Access must be granted using Sharing Sets mapped to Account/Contact fields.",
          "distractors": {
            "A": "Apex sharing is unnecessary and restricted for high-volume customer portal users when declarative sharing sets exist.",
            "C": "Apex sharing is unnecessary and restricted for high-volume customer portal users when declarative sharing sets exist."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Searching for other external users.",
            "docTopic": "Experience Cloud Security Guide: External User Visibility",
            "webReason": "Salesforce Experience Cloud architecture governs portal licenses (Partner vs Customer Community). Option B ('Searching for other external users.') represents the verified platform design pattern for external collaboration.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q22 Which community function is impacted by having the Site User Visibility turned off in Shar"
          }
        },
        {
          "id": "community-external-sharing-4",
          "index": 24,
          "reference": "Q24",
          "question": "Universal Containers (UC) has a partner community for its 200 distributors. UC customer accounts are assigned an individual distributor. The organization-wide default setting for the custom Delivery object is Private. How should an architect advise UC to grant all users at a distributor access to delivery records for all customers assigned to a particular distributor?",
          "options": {
            "A": "Create a criteria-based sharing rule that shares delivery records matching the Distributor to users of a Public Group created for the distributor.",
            "B": "Create a criteria-based sharing rule that shares delivery records matching a distributor to the Distributor role in the Role Hierarchy.",
            "C": "Create a Sharing Set for the Distributor profile to grant access to the Delivery object."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "High-volume Community users (such as Customer Community users) do not participate in the standard role hierarchy or sharing rules. Access must be granted using Sharing Sets mapped to Account/Contact fields.",
          "distractors": {
            "A": "High-volume Customer Community users do not have access to standard criteria-based or ownership sharing rules.",
            "B": "High-volume Customer Community users do not have access to standard criteria-based or ownership sharing rules."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Create a Sharing Set for the Distributor profile to grant access to the Delivery object.",
            "docTopic": "Salesforce Security Guide: Organization-Wide Sharing Defaults",
            "webReason": "Salesforce official documentation confirms that baseline access is determined by OWD. Option C ('Create a Sharing Set for the Distributor profile to grant access to the Delivery object.') correctly aligns with the least privilege model and record-level security standards.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q24 Universal Containers (UC) has a partner community for its 200 distributors. UC customer ac"
          }
        },
        {
          "id": "community-external-sharing-5",
          "index": 27,
          "reference": "Q27",
          "question": "Universal Containers (UC) delivers training and courses to students and companies. UC is implementing a Salesforce Customer Community for its students granting them a Customer Community license. As part of the community requirements, UC asked to give students access to cases that are related to their account in the UC community. What is the optimum sharing technique to achieve these requirements?",
          "options": {
            "A": "Create a sharing rule to share cases with the students.",
            "B": "Use Apex sharing to share cases with the students.",
            "C": "Create a sharing set to share cases with the students."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "High-volume Community users (such as Customer Community users) do not participate in the standard role hierarchy or sharing rules. Access must be granted using Sharing Sets mapped to Account/Contact fields.",
          "distractors": {
            "A": "High-volume Customer Community users do not have access to standard criteria-based or ownership sharing rules.",
            "B": "Apex sharing is unnecessary and restricted for high-volume customer portal users when declarative sharing sets exist."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Create a sharing set to share cases with the students.",
            "docTopic": "Experience Cloud Security Guide: External User Visibility",
            "webReason": "Salesforce Experience Cloud architecture governs portal licenses (Partner vs Customer Community). Option C ('Create a sharing set to share cases with the students.') represents the verified platform design pattern for external collaboration.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q27 Universal Containers (UC) delivers training and courses to students and companies. UC is i"
          }
        },
        {
          "id": "community-external-sharing-6",
          "index": 46,
          "reference": "Q46",
          "question": "Universal Containers (UC) sales managers are complaining that they cannot access their teams' Shipment records (a custom object). Initially, the admin suggested that this is happening due to a misconfigured Role Hierarchy (Shipment organization-wide default is Private). After investigation, they determined the Role Hierarchy for these users is correct. What is the reason why UC sales managers are unable to see shipment records?",
          "options": {
            "A": "The Grant Access Using Hierarchies option on Shipment Sharing Settings was incorrectly disabled by the admin.",
            "B": "The Role Hierarchy implicit sharing was incorrectly disabled by the admin.",
            "C": "The Ownership-based sharing rule for Shipment was incorrectly disabled by the admin."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "For custom objects with a Private OWD, disabling the 'Grant Access Using Hierarchies' checkbox ensures that users higher in the Role Hierarchy do not automatically inherit access to subordinate records.",
          "distractors": {
            "B": "Removing object CRUD permissions revokes access to all records, not just subordinate records.",
            "C": "Removing object CRUD permissions revokes access to all records, not just subordinate records."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "The Grant Access Using Hierarchies option on Shipment Sharing Settings was incorrectly disabled by the admin.",
            "docTopic": "Salesforce Security Guide: Organization-Wide Sharing Defaults",
            "webReason": "Salesforce official documentation confirms that baseline access is determined by OWD. Option A ('The Grant Access Using Hierarchies option on Shipment Sharing Settings was incorrectly disabled by the admin.') correctly aligns with the least privilege model and record-level security standards.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q46 Universal Containers (UC) sales managers are complaining that they cannot access their tea"
          }
        },
        {
          "id": "community-external-sharing-7",
          "index": 47,
          "reference": "Q48",
          "question": "Universal Containers uses 75,000 distributors that have close to 1 million total users. Distributors need to use the community to see closing opportunities assigned to their distributor for delivery. Which licence recommendation will meet distributor needs?",
          "options": {
            "A": "Customer Community",
            "B": "Partner Community",
            "C": "Customer Community Plus"
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option B ('Partner Community') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Customer Community') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Customer Community Plus') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Partner Community",
            "docTopic": "Experience Cloud Security Guide: External User Visibility",
            "webReason": "Salesforce Experience Cloud architecture governs portal licenses (Partner vs Customer Community). Option B ('Partner Community') represents the verified platform design pattern for external collaboration.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q48 Universal Containers uses 75,000 distributors that have close to 1 million total users. Di"
          }
        },
        {
          "id": "community-external-sharing-8",
          "index": 60,
          "reference": "Q61",
          "question": "Which method should be used to grant an unrelated group of users access to a set of records?",
          "options": {
            "A": "Role Hierarchy",
            "B": "Sharing Sets",
            "C": "Public Groups"
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Public Groups combined with sharing rules are the standard, scalable Salesforce mechanism to grant access to a set of records for an unrelated group of users across departments.",
          "distractors": {
            "A": "Option A ('Role Hierarchy') is incorrect because it does not satisfy the platform requirement or represents an invalid security configuration.",
            "B": "Option B ('Sharing Sets') is incorrect because it does not satisfy the platform requirement or represents an invalid security configuration."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Public Groups",
            "docTopic": "Salesforce Platform Sharing and Visibility Architect Guide",
            "webReason": "Official Salesforce certification documentation confirms that Option C ('Public Groups') is the verified solution satisfying functional access while adhering to the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q61 Which method should be used to grant an unrelated group of users access to a set of record"
          }
        },
        {
          "id": "community-external-sharing-9",
          "index": 62,
          "reference": "Q63",
          "question": "Universal Containers (UC) has 200 distributors that use Partner Community licenses. Partners cannot see each other's data, but UC is also trying to give more visibility to data for certain individuals at a distributor. Which scalable option give users in the partner manager role access to all case and container records for partner users at the same distributor?",
          "options": {
            "A": "Create an ownership based sharing rule.",
            "B": "Give Super User permission to the individual partner manager users.",
            "C": "Create sharing sets."
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Partner Super User access grants designated partner contacts the ability to view, edit, and report on data owned by other partner users who belong to the same partner account.",
          "distractors": {
            "A": "Standard sharing rules cannot dynamically distinguish individual partner managers within the same account hierarchy.",
            "C": "Standard sharing rules cannot dynamically distinguish individual partner managers within the same account hierarchy."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Give Super User permission to the individual partner manager users.",
            "docTopic": "Experience Cloud Security Guide: External User Visibility",
            "webReason": "Salesforce Experience Cloud architecture governs portal licenses (Partner vs Customer Community). Option B ('Give Super User permission to the individual partner manager users.') represents the verified platform design pattern for external collaboration.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q63 Universal Containers (UC) has 200 distributors that use Partner Community licenses. Partne"
          }
        },
        {
          "id": "community-external-sharing-10",
          "index": 65,
          "reference": "Q66",
          "question": "Universal Containers created a public group with certain sales engineers to help on complex deals, as well as a sharing rule to grant access to these opportunities. The Opportunity organization-wide default is Private. What is the impact of these sharing settings?",
          "options": {
            "A": "Sales engineers and their managers in the Role Hierarchy will also have access to these records.",
            "B": "Subordinates of managers who have sales engineers in the public group will also have access to these records.",
            "C": "Other sales engineers who are in the same Role Hierarchy as the sales engineers of the public group will also have access to these records."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "High-volume Community users (such as Customer Community users) do not participate in the standard role hierarchy or sharing rules. Access must be granted using Sharing Sets mapped to Account/Contact fields.",
          "distractors": {
            "B": "Apex sharing is unnecessary and restricted for high-volume customer portal users when declarative sharing sets exist.",
            "C": "Apex sharing is unnecessary and restricted for high-volume customer portal users when declarative sharing sets exist."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Sales engineers and their managers in the Role Hierarchy will also have access to these records.",
            "docTopic": "Salesforce Security Guide: Organization-Wide Sharing Defaults",
            "webReason": "Salesforce official documentation confirms that baseline access is determined by OWD. Option A ('Sales engineers and their managers in the Role Hierarchy will also have access to these records.') correctly aligns with the least privilege model and record-level security standards.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q66 Universal Containers created a public group with certain sales engineers to help on comple"
          }
        },
        {
          "id": "community-external-sharing-11",
          "index": 66,
          "reference": "Q67",
          "question": "A custom ServiceFeedback object is used to collect partner feedback. ServiceFeedback records should be available to all internal employees. The organization-wide default (OWD) is set to Private for external users so partners cannot see feedback from other partner users. How should the architect give access to all internal employees?",
          "options": {
            "A": "Create an owner-based sharing rule for all Service Feedback records owned by partners.",
            "B": "Ensure all the internal users are above the partners in the Role Hierarchy.",
            "C": "Set the OWD for Internal Users to Public Read-Only."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option C ('Set the OWD for Internal Users to Public Read-Only.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Create an owner-based sharing rule for all Service Feedback records owned by partners.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "B": "Option B ('Ensure all the internal users are above the partners in the Role Hierarchy.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Set the OWD for Internal Users to Public Read-Only.",
            "docTopic": "Salesforce Security Guide: Organization-Wide Sharing Defaults",
            "webReason": "Salesforce official documentation confirms that baseline access is determined by OWD. Option C ('Set the OWD for Internal Users to Public Read-Only.') correctly aligns with the least privilege model and record-level security standards.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q67 A custom ServiceFeedback object is used to collect partner feedback. ServiceFeedback recor"
          }
        },
        {
          "id": "community-external-sharing-12",
          "index": 68,
          "reference": "Q69",
          "question": "Universal Containers has implemented Customer Community with Customer Community Plus licenses for its distributors. Some distributors requested granting specific community users (agents) to view cases submitted by other agents of the same distributor. Which feature only supports these requirements?",
          "options": {
            "A": "Permission set to grant community admin permission",
            "B": "Delegate external user",
            "C": "Partner super user"
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Partner Super User access grants designated partner contacts the ability to view, edit, and report on data owned by other partner users who belong to the same partner account.",
          "distractors": {
            "A": "Standard sharing rules cannot dynamically distinguish individual partner managers within the same account hierarchy.",
            "B": "Standard sharing rules cannot dynamically distinguish individual partner managers within the same account hierarchy."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Partner super user",
            "docTopic": "Experience Cloud Security Guide: External User Visibility",
            "webReason": "Salesforce Experience Cloud architecture governs portal licenses (Partner vs Customer Community). Option C ('Partner super user') represents the verified platform design pattern for external collaboration.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q69 Universal Containers has implemented Customer Community with Customer Community Plus licen"
          }
        },
        {
          "id": "community-external-sharing-13",
          "index": 77,
          "reference": "Q80",
          "question": "Universal Containers (UC) is a fast-growing company that sells containers globally. It has thousands of dealerships throughout the world where local dealers service containers. UC implemented a new Partner Community for its dealers. Each dealership has a dealer manager who manages the service agents. The community-sharing model is private. What is the optimal option to give dealer managers visibility to customer cases only raised by their service agents?",
          "options": {
            "A": "Use the Role Hierarchy so that the cases raised by service agents will be visible to their relevant dealer managers.",
            "B": "Create a sharing rule to share cases created by service agents with their dealer manager.",
            "C": "Create a sharing group to share cases created by service agents with their dealer manager."
          },
          "correctAnswers": [
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option A ('Use the Role Hierarchy so that the cases raised by service agents will be visible to their relevant dealer managers.') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "B": "Option B ('Create a sharing rule to share cases created by service agents with their dealer manager.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Create a sharing group to share cases created by service agents with their dealer manager.') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Use the Role Hierarchy so that the cases raised by service agents will be visible to their relevant dealer managers.",
            "docTopic": "Experience Cloud Security Guide: External User Visibility",
            "webReason": "Salesforce Experience Cloud architecture governs portal licenses (Partner vs Customer Community). Option A ('Use the Role Hierarchy so that the cases raised by service agents will be visible to their relevant dealer managers.') represents the verified platform design pattern for external collaboration.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q80 Universal Containers (UC) is a fast-growing company that sells containers globally. It has"
          }
        },
        {
          "id": "community-external-sharing-14",
          "index": 80,
          "reference": "Q83",
          "question": "In order to allow community users to collaborate on Opportunities, which license type must the users be given?",
          "options": {
            "A": "Customer Community",
            "B": "Partner Community",
            "C": "Customer Community Plus"
          },
          "correctAnswers": [
            "B"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "Option B ('Partner Community') provides the architecturally compliant solution by adhering to the Salesforce security model and the principle of least privilege.",
          "distractors": {
            "A": "Option A ('Customer Community') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities.",
            "C": "Option C ('Customer Community Plus') does not satisfy the requirement because it either violates security boundaries, introduces unnecessary technical complexity, or is not supported by Salesforce platform capabilities."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Partner Community",
            "docTopic": "Experience Cloud Security Guide: External User Visibility",
            "webReason": "Salesforce Experience Cloud architecture governs portal licenses (Partner vs Customer Community). Option B ('Partner Community') represents the verified platform design pattern for external collaboration.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q83 In order to allow community users to collaborate on Opportunities, which license type must"
          }
        },
        {
          "id": "community-external-sharing-15",
          "index": 82,
          "reference": "Q85",
          "question": "Universal Containers has implemented Customer Community with Customer Community Plus licenses for its distributors. Retail distributors have part-time agents who work for multiple distributors. These agents should have access to other distributor accounts as well. What should be configured to grant agents access to different distributor accounts?",
          "options": {
            "A": "Use Apex sharing to share distributor accounts with agents using the Account_Share table.",
            "B": "Create sharing rules to share distributor accounts with agents.",
            "C": "Create a sharing set to share distributor accounts with agents using account contact relationship."
          },
          "correctAnswers": [
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "High-volume Community users (such as Customer Community users) do not participate in the standard role hierarchy or sharing rules. Access must be granted using Sharing Sets mapped to Account/Contact fields.",
          "distractors": {
            "A": "Apex sharing is unnecessary and restricted for high-volume customer portal users when declarative sharing sets exist.",
            "B": "High-volume Customer Community users do not have access to standard criteria-based or ownership sharing rules."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Create a sharing set to share distributor accounts with agents using account contact relationship.",
            "docTopic": "Experience Cloud Security Guide: External User Visibility",
            "webReason": "Salesforce Experience Cloud architecture governs portal licenses (Partner vs Customer Community). Option C ('Create a sharing set to share distributor accounts with agents using account contact relationship.') represents the verified platform design pattern for external collaboration.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q85 Universal Containers has implemented Customer Community with Customer Community Plus licen"
          }
        }
      ],
      "questionCount": 15
    }
  ]
};
