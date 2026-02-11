
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
// note - other attributes like liveDemoURL, impact, highlights, challenges, etc will be added on a project level basis for now. could extend this data structure in the future 
// note - could add helper bees & k3 UI/UX work too. wanted to prioritize work with development as well here for this initial version.

export const projectsData = [
    {
        id: 'yippee-sudoku',
        title: "Yippee Sudoku!",
        description: "sudoku but cool",
        image: null,
        completionDate: "TBD",
        githubRepoURL: "https://github.com/rachelmcminn/sudoku-game",
        figmaURL: "null",
        liveURL: "",
        role: "Developer",
        highlights: [],
        tags: [],
        techStack: [],
        impact: ""
    },
    {
        id: 'intune-connect',
        title: "JSM Intune Connect",
        description: "Rebuilt integration tool connecting Microsoft Intune and Jira Service Management, enabling automated asset imports to eliminate manual data entry. Published on Atlassian Marketplace as enterprise IT asset management solution.",
        image: null,
        completionDate: "March 2025",
        githubRepoURL: "https://github.com/rachelmcminn/Intune-Connect",
        figmaURL: null,
        liveURL: "https://marketplace.atlassian.com/apps/1231619/intune-connect-for-jsm-assets",
        role: "Full-Stack Developer",
        highlights: [
            "Rebuilt legacy integration from scratch using modern React and Atlassian Forge framework",
            "Integrated Microsoft Graph API to sync device inventory from Intune to JSM CMDB",
            "Designed automated asset synchronization workflow reducing manual IT asset management overhead",
            "Delivered production-ready marketplace app serving enterprise IT departments"
        ],
        tags: ["Jira", "React", "Atlassian Marketplace", "Microsoft Integration", "Enterprise", "IT Asset Management"],
        techStack: ["React", "Atlassian Forge", "Microsoft Graph API", "Jira Service Management API", "REST API"],
        impact: "Automated IT asset tracking for enterprises, eliminating hours of manual data entry between systems"
    },
    {
        id: 'mbf-photo-stitching',
        title: "MyBrandForce Photo Stitching",
        description: "Built an automated photo stitching web application that aggregates field merchandiser photos by brand and service request, and allows users to stitch multiple images into a single image with Azure Computer Vision API services.",
        image: null,
        completionDate: "October 2024",
        githubRepoURL: null,
        figmaURL: null, // TODO 
        liveURL: "",
        role: "UI/UX Designer and Full-Stack Developer", 
        highlights: [
            "Integrated Azure REST API for intelligent photo stitching and layout generation",
            "Designed data pipeline pulling from company data lake to match photos with service requests and brands",
            "Built low-code solution in OutSystems reducing development time and maintenance overhead",
            "Created intuitive interface for reviewing and exporting stitched photo reports by brand"
        ],
        tags: ["API Integration", "Web App"],
        techStack: ["OutSystems", "Microsoft Azure Data Lake", "Azure API Services", "Figma" ],
        impact: "Automated manual photo compilation process, streamlining report generation for field visits"
    },
    {
        id: 'sla-insights',
        title: "SLA Insights for JSM",
        description: "Developed a Jira Service Management app that displays real-time SLA information directly in the customer portal, providing transparency into support ticket response and resolution timelines. Published on Atlassian Marketplace.",
        image: null,
        completionDate: "February 2025",
        githubRepoURL: null,
        figmaURL: null,
        liveURL: "https://marketplace.atlassian.com/apps/1233330/jsmxtend-sla-insights-for-jira-service-management",
        role: "Full-Stack Developer",
        highlights: [
            "Built React-based Jira app using Atlassian Forge framework and Connect API",
            "Integrated with Jira Service Management API to fetch and display real-time SLA data",
            "Designed user-friendly interface surfacing complex SLA metrics in customer portal",
            "Published to Atlassian Marketplace as production-ready enterprise solution"
        ],
        tags: ["Jira", "React", "Atlassian Marketplace", "SaaS", "Enterprise"],
        techStack: ["React", "Atlassian Forge", "Jira Service Management API", "REST API"],
        impact: "Enhanced customer experience by providing SLA transparency, reducing support inquiries about ticket status"
    },
    {
        id: 'rlid-redesign',
        title: "Lane County's Regional Land Information Database (RLID)",
        description: "Redesigned and rebuilt Lane County's Regional Land Information Database (RLID) interface, modernizing a legacy system to handle complex property data searches while maintaining performance.",
        image: "null", //TODO
        completionDate: "June 2024",
        githubRepoURL: null,
        figmaURL: "null", //TODO
        role: "Full-Stack Developer and UI/UX Designer",
        highlights: [ 
            "Created high-fidelity Figma prototypes demonstrating proposed UX improvements for stakeholder approval",
            "Navigated complex business requirements to deliver an optimized, user-friendly solution",
            "Developed responsive front-end interface handling complex data interactions and real-time filtering based on user inputs",
            "Collaborated and taught developers best practices in front-end development",
        ],
        tags: ["Government", "Legacy Modernization", "Data Management"],
        techStack: ["OutSystems", "SQL", "JavaScript", "CSS"], 
        impact: "Successfully modernized legacy system while satisfying stringent government requirements and improving user experience. Also made an impact on the team as a teacher and mentor for their front-end developer."
    },
    {
        id: 'mbf-portal-dashboard',
        title: "MyBrandForce Client Portal MVP",
        description: "Designed and developed a client-facing dashboard enabling retail brands to monitor field activity, view store visit reports, and track performance metrics.",
        image: "null",
        completionDate: "March 2024",
        githubRepoURL: null,
        figmaURL: "", //TODO ADD 
        role: "Full-Stack Developer and UI/UX Designer",
        highlights: [ 
            "Led end-to-end product development from concept through MVP launch",
            "Designed intuitive data visualization for campaign analytics and store visit tracking",
            "Built responsive dashboard with real-time data updates and filtering capabilities",
            "Collaborated with stakeholders to prioritize features for initial release"
        ],
        tags: ["Web App", "Dashboard", "B2B", "SaaS", "MVP", "Data Visualization"],
        techStack: ["OutSystems", "JavaScript", "Figma"],
        impact: "Delivered MVP within 3-month timeline, providing clients self-service access to campaign data"
    },
    {
        id: 'mbf-mobile',
        title: "MyBrandForce Mobile Application",
        description: "Designed and built a mobile application for field gig-workers to efficiently capture and submit store visit data, photo documentation, and task completion reports.",
        image: "null", // TODO
        completionDate: "January 2023",
        githubRepoURL: null,
        figmaURL: "null", // TODO
        role: "UI/UX Designer, Front-End Developer, some Fullstack work",
        highlights: [ 
            "Conducted stakeholder interviews to define user workflows and pain points",
            "Created high-fidelity mockups and interactive prototypes for 15+ screens",
            "Developed mobile interface in OutSystems optimized for field use and offline functionality",
            "Collaborated with development team to ensure design feasibility and gather requirements"
        ],
        tags: ["Mobile Design", "Mobile Application", "Product Design", "UI/UX", "B2B", "Figma"],
        techStack: ["OutSystems", "Figma", "HTML/CSS"],
        impact: "Streamlined data collection for merchandiser workflows, reducing average task completion time" // TODO get metrics
    },
    {
        id: 'gremlinizer',
        title: "The Gremlinizer",
        description: "A chaotic multiplayer word game where players race against the clock to type words before gremlins sabotage their keyboards. Built as a final project exploring real-time multiplayer game mechanics.",
        image: null, // TODO
        completionDate: "May 2022",
        githubRepoURL: "https://github.com/rachelmcminn/gremlinizer",
        figmaURL: null,
        role: "Lead Front-end Developer",
        highlights: [ 
            "Implemented real-time multiplayer functionality using WebSockets",
            "Designed custom audio effects and animations for gremlin interactions",
            "Built responsive game UI with CSS animations and transitions",
            "Created game logic for word validation and scoring system"
        ],
        tags: ["Game Development", "WebSockets", "Multiplayer", "College Project"],
        techStack: ["JavaScript", "Node.js", "WebSockets", "HTML/CSS"],
        impact: "Capstone project for my engineering degree"
    }
    

]