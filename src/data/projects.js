
//         id: '',
//         title: "",
//         description: "",
//         image: "",
//         completionDate: "",
//         githubRepoURL: "",
//         figmaURL: "",
//         liveURL: "",
//         role: "", //developer, designer, full-stack, front-end
//         highlights: [],
//         tags: [],
//         techStack: [],
//         impact: ""
//     },
// note - other attributes like challenges, etc will be added on a project level basis for now. could extend this data structure in the future 
// note - could add helper bees & k3 UI/UX work too. wanted to prioritize work with development as well here for this initial version.

export const projectsData = [
    {
        id: 'yippee-sudoku',
        title: "Yippee Sudoku!",
        description: "[In Progress] Personal sudoku project aimed at creating a fun and unique sudoku experience.",
        completionDate: "TBD",
        githubRepoURL: "https://github.com/rachelmcminn/sudoku-game",
        figmaURL: null,
        liveURL: null,
        role: "Full-Stack Developer",
        highlights: [],
        builtWith: ["React","Vite","HTML", "CSS"],
        impact: ""
    },
    {
        id: 'intune-connect',
        title: "JSM Intune Connect",
        description: "Integration tool connecting Microsoft Intune and Jira Service Management, automating IT asset imports and eliminating manual data entry.",
        completionDate: "March 2025",
        githubRepoURL: "https://github.com/rachelmcminn/Intune-Connect",
        figmaURL: null,
        liveURL: "https://marketplace.atlassian.com/apps/1231619/intune-connect-for-jsm-assets",
        role: "Full-Stack Developer",
        madeAt: "T4S Partners",
        highlights: [
            "Rebuilt legacy integration from scratch using modern React and Atlassian Forge framework",
            "Integrated Microsoft Graph API to sync device inventory from Intune to JSM CMDB",
            "Designed automated asset synchronization workflow reducing manual IT asset management overhead",
            "Delivered production-ready marketplace app serving enterprise IT departments"
        ],
        builtWith: ["React", "Typescript","HTML", "CSS", "JSM API"],
        impact: "Built out in React from Forge library project due to Jira platform updates."
    },
    {
        id: 'sla-insights',
        title: "SLA Insights for JSM",
        description: "Jira Service Management app that displays real-time SLA information directly in the Jira customer portal.",
        completionDate: "February 2025",
        githubRepoURL: null,
        figmaURL: null,
        liveURL: "https://marketplace.atlassian.com/apps/1233330/jsmxtend-sla-insights-for-jira-service-management",
        role: "Full-Stack Developer",
        madeAt: "T4S Partners",
        highlights: [
            "Built React-based Jira app using Atlassian Forge framework and Connect API",
            "Integrated with Jira Service Management API to fetch and display real-time SLA data",
            "Designed user-friendly interface surfacing complex SLA metrics in customer portal",
            "Published to Atlassian Marketplace as production-ready enterprise solution"
        ],
        builtWith: ["React","Typescript","HTML", "CSS", "JSM API"],
        impact: "Enhanced customer experience by providing SLA transparency, reducing support inquiries about ticket status"
    },
        {
        id: 'rlid-redesign',
        title: "Lane County's RLID",
        description: "Modernized a legacy government land information database with a redesigned interface built for complex property data searches.",
        completionDate: "June 2024",
        githubRepoURL: null,
        figmaURL: "https://www.figma.com/proto/OSXHD2QDoLN1YVEvHalmGP/RLID-Mockups?node-id=528-8026&p=f&t=84AaSppZVJmWBAal-1&scaling=min-zoom&content-scaling=fixed&page-id=518%3A5790", 
        liveURL: "",
        role: "Designer, Front-end Developer, Front-end Mentor",
        madeAt: "T4S Partners",
        highlights: [ 
            "Created high-fidelity Figma prototypes demonstrating proposed UX improvements for stakeholder approval",
            "Navigated complex business requirements to deliver an optimized, user-friendly solution",
            "Developed responsive front-end interface handling complex data interactions and real-time filtering based on user inputs",
            "Collaborated and taught developers best practices in front-end development",
        ],
        builtWith: ["Figma","OutSystems", "SQL", "JavaScript", "CSS"], 
        impact: "Successfully modernized legacy system while satisfying stringent government requirements and improving user experience. Also made an impact on the team as a teacher and mentor for their front-end developer."
    },
    {
        id: 'mbf-photo-stitching',
        title: "MyBrandForce Photo Stitching",
        description: "Web app that aggregates field merchandiser photos by brand and auto-stitches them into reports using Azure Computer Vision API services.",
        completionDate: "October 2024",
        githubRepoURL: null,
        figmaURL: "https://www.figma.com/proto/t7elBMv9LE4TxwBpT6Uflv/Photo-Stitching-UI--Copy-?node-id=33-1859&p=f&t=RPwbBQYBXm0BhGJG-0&scaling=min-zoom&content-scaling=fixed&page-id=33%3A1858", 
        liveURL: "",
        role: "Full-Stack Developer, UI/UX Designer",
        madeAt: "T4S Partners", 
        highlights: [
            "Integrated Azure REST API for intelligent photo stitching and layout generation",
            "Designed data pipeline pulling from company data lake to match photos with service requests and brands",
            "Built low-code solution in OutSystems reducing development time and maintenance overhead",
            "Created intuitive interface for reviewing and exporting stitched photo reports by brand"
        ],
        builtWith: ["Figma", "OutSystems", "JavaScript", "Azure API Services"],
        impact: "Automated manual photo compilation process, streamlining report generation for field visits"
    },
    {
        id: 'mbf-portal-dashboard',
        title: "MyBrandForce Client Portal MVP",
        description: "Client-facing dashboard for retail brands to monitor field activity, view store visit reports, and track campaign performance.",
        completionDate: "March 2024",
        githubRepoURL: null,
        figmaURL: "https://www.figma.com/proto/k63KGNWsFRidVSWv38cvY0/Client-Portal-v1.5--Copy-?node-id=33-5606&p=f&t=DydK1RgPbyJd57HD-1&scaling=min-zoom&content-scaling=fixed&page-id=5%3A41&starting-point-node-id=33%3A5606",
        liveURL: "",
        role: "Front-end Developer, UI/UX Designer",
        madeAt: "T4S Partners",
        highlights: [ 
            "Led end-to-end product development from concept through MVP launch",
            "Designed intuitive data visualization for campaign analytics and store visit tracking",
            "Built responsive dashboard with real-time data updates and filtering capabilities",
            "Collaborated with stakeholders to prioritize features for initial release"
        ],
        builtWith: ["Figma","OutSystems", "JavaScript", "Azure API Services", "Microsoft PowerApps"],
        impact: "Delivered MVP within 3-month timeline, providing clients self-service access to campaign data"
    },
    {
        id: 'mbf-mobile',
        title: "MyBrandForce Mobile Application",
        description: "Mobile platform for gig-workforce Brand Agents to receive retail assignments, capture in-store data, and submit offline.",
        completionDate: "January 2023",
        githubRepoURL: null,
        figmaURL: "https://www.figma.com/proto/YY1q5tz37bJgSK9pHtUrRs/MBF-Native-App---New-Design--Copy-?node-id=2928-10757&p=f&t=RPwbBQYBXm0BhGJG-0&scaling=scale-down&content-scaling=fixed&page-id=2928%3A10673&starting-point-node-id=2928%3A10757",
        liveURL: null,
        appleStoreURL: "https://apps.apple.com/us/app/mybrandforce/id6469874326",
        role: "Lead Front-End Developer, UI/UX Designer, some Fullstack work",
        madeAt: "T4S Partners",
        highlights: [ 
            "Conducted stakeholder interviews to define user workflows and pain points",
            "Created high-fidelity mockups and interactive prototypes for 15+ screens",
            "Developed mobile interface in OutSystems optimized for field use and offline functionality",
            "Collaborated with development team to ensure design feasibility and gather requirements"
        ],
        builtWith: ["Figma","OutSystems", "JavaScript", "HTML", "CSS"],
        impact: "Streamlined data collection for merchandiser workflows, reducing average task completion time" // TODO get metrics
    },
    {
        id: 'gremlinizer',
        title: "The Gremlinizer",
        description: "A fast-paced multiplayer word game where players race against the clock to type words before gremlins sabotage their keyboards.",
        completionDate: "May 2022",
        githubRepoURL: "https://github.com/rachelmcminn/gremlinizer",
        figmaURL: null,
        liveURL: null,
        role: "Developer",
        madeAt: "CU Boulder",
        highlights: [ 
            "Implemented real-time multiplayer functionality using WebSockets",
            "Designed custom audio effects and animations for gremlin interactions",
            "Built responsive game UI with CSS animations and transitions",
            "Created game logic for word validation and scoring system"
        ],
        builtWith: ["Node.js","JavaScript","HTML", "CSS", "Websockets"],
        impact: "Capstone project for university"
    }
    

]