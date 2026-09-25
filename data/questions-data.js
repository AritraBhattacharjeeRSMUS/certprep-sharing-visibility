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
          "whyCorrect": "In Salesforce, standard action overrides (Buttons, Links, and Actions) for Lightning Experience apply across both desktop and mobile platforms when using Lightning components; there is no separate setting to override an action with a Lightning Component exclusively on mobile while leaving Lightning Experience default. Therefore, the architecturally recommended pattern is to override the standard 'Edit' action at the Lightning Experience level with a Lightning Component, programmatically detect the client form factor (e.g., using @salesforce/client/formFactor or .formFactor), present the custom mobile camera/image capture UI on mobile devices ('Small'), and redirect desktop users ('Large') to the standard record edit view. This satisfies the requirement to capture images on mobile without changing the trained desktop experience for service reps.",
          "distractors": {
            "A": "Option A is technically impossible in Salesforce setup. Standard action overrides for Lightning Experience do not permit assigning a Lightning Component override solely to mobile without overriding the desktop Lightning Experience action.",
            "B": "Option B introduces a redundant custom button ('Edit in Mobile') instead of leveraging standard action overrides, causing a fragmented user experience, violating the design requirement to minimize customization, and failing when mobile users tap the standard Edit button."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Use Lightning Component as an override for \"Edit\" action on lightning experience allowing image capture feature. Detect the form factor of the device and redirect the user to the default not-overridden view.",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "In Salesforce, standard action overrides (Buttons, Links, and Actions) for Lightning Experience apply across both desktop and mobile platforms when using Lightning components; there is no separate setting to override an action with a Lightning Component exclusively on mobile while leaving Lightning Experience default. Therefore, the architecturally recommended pattern is to override the standard 'Edit' action at the Lightning Experience level with a Lightning Component, programmatically detect the client form factor (e.g., using @salesforce/client/formFactor or .formFactor), present the custom mobile camera/image capture UI on mobile devices ('Small'), and redirect desktop users ('Large') to the standard record edit view. This satisfies the requirement to capture images on mobile without changing the trained desktop experience for service reps.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q5 A consulting company uses the Salesforce mobile app for its "
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
          "whyCorrect": "In Salesforce, access to products on Opportunities is governed by Price Book sharing. When the Price Book Organization-Wide Default (OWD) is set to 'View Only', users can view prices but cannot add products from that price book to opportunities. To allow only trained branch staff to add high-risk products, the High Risk price book must be shared with 'Use' access specifically to those trained staff (via user, role, or group sharing on the Price Book record). Option B correctly captures this architecture. Furthermore, Price Books do NOT support Sharing Rules, making Option C completely invalid.",
          "distractors": {
            "A": "Option A specifies 'via manual sharing' specifically, whereas standard Price Book sharing on the detail page shares access directly with Roles, Public Groups, or Users with 'Use' permissions. In Salesforce certification question design, Option B is the standardized canonical answer describing the Price Book OWD and sharing configuration.",
            "C": "Option C is invalid because Salesforce does not support Criteria-Based or Owner-Based Sharing Rules on the Price Book object."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Set the price book organisation-wide default (OWD) to View Only and share the price book (High Risk) with the trained staff.",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "In Salesforce, access to products on Opportunities is governed by Price Book sharing. When the Price Book Organization-Wide Default (OWD) is set to 'View Only', users can view prices but cannot add products from that price book to opportunities. To allow only trained branch staff to add high-risk products, the High Risk price book must be shared with 'Use' access specifically to those trained staff (via user, role, or group sharing on the Price Book record). Option B correctly captures this architecture. Furthermore, Price Books do NOT support Sharing Rules, making Option C completely invalid.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q14 Universal Containers implemented Sales Cloud and requested t"
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
          "whyCorrect": "In Salesforce, list view sharing visibility can be configured as: (1) Only I can see this list view, (2) All users can see this list view, or (3) Share list view with groups of users (Public Groups, Roles, and Roles and Subordinates). Salesforce does NOT support sharing list views directly with individual users. Sharing the list views with appropriate Public Groups (Option C) ensures that users in specific geographies only see the list views relevant to them while hiding the rest, preventing list view clutter. declarative-sharing-6 incorrectly marked Option A in legacy dump files, which is technically impossible on the platform.",
          "distractors": {
            "A": "Option A is impossible in Salesforce; the list view sharing dialog does not allow sharing with individual users, only Public Groups, Roles, and Roles & Subordinates.",
            "B": "Option B is nonsensical; 'quota' is a forecasting metric/object, not a sharing recipient or user grouping mechanism."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Share the list views with the appropriate public group.",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "In Salesforce, list view sharing visibility can be configured as: (1) Only I can see this list view, (2) All users can see this list view, or (3) Share list view with groups of users (Public Groups, Roles, and Roles and Subordinates). Salesforce does NOT support sharing list views directly with individual users. Sharing the list views with appropriate Public Groups (Option C) ensures that users in specific geographies only see the list views relevant to them while hiding the rest, preventing list view clutter. declarative-sharing-6 incorrectly marked Option A in legacy dump files, which is technically impossible on the platform.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q15 Sales operations at Universal Containers (UC) wants to creat"
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
          "whyCorrect": "Setting the Organization-Wide Default (OWD) on the Lead object to Public Read-Only directly addresses both business requirements: (1) It allows all sales reps across the organization to search and view existing leads before creating new ones, thereby reducing redundant lead entries; (2) Because OWD is Read-Only rather than Read/Write or Public Read/Write/Transfer, non-owners cannot edit or reassign/transfer the lead. Only the lead owner (and those above the owner in the Role Hierarchy) retain Edit and Transfer capabilities. If Private OWD were used, reps could not see leads owned by colleagues and would inadvertently create duplicate leads.",
          "distractors": {
            "A": "Option A (Private OWD) hides leads from non-owners, meaning sales reps cannot search or view existing leads worked by other reps, which directly causes reps to enter duplicate/redundant leads into the system.",
            "C": "Option C is invalid because 'Public Read-Only/Transfer' does not exist as an OWD option in Salesforce; the standard Lead OWD options are Private, Public Read Only, Public Read/Write, and Public Read/Write/Transfer."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Implement a Public Read-Only OWD on Lead.",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "Setting the Organization-Wide Default (OWD) on the Lead object to Public Read-Only directly addresses both business requirements: (1) It allows all sales reps across the organization to search and view existing leads before creating new ones, thereby reducing redundant lead entries; (2) Because OWD is Read-Only rather than Read/Write or Public Read/Write/Transfer, non-owners cannot edit or reassign/transfer the lead. Only the lead owner (and those above the owner in the Role Hierarchy) retain Edit and Transfer capabilities. If Private OWD were used, reps could not see leads owned by colleagues and would inadvertently create duplicate leads.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q29 Universal Containers (UC) wants to reduce the amount of redu"
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
          "whyCorrect": "In Salesforce Files and Chatter architecture, when a file is posted to a record's Chatter feed, a ContentDocumentLink record is automatically created linking the file to the record with Visibility = 'AllUsers' and ShareType = 'V' (Viewer). Consequently, access to the file is inherited directly from access to the parent record: any user who has permission to view the record can view the attached file, along with the user who uploaded/posted the file.",
          "distractors": {
            "A": "Option A is incorrect because record-attached file visibility does not depend on having a shared Chatter post link; access is automatically granted to anyone who can access the record itself.",
            "C": "Option C is incorrect because posting a file to a record's feed shares the file with users who have access to that record, not exclusively the uploading user."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "The user who posted the file and users with access to the record",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "In Salesforce Files and Chatter architecture, when a file is posted to a record's Chatter feed, a ContentDocumentLink record is automatically created linking the file to the record with Visibility = 'AllUsers' and ShareType = 'V' (Viewer). Consequently, access to the file is inherited directly from access to the parent record: any user who has permission to view the record can view the attached file, along with the user who uploaded/posted the file.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q35 A user posts a file to the Chatter feed for a record of an o"
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
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "In Salesforce, list view sharing visibility can be configured as: (1) Only I can see this list view, (2) All users can see this list view, or (3) Share list view with groups of users (Public Groups, Roles, and Roles and Subordinates). Salesforce does NOT support sharing list views directly with individual users. Sharing the list views with appropriate Public Groups (Option C) ensures that users in specific geographies only see the list views relevant to them while hiding the rest, preventing list view clutter. declarative-sharing-6 incorrectly marked Option A in legacy dump files, which is technically impossible on the platform.",
          "distractors": {
            "A": "Option A is impossible in Salesforce; the list view sharing dialog does not allow sharing with individual users, only Public Groups, Roles, and Roles & Subordinates.",
            "B": "Option B is nonsensical; 'quota' is a forecasting metric/object, not a sharing recipient or user grouping mechanism."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Share the list views with the appropriate individual users.",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "In Salesforce, list view sharing visibility can be configured as: (1) Only I can see this list view, (2) All users can see this list view, or (3) Share list view with groups of users (Public Groups, Roles, and Roles and Subordinates). Salesforce does NOT support sharing list views directly with individual users. Sharing the list views with appropriate Public Groups (Option C) ensures that users in specific geographies only see the list views relevant to them while hiding the rest, preventing list view clutter. declarative-sharing-6 incorrectly marked Option A in legacy dump files, which is technically impossible on the platform.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q36 Sales operations at Universal Containers (UC) wants to creat"
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
          "whyCorrect": "In Salesforce, Organization-Wide Defaults (OWD) establish the baseline level of access, and sharing rules can only open up access, never restrict it. Because Service users must NOT view account records marked with a RecordType of 'Prospect', the Account OWD must be set to Private. If the OWD were Public Read-Only or Public Read/Write, Service users would automatically have visibility to all accounts including 'Prospect' records. Under a Private OWD, sharing rules can grant Read access to Service users for non-prospect accounts, and sharing rules/Role Hierarchy grant the required access to Sales users and Sales managers.",
          "distractors": {
            "B": "Option B (Public Read Write) grants all internal users full edit access to all accounts, completely violating the requirement that Sales users only edit their own records and Service users do not see Prospect accounts.",
            "C": "Option C (Public Read/Transfer) does not exist on the Account object (it is only available on Leads and Cases), and any public default would expose Prospect accounts to Service users."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Private",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "In Salesforce, Organization-Wide Defaults (OWD) establish the baseline level of access, and sharing rules can only open up access, never restrict it. Because Service users must NOT view account records marked with a RecordType of 'Prospect', the Account OWD must be set to Private. If the OWD were Public Read-Only or Public Read/Write, Service users would automatically have visibility to all accounts including 'Prospect' records. Under a Private OWD, sharing rules can grant Read access to Service users for non-prospect accounts, and sharing rules/Role Hierarchy grant the required access to Sales users and Sales managers.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q39 Universal Containers would like to control access to records"
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
          "whyCorrect": "In Salesforce, list view sharing visibility can be configured as: (1) Only I can see this list view, (2) All users can see this list view, or (3) Share list view with groups of users (Public Groups, Roles, and Roles and Subordinates). Salesforce does NOT support sharing list views directly with individual users. Sharing the list views with appropriate Public Groups (Option C) ensures that users in specific geographies only see the list views relevant to them while hiding the rest, preventing list view clutter. declarative-sharing-6 incorrectly marked Option A in legacy dump files, which is technically impossible on the platform.",
          "distractors": {
            "A": "Option A is impossible in Salesforce; the list view sharing dialog does not allow sharing with individual users, only Public Groups, Roles, and Roles & Subordinates.",
            "B": "Option B is nonsensical; 'quota' is a forecasting metric/object, not a sharing recipient or user grouping mechanism."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Share the list views with the appropriate role and internal subordinates.",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "In Salesforce, list view sharing visibility can be configured as: (1) Only I can see this list view, (2) All users can see this list view, or (3) Share list view with groups of users (Public Groups, Roles, and Roles and Subordinates). Salesforce does NOT support sharing list views directly with individual users. Sharing the list views with appropriate Public Groups (Option C) ensures that users in specific geographies only see the list views relevant to them while hiding the rest, preventing list view clutter. declarative-sharing-6 incorrectly marked Option A in legacy dump files, which is technically impossible on the platform.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q40 Sales operations at Universal Containers (UC) wants to creat"
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
          "whyCorrect": "Opportunity Teams provide an optimal, role-based collaboration framework that persists even when account or opportunity ownership changes. In contrast, manual shares created on records are automatically deleted when record ownership is transferred. Furthermore, Opportunity Teams allow specifying exact team roles (Product Specialist, Solution Engineer) and appropriate access levels (Read-Only or Read/Write) scoped strictly to that deal.",
          "distractors": {
            "A": "Option A (Manual share on the opportunity) is fragile because manual shares are wiped out whenever record ownership is reassigned to the senior account manager.",
            "C": "Option C (Manual share on the account) unnecessarily exposes the entire account and all child records to the specialists, violating the principle of least privilege, and is also removed upon account ownership reassignment."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Opportunity Team",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "Opportunity Teams provide an optimal, role-based collaboration framework that persists even when account or opportunity ownership changes. In contrast, manual shares created on records are automatically deleted when record ownership is transferred. Furthermore, Opportunity Teams allow specifying exact team roles (Product Specialist, Solution Engineer) and appropriate access levels (Read-Only or Read/Write) scoped strictly to that deal.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q41 A junior account manager owns an account and creates a new o"
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
          "whyCorrect": "Under a Public Read-Only organization-wide default, baseline read access is provided by an implicit organization-wide share row (RowCause = 'All'). There is no individual AccountShare record created for John prior to manual sharing. When the record owner (Paul) manually grants Read/Write access to John, the Salesforce sharing engine inserts a NEW AccountShare record with UserOrGroupId = John's ID, RowCause = 'Manual', and AccountAccessLevel = 'Edit' (Read/Write).",
          "distractors": {
            "A": "Option A is incorrect because no pre-existing AccountShare record existed for John to update; his baseline read access stemmed from the OWD, so an insert operation occurs.",
            "B": "Option B is incorrect because RowCause 'Owner' and 'Full' access are reserved solely for the record owner (Paul), not for a manual share recipient."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "New AccountShare record is created. Row Cause is \"Manual\" and Access Level is \"Read/Write\".",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "Under a Public Read-Only organization-wide default, baseline read access is provided by an implicit organization-wide share row (RowCause = 'All'). There is no individual AccountShare record created for John prior to manual sharing. When the record owner (Paul) manually grants Read/Write access to John, the Salesforce sharing engine inserts a NEW AccountShare record with UserOrGroupId = John's ID, RowCause = 'Manual', and AccountAccessLevel = 'Edit' (Read/Write).",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q43 A sales rep (John) at Universal Containers requested to upda"
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
          "whyCorrect": "Because the auditors are geographically and organizationally distributed across various roles, placing them in a Public Group is the architecturally sound design. This Public Group can then be targeted by a Criteria-Based Sharing Rule on Opportunity (e.g., Amount >= threshold) to grant Read access specifically to high-value opportunities without granting unwanted access to other records.",
          "distractors": {
            "A": "Option A violates the principle of least privilege by placing auditors at the top of the Role Hierarchy, which would grant them visibility into every record of every standard and custom object across the entire enterprise.",
            "B": "Option B relies on individual sales reps setting up default opportunity teams and would share all opportunities created by those reps rather than filtering specifically for 'high-value' opportunities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Create a public group and assign the auditors to the group.",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "Because the auditors are geographically and organizationally distributed across various roles, placing them in a Public Group is the architecturally sound design. This Public Group can then be targeted by a Criteria-Based Sharing Rule on Opportunity (e.g., Amount >= threshold) to grant Read access specifically to high-value opportunities without granting unwanted access to other records.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q50 At Universal Containers, there's a team of auditors distribu"
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
          "whyCorrect": "In Salesforce, standard action overrides (Buttons, Links, and Actions) for Lightning Experience apply across both desktop and mobile platforms when using Lightning components; there is no separate setting to override an action with a Lightning Component exclusively on mobile while leaving Lightning Experience default. Therefore, the architecturally recommended pattern is to override the standard 'Edit' action at the Lightning Experience level with a Lightning Component, programmatically detect the client form factor (e.g., using @salesforce/client/formFactor or .formFactor), present the custom mobile camera/image capture UI on mobile devices ('Small'), and redirect desktop users ('Large') to the standard record edit view. This satisfies the requirement to capture images on mobile without changing the trained desktop experience for service reps.",
          "distractors": {
            "A": "Option A is technically impossible in Salesforce setup. Standard action overrides for Lightning Experience do not permit assigning a Lightning Component override solely to mobile without overriding the desktop Lightning Experience action.",
            "B": "Option B introduces a redundant custom button ('Edit in Mobile') instead of leveraging standard action overrides, causing a fragmented user experience, violating the design requirement to minimize customization, and failing when mobile users tap the standard Edit button."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Use Lightning Component as an override for \"Edit\" action on lightning experience a llowing image capture feature. Detect the form factor of the device and redirect the user to the default not-overridden view.",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "In Salesforce, standard action overrides (Buttons, Links, and Actions) for Lightning Experience apply across both desktop and mobile platforms when using Lightning components; there is no separate setting to override an action with a Lightning Component exclusively on mobile while leaving Lightning Experience default. Therefore, the architecturally recommended pattern is to override the standard 'Edit' action at the Lightning Experience level with a Lightning Component, programmatically detect the client form factor (e.g., using @salesforce/client/formFactor or .formFactor), present the custom mobile camera/image capture UI on mobile devices ('Small'), and redirect desktop users ('Large') to the standard record edit view. This satisfies the requirement to capture images on mobile without changing the trained desktop experience for service reps.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q53 A consulting company uses the Salesforce mobile app for its "
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
          "whyCorrect": "Salesforce Account Teams natively govern record-level access to the Account itself as well as its related Opportunities and Cases. When configuring an Account Team Member, an administrator or record owner can independently designate Account Access (e.g., Read Only), Case Access (e.g., Read Only), and Opportunity Access (e.g., Private / No Access). This fulfills all three requirements in a single declarative feature without needing separate Case Teams or complex sharing rules.",
          "distractors": {
            "B": "Option B introduces unnecessary complexity by requiring Case Teams and fails to configure the Opportunity access level on the Account Team member, which defaults to granting opportunity access if not explicitly configured to Private.",
            "C": "Option C introduces redundant sharing rules when Account Teams already natively control related Case access directly on the team member configuration."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Use Account teams to define access to accounts as well as opportunities and cases related to accounts.",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "Salesforce Account Teams natively govern record-level access to the Account itself as well as its related Opportunities and Cases. When configuring an Account Team Member, an administrator or record owner can independently designate Account Access (e.g., Read Only), Case Access (e.g., Read Only), and Opportunity Access (e.g., Private / No Access). This fulfills all three requirements in a single declarative feature without needing separate Case Teams or complex sharing rules.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q58 The sales managers at Universal Containers requested their t"
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
          "whyCorrect": "In Salesforce, Organization-Wide Defaults for the Price Book object have three specific options: 'No Access', 'View Only', and 'Use'. 'Use' is required for users to select price books and add products from those price books to opportunities and quotes. If set to 'View Only', sales agents could only browse products and prices but would be blocked from associating products with opportunities.",
          "distractors": {
            "A": "Option A is incorrect because 'Public Read-Only' is not a valid Organization-Wide Default setting for the Price Book object.",
            "B": "Option B ('View Only') allows sales reps to view products and prices but prohibits them from adding products to opportunities, failing the requirement."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Use",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "In Salesforce, Organization-Wide Defaults for the Price Book object have three specific options: 'No Access', 'View Only', and 'Use'. 'Use' is required for users to select price books and add products from those price books to opportunities and quotes. If set to 'View Only', sales agents could only browse products and prices but would be blocked from associating products with opportunities.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q62 Universal Containers implemented Sales Cloud and requested t"
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
          "whyCorrect": "A user on an Opportunity Team with Read/Write permissions is granted Edit access to the Opportunity record, enabling them to edit standard and custom fields, such as updating the Opportunity Stage, Amount, or Close Date. However, changing record ownership (Option B) or managing Opportunity Team members (Option C) requires 'Full Access' (Record Owner, users above the owner in the Role Hierarchy, or users with 'Modify All' / 'Modify All Data' permissions).",
          "distractors": {
            "B": "Option B requires Full Access / record ownership or 'Modify All' permissions to transfer record ownership.",
            "C": "Option C requires Full Access or record ownership to add or remove members from the Opportunity Team."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Update opportunity stage.",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "A user on an Opportunity Team with Read/Write permissions is granted Edit access to the Opportunity record, enabling them to edit standard and custom fields, such as updating the Opportunity Stage, Amount, or Close Date. However, changing record ownership (Option B) or managing Opportunity Team members (Option C) requires 'Full Access' (Record Owner, users above the owner in the Role Hierarchy, or users with 'Modify All' / 'Modify All Data' permissions).",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q65 A sales rep at Universal Containers was added to an opportun"
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
          "whyCorrect": "Under Salesforce Enhanced Folder Sharing, creating a report folder strictly requires the user permission 'Create Report Folders' (without this permission, the 'New Folder' button is unavailable). To manage and share folders with other users, roles, or public groups, the administrative permission 'Manage Reports in Public Folders' allows the user to administer and share report folders across the organization. Option A contains both necessary permissions. While some legacy dumps erroneously cited Option C, Option C lacks the essential 'Create Report Folders' permission entirely and includes 'Edit My Reports' which only governs report content editing, not folder creation.",
          "distractors": {
            "B": "Option B is incorrect because 'Report Folders' is not a valid permission name, and 'Create and Customize Reports' does not grant folder creation or folder sharing rights.",
            "C": "Option C is flawed because it omits 'Create Report Folders'; a user with only 'Manage Reports in Public Folders' and 'Edit My Reports' cannot create new report folders."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Create Report Folders and manage Reports in Public Folders",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "Under Salesforce Enhanced Folder Sharing, creating a report folder strictly requires the user permission 'Create Report Folders' (without this permission, the 'New Folder' button is unavailable). To manage and share folders with other users, roles, or public groups, the administrative permission 'Manage Reports in Public Folders' allows the user to administer and share report folders across the organization. Option A contains both necessary permissions. While some legacy dumps erroneously cited Option C, Option C lacks the essential 'Create Report Folders' permission entirely and includes 'Edit My Reports' which only governs report content editing, not folder creation.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q70 A sales coach at Universal Containers wants to create and sh"
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
          "whyCorrect": "In Salesforce sharing architecture, Built-in Parent Implicit Sharing automatically grants a user Read access to the parent Account record whenever that user is granted access to a child Opportunity, Case, or Contact. Consequently, when the finance analyst was granted access to the big deal Opportunity, Salesforce implicit sharing immediately granted her Read access to the parent Account. Then, because Contacts are linked to the Account (e.g. Contact sharing controlled by parent), she can access the contacts as well. There is no direct implicit sharing from Opportunity to Contact (ruling out C).",
          "distractors": {
            "B": "Option B is incorrect because Role Hierarchy grants access vertically from subordinates to managers, not horizontally or via child record sharing.",
            "C": "Option C is incorrect because there is no implicit sharing relationship between Opportunity and Contact in Salesforce."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Account records can be accessed due to implicit sharing from Opportunity.",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "In Salesforce sharing architecture, Built-in Parent Implicit Sharing automatically grants a user Read access to the parent Account record whenever that user is granted access to a child Opportunity, Case, or Contact. Consequently, when the finance analyst was granted access to the big deal Opportunity, Salesforce implicit sharing immediately granted her Read access to the parent Account. Then, because Contacts are linked to the Account (e.g. Contact sharing controlled by parent), she can access the contacts as well. There is no direct implicit sharing from Opportunity to Contact (ruling out C).",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q75 The finance team at Universal Containers usually does not ha"
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
          "whyCorrect": "Salesforce Content Deliveries natively provide secure web-based sharing for large files. When creating a content delivery, users can enforce security constraints including requiring a password to access the content, setting an expiration date for the delivery link, and tracking download activity. This satisfies all requirements with native, out-of-the-box declarative functionality without third-party apps or setting up community portals.",
          "distractors": {
            "A": "Option A is unnecessary and violates architectural best practices by introducing a third-party AppExchange package when Salesforce provides native Content Deliveries.",
            "C": "Option C introduces massive operational overhead and license costs by provisioning an Experience Cloud site solely to share files."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Create a content delivery; during creation, the user should select the option to require a password to access content.",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "Salesforce Content Deliveries natively provide secure web-based sharing for large files. When creating a content delivery, users can enforce security constraints including requiring a password to access the content, setting an expiration date for the delivery link, and tracking download activity. This satisfies all requirements with native, out-of-the-box declarative functionality without third-party apps or setting up community portals.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q79 Sales reps at Universal Containers sometimes create large fi"
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
          "whyCorrect": "In the Salesforce security architecture, the Role Hierarchy automatically provides vertical record access inheritance when 'Grant Access Using Hierarchies' is enabled. Since the regional operations users report directly to the operations manager in the Role Hierarchy, the operations manager automatically inherits full edit access to all records owned by their subordinate team members without requiring any sharing rules or public groups.",
          "distractors": {
            "A": "Option A creates unnecessary administrative maintenance and risks hitting sharing rule limits (especially across 500 regions) when native Role Hierarchy already solves the access requirement.",
            "C": "Option C is ineffective because merely adding users and a manager to a public group does not grant access unless paired with a sharing rule, and group-based sharing does not grant automatic managerial edit rights."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "The operations manager will get access to the scheduled courses owned by the operations users team defined in the Role Hierarchy.",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "In the Salesforce security architecture, the Role Hierarchy automatically provides vertical record access inheritance when 'Grant Access Using Hierarchies' is enabled. Since the regional operations users report directly to the operations manager in the Role Hierarchy, the operations manager automatically inherits full edit access to all records owned by their subordinate team members without requiring any sharing rules or public groups.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q81 Universal Containers (UC) delivers training in 500 different"
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
          "whyCorrect": "Because the auditors are geographically and organizationally distributed across various roles, placing them in a Public Group is the architecturally sound design. This Public Group can then be targeted by a Criteria-Based Sharing Rule on Opportunity (e.g., Amount >= threshold) to grant Read access specifically to high-value opportunities without granting unwanted access to other records.",
          "distractors": {
            "A": "Option A violates the principle of least privilege by placing auditors at the top of the Role Hierarchy, which would grant them visibility into every record of every standard and custom object across the entire enterprise.",
            "B": "Option B relies on individual sales reps setting up default opportunity teams and would share all opportunities created by those reps rather than filtering specifically for 'high-value' opportunities."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Create a criteria-based sharing rule to give access to the public group for high-value opportunities.",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "Because the auditors are geographically and organizationally distributed across various roles, placing them in a Public Group is the architecturally sound design. This Public Group can then be targeted by a Criteria-Based Sharing Rule on Opportunity (e.g., Amount >= threshold) to grant Read access specifically to high-value opportunities without granting unwanted access to other records.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q86 At Universal Containers, there's a team of auditors distribu"
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
          "whyCorrect": "To restrict visibility geographically so that branch staff only see records within their branch/location while branch managers see records owned by their branch staff, architects configure a branch-structured Role Hierarchy combined with Sharing Rules (or criteria-based sharing rules aligned to geographic location). The Role Hierarchy ensures branch managers inherit visibility over their branch subordinates, and criteria/ownership sharing rules extend visibility to relevant peers within that geographic boundary.",
          "distractors": {
            "A": "Option A omits the Role Hierarchy, meaning branch managers would not automatically inherit visibility over records owned by their branch staff without extensive, complex sharing rules.",
            "C": "Option C relies on manual Account Team membership, which is unmanageable at scale for broad geographic segmentation."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Configure Role Hierarchy and create sharing rules.",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "To restrict visibility geographically so that branch staff only see records within their branch/location while branch managers see records owned by their branch staff, architects configure a branch-structured Role Hierarchy combined with Sharing Rules (or criteria-based sharing rules aligned to geographic location). The Role Hierarchy ensures branch managers inherit visibility over their branch subordinates, and criteria/ownership sharing rules extend visibility to relevant peers within that geographic boundary.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q88 Universal Containers (UC) requested that branch managers and"
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
          "whyCorrect": "When list views need to be targeted to specific individuals who cross-cut formal roles (such as 'certain executives who specialize in closing problematic deals'), creating a Public Group containing those specific specialists and sharing the list view with that Public Group is the architecturally correct approach. Sharing by Role (Option A) would expose the list views to all executives in that role, failing the requirement. Additionally, list views cannot be shared directly with individual users (Option B).",
          "distractors": {
            "A": "Option A shares the list view with all users in that Role (and subordinates), which overshares the list view to executives who do not specialize in problematic deals.",
            "B": "Option B is technically impossible because Salesforce list views cannot be shared with individual users."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Share the list views with the appropriate Public Group.",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "When list views need to be targeted to specific individuals who cross-cut formal roles (such as 'certain executives who specialize in closing problematic deals'), creating a Public Group containing those specific specialists and sharing the list view with that Public Group is the architecturally correct approach. Sharing by Role (Option A) would expose the list views to all executives in that role, failing the requirement. Additionally, list views cannot be shared directly with individual users (Option B).",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q89 Sales executives at Universal Containers (UC) want to create"
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
          "whyCorrect": "By setting the Price Book Organization-Wide Default to 'View Only', users cannot add products from restricted price books to opportunities. To grant trained staff the ability to create opportunities with high-risk products, the High Risk price book is shared directly with 'Use' access with the trained staff (via the Price Book Sharing interface to users, roles, or groups). Option B accurately describes the standard architectural configuration. Price Books do not support sharing rules, eliminating Option A.",
          "distractors": {
            "A": "Option A is invalid because Salesforce does not support Sharing Rules on Price Books.",
            "C": "Option C specifically restricts the sharing mechanism to 'manual sharing' (one-by-one user share records) rather than standard price book sharing with trained staff groups/roles."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Set the price book organization- wide default to View Only and share the price book (High Risk) with the trained staff.",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "By setting the Price Book Organization-Wide Default to 'View Only', users cannot add products from restricted price books to opportunities. To grant trained staff the ability to create opportunities with high-risk products, the High Risk price book is shared directly with 'Use' access with the trained staff (via the Price Book Sharing interface to users, roles, or groups). Option B accurately describes the standard architectural configuration. Price Books do not support sharing rules, eliminating Option A.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q91 Universal Containers implements Agentforce Sales and request"
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
          "whyCorrect": "For custom objects (like Scheduled Courses), 'Grant Access Using Hierarchies' can be enabled or disabled in Sharing Settings. When enabled alongside a properly configured Role Hierarchy where the operations users report up to the operations manager, Salesforce automatically rolls up record ownership and edit access to the manager. This provides the most scalable, maintenance-free mechanism across 500 regions.",
          "distractors": {
            "A": "Option A is insufficient because adding users to a public group does not grant record edit access without additional sharing rules, and does not model managerial hierarchy.",
            "B": "Option B would require creating multiple ownership-based sharing rules, adding administrative overhead and nearing platform sharing rule limits across 500 regions."
          },
          "domain": "Declarative Sharing (Access to Records)",
          "domainSlug": "declarative-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Enable Grant Access Using Hierarchies and define a Role Hierarchy to give access to the scheduled courses.",
            "docTopic": "Declarative Sharing (Access to Records)",
            "webReason": "For custom objects (like Scheduled Courses), 'Grant Access Using Hierarchies' can be enabled or disabled in Sharing Settings. When enabled alongside a properly configured Role Hierarchy where the operations users report up to the operations manager, Salesforce automatically rolls up record ownership and edit access to the manager. This provides the most scalable, maintenance-free mechanism across 500 regions.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q97 Universal Containers (UC) delivers training in 500 different"
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
          "whyCorrect": "In Apex, the 'with sharing' keyword enforces only record-level sharing rules (OWD, role hierarchy, manual sharing). It does NOT enforce Object-Level Permissions (CRUD) or Field-Level Security (FLS). To enforce Field-Level Security in Apex and ensure users cannot update fields marked Read-Only on their profiles, developers must programmatically verify permissions using Schema describe methods (e.g., Schema.sObjectField.getDescribe().isUpdateable()), or utilize Security.stripInaccessible() / WITH USER_MODE. Therefore, Option C is the correct solution.",
          "distractors": {
            "A": "Option A is incorrect because 'with sharing' only enforces record sharing rules; Apex continues to execute in system context regarding Object and Field-Level Security.",
            "B": "Option B is incorrect because placing code in an inner class with 'with sharing' still has zero effect on Field-Level Security enforcement."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Use the isUpdateable() Apex method to test each field prior to allowing update.",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "In Apex, the 'with sharing' keyword enforces only record-level sharing rules (OWD, role hierarchy, manual sharing). It does NOT enforce Object-Level Permissions (CRUD) or Field-Level Security (FLS). To enforce Field-Level Security in Apex and ensure users cannot update fields marked Read-Only on their profiles, developers must programmatically verify permissions using Schema describe methods (e.g., Schema.sObjectField.getDescribe().isUpdateable()), or utilize Security.stripInaccessible() / WITH USER_MODE. Therefore, Option C is the correct solution.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q3 Universal Containers (UC) has a custom Apex class that enfor"
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
          "whyCorrect": "Dynamic Forms allows administrators to migrate fields and sections from traditional page layouts into individual components directly within the Lightning App Builder. Admins can configure granular field section visibility rules based on the device form factor (e.g., Device Form Factor = Desktop vs Phone), enabling tailored layouts, proper field alignment, and streamlined views across diverse mobile and desktop devices without writing custom code.",
          "distractors": {
            "B": "Visualforce overrides represent a legacy programmatic approach that introduces severe maintenance overhead, breaks standard Lightning Experience features, and requires extensive custom responsive CSS logic across every supported device.",
            "C": "Overriding the standard Opportunity view action with a custom Lightning Web Component (LWC) introduces unnecessary development overhead, creates ongoing technical debt, and reimplements capabilities already provided natively and declaratively by Dynamic Forms."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Use Dynamic Form to define different field sections applicable for different form fa ctors of devices.",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "Dynamic Forms allows administrators to migrate fields and sections from traditional page layouts into individual components directly within the Lightning App Builder. Admins can configure granular field section visibility rules based on the device form factor (e.g., Device Form Factor = Desktop vs Phone), enabling tailored layouts, proper field alignment, and streamlined views across diverse mobile and desktop devices without writing custom code.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q9 A company intends bring work from anywhere culture in a bid "
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
          "whyCorrect": "In Apex, server-side code runs in system context by default and does NOT automatically enforce Field-Level Security (FLS). To prevent unauthorized users (such as sales reps) from viewing sensitive fields like Shipment Amount, developers must explicitly check field accessibility using Schema describe methods such as Schema.sObjectType.Shipment__c.fields.Amount__c.isAccessible() (or modern equivalents like WITH USER_MODE or Security.stripInaccessible()). In this single-select variant, Option A is the only valid platform mechanism provided.",
          "distractors": {
            "B": "System.runAs() is an Apex testing method used exclusively within test classes (@isTest) to simulate user execution context; it has no operational effect in production runtime code.",
            "C": "isShareable is a fictitious keyword that does not exist in Apex or anywhere in the Salesforce platform."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Use isAccessible() method in Apex classes to check field accessibility.",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "In Apex, server-side code runs in system context by default and does NOT automatically enforce Field-Level Security (FLS). To prevent unauthorized users (such as sales reps) from viewing sensitive fields like Shipment Amount, developers must explicitly check field accessibility using Schema describe methods such as Schema.sObjectType.Shipment__c.fields.Amount__c.isAccessible() (or modern equivalents like WITH USER_MODE or Security.stripInaccessible()). In this single-select variant, Option A is the only valid platform mechanism provided.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q20 Universal Containers (UC) uses a custom Lightning component "
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
          "whyCorrect": "By default, custom objects have 'Grant Access Using Hierarchies' enabled, which automatically grants record access to users above the record owner in the role hierarchy. Setting the Organization-Wide Default (OWD) to Private restricts access to the record owner, and unchecking 'Grant Access Using Hierarchies' prevents the owner's manager from inheriting record access vertically through the role hierarchy.",
          "distractors": {
            "A": "Apex sharing cannot be used to delete implicit or hierarchy-derived access. Furthermore, share records represent explicit grants to users, roles, or public groups, not profiles, and role hierarchy access is not stored as individual share records.",
            "C": "Removing CRED (Create, Read, Edit, Delete) permissions on the Manager profile or permission set revokes object-level access completely, preventing managers from accessing or tracking their own NPS scores as employees."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Set organization-wide default to Private and uncheck the Access Using Hierarchies option for the NPS object.",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "By default, custom objects have 'Grant Access Using Hierarchies' enabled, which automatically grants record access to users above the record owner in the role hierarchy. Setting the Organization-Wide Default (OWD) to Private restricts access to the record owner, and unchecking 'Grant Access Using Hierarchies' prevents the owner's manager from inheriting record access vertically through the role hierarchy.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q26 Universal Containers (UC) has a custom object to track the i"
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
          "whyCorrect": "According to the official Salesforce Apex Developer Guide, the System.runAs() method enables developers to write test methods that change the user execution context to an existing or new user so that the user's record sharing is enforced. The documentation explicitly states: 'The runAs method doesn't enforce user permissions or field-level permissions, only record sharing.'",
          "distractors": {
            "A": "Salesforce documentation explicitly states that System.runAs() does not enforce Field-Level Security in Apex test executions.",
            "C": "Salesforce documentation explicitly states that System.runAs() does not enforce user permissions (such as CRUD permissions on objects) in Apex test executions."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Enforcement of a user's record sharing",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "According to the official Salesforce Apex Developer Guide, the System.runAs() method enables developers to write test methods that change the user execution context to an existing or new user so that the user's record sharing is enforced. The documentation explicitly states: 'The runAs method doesn't enforce user permissions or field-level permissions, only record sharing.'",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q28 Which functionality does the system method \"runAs()\" verify "
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
          "whyCorrect": "To verify that Apex managed sharing rules correctly grant access to designated users and deny access to unauthorized users, architects recommend using the System.runAs() system method in Apex test classes. System.runAs() allows tests to execute within the security context of specific users with different roles and profiles, asserting that SOQL queries return records only to authorized users.",
          "distractors": {
            "A": "subcouchable is a completely fictitious word that does not exist in Apex or Salesforce.",
            "C": "isShareable is a fabricated keyword that does not exist in Apex or Salesforce."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Use runAs system method in test classes to test using different users and profiles.",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "To verify that Apex managed sharing rules correctly grant access to designated users and deny access to unauthorized users, architects recommend using the System.runAs() system method in Apex test classes. System.runAs() allows tests to execute within the security context of specific users with different roles and profiles, asserting that SOQL queries return records only to authorized users.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q31 To grant Universal Containers sales managers access to shipm"
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
          "whyCorrect": "Declarative sharing rules (both criteria-based and owner-based) cannot dynamically evaluate user lookup fields on a record to share with an individual user. Because Case OWD is Private and each case may designate a different lawyer in the Legal SME lookup field, an Apex trigger on Case is required to dynamically insert a CaseShare record granting access specifically to the user identified in that lookup field.",
          "distractors": {
            "B": "A criteria-based sharing rule can only share records with static Public Groups, Roles, or Territories. Sharing with the entire Corporate Legal Team role grants access to all corporate lawyers regardless of whether they are assigned, violating the principle of least privilege.",
            "C": "Sharing with the Legal Public Group grants access to every member of the public group rather than the specific individual designated in the Legal SME field."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Use Apex Managed sharing in a case Trigger that shares the record to the user identified in the Legal SME field.",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "Declarative sharing rules (both criteria-based and owner-based) cannot dynamically evaluate user lookup fields on a record to share with an individual user. Because Case OWD is Private and each case may designate a different lawyer in the Legal SME lookup field, an Apex trigger on Case is required to dynamically insert a CaseShare record granting access specifically to the user identified in that lookup field.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q34 If a Case requires involvement from one of the Legal team, t"
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
          "whyCorrect": "When record access to a private custom object (Presentation) is dictated by relationships in a junction object (Presenter linking Presentation to User), declarative sharing rules cannot dynamically bridge this many-to-many relationship. An Apex trigger on the Presenter junction object can manage programmatic sharing via Presentation__Share records, creating an edit share when a presenter user is added and deleting the share when the presenter record is removed.",
          "distractors": {
            "A": "Permission Sets grant object-level CRUD permissions across all records the user has sharing access to; they cannot grant record-level access to specific individual private records.",
            "B": "Sales Teams (Opportunity Teams/Account Teams) are standard features exclusive to Opportunity and Account; custom objects like Presentation do not have standard Sales Teams."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Trigger on Presenter junction object that uses /ipex Maraged sharing to add or remove access to the related Presentation record.",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "When record access to a private custom object (Presentation) is dictated by relationships in a junction object (Presenter linking Presentation to User), declarative sharing rules cannot dynamically bridge this many-to-many relationship. An Apex trigger on the Presenter junction object can manage programmatic sharing via Presentation__Share records, creating an edit share when a presenter user is added and deleting the share when the presenter record is removed.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q37 Dreamforce presenters need to be able to edit their presenta"
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
          "whyCorrect": "To ensure that a complaint case is visible to the assigned agent's manager while remaining strictly hidden from the agent themselves, programmatic sharing is required. Criteria-based sharing rules cannot dynamically resolve a relative lookup (such as the manager of a user specified on the record). An Apex trigger on Case looks up the Assigned Agent's ManagerId on the User object and inserts a CaseShare record granting Read access to that specific manager.",
          "distractors": {
            "A": "If the Case were owned by the agent, the agent would inherently possess Full Access as the owner. Removing CRED permissions on Case from the agent's profile would prevent them from accessing and resolving any customer support cases, breaking their primary job function.",
            "B": "Criteria-based sharing rules can only share with fixed Roles or Groups, not relative managers of a dynamic user lookup. Sharing to 'Role Manager and above' would expose all complaint cases to every manager in that role across the entire company."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Trigger on Case to lookup and share to the manager of an Assigned Agent custom field (the subject of the complaint) using Apex Managed Sharing.",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "To ensure that a complaint case is visible to the assigned agent's manager while remaining strictly hidden from the agent themselves, programmatic sharing is required. Criteria-based sharing rules cannot dynamically resolve a relative lookup (such as the manager of a user specified on the record). An Apex trigger on Case looks up the Assigned Agent's ManagerId on the User object and inserts a CaseShare record granting Read access to that specific manager.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q44 Customer complaints for bad interactions with a customer sup"
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
          "whyCorrect": "Apex classes run in system context by default, which ignores the current user's Organization-Wide Defaults, role hierarchy, and sharing rules. When building backend Apex controllers for Lightning Web Components (LWC), developers must explicitly enforce record visibility by using the 'with sharing' or 'inherited sharing' keywords, or query with WITH USER_MODE, to avoid inadvertently exposing unauthorized records to users.",
          "distractors": {
            "B": "While creating test classes with runAs is an essential testing practice, the primary architectural implementation consideration for the application code itself is enforcing system-mode vs user-mode record visibility.",
            "C": "isShareable is a fabricated keyword that does not exist in Apex or the Schema namespace. The valid Schema describe methods are isAccessible(), isCreateable(), isUpdateable(), and isDeletable()."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Once that Apex runs on system mode, the development team needs to enforce record visibility.",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "Apex classes run in system context by default, which ignores the current user's Organization-Wide Defaults, role hierarchy, and sharing rules. When building backend Apex controllers for Lightning Web Components (LWC), developers must explicitly enforce record visibility by using the 'with sharing' or 'inherited sharing' keywords, or query with WITH USER_MODE, to avoid inadvertently exposing unauthorized records to users.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q45 Universal Containers requested to leverage Lightning Web Com"
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
          "whyCorrect": "Dynamic Forms allows administrators to migrate fields and sections from traditional page layouts into individual components directly within the Lightning App Builder. Admins can configure granular field section visibility rules based on the device form factor (e.g., Device Form Factor = Desktop vs Phone), enabling tailored layouts, proper field alignment, and streamlined views across diverse mobile and desktop devices without writing custom code.",
          "distractors": {
            "B": "Visualforce overrides represent a legacy programmatic approach that introduces severe maintenance overhead, breaks standard Lightning Experience features, and requires extensive custom responsive CSS logic across every supported device.",
            "C": "Overriding the standard Opportunity view action with a custom Lightning Web Component (LWC) introduces unnecessary development overhead, creates ongoing technical debt, and reimplements capabilities already provided natively and declaratively by Dynamic Forms."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Use Dynamic Form to define different field sections applicable for different form factors of devices.",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "Dynamic Forms allows administrators to migrate fields and sections from traditional page layouts into individual components directly within the Lightning App Builder. Admins can configure granular field section visibility rules based on the device form factor (e.g., Device Form Factor = Desktop vs Phone), enabling tailored layouts, proper field alignment, and streamlined views across diverse mobile and desktop devices without writing custom code.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q57 A company intends bring work from anywhere culture in a bid "
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
          "whyCorrect": "Dynamic Forms allows administrators to place field sections directly on a Lightning Record Page and apply conditional component visibility rules based on the WorkOrder RecordType. This enables a single Lightning Record Page to dynamically display only the specific fields required for each of the 8 work order types, dramatically simplifying maintenance and eliminating the need for 8 separate page layouts or custom LWC overrides.",
          "distractors": {
            "A": "Overriding the standard view action with a custom LWC and custom metadata types adds significant code complexity, high ongoing maintenance overhead, and needlessly reinvents standard platform UI capabilities.",
            "C": "Creating and maintaining 8 different page layouts for an object with over 400 fields leads to massive administrative overhead, layout sprawl, and complex profile-to-layout assignment matrices."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Use Dynamic form to add different page sections and control visibility of sections by Work Order RecordType value.",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "Dynamic Forms allows administrators to place field sections directly on a Lightning Record Page and apply conditional component visibility rules based on the WorkOrder RecordType. This enables a single Lightning Record Page to dynamically display only the specific fields required for each of the 8 work order types, dramatically simplifying maintenance and eliminating the need for 8 separate page layouts or custom LWC overrides.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q60 Universal Containers uses Standard WorkOrder object to track"
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
          "whyCorrect": "Salesforce does not offer native time-based expiration for record sharing. To fulfill the requirement that cross-team Opportunity access must automatically expire 2 weeks after the new fiscal year starts, a Scheduled Apex job (implementing Schedulable and Batchable) is required. The scheduled job runs on the designated expiration date, queries the temporary OpportunityShare records, and deletes them to revoke access.",
          "distractors": {
            "A": "While Apex sharing can programmatically create the initial share records, it does not by itself fulfill the requirement for automated time-based expiration without a scheduled job to remove them.",
            "C": "Sharing rules cannot be applied on an ad-hoc, deal-by-deal basis between specific sales managers, nor do sharing rules support automated expiration dates."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Scheduled Apex job to remove access",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "Salesforce does not offer native time-based expiration for record sharing. To fulfill the requirement that cross-team Opportunity access must automatically expire 2 weeks after the new fiscal year starts, a Scheduled Apex job (implementing Schedulable and Batchable) is required. The scheduled job runs on the designated expiration date, queries the temporary OpportunityShare records, and deletes them to revoke access.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q76 Universal Containers is implementing Sales Cloud. During the"
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
          "whyCorrect": "When record access to a private custom object (Presentation) is dictated by relationships in a junction object (Presenter linking Presentation to User), declarative sharing rules cannot dynamically bridge this many-to-many relationship. An Apex trigger on the Presenter junction object can manage programmatic sharing via Presentation__Share records, creating an edit share when a presenter user is added and deleting the share when the presenter record is removed.",
          "distractors": {
            "A": "Permission Sets grant object-level CRUD permissions across all records the user has sharing access to; they cannot grant record-level access to specific individual private records.",
            "B": "Sales Teams (Opportunity Teams/Account Teams) are standard features exclusive to Opportunity and Account; custom objects like Presentation do not have standard Sales Teams."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Trigger on Presenter junction object that uses Apex Managed sharing to add or remove access to the related Presentation record.",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "When record access to a private custom object (Presentation) is dictated by relationships in a junction object (Presenter linking Presentation to User), declarative sharing rules cannot dynamically bridge this many-to-many relationship. An Apex trigger on the Presenter junction object can manage programmatic sharing via Presentation__Share records, creating an edit share when a presenter user is added and deleting the share when the presenter record is removed.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q78 Dreamforce presenters need to be able to edit their presenta"
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
          "whyCorrect": "When implementing complex custom Apex managed sharing for Invoice records, developers must ensure that sharing calculations accurately grant access to intended users and block unintended users. The System.runAs() method in test classes is specifically designed to simulate execution in the context of different test users and profiles, enabling robust verification of record-level sharing logic.",
          "distractors": {
            "A": "The 'without sharing' keyword explicitly disables sharing rules evaluation and runs in system context, which bypasses record visibility rather than considering it.",
            "B": "The 'with sharing' keyword enforces record-level sharing rules, but does NOT enforce Field-Level Security (FLS) or object permissions (CRUD)."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Use runAs system method to test different users accessing these records.",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "When implementing complex custom Apex managed sharing for Invoice records, developers must ensure that sharing calculations accurately grant access to intended users and block unintended users. The System.runAs() method in test classes is specifically designed to simulate execution in the context of different test users and profiles, enabling robust verification of record-level sharing logic.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q82 Universal Containers (UC) has a team that analyzes customer "
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
          "whyCorrect": "In Salesforce, when record ownership changes on a custom object, all share records with RowCause = 'Manual' are automatically deleted by the platform. However, share records created with a custom Apex Sharing Reason (RowCause = Schema.CustomObject__Share.RowCause.ReasonName__c) are preserved across ownership changes, ensuring that users do not lose access when a new owner is assigned.",
          "distractors": {
            "A": "The 'with sharing' keyword enforces record-level sharing rules during class execution; it has no impact on whether share records persist when record ownership changes.",
            "C": "Creating share records with RowCause = 'Manual' causes those shares to be automatically deleted by Salesforce whenever the record owner changes."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Create a specific Apex Sharing Reason for the custom object.",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "In Salesforce, when record ownership changes on a custom object, all share records with RowCause = 'Manual' are automatically deleted by the platform. However, share records created with a custom Apex Sharing Reason (RowCause = Schema.CustomObject__Share.RowCause.ReasonName__c) are preserved across ownership changes, ensuring that users do not lose access when a new owner is assigned.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q87 What should an architect recommend to make sure that users t"
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
          "whyCorrect": "Standard criteria-based sharing rules cannot dynamically resolve a user's manager from a lookup field on the record. Because the complaint case must be shared specifically with the manager of the agent referenced in the Agent Complaint custom field (while remaining hidden from the agent), an Apex trigger on Case is required to look up the agent's manager and create a CaseShare record using programmatic sharing.",
          "distractors": {
            "A": "Criteria-based sharing rules can only share with predefined Roles or Groups. Sharing with 'Role Manager and above' would expose sensitive complaints to every manager in that role across the entire company.",
            "C": "Removing CRED permissions on Case from the agent would prevent them from accessing and resolving any cases, disrupting their daily customer support duties."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Create a trigger on Case to lookup and share to the manager of an Agent Complaint custom field using Apex managed sharing.",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "Standard criteria-based sharing rules cannot dynamically resolve a user's manager from a lookup field on the record. Because the complaint case must be shared specifically with the manager of the agent referenced in the Agent Complaint custom field (while remaining hidden from the agent), an Apex trigger on Case is required to look up the agent's manager and create a CaseShare record using programmatic sharing.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q90 Customer complaints for bad interactions with a support agen"
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
          "whyCorrect": "Dynamic Forms allows administrators to configure field sections directly on the Lightning Record Page and apply component visibility filters based on Device Form Factor (Desktop vs Phone). This declaratively resolves data alignment and layout issues for sellers using diverse devices without modifying the underlying single page layout or building custom code.",
          "distractors": {
            "B": "Visualforce overrides are a legacy mechanism that requires complete custom development and responsive styling, increasing long-term maintenance costs and diverging from the Lightning Experience framework.",
            "C": "A custom LWC override introduces unnecessary custom development, testing, and lifecycle maintenance for a requirement that is fully supported declaratively via Dynamic Forms."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Use Dynamic Forms to define different field sections applicable for different form factors of devices.",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "Dynamic Forms allows administrators to configure field sections directly on the Lightning Record Page and apply component visibility filters based on Device Form Factor (Desktop vs Phone). This declaratively resolves data alignment and layout issues for sellers using diverse devices without modifying the underlying single page layout or building custom code.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q92 A company launches a work- from- anywhere initiative in an e"
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
          "whyCorrect": "In Apex, classes run in system context by default and ignore Organization-Wide Defaults and sharing rules. By adding the 'with sharing' keyword to the Apex class, the development team ensures that SOQL queries strictly evaluate and respect the context user's sharing rules, preventing users from seeing shipment records belonging to other teams.",
          "distractors": {
            "A": "isShareable is a non-existent keyword that does not exist in Apex or the Salesforce platform.",
            "C": "runAs is used only in test classes to verify security in unit tests; it cannot be used in production Apex classes and has no runtime operational effect."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Use With Sharing keyword in Apex classes to enforce sharing rules evaluation.",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "In Apex, classes run in system context by default and ignore Organization-Wide Defaults and sharing rules. By adding the 'with sharing' keyword to the Apex class, the development team ensures that SOQL queries strictly evaluate and respect the context user's sharing rules, preventing users from seeing shipment records belonging to other teams.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q95 Universal Containers (UC) uses a custom Lightning component "
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
          "whyCorrect": "Server-side Apex classes execute in system mode by default, bypassing sharing rules and user permissions. When LWC is used as the presentation layer and Apex handles business logic, the development team must explicitly ensure that record visibility is enforced (by declaring classes 'with sharing' or using WITH USER_MODE) so that support reps do not gain unauthorized access to records.",
          "distractors": {
            "A": "isShareable and isEditable are non-existent keywords/methods in Salesforce Apex. The correct Schema describe methods are isAccessible(), isCreateable(), isUpdateable(), and isDeletable().",
            "C": "Writing test classes with runAs is standard unit testing procedure, but the key architectural consideration when implementing the business logic itself is enforcing security against system mode execution."
          },
          "domain": "Programmatic Sharing & Apex Security",
          "domainSlug": "programmatic-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Have the development team enforce record visibility once Apex runs in system mode .",
            "docTopic": "Programmatic Sharing & Apex Security",
            "webReason": "Server-side Apex classes execute in system mode by default, bypassing sharing rules and user permissions. When LWC is used as the presentation layer and Apex handles business logic, the development team must explicitly ensure that record visibility is enforced (by declaring classes 'with sharing' or using WITH USER_MODE) so that support reps do not gain unauthorized access to records.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q96 Universal Containers requests to leverage Lightning Web Comp"
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
          "whyCorrect": "Salesforce Report and Dashboard folders can be shared with Users, Public Groups, Roles, and Roles and Subordinates, but CANNOT be shared with Profiles. Creating a 'Sales Managers' Public Group and sharing the folders with that group automates folder access management: adding or removing sales managers from the public group immediately updates their access without requiring monthly manual folder sharing adjustments.",
          "distractors": {
            "A": "Folder sharing does NOT roll up vertically to superiors in the Role Hierarchy. Sharing a folder with lower roles grants access only to those specific roles and their subordinates, not upwards to superiors.",
            "B": "Salesforce does not support sharing Report or Dashboard folders with Profiles."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Share the folders with a \"Sales Managers\" public Group.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Salesforce Report and Dashboard folders can be shared with Users, Public Groups, Roles, and Roles and Subordinates, but CANNOT be shared with Profiles. Creating a 'Sales Managers' Public Group and sharing the folders with that group automates folder access management: adding or removing sales managers from the public group immediately updates their access without requiring monthly manual folder sharing adjustments.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q2 Sales operations at Universal Containers (UC) has created Pu"
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
          "whyCorrect": "When a field disappears from a record page after a deployment where the page layout was unchanged, the root cause is almost always missing or altered Field-Level Security (FLS) permissions in the deployed metadata (profiles/permission sets). In Object Manager > Account > Fields & Relationships, checking 'Field Accessibility' gives the administrator a comprehensive matrix showing both FLS and page layout visibility across all profiles, allowing rapid identification of the missing permission.",
          "distractors": {
            "A": "'Who Sees What' is an educational video series produced by Salesforce, not an actual report type or diagnostic tool within Salesforce Setup.",
            "B": "Field visibility is controlled by metadata permissions (FLS and page layouts) which apply consistently across all records for affected profiles; logging in to check multiple individual records will not diagnose why the field is hidden in metadata."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "View Field Accessibility in the Object Manager.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "When a field disappears from a record page after a deployment where the page layout was unchanged, the root cause is almost always missing or altered Field-Level Security (FLS) permissions in the deployed metadata (profiles/permission sets). In Object Manager > Account > Fields & Relationships, checking 'Field Accessibility' gives the administrator a comprehensive matrix showing both FLS and page layout visibility across all profiles, allowing rapid identification of the missing permission.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q4 Users at Universal Containers are complaining that a field h"
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
          "whyCorrect": "Reports saved in the 'Private Reports' (or 'My Private Reports') folder are strictly confidential and accessible ONLY to the user who created and owns them. Even System Administrators with the 'View All Data' administrative permission cannot view, run, or edit reports stored in another user's private reports folder (the only way an admin can access them is by logging in as the user).",
          "distractors": {
            "B": "The 'My Private Reports' folder cannot be shared with other users under any circumstances; it has no sharing settings.",
            "C": "The 'View All Data' permission grants broad access to records across the organization, but explicitly does NOT grant access to reports or dashboards stored in other users' personal/private folders."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "The report owner",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Reports saved in the 'Private Reports' (or 'My Private Reports') folder are strictly confidential and accessible ONLY to the user who created and owns them. Even System Administrators with the 'View All Data' administrative permission cannot view, run, or edit reports stored in another user's private reports folder (the only way an admin can access them is by logging in as the user).",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q6 A support representative at Universal Containers created a r"
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
          "whyCorrect": "When creating an ownership-based or criteria-based sharing rule in Salesforce Setup, the target groups available under 'Select the users to share with' are: Public Groups, Roles, Roles and Internal Subordinates, and Territories (if Enterprise Territory Management is enabled). 'Roles' is a standard supported option.",
          "distractors": {
            "B": "Sharing rules cannot be configured to share with individual 'Users'. Individual user access must be granted via Manual Sharing, Teams, or programmatic sharing.",
            "C": "Sharing rules cannot share with 'Profiles'. In Salesforce's security architecture, record sharing is strictly decoupled from profiles (profiles control CRED and FLS, not record sharing rules)."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Roles",
            "docTopic": "Object & Field-Level Security",
            "webReason": "When creating an ownership-based or criteria-based sharing rule in Salesforce Setup, the target groups available under 'Select the users to share with' are: Public Groups, Roles, Roles and Internal Subordinates, and Territories (if Enterprise Territory Management is enabled). 'Roles' is a standard supported option.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q7 Which option can be selected to share data when creating a s"
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
          "whyCorrect": "Salesforce uses 'Parent Implicit Sharing': when a user has access to a child record (such as an Opportunity, Case, or Contact), Salesforce automatically grants that user implicit Read-Only access to the parent Account record. This ensures the user can view the parent account's context. Parent implicit sharing NEVER grants Edit or Create permissions on the parent Account, regardless of the user's permissions on the child record or profile.",
          "distractors": {
            "A": "Parent implicit sharing only ever provides Read access to the parent Account record; it never grants Edit or Create access.",
            "C": "The sales rep will not have 'No access' because Salesforce parent implicit sharing automatically bridges access from the owned opportunity to the parent Account record."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Read access",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Salesforce uses 'Parent Implicit Sharing': when a user has access to a child record (such as an Opportunity, Case, or Contact), Salesforce automatically grants that user implicit Read-Only access to the parent Account record. This ensures the user can view the parent account's context. Parent implicit sharing NEVER grants Edit or Create permissions on the parent Account, regardless of the user's permissions on the child record or profile.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q10 Universal Containers' organization wide-defaults model is Pr"
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
          "whyCorrect": "In a Master-Detail relationship, detail records (Invoice) inherit their security and record access directly from the master record (Account) via 'Controlled by Parent' sharing. Custom detail objects do not have independent Organization-Wide Defaults (OWD), owner fields, or sharing rules. Because Account OWD is Private and AR users neither own nor have access to Account records, they cannot see the child Invoice records. Creating a sharing rule to share the Accounts with the AR team will cascade visibility down to the Invoices.",
          "distractors": {
            "A": "Custom detail objects in a master-detail relationship cannot have their own sharing rules because their sharing is inherited directly from the master object.",
            "B": "While object-level Read permission is necessary, the question explicitly states AR users neither own nor have access to account records under a Private Account OWD; this lack of parent account record access directly prevents invoice visibility regardless of Invoice object permissions."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "A sharing rule is missing to share accounts with the AR team.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "In a Master-Detail relationship, detail records (Invoice) inherit their security and record access directly from the master record (Account) via 'Controlled by Parent' sharing. Custom detail objects do not have independent Organization-Wide Defaults (OWD), owner fields, or sharing rules. Because Account OWD is Private and AR users neither own nor have access to Account records, they cannot see the child Invoice records. Creating a sharing rule to share the Accounts with the AR team will cascade visibility down to the Invoices.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q11 A custom Invoice object has been created with a master-detai"
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
            "C"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "When enabling Shield Platform Encryption for fields via the Encryption Policy, only newly created and updated records are encrypted going forward. Enabling encryption on an existing field does not automatically encrypt existing data at rest in the database, nor does Salesforce send an email simply from enabling the policy checkbox. To encrypt existing records, an architect/admin can update existing records (e.g. via Data Loader/API) or contact Salesforce Customer Support to request a background encryption service to update and encrypt existing records at rest.",
          "distractors": {
            "A": "Classic Encryption is a legacy feature limited to custom text fields up to 175 characters; it cannot encrypt standard fields like Billing Street, Billing City, or Phone.",
            "B": "Salesforce does not automatically encrypt existing data or send an email indicating field values are encrypted merely by enabling the Encryption Policy; existing data must be touched or encrypted by Salesforce via a background encryption request."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Use Encryption Policy and contact Salesforce to update the existing records so that their field values are encrypted.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "When enabling Shield Platform Encryption for fields via the Encryption Policy, only newly created and updated records are encrypted going forward. Enabling encryption on an existing field does not automatically encrypt existing data at rest in the database, nor does Salesforce send an email simply from enabling the policy checkbox. To encrypt existing records, an architect/admin can update existing records (e.g. via Data Loader/API) or contact Salesforce Customer Support to request a background encryption service to update and encrypt existing records at rest.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q12 An architect from a previous project implemented Platform Sh"
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
          "whyCorrect": "Fields configured for encryption (e.g., using Shield Platform Encryption) cannot be used in criteria-based sharing rules, formula fields, or certain filter criteria due to cryptographic and database indexing limitations. As a result, Salesforce automatically filters out encrypted fields from the list of available fields when creating criteria-based sharing rules in Setup.",
          "distractors": {
            "A": "Field-Level Security (FLS) restricts data visibility for end users on record pages, reports, and search, but does not prevent an administrator from selecting fields in Setup when configuring sharing rules.",
            "B": "There is no standard Salesforce permission named 'Compliance Fields'; field availability is dictated by field type, encryption status, and platform feature compatibility."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "The field has been configured for encryption.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Fields configured for encryption (e.g., using Shield Platform Encryption) cannot be used in criteria-based sharing rules, formula fields, or certain filter criteria due to cryptographic and database indexing limitations. As a result, Salesforce automatically filters out encrypted fields from the list of available fields when creating criteria-based sharing rules in Setup.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q13 An architect has a requirement to create a criteria-based sh"
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
          "whyCorrect": "Object-level permissions (CRUD) defined on Profiles and Permission Sets act as the primary baseline gatekeeper. If a user's profile does not grant 'Read' access to the Account object, record-level sharing mechanisms (such as sharing rules, public groups, or role hierarchy) cannot grant access to any records of that object.",
          "distractors": {
            "A": "Sharing rules extend access regardless of where the record owner sits in the Role Hierarchy; ownership higher in the hierarchy does not block a sharing rule from granting access.",
            "C": "Page layouts only control which fields and sections appear on the record detail page; they do not control whether a user can see records in list views, search, or reports."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "The users are in profiles that have no access to the Account object.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Object-level permissions (CRUD) defined on Profiles and Permission Sets act as the primary baseline gatekeeper. If a user's profile does not grant 'Read' access to the Account object, record-level sharing mechanisms (such as sharing rules, public groups, or role hierarchy) cannot grant access to any records of that object.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q18 Universal Containers has selected a small and diverse group "
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
          "whyCorrect": "Field-Level Security (FLS) is the only native mechanism in Salesforce that completely restricts field visibility across all surfaces\u2014including record detail pages, list views, reports, global search, and API queries. Making the VIP Flag field visible only to Private Banking Rep profiles guarantees that unauthorized users cannot access the field through any channel.",
          "distractors": {
            "A": "Page layouts only control visibility on standard record pages; users without the field on their page layout can still see the field in list views, reports, search results, and API integrations.",
            "B": "There is no 'publish' field type in Salesforce, and record types control picklist values and layout assignments, not secure field-level visibility."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Set the Field Level Security for the VIP Flag field so that it is visible to Private Banking Rep Profiles.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Field-Level Security (FLS) is the only native mechanism in Salesforce that completely restricts field visibility across all surfaces\u2014including record detail pages, list views, reports, global search, and API queries. Making the VIP Flag field visible only to Private Banking Rep profiles guarantees that unauthorized users cannot access the field through any channel.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q19 A banking company uses a VIP Flag in the Contact Object that"
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
          "whyCorrect": "Because sales users can find and view the Invoice record (demonstrated by seeing the system header fields: record name, created date, and last modified date), they have both record-level access and object-level Read access. The absence of the remaining data fields when an admin can see them indicates that Field-Level Security (FLS) for those fields is not granted to the Sales Users profile.",
          "distractors": {
            "B": "If the fields were marked Read-Only on the page layout, they would still be visible on the record detail page in a read-only state, rather than hidden.",
            "C": "Sharing rules control record-level access (which records a user can see), not field-level visibility within an accessible record."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "The Sales Users profile does not have access to the remaining fields.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Because sales users can find and view the Invoice record (demonstrated by seeing the system header fields: record name, created date, and last modified date), they have both record-level access and object-level Read access. The absence of the remaining data fields when an admin can see them indicates that Field-Level Security (FLS) for those fields is not granted to the Sales Users profile.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q23 Universal Containers (UC) has created a custom Invoice objec"
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
          "whyCorrect": "The 'View All' permission on a child object (Case) grants visibility to all records of that child object, but it does NOT trigger Parent Implicit Sharing for parent Account records. Because the Account OWD is Private, service reps will not be able to access Account records solely based on their Case View All permission unless Account access is explicitly granted.",
          "distractors": {
            "A": "While Contact access is dependent on parent Account access when Controlled by Parent, the primary consideration and constraint is that Account access is blocked by the Private Account OWD.",
            "C": "If Contact OWD is Controlled by Parent and Account OWD is Private, service reps CANNOT access contact records because they lack access to the parent Account; therefore, this statement is factually incorrect."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Service reps will NOT be able to access all UC account records because the Account OWD is Private.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "The 'View All' permission on a child object (Case) grants visibility to all records of that child object, but it does NOT trigger Parent Implicit Sharing for parent Account records. Because the Account OWD is Private, service reps will not be able to access Account records solely based on their Case View All permission unless Account access is explicitly granted.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q30 Universal Containers (UC) service reps are assigned to a pro"
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
          "whyCorrect": "Object-level security (CRED) on the Profile or Permission Set is the fundamental gatekeeper in Salesforce. If Mary's profile lacks 'Read' permission for the custom Invoice object, she cannot view, edit, or interact with any Invoice records in any way, regardless of the Public Read-Only OWD or her managerial position above Joe in the Role Hierarchy.",
          "distractors": {
            "A": "Mary cannot have Read/Write access because she lacks both object-level Read and Edit permissions, and the OWD is only Public Read-Only.",
            "C": "Mary cannot view the records because record-level sharing cannot grant access to an object if object-level Read permission is not granted."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "None",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Object-level security (CRED) on the Profile or Permission Set is the fundamental gatekeeper in Salesforce. If Mary's profile lacks 'Read' permission for the custom Invoice object, she cannot view, edit, or interact with any Invoice records in any way, regardless of the Public Read-Only OWD or her managerial position above Joe in the Role Hierarchy.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q32 Mary is Joe's manager in the Role Hierarchy. The organizatio"
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
          "whyCorrect": "The 'View All Users' system permission allows users to view all user records in the Salesforce organization, regardless of User Sharing settings or a Private User OWD. This fulfills the auditing requirement while following the principle of least privilege, avoiding exposure of sensitive business data.",
          "distractors": {
            "B": "'View All Data' provides global access to view all records across all standard and custom objects in the entire organization, granting excessive permissions that violate the principle of least privilege.",
            "C": "There is no standard object-level 'View permission on the User object'; user visibility is governed via system permissions and User Sharing."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "View All Users",
            "docTopic": "Object & Field-Level Security",
            "webReason": "The 'View All Users' system permission allows users to view all user records in the Salesforce organization, regardless of User Sharing settings or a Private User OWD. This fulfills the auditing requirement while following the principle of least privilege, avoiding exposure of sensitive business data.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q33 The corporate identity and access team needs to audit User s"
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
          "whyCorrect": "Object-level permissions strictly enforce access rules across all platform layers (UI, API, Data Loader, inline editing). Removing the 'Edit' permission on Work Orders from the Sales Representative profile completely prevents sales reps from modifying work orders through any channel.",
          "distractors": {
            "A": "Setting fields to Read-Only on a page layout is only a UI restriction; sales reps with object-level Edit permission could still modify records via list view inline editing, quick actions, or API tools.",
            "C": "Sharing rules can only extend record access beyond the OWD; they cannot revoke access or override object-level permissions."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Remove the Work Order Edit permission from the Sales Representative profile.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Object-level permissions strictly enforce access rules across all platform layers (UI, API, Data Loader, inline editing). Removing the 'Edit' permission on Work Orders from the Sales Representative profile completely prevents sales reps from modifying work orders through any channel.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q38 Universal Containers has expanded to sell virtual containers"
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
          "whyCorrect": "Files uploaded to a user's private library in Files Home are private to that user and do not grant access to managers in the Role Hierarchy. However, users with the administrative permission 'View All Data' have system-wide visibility to access all files across the organization, including files stored in private libraries.",
          "distractors": {
            "A": "The Role Hierarchy does not grant access to files located in a user's private library in Files Home.",
            "C": "While standard users cannot access another user's private files, users with the administrative 'View All Data' permission can access them."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "The user and users with View All Data permission",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Files uploaded to a user's private library in Files Home are private to that user and do not grant access to managers in the Role Hierarchy. However, users with the administrative permission 'View All Data' have system-wide visibility to access all files across the organization, including files stored in private libraries.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q42 Who can view a PDF that is uploaded to the Files Home privat"
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
          "whyCorrect": "Default Account Teams allow each sales rep to define a recurring group of internal collaborators (such as legal, engineering, and finance specialists) along with their specific roles and access levels (Read Only or Read/Write) for Accounts, Opportunities, and Cases. Once defined, the default team can be automatically added to new accounts or applied with a single click, eliminating repetitive manual sharing.",
          "distractors": {
            "A": "Criteria-based sharing rules evaluate record field criteria and cannot dynamically accommodate flexible, user-driven collaboration needs.",
            "B": "Granting 'View All Data' to supporting internal users provides unnecessary global access to all records across all objects, violating security best practices."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Leverage default Account team.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Default Account Teams allow each sales rep to define a recurring group of internal collaborators (such as legal, engineering, and finance specialists) along with their specific roles and access levels (Read Only or Read/Write) for Accounts, Opportunities, and Cases. Once defined, the default team can be automatically added to new accounts or applied with a single click, eliminating repetitive manual sharing.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q49 Sales reps at Universal Containers (UC) complain about the m"
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
          "whyCorrect": "Field-Level Security (FLS) controls both visibility and editability. Setting FLS to Visible and Read-Only for Banking Reps enables global searchability and detail viewing while completely preventing edits. Setting FLS to Visible (not Read-Only) for Customer Support Reps allows them to both view and edit the field.",
          "distractors": {
            "A": "Search layouts determine which columns appear in search results, not field permissions; page layouts do not prevent editing via list views or API.",
            "B": "Validation rules only fire during save events and do not render the field read-only in the UI, nor do they manage searchability properly."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Set the Field Level Security for the Date of Birth field to be Visible to Customer Support Rep Profile, and set the Date of Birth field Visible and Readonly to Banking Rep profile.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Field-Level Security (FLS) controls both visibility and editability. Setting FLS to Visible and Read-Only for Banking Reps enables global searchability and detail viewing while completely preventing edits. Setting FLS to Visible (not Read-Only) for Customer Support Reps allows them to both view and edit the field.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q51 A banking company wants their customers Date of Birth Field "
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
          "whyCorrect": "Removing the 'Delete' object permission on the Order object from profiles and permission sets guarantees that users cannot delete orders through any entry point, including the standard UI, list views, mass delete tools, and the API / Data Loader.",
          "distractors": {
            "A": "Removing the Delete button from the page layout only hides the button on the record page; users can still delete records via list views, mass delete tools, or API.",
            "C": "Making page layouts read-only does not restrict the object-level Delete permission, allowing deletions to continue via other tools."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Remove Order Delete permission from profiles and permission sets.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Removing the 'Delete' object permission on the Order object from profiles and permission sets guarantees that users cannot delete orders through any entry point, including the standard UI, list views, mass delete tools, and the API / Data Loader.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q52 Universal Containers (UC) is in a legal dispute regarding se"
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
          "whyCorrect": "Reports saved in the 'Private Reports' (or 'My Private Reports') folder are strictly confidential and accessible ONLY to the user who created and owns them. Even System Administrators with the 'View All Data' administrative permission cannot view, run, or edit reports stored in another user's private reports folder (the only way an admin can access them is by logging in as the user).",
          "distractors": {
            "B": "The 'My Private Reports' folder cannot be shared with other users under any circumstances; it has no sharing settings.",
            "C": "The 'View All Data' permission grants broad access to records across the organization, but explicitly does NOT grant access to reports or dashboards stored in other users' personal/private folders."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "The report owner",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Reports saved in the 'Private Reports' (or 'My Private Reports') folder are strictly confidential and accessible ONLY to the user who created and owns them. Even System Administrators with the 'View All Data' administrative permission cannot view, run, or edit reports stored in another user's private reports folder (the only way an admin can access them is by logging in as the user).",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q54 A support representative at Universal Containers created a r"
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
          "whyCorrect": "When creating an ownership-based or criteria-based sharing rule in Salesforce Setup, the target groups available under 'Select the users to share with' are: Public Groups, Roles, Roles and Internal Subordinates, and Territories (if Enterprise Territory Management is enabled). 'Roles' is a standard supported option.",
          "distractors": {
            "B": "Sharing rules cannot be configured to share with individual 'Users'. Individual user access must be granted via Manual Sharing, Teams, or programmatic sharing.",
            "C": "Sharing rules cannot share with 'Profiles'. In Salesforce's security architecture, record sharing is strictly decoupled from profiles (profiles control CRED and FLS, not record sharing rules)."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Roles",
            "docTopic": "Object & Field-Level Security",
            "webReason": "When creating an ownership-based or criteria-based sharing rule in Salesforce Setup, the target groups available under 'Select the users to share with' are: Public Groups, Roles, Roles and Internal Subordinates, and Territories (if Enterprise Territory Management is enabled). 'Roles' is a standard supported option.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q55 Which option can be selected to share data when creating a s"
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
          "whyCorrect": "In the exam architecture context, Option A is the intended solution utilizing sharing rules to open up cross-branch visibility among sales managers for segment-aligned accounts.",
          "distractors": {
            "B": "Public groups can only contain users, roles, and other groups\u2014account records cannot be added to a public group, and permission sets cannot grant record-level sharing.",
            "C": "Placing managers from different countries into the same role violates organizational reporting structures and still would not grant access between peers when Account OWD is Private."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Create owner-based sharing rule to grant access to account records that have the same segment to all sales manager roles.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "In the exam architecture context, Option A is the intended solution utilizing sharing rules to open up cross-branch visibility among sales managers for segment-aligned accounts.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q59 Besides their own team accounts, sales managers at Universal"
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
          "whyCorrect": "Removing Read permission on the Driver profile ensures drivers cannot see feedback records. Transferring ownership of the submitted feedback to the driver's manager ensures the record is owned by the management team. Utilizing the Role Hierarchy (Grant Access Using Hierarchies enabled) ensures that executives and managers above the driver's manager automatically gain Read access to the records.",
          "distractors": {
            "A": "Transferring ownership to the driver would make the driver the record owner, and creating an ownership-based sharing rule is unnecessary when the Role Hierarchy is already available.",
            "C": "Transferring ownership to the driver means the driver is the record owner; even without Read object permission, best practice avoids assigning sensitive supervisory feedback ownership to the subject being reviewed."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Remove Read permission on the Driver profile, have feedback ownership transferred to the driver's manager when feedback is submitted, and use the Role Hierarchy to give access to a driver's manager.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Removing Read permission on the Driver profile ensures drivers cannot see feedback records. Transferring ownership of the submitted feedback to the driver's manager ensures the record is owned by the management team. Utilizing the Role Hierarchy (Grant Access Using Hierarchies enabled) ensures that executives and managers above the driver's manager automatically gain Read access to the records.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q64 Universal Containers has a Performance Feedback custom objec"
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
          "whyCorrect": "The 'View All' object permission grants read-only access to all records of that specific object (Opportunity), overriding OWD and sharing rules without allowing edit or delete operations. Packaging this permission into a Permission Set allows assigning it specifically to the key members of the sales reporting team, adhering to the principle of least privilege without altering profiles or exposing other confidential business objects.",
          "distractors": {
            "A": "Granting 'View All Data' on the profile gives global read access across every single standard and custom object in the organization, violating client data privacy.",
            "B": "A permission set with 'View All Data' still exposes every object in the organization, violating the principle of least privilege."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Create a permission set that grants the View All permission for Opportunity.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "The 'View All' object permission grants read-only access to all records of that specific object (Opportunity), overriding OWD and sharing rules without allowing edit or delete operations. Packaging this permission into a Permission Set allows assigning it specifically to the key members of the sales reporting team, adhering to the principle of least privilege without altering profiles or exposing other confidential business objects.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q68 Universal Containers (UC) has a mostly Private organization-"
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
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "In Salesforce, Permission Sets are strictly ADDITIVE\u2014they can grant permissions, but they cannot revoke, restrict, or hide functionality already granted by a user's base Profile. Therefore, Option C is technically impossible. To provide a pilot group with new functionality while hiding legacy functionality, an architect must clone the existing Sales Rep profile, adjust settings on the cloned profile (enabling the new app and revoking the legacy functions), and assign the pilot users to this new profile.",
          "distractors": {
            "B": "Revoking access to legacy functions on the base Sales Rep profile would remove access for all sales reps across the company, impacting non-pilot users.",
            "C": "Permission sets are strictly additive and cannot revoke, hide, or restrict access granted by a user's profile."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Clone the Sales Rep profile, adjust settings, and assign the pilot users the new profile.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "In Salesforce, Permission Sets are strictly ADDITIVE\u2014they can grant permissions, but they cannot revoke, restrict, or hide functionality already granted by a user's base Profile. Therefore, Option C is technically impossible. To provide a pilot group with new functionality while hiding legacy functionality, an architect must clone the existing Sales Rep profile, adjust settings on the cloned profile (enabling the new app and revoking the legacy functions), and assign the pilot users to this new profile.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q71 Universal Containers is planning to pilot a new application "
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
          "whyCorrect": "Dynamic Forms enables field- and section-level component visibility rules directly within Lightning App Builder based on record criteria (such as Record Type). On an object with over 400 fields and 8 business processes, Dynamic Forms avoids the massive maintenance overhead and page layout sprawl of managing multiple traditional page layouts, while optimizing Lightning page performance.",
          "distractors": {
            "B": "Maintaining 8 separate traditional page layouts for an object with over 400 fields creates severe maintenance overhead and duplication whenever common fields need to be updated."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Use Dynamic Forms with different field sections representing the relevant fields per case type, and control visibility of sections by Case Record Type value.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Dynamic Forms enables field- and section-level component visibility rules directly within Lightning App Builder based on record criteria (such as Record Type). On an object with over 400 fields and 8 business processes, Dynamic Forms avoids the massive maintenance overhead and page layout sprawl of managing multiple traditional page layouts, while optimizing Lightning page performance.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q73 Universal Containers uses the standard Case object to track "
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
          "whyCorrect": "Criteria-based sharing rules allow records to be shared automatically based on field values rather than ownership. By creating a criteria-based sharing rule filtering on Person Accounts (e.g. IsPersonAccount = TRUE), all retail customer accounts are shared with the Retail Sales role without exposing commercial Business Accounts.",
          "distractors": {
            "B": "AccountContactRelation does not grant Account object access in a Private Account OWD model.",
            "C": "Profile record type assignments control which record types a user can choose when creating new records; they do not control record-level sharing or visibility."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Create a criteria-based sharing rule giving the Retail Sales role access to Accounts of type PersonAccount.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Criteria-based sharing rules allow records to be shared automatically based on field values rather than ownership. By creating a criteria-based sharing rule filtering on Person Accounts (e.g. IsPersonAccount = TRUE), all retail customer accounts are shared with the Retail Sales role without exposing commercial Business Accounts.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q77 Universal Containers uses Person Accounts to represent retai"
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
            "A"
          ],
          "isMultiSelect": false,
          "expectedCount": 1,
          "whyCorrect": "The 'View All' permission on a child object (Case) does NOT trigger Parent Implicit Sharing for parent Account records. When Account OWD is set to Private, service reps will not automatically be able to access parent Accounts. Option C is false because if Contacts are 'Controlled by Parent', contact access is inherited from the parent Account; since reps lack access to the parent Account, they cannot access the Contacts either. Therefore, Option A correctly identifies the core architectural limitation.",
          "distractors": {
            "B": "Option B is an incomplete consequence of the parent Account restriction, whereas Option A identifies the root architectural limitation on Accounts.",
            "C": "If Contact OWD is Controlled by Parent, contact visibility requires access to the parent Account. Because reps lack access to the Account, they CANNOT access the Contacts; thus, statement C is demonstrably false."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Service reps will not be able to access the relevant Accounts if their OWD is Private .",
            "docTopic": "Object & Field-Level Security",
            "webReason": "The 'View All' permission on a child object (Case) does NOT trigger Parent Implicit Sharing for parent Account records. When Account OWD is set to Private, service reps will not automatically be able to access parent Accounts. Option C is false because if Contacts are 'Controlled by Parent', contact access is inherited from the parent Account; since reps lack access to the parent Account, they cannot access the Contacts either. Therefore, Option A correctly identifies the core architectural limitation.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q93 Universal Containers service reps are assigned to a profile "
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
          "whyCorrect": "Files uploaded to a user's private library in Files Home are private to that user and do not roll up via the Role Hierarchy. However, users with the administrative permission 'View All Data' have system-wide visibility to view all data in the organization, including files in private libraries.",
          "distractors": {
            "B": "The Role Hierarchy does not apply to files stored in personal/private libraries in Files Home.",
            "C": "While standard users without administrative permissions cannot access private files, users with 'View All Data' permission can access them."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "The user and users with View All Data permission",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Files uploaded to a user's private library in Files Home are private to that user and do not roll up via the Role Hierarchy. However, users with the administrative permission 'View All Data' have system-wide visibility to view all data in the organization, including files in private libraries.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q94 A user uploads a PDF to the Files Home private library. Who "
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
          "whyCorrect": "Account Teams enable account owners to define a collaborative team of supporting users (such as Legal, Engineering, and Finance) with granular record-level access (Read-Only or Read/Write) across Accounts and related Opportunities and Cases. Setting up a Default Account Team in personal settings allows sales reps to automatically add their supporting team to new accounts or add them with one click ('Add Default Team') to existing accounts. Because the supporting team members do not change frequently across deals, Default Account Teams automate access, boost sales productivity, and strictly enforce the principle of least privilege.",
          "distractors": {
            "A": "Criteria-based sharing rules evaluate static record field attributes (e.g., Industry = 'Banking') rather than rep-specific collaboration requirements. They cannot dynamically adjust based on which supporting reps assist which sales rep without creating unmaintainable administrative overhead.",
            "C": "Assigning 'View All Data' via a permission set severely violates the principle of least privilege and enterprise security best practices. 'View All Data' grants org-wide visibility across all records of all objects, exposing sensitive corporate data to supporting users who only need access to specific deal accounts."
          },
          "domain": "Object & Field-Level Security",
          "domainSlug": "object-field-security",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Leverage the default Account team.",
            "docTopic": "Object & Field-Level Security",
            "webReason": "Account Teams enable account owners to define a collaborative team of supporting users (such as Legal, Engineering, and Finance) with granular record-level access (Read-Only or Read/Write) across Accounts and related Opportunities and Cases. Setting up a Default Account Team in personal settings allows sales reps to automatically add their supporting team to new accounts or add them with one click ('Add Default Team') to existing accounts. Because the supporting team members do not change frequently across deals, Default Account Teams automate access, boost sales productivity, and strictly enforce the principle of least privilege.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q98 Sales reps at Universal Containers (UC) are complaining abou"
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
          "whyCorrect": "Protected Custom Metadata Types (CMDT) provide metadata encryption and encapsulation only when installed as part of a released Managed Package. In a managed package, protected CMDT records and fields are completely inaccessible from the subscriber org's Setup UI, SOQL queries, and APIs, even for users with 'View Setup and Configuration' or 'Modify All Data'. Only Apex code running within the managed package's own namespace can query and utilize the confidential key. In unlocked or unmanaged packages, protected CMDT records remain fully visible in Setup to anyone with 'View Setup'.",
          "distractors": {
            "B": "Protected Custom Metadata Types only enforce encapsulation when deployed via a Managed Package. In an unlocked package or unmanaged package, protected custom metadata types and records remain visible in the Setup UI to any user possessing the 'View Setup and Configuration' permission.",
            "C": "Restricting custom metadata access via profiles controls SOQL execution access in user mode, but users with 'View Setup and Configuration' can navigate to Setup -> Custom Metadata Types -> Manage Records and read the encryption key in plain text."
          },
          "domain": "Performance, Scalability & Large Data Volumes",
          "domainSlug": "performance-scalability",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Create a protected custom metadata type that stores the encryption key. Package the protected custom metadata type with its associated records in a managed package. Install the package in the production org.",
            "docTopic": "Performance, Scalability & Large Data Volumes",
            "webReason": "Protected Custom Metadata Types (CMDT) provide metadata encryption and encapsulation only when installed as part of a released Managed Package. In a managed package, protected CMDT records and fields are completely inaccessible from the subscriber org's Setup UI, SOQL queries, and APIs, even for users with 'View Setup and Configuration' or 'Modify All Data'. Only Apex code running within the managed package's own namespace can query and utilize the confidential key. In unlocked or unmanaged packages, protected CMDT records remain fully visible in Setup to anyone with 'View Setup'.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q8 Universal Containers (UC) would like to store an encryption "
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
          "whyCorrect": "Option B ('Crowder Locking') is a well-known legacy OCR scanning artifact/typo in exam dumps for 'Granular Locking'. Granular Locking is a specialized platform feature enabled by Salesforce Support that alters group maintenance locking behavior during role hierarchy realignments. By default, updating the role hierarchy locks the entire group maintenance table, preventing any concurrent role or sharing updates across the org. Granular Locking locks only the specific sub-branches of the role hierarchy being altered, allowing concurrent administrative changes and preventing system-wide lock contention and timeouts.",
          "distractors": {
            "A": "Partitioning by Divisions is a legacy feature used to segment large data volumes (typically >1M records) into logical divisions to reduce list view and reporting query search scopes; it does not alter group maintenance locking behavior during role hierarchy reorganizations.",
            "C": "'Slurry Table Indexing' is an OCR corruption of 'Skinny Table Indexing'. Skinny tables combine standard and custom fields into a flat, read-optimized database table to accelerate SOQL queries and reports; they do not assist with role hierarchy realignments or group locking."
          },
          "domain": "Performance, Scalability & Large Data Volumes",
          "domainSlug": "performance-scalability",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Crowder Locking",
            "docTopic": "Performance, Scalability & Large Data Volumes",
            "webReason": "Option B ('Crowder Locking') is a well-known legacy OCR scanning artifact/typo in exam dumps for 'Granular Locking'. Granular Locking is a specialized platform feature enabled by Salesforce Support that alters group maintenance locking behavior during role hierarchy realignments. By default, updating the role hierarchy locks the entire group maintenance table, preventing any concurrent role or sharing updates across the org. Granular Locking locks only the specific sub-branches of the role hierarchy being altered, allowing concurrent administrative changes and preventing system-wide lock contention and timeouts.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q17 Which advanced tool should Salesforce enable for large-scale"
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
          "whyCorrect": "Mass reorganizations of a complex role hierarchy and account ownership reassignments trigger massive sharing recalculations across millions of share table rows (AccountShare, ContactShare, OpportunityShare, CaseShare). Parallel Sharing Rule Recalculation splits sharing rule calculations into multiple parallel asynchronous threads rather than executing them in a single serial thread. This dramatically reduces total recalculation time, prevents apex batch timeouts, and prevents sharing lock contention during large-scale enterprise realignments.",
          "distractors": {
            "A": "Partitioning data using Divisions partitions records logically for reporting and list views, but does not optimize or parallelize sharing recalculations or role hierarchy operations.",
            "C": "Skinny tables optimize read query performance for high-volume reports and SOQL queries by avoiding database table joins; they do not optimize DML operations, ownership reassignments, or sharing recalculations."
          },
          "domain": "Performance, Scalability & Large Data Volumes",
          "domainSlug": "performance-scalability",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Parallel Sharing Rule recalculation",
            "docTopic": "Performance, Scalability & Large Data Volumes",
            "webReason": "Mass reorganizations of a complex role hierarchy and account ownership reassignments trigger massive sharing recalculations across millions of share table rows (AccountShare, ContactShare, OpportunityShare, CaseShare). Parallel Sharing Rule Recalculation splits sharing rule calculations into multiple parallel asynchronous threads rather than executing them in a single serial thread. This dramatically reduces total recalculation time, prevents apex batch timeouts, and prevents sharing lock contention during large-scale enterprise realignments.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q21 Universal Containers (UC) operates worldwide, with offices i"
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
          "whyCorrect": "Mass reorganizations of a complex role hierarchy and account ownership reassignments trigger massive sharing recalculations across millions of share table rows (AccountShare, ContactShare, OpportunityShare, CaseShare). Parallel Sharing Rule Recalculation splits sharing rule calculations into multiple parallel asynchronous threads rather than executing them in a single serial thread. This dramatically reduces total recalculation time, prevents apex batch timeouts, and prevents sharing lock contention during large-scale enterprise realignments.",
          "distractors": {
            "A": "Partitioning data using Divisions partitions records logically for reporting and list views, but does not optimize or parallelize sharing recalculations or role hierarchy operations.",
            "C": "Skinny tables optimize read query performance for high-volume reports and SOQL queries by avoiding database table joins; they do not optimize DML operations, ownership reassignments, or sharing recalculations."
          },
          "domain": "Performance, Scalability & Large Data Volumes",
          "domainSlug": "performance-scalability",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Deferred Sharing Recalculation",
            "docTopic": "Performance, Scalability & Large Data Volumes",
            "webReason": "Mass reorganizations of a complex role hierarchy and account ownership reassignments trigger massive sharing recalculations across millions of share table rows (AccountShare, ContactShare, OpportunityShare, CaseShare). Parallel Sharing Rule Recalculation splits sharing rule calculations into multiple parallel asynchronous threads rather than executing them in a single serial thread. This dramatically reduces total recalculation time, prevents apex batch timeouts, and prevents sharing lock contention during large-scale enterprise realignments.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q25 Universal Containers (UC) operates worldwide, with offices i"
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
          "whyCorrect": "Protected Custom Metadata Types (CMDT) provide metadata encryption and encapsulation only when installed as part of a released Managed Package. In a managed package, protected CMDT records and fields are completely inaccessible from the subscriber org's Setup UI, SOQL queries, and APIs, even for users with 'View Setup and Configuration' or 'Modify All Data'. Only Apex code running within the managed package's own namespace can query and utilize the confidential key. In unlocked or unmanaged packages, protected CMDT records remain fully visible in Setup to anyone with 'View Setup'.",
          "distractors": {
            "B": "Protected Custom Metadata Types only enforce encapsulation when deployed via a Managed Package. In an unlocked package or unmanaged package, protected custom metadata types and records remain visible in the Setup UI to any user possessing the 'View Setup and Configuration' permission.",
            "C": "Restricting custom metadata access via profiles controls SOQL execution access in user mode, but users with 'View Setup and Configuration' can navigate to Setup -> Custom Metadata Types -> Manage Records and read the encryption key in plain text."
          },
          "domain": "Performance, Scalability & Large Data Volumes",
          "domainSlug": "performance-scalability",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Create a protected custom metadata type that stores the encryption key. Packag e the protected custom metadata type with its associated records in a managed package. Install the package in the production org.",
            "docTopic": "Performance, Scalability & Large Data Volumes",
            "webReason": "Protected Custom Metadata Types (CMDT) provide metadata encryption and encapsulation only when installed as part of a released Managed Package. In a managed package, protected CMDT records and fields are completely inaccessible from the subscriber org's Setup UI, SOQL queries, and APIs, even for users with 'View Setup and Configuration' or 'Modify All Data'. Only Apex code running within the managed package's own namespace can query and utilize the confidential key. In unlocked or unmanaged packages, protected CMDT records remain fully visible in Setup to anyone with 'View Setup'.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q56 Universal Containers (UC) would like to store an encryption "
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
          "whyCorrect": "Salesforce defines Account Ownership Data Skew when a single user owns more than 10,000 records of an object. Here, donation reps own more than 50,000 accounts each. When an account owner is assigned a role in the role hierarchy, any updates to that user's role, territory, or sharing settings, as well as operations on child records (Contacts, Donations/Opportunities), require the system to lock the account owner and all related child records to recalculate sharing trees. This extreme data skew causes severe lock contention, thread queueing, and significant system degradation.",
          "distractors": {
            "A": "A sharing recalculation job is a temporary operational process, not the architectural root cause of chronic performance degradation caused by skewed record distributions.",
            "C": "The performance degradation is caused by database and record-locking architecture bottlenecks from data skew, not incorrect record access configurations."
          },
          "domain": "Performance, Scalability & Large Data Volumes",
          "domainSlug": "performance-scalability",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "There is an Account ownership data skew problem.",
            "docTopic": "Performance, Scalability & Large Data Volumes",
            "webReason": "Salesforce defines Account Ownership Data Skew when a single user owns more than 10,000 records of an object. Here, donation reps own more than 50,000 accounts each. When an account owner is assigned a role in the role hierarchy, any updates to that user's role, territory, or sharing settings, as well as operations on child records (Contacts, Donations/Opportunities), require the system to lock the account owner and all related child records to recalculate sharing trees. This extreme data skew causes severe lock contention, thread queueing, and significant system degradation.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q84 Universal Containers (UC) is a non-profit organization with "
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
          "whyCorrect": "Under Salesforce's Separate Organization-Wide Defaults (External Sharing Model), organizations can define separate default access levels for internal and external users. The External OWD must be equal to or more restrictive than the Internal OWD. To allow internal employees to view all delivery records (Public Read-Only) while restricting external distributors from viewing each other's deliveries, the architect must set External OWD to Private. Once set to Private, records can be selectively shared with specific distributors using sharing rules, sharing sets, or account relationships.",
          "distractors": {
            "A": "Sharing rules can only expand access; they cannot restrict it. If External OWD is Public Read-Only, distributors already see all records, and an ownership-based sharing rule will not restrict visibility.",
            "B": "Criteria-based sharing rules can only grant additional access on top of the baseline OWD. They cannot hide or restrict records when the External OWD is Public Read-Only."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Set the External OWD to Private for the Delivery object.",
            "docTopic": "External & Community User Access",
            "webReason": "Under Salesforce's Separate Organization-Wide Defaults (External Sharing Model), organizations can define separate default access levels for internal and external users. The External OWD must be equal to or more restrictive than the Internal OWD. To allow internal employees to view all delivery records (Public Read-Only) while restricting external distributors from viewing each other's deliveries, the architect must set External OWD to Private. Once set to Private, records can be selectively shared with specific distributors using sharing rules, sharing sets, or account relationships.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q1 Universal Containers (UC) is looking to expand its delivery "
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
          "whyCorrect": "In Salesforce Experience Cloud, Partner Accounts can generate an automated external role hierarchy, but Salesforce enforces a hard maximum of three (3) role levels per partner account: Partner Executive, Partner Manager, and Partner User. The affiliate's new hierarchy contains four distinct levels (Sales VP -> Director of Sales -> Sales Manager -> Sales Reps). Because Salesforce cannot provision a 4-tier role hierarchy for a partner account, the standard role rollup cannot natively accommodate all four levels.",
          "distractors": {
            "A": "Partner Community licenses fully support external role hierarchies (up to 3 levels), unlike high-volume Customer Community licenses.",
            "C": "The Channel Manager is an internal Salesforce role positioned directly above the Partner Executive role in the internal role hierarchy. This is standard functionality and not the limiting factor in the affiliate's internal sales structure."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Partner User roles are limited to three levels.",
            "docTopic": "External & Community User Access",
            "webReason": "In Salesforce Experience Cloud, Partner Accounts can generate an automated external role hierarchy, but Salesforce enforces a hard maximum of three (3) role levels per partner account: Partner Executive, Partner Manager, and Partner User. The affiliate's new hierarchy contains four distinct levels (Sales VP -> Director of Sales -> Sales Manager -> Sales Reps). Because Salesforce cannot provision a 4-tier role hierarchy for a partner account, the standard role rollup cannot natively accommodate all four levels.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q16 Universal Containers (UC) has affiliates who sell containers"
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
          "whyCorrect": "Site User Visibility (located in Setup -> Sharing Settings) controls whether external community users can see, search for, and discover other external users who are members of the same Experience Cloud site. When Site User Visibility is turned off (unchecked), external users cannot find or view other external users in user searches, Chatter mentions, or directory components. It does not affect their ability to view or search for internal users.",
          "distractors": {
            "A": "Updating a user profile is governed by object permissions on the User object and the site's profile edit settings, not Site User Visibility.",
            "C": "Disabling Site User Visibility specifically restricts visibility into peer external users; external users retain the ability to search for and view internal users who are exposed in the site."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Searching for other external users.",
            "docTopic": "External & Community User Access",
            "webReason": "Site User Visibility (located in Setup -> Sharing Settings) controls whether external community users can see, search for, and discover other external users who are members of the same Experience Cloud site. When Site User Visibility is turned off (unchecked), external users cannot find or view other external users in user searches, Chatter mentions, or directory components. It does not affect their ability to view or search for internal users.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q22 Which community function is impacted by having the Site User"
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
          "whyCorrect": "With 200 distributors, criteria-based sharing rules (Options A and B) cannot be used because Salesforce enforces a strict platform limit of 50 criteria-based sharing rules per object. In contrast, Sharing Sets (supported for Partner Community and Customer Community Plus profiles) provide an automated, scalable mechanism that grants external users access to records by mapping fields on the target object (Delivery.Account__c) to the user's account (User.AccountId). A single sharing set configured on the Distributor profile dynamically grants access across all 200 distributors without consuming sharing rules or incurring group maintenance overhead.",
          "distractors": {
            "A": "Creating criteria-based sharing rules for 200 distributors would require 200 separate criteria-based sharing rules, exceeding the Salesforce limit of 50 criteria-based sharing rules per object by 4x.",
            "B": "Similar to Option A, creating criteria-based sharing rules targeting each distributor's role would require 200 rules, directly violating the hard limit of 50 criteria-based sharing rules per object."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Create a Sharing Set for the Distributor profile to grant access to the Delivery object.",
            "docTopic": "External & Community User Access",
            "webReason": "With 200 distributors, criteria-based sharing rules (Options A and B) cannot be used because Salesforce enforces a strict platform limit of 50 criteria-based sharing rules per object. In contrast, Sharing Sets (supported for Partner Community and Customer Community Plus profiles) provide an automated, scalable mechanism that grants external users access to records by mapping fields on the target object (Delivery.Account__c) to the user's account (User.AccountId). A single sharing set configured on the Distributor profile dynamically grants access across all 200 distributors without consuming sharing rules or incurring group maintenance overhead.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q24 Universal Containers (UC) has a partner community for its 20"
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
          "whyCorrect": "Customer Community licenses are High-Volume Portal Users (HVPU). HVPUs do not participate in the Salesforce Role Hierarchy and do not utilize standard share tables (e.g., CaseShare). Consequently, standard sharing rules, manual sharing, and Apex managed sharing are not supported for Customer Community users. The standard, optimum, and officially supported declarative mechanism to grant Customer Community users access to records related to their account or contact is a Sharing Set (Setup -> Digital Experiences -> Settings -> Sharing Sets), mapping Case.AccountId = User.AccountId.",
          "distractors": {
            "A": "Customer Community users lack roles and cannot be targeted by standard owner-based or criteria-based sharing rules.",
            "B": "Apex managed sharing cannot be used to grant access to Customer Community users because they do not have standard share table entries and do not support record-level row sharing."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Create a sharing set to share cases with the students.",
            "docTopic": "External & Community User Access",
            "webReason": "Customer Community licenses are High-Volume Portal Users (HVPU). HVPUs do not participate in the Salesforce Role Hierarchy and do not utilize standard share tables (e.g., CaseShare). Consequently, standard sharing rules, manual sharing, and Apex managed sharing are not supported for Customer Community users. The standard, optimum, and officially supported declarative mechanism to grant Customer Community users access to records related to their account or contact is a Sharing Set (Setup -> Digital Experiences -> Settings -> Sharing Sets), mapping Case.AccountId = User.AccountId.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q27 Universal Containers (UC) delivers training and courses to s"
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
          "whyCorrect": "For custom objects, the 'Grant Access Using Hierarchies' checkbox in Sharing Settings is configurable and can be disabled by an administrator (unlike standard objects where it is permanently enabled). When 'Grant Access Using Hierarchies' is unchecked for a custom object with a Private OWD, users higher up in the Role Hierarchy do NOT inherit automatic access to records owned by or shared with their subordinates. Since the role hierarchy structure was confirmed as correct, the disabling of this setting is the exact reason sales managers cannot view their teams' Shipment records.",
          "distractors": {
            "B": "Role Hierarchy implicit sharing is an automated platform mechanism for standard parent-child relationships (e.g., Account to Opportunity); it is not a configurable administrative setting that can be toggled on or off for custom objects.",
            "C": "Managers do not rely on ownership-based sharing rules to see their direct reports' records; hierarchical access is natively governed by the role hierarchy and the 'Grant Access Using Hierarchies' setting."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "The Grant Access Using Hierarchies option on Shipment Sharing Settings was incorrectly disabled by the admin.",
            "docTopic": "External & Community User Access",
            "webReason": "For custom objects, the 'Grant Access Using Hierarchies' checkbox in Sharing Settings is configurable and can be disabled by an administrator (unlike standard objects where it is permanently enabled). When 'Grant Access Using Hierarchies' is unchecked for a custom object with a Private OWD, users higher up in the Role Hierarchy do NOT inherit automatic access to records owned by or shared with their subordinates. Since the role hierarchy structure was confirmed as correct, the disabling of this setting is the exact reason sales managers cannot view their teams' Shipment records.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q46 Universal Containers (UC) sales managers are complaining tha"
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
          "whyCorrect": "In Salesforce Experience Cloud, access to standard Sales Cloud objects\u2014specifically Opportunities, Leads, and Campaigns\u2014is strictly limited to Partner Community licenses (or Lightning External Apps Plus). Neither Customer Community nor Customer Community Plus licenses support object permissions or access to Opportunities under any circumstances. Therefore, regardless of user volume, Partner Community is the only license type that satisfies the requirement to view and collaborate on closing Opportunities.",
          "distractors": {
            "A": "Customer Community licenses are designed for high-volume customer service workflows and do not have access to Opportunities or standard sales objects.",
            "C": "Customer Community Plus licenses provide role hierarchies, reports/dashboards, and sharing rules for service/support, but they are strictly prohibited from accessing Sales Cloud objects such as Opportunities."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Partner Community",
            "docTopic": "External & Community User Access",
            "webReason": "In Salesforce Experience Cloud, access to standard Sales Cloud objects\u2014specifically Opportunities, Leads, and Campaigns\u2014is strictly limited to Partner Community licenses (or Lightning External Apps Plus). Neither Customer Community nor Customer Community Plus licenses support object permissions or access to Opportunities under any circumstances. Therefore, regardless of user volume, Partner Community is the only license type that satisfies the requirement to view and collaborate on closing Opportunities.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q48 Universal Containers uses 75,000 distributors that have clos"
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
          "whyCorrect": "Public Groups are specifically designed in Salesforce to assemble an arbitrary collection of individual users, roles, territories, and other groups who do not share a direct reporting or structural relationship. When an architect needs to grant a cross-functional or unrelated set of users access to a specific set of records (via criteria-based sharing rules, owner-based sharing rules, or manual sharing), creating a Public Group and targeting it in the sharing configuration is the standard architectural best practice.",
          "distractors": {
            "A": "The Role Hierarchy represents vertical, subordinate-to-manager reporting structures and cannot grant lateral access across unrelated users without exposing records upward to unintended managers.",
            "B": "Sharing Sets are exclusively for Experience Cloud external users and grant access strictly based on account or contact lookup relationships, not for arbitrary groups of internal unrelated users."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Public Groups",
            "docTopic": "External & Community User Access",
            "webReason": "Public Groups are specifically designed in Salesforce to assemble an arbitrary collection of individual users, roles, territories, and other groups who do not share a direct reporting or structural relationship. When an architect needs to grant a cross-functional or unrelated set of users access to a specific set of records (via criteria-based sharing rules, owner-based sharing rules, or manual sharing), creating a Public Group and targeting it in the sharing configuration is the standard architectural best practice.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q61 Which method should be used to grant an unrelated group of u"
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
          "whyCorrect": "Partner Super User access is the built-in Salesforce feature designed to give designated partner users extended visibility into records owned by other partner users within their own partner account. When assigned the 'Portal Super User' permission, partner managers can view, edit, and report on cases, leads, custom objects (such as Container), and opportunities owned by other partner users who occupy the same role or a role below them in the account hierarchy. It achieves intra-distributor data sharing without requiring custom sharing rules or compromising data isolation between different distributors.",
          "distractors": {
            "A": "Ownership-based sharing rules cannot scale for 200 distributors because maintaining granular distributor isolation would require hundreds of individual sharing rules and public groups, rapidly exhausting platform sharing rule limits.",
            "C": "Sharing sets apply profile-wide based on account matching criteria; they do not selectively elevate individual partner managers within the role hierarchy of a Partner Community."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Give Super User permission to the individual partner manager users.",
            "docTopic": "External & Community User Access",
            "webReason": "Partner Super User access is the built-in Salesforce feature designed to give designated partner users extended visibility into records owned by other partner users within their own partner account. When assigned the 'Portal Super User' permission, partner managers can view, edit, and report on cases, leads, custom objects (such as Container), and opportunities owned by other partner users who occupy the same role or a role below them in the account hierarchy. It achieves intra-distributor data sharing without requiring custom sharing rules or compromising data isolation between different distributors.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q63 Universal Containers (UC) has 200 distributors that use Part"
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
          "whyCorrect": "In Salesforce, standard objects such as Opportunity always have 'Grant Access Using Hierarchies' enabled (it cannot be disabled). Under hierarchy-based access inheritance, whenever a record is shared with a user\u2014whether through manual sharing, Apex sharing, or a sharing rule targeting a Public Group\u2014access automatically rolls up to all users above that user in the Role Hierarchy. Therefore, the sales engineers in the public group receive access via the sharing rule, and their managers in the Role Hierarchy automatically inherit access as well.",
          "distractors": {
            "B": "Role Hierarchy access inheritance only flows upward from subordinates to managers; it never flows downward to subordinates of managers.",
            "C": "Peer users at the same level in the Role Hierarchy do not inherit access from their peers; only the specific sales engineers who are members of the public group (and their superiors) gain access."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Sales engineers and their managers in the Role Hierarchy will also have access to these records.",
            "docTopic": "External & Community User Access",
            "webReason": "In Salesforce, standard objects such as Opportunity always have 'Grant Access Using Hierarchies' enabled (it cannot be disabled). Under hierarchy-based access inheritance, whenever a record is shared with a user\u2014whether through manual sharing, Apex sharing, or a sharing rule targeting a Public Group\u2014access automatically rolls up to all users above that user in the Role Hierarchy. Therefore, the sales engineers in the public group receive access via the sharing rule, and their managers in the Role Hierarchy automatically inherit access as well.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q66 Universal Containers created a public group with certain sal"
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
          "whyCorrect": "Salesforce supports Separate Organization-Wide Defaults (External Sharing Model), enabling administrators to configure Default Internal Access independently from Default External Access. Here, the architect can set Default External Access to Private (preventing external partners from viewing each other's feedback records) and set Default Internal Access to Public Read-Only (or Public Read/Write). This natively and declaratively grants all internal employees access to every ServiceFeedback record without requiring sharing rules, public groups, or role hierarchy manipulations.",
          "distractors": {
            "A": "While an owner-based sharing rule could grant access, it introduces unnecessary configuration and sharing recalculation overhead when the platform's native dual-OWD feature directly fulfills the requirement.",
            "B": "Placing all internal users above external partners in the role hierarchy is an extreme anti-pattern that creates immense data skew, severe group maintenance locking, and maintenance overhead."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Set the OWD for Internal Users to Public Read-Only.",
            "docTopic": "External & Community User Access",
            "webReason": "Salesforce supports Separate Organization-Wide Defaults (External Sharing Model), enabling administrators to configure Default Internal Access independently from Default External Access. Here, the architect can set Default External Access to Private (preventing external partners from viewing each other's feedback records) and set Default Internal Access to Public Read-Only (or Public Read/Write). This natively and declaratively grants all internal employees access to every ServiceFeedback record without requiring sharing rules, public groups, or role hierarchy manipulations.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q67 A custom ServiceFeedback object is used to collect partner f"
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
          "whyCorrect": "Super User access (referred to in setup and documentation as 'Partner Super User' or 'Portal Super User') is supported for both Partner Community and Customer Community Plus license holders. It allows designated external users within an account to view, edit, and report on cases (and other supported objects) submitted by other users belonging to the same account and occupying the same or lower role level. It precisely matches the requirement to selectively grant specific agents peer-level case visibility within their distributor account.",
          "distractors": {
            "A": "There is no standard 'community admin permission' on permission sets that grants selective record-level case visibility among peers in an Experience Cloud site.",
            "B": "Delegated External Administration allows an external user to manage specific administrative tasks (such as creating users, resetting passwords, and managing permission sets) for their account, but does not grant record-level sharing access to cases created by other agents."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Partner super user",
            "docTopic": "External & Community User Access",
            "webReason": "Super User access (referred to in setup and documentation as 'Partner Super User' or 'Portal Super User') is supported for both Partner Community and Customer Community Plus license holders. It allows designated external users within an account to view, edit, and report on cases (and other supported objects) submitted by other users belonging to the same account and occupying the same or lower role level. It precisely matches the requirement to selectively grant specific agents peer-level case visibility within their distributor account.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q69 Universal Containers has implemented Customer Community with"
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
          "whyCorrect": "Partner Community licenses support up to a three-level Role Hierarchy per partner account (Partner Executive, Partner Manager, Partner User). By assigning dealer managers to the Partner Manager role and service agents to the Partner User role under their respective dealership account, the native Role Hierarchy automatically grants dealer managers visibility to all cases raised by their own service agents via standard hierarchical inheritance ('Grant Access Using Hierarchies'). This requires zero administrative maintenance and scales automatically across thousands of dealerships.",
          "distractors": {
            "B": "With thousands of dealerships worldwide, creating sharing rules is technically impossible because Salesforce enforces a hard limit of 300 sharing rules per object (with only 50 criteria-based rules).",
            "C": "Share Groups are used exclusively to grant internal Salesforce users access to records owned by high-volume Customer Community users; they cannot be used to configure manager-to-subordinate sharing between external partner community users."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "A",
            "confirmedText": "Use the Role Hierarchy so that the cases raised by service agents will be visible to their relevant dealer managers.",
            "docTopic": "External & Community User Access",
            "webReason": "Partner Community licenses support up to a three-level Role Hierarchy per partner account (Partner Executive, Partner Manager, Partner User). By assigning dealer managers to the Partner Manager role and service agents to the Partner User role under their respective dealership account, the native Role Hierarchy automatically grants dealer managers visibility to all cases raised by their own service agents via standard hierarchical inheritance ('Grant Access Using Hierarchies'). This requires zero administrative maintenance and scales automatically across thousands of dealerships.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q80 Universal Containers (UC) is a fast-growing company that sel"
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
          "whyCorrect": "In Experience Cloud, Opportunities are considered Sales Cloud objects and are exclusively accessible to Partner Community licenses (or Lightning External Apps Plus). Neither Customer Community nor Customer Community Plus licenses provide object permissions, sharing capabilities, or access to the Opportunity object. Therefore, to enable external community users to view, create, or collaborate on Opportunities, UC must provision Partner Community licenses.",
          "distractors": {
            "A": "Customer Community licenses are high-volume portal licenses designed for basic customer service/support (Cases, Knowledge, Accounts, Contacts) and have no access to Opportunities.",
            "C": "Customer Community Plus licenses support advanced customer service scenarios with roles, reports/dashboards, and sharing rules, but they are restricted from accessing Sales Cloud objects such as Opportunities and Leads."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "B",
            "confirmedText": "Partner Community",
            "docTopic": "External & Community User Access",
            "webReason": "In Experience Cloud, Opportunities are considered Sales Cloud objects and are exclusively accessible to Partner Community licenses (or Lightning External Apps Plus). Neither Customer Community nor Customer Community Plus licenses provide object permissions, sharing capabilities, or access to the Opportunity object. Therefore, to enable external community users to view, create, or collaborate on Opportunities, UC must provision Partner Community licenses.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q83 In order to allow community users to collaborate on Opportun"
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
          "whyCorrect": "When external agents work for multiple distributor accounts, Salesforce's 'Contacts to Multiple Accounts' feature allows a single Contact record (representing the agent) to have secondary Account Contact Relationships (ACR) with multiple Accounts. Experience Cloud Sharing Sets natively support mapping access through Account Contact Relationships (User.Contact.RelatedContact.Account). By configuring a Sharing Set using ACR, the agent automatically and declaratively gains access to all distributor accounts to which they are related without writing custom code or maintaining individual sharing rules.",
          "distractors": {
            "A": "Apex managed sharing using AccountShare introduces significant development overhead, requires custom triggers on AccountContactRelation, and must handle manual recalculations upon relationship changes; declarative sharing sets are the recommended architectural best practice.",
            "B": "Sharing rules cannot dynamically evaluate multi-account contact affiliations on a per-agent basis and would require creating and updating numerous public groups or sharing rules as part-time agents change distributor affiliations."
          },
          "domain": "External & Community User Access",
          "domainSlug": "community-external-sharing",
          "challenge": {
            "confirmedAnswer": "C",
            "confirmedText": "Create a sharing set to share distributor accounts with agents using account contact relationship.",
            "docTopic": "External & Community User Access",
            "webReason": "When external agents work for multiple distributor accounts, Salesforce's 'Contacts to Multiple Accounts' feature allows a single Contact record (representing the agent) to have secondary Account Contact Relationships (ACR) with multiple Accounts. Experience Cloud Sharing Sets natively support mapping access through Account Contact Relationships (User.Contact.RelatedContact.Account). By configuring a Sharing Set using ACR, the agent automatically and declaratively gains access to all distributor accounts to which they are related without writing custom code or maintaining individual sharing rules.",
            "searchQuery": "Salesforce Sharing and Visibility Architect Q85 Universal Containers has implemented Customer Community with"
          }
        }
      ],
      "questionCount": 15
    }
  ]
};
