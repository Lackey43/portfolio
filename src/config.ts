export const siteConfig = {
  name: "Claude Daigan",
  title: "Automation Virtual Assistant",
  description: "Automation-focused Virtual Assistant specializing in AI workflows, n8n, Python, and business process optimization",
  accentColor: "#2563eb",
  social: {
    email: "claude_daigan@protonmail.com",
    linkedin: "https://linkedin.com/in/claude-lester-d-a84558288/",
    twitter: "", // Leave empty if none
    github: "", // Update with your actual GitHub if different
  },
  aboutMe: `Automation-focused Virtual Assistant with experience in business operations, digital marketing, human resources, and \
administrative support. Specializes in designing AI-powered workflow automations using n8n, Python, Google Apps Script, LangChain, \
LangGraph, and DeepAgents to streamline processes, eliminate repetitive tasks, and improve operational efficiency. Proficient in \
Google Workspace, CRM systems, email marketing, social media management, and data management. Recognized for quickly learning new \
technologies, optimizing business workflows, and supporting remote teams with reliable, detail-oriented, and results-driven execution \
in fast-paced environments.`,

  skills: [
    "AI Workflow Automation (n8n)",
    "Python Automation & Scripting",
    "Google Apps Script & Javascript",
    "DeepAgents, LangChain & LangGraph",
    "Business Process Automation",
    "CRM Management (Keap)",
    "Google Workspace",
    "Advanced Google Sheets",
    "Digital Marketing Automation",
    "Workflow Optimization",
    "Marketing Design & Canva"
  ],
  marketingCreatives: [
  {
    title: "High-Converting Lead Magnet",
    category: "Lead Magnet",
    image: "leadMagnet.png",
    link: "https://drive.google.com/file/d/14l-lliNpahpHTSRXKpLx66CrvfI4VhFO/view?usp=sharing",
    tools: ["Canva", "AI:Grok"],
  },
  {
    title: "Gym Membership Landing Page",
    category: "Landing Page",
    image: "images/landing.png",
    link: "https://lackey43.github.io/portfolio/landing",
    tools: ["Astro", "Javascript", "AI:Grok"],
  },
  {
    title: "Client Testimonial",
    category: "Social Media Post",
    image: "images/testimonial.png",
    link: "https://drive.google.com/file/d/1MLHLiOV6VQxASnlsX688Qjp-UxXE7tr6/view?usp=sharing",
    tools: ["Canva"],
  },
  {
    title: "Instagram Carousel",
    category: "Social Media Post",
    image: "images/carousel.png",
    link: "https://drive.google.com/drive/folders/1j_Ehm19tvR69vSvV1L9IvAPVDDTRtFsq?usp=sharing",
    tools: ["Canva"],
  },
  {
    title: "Instagram Reel",
    category: "Social Media Video",
    image: "images/fitness-thumbnail.png",
    link: "https://drive.google.com/file/d/1fYcQnOAEkww5JgqCM5FOqO79k5SfdApG/view?usp=sharing",
    tools: ["Canva"],
  },
  {
    title: "Instagram Reel",
    category: "Social Media Video",
    image: "images/ballerina.png",
    link: "https://drive.google.com/file/d/1I2CEQD0Yneedtxhhercg880Mhcg8x5Ic/view?usp=sharing",
    tools: ["Canva"],
  },
  {
    title: "Facebook Reel",
    category: "Social Media Video",
    image: "images/birthday.png",
    link: "https://drive.google.com/file/d/1NA669ogItX2VomyU-VpUKtlDBSBqG0j9/view?usp=sharing",
    tools: ["Canva"],
  },
],

  projects: [
    {
      name: "Marketing AI Assistant",
      description: "An AI-powered outreach automation tool that researches businesses and generates personalized marketing emails in minutes. Simply provide a business website URL (or company information), and the assistant automatically analyzes the company's online presence, identifies key insights, and creates a tailored outreach email. For demonstration purposes, the generated email is sent directly to the email address you provide, allowing you to review the final result exactly as a prospective client would receive it.",

      links: [
      { name: "View Chatbot Demo", url: "https://lackey43.duckdns.org/streamlit2/" },
      ], 
      skills: [
        "Deep Agents", "Python", "Streamlit" ,"Docker", "Email Automation", "Web Search", "Postgresql",
        "Google Gemini API",
      ],
    },
    
    {
      name: "AI Chatbot with RAG",
      description: "A powerful RAG-powered AI chatbot that retrieves accurate information from uploaded documents. Demonstrated using the full Lord of the Rings book collection as the knowledge base. Ideal for customer support, internal knowledge bases, employee training, and domain-specific Q&A systems.",

      links: [
      { name: "View Chatbot Demo", url: "https://lackey43.duckdns.org/streamlit3/" },
      ], 
      skills: [
        "Langchain", "Python", "Streamlit" , "Retrieval-Augmented Generation", "Postgresql",
        "AI Embeddings",
      ],
    },
    {
      name: "AI-Powered HR Applicant Screening System",
      description: 
      "An automated recruitment solution that streamlines the initial applicant screening process. Candidates submit their name, email, and resume through a simple form. \nA self-hosted n8n workflow (running on Oracle Cloud via Docker) intelligently parses the resume using Google Gemini, extracts key information, and automatically updates a Google Sheets dashboard with a structured summary and an AI-generated suitability score (1–10) based on predefined job requirements. \nThis system significantly reduces manual HR workload, improves screening consistency, and enables faster, data-driven hiring decisions.",
      links: [
        { name: "View Applicant Form", url: "https://lackey43.duckdns.org/form/2a87705d-8ba1-41f1-80ef-85f364ce253e" },
        { name: "View Google Sheets", url: "https://docs.google.com/spreadsheets/d/1OsGCgyeG76Og5sORQTi4N3ha7nxmYKnzqleaO5o13C4/" },
      ],
      skills: ["n8n", "Google Sheets", "Docker", "Google Gemini API"],
    },
    {
      name: "AI Resume Screening & Candidate Evaluation Platform",
      description: 
      "An AI-powered resume screening platform that automates candidate evaluation against job requirements. Users upload a resume and provide a target job description, and the system analyzes qualifications using an LLM to generate a compatibility score, identify key strengths and skill gaps, and deliver actionable recommendations. Built with LangGraph to orchestrate the evaluation workflow, providing recruiters with faster, more consistent, and data-driven hiring insights.",
      links: [
        { name: "View Demo", url: "https://lackey43.duckdns.org/streamlit/" },
      ],
      skills: ["Langgraph", "Streamlit", "Docker", "Google Gemini API"],
    },
    {
      name: "Trainee Directory Aggregation System",
      description: 
      "Developed a Google Apps Script automation that consolidates data from multiple Google Sheets into a single centralized directory. The solution automatically synchronizes records, eliminates manual copying, and ensures all downstream reports and tracking tools operate from a single source of truth.",
      links: [
        { name: "View Sheet", url: "https://docs.google.com/spreadsheets/d/1J2etGF_7svanp9Xb_rmvJlS0rl4CcVSUnkS29Y0Y0Ac/edit?gid=2054165624#gid=2054165624" },
      ],
      skills: ["Google Apps Script", "Google Sheets", "JavaScript" ],
    },
    {
      name: "Trainee Directory Search Tool",
      description: 
      "Built a real-time search utility using advanced Google Sheets formulas that allows users to instantly locate  trainee records by name or email. Designed to provide fast lookups from a centralized merged directory without requiring manual filtering.",
      links: [
        { name: "View Sheet", url: "https://docs.google.com/spreadsheets/d/1J2etGF_7svanp9Xb_rmvJlS0rl4CcVSUnkS29Y0Y0Ac/edit?gid=1666440326#gid=1666440326" },
      ],
      skills: ["XLOOKUP", "Google Sheets", "FILTER", "QUERY", "ARRAYFORMULA" ],
    },
    {
      name: "Class Movement Tracking Dashboard",
      description: 
      "Created an automated movement tracking dashboard that monitors trainee progress across multiple classes using data generated by the centralized directory system. The dashboard provides instant visibility into trainee assignments and movement history while minimizing manual reporting.",
      links: [
        { name: "View Sheet", url: "https://docs.google.com/spreadsheets/d/1J2etGF_7svanp9Xb_rmvJlS0rl4CcVSUnkS29Y0Y0Ac/edit?gid=706674810#gid=706674810&range=F2" },
      ],
      skills: ["Google Apps Script", "Google Sheets", "FILTER", "QUERY", "ARRAYFORMULA" ],
    },
    {
      name: "Bulk Movement History Lookup Tool",
      description: 
      "Designed a batch lookup solution that accepts multiple trainee email addresses and automatically retrieves their movement history from the centralized directory. This significantly reduces repetitive manual searches and accelerates reporting workflows.",
      links: [
        { name: "View Sheet", url: "https://docs.google.com/spreadsheets/d/1J2etGF_7svanp9Xb_rmvJlS0rl4CcVSUnkS29Y0Y0Ac/edit?gid=1162141073#gid=1162141073&range=C1" },
      ],
      skills: ["Google Apps Script", "Google Sheets", "FILTER", "QUERY", "ARRAYFORMULA" ],
    },
    {
      name: "Batch Email Automation System",
      description: 
      "Developed a bulk email automation tool powered by Gmail API and Google Apps Script. Features reusable email templates, recipient management, and one-click batch delivery, enabling administrators to efficiently communicate with large groups of trainees.",
      links: [
        { name: "View Sheet", url: "https://docs.google.com/spreadsheets/d/1J2etGF_7svanp9Xb_rmvJlS0rl4CcVSUnkS29Y0Y0Ac/edit?gid=1555198795#gid=1555198795&range=C2" },
      ],
      skills: ["Google Apps Script", "Google Sheets", "Gmail API" ],
    },
    {
      name: "Training Management & Performance Tracking System",
      description: 
      "Designed and developed a comprehensive Google Sheets-based training management system for Outsourced Doers (now Doneverse) to streamline trainee monitoring and reporting. The solution includes a centralized directory with summary views across all training sheets, automated attendance tracking powered by Google Apps Script, pop quiz score monitoring, trainee performance leaderboards, and a project tracking module that consolidates assessment results. By centralizing training data and automating reporting workflows, the system significantly improved visibility into trainee progress and reduced administrative effort.",
      links: [
        { name: "View Sheet", url: "https://docs.google.com/spreadsheets/d/1UVphcCxmG-glGP7xMf-lDQ_QaIR5LFizQ4MXD4FGG8c/edit?gid=1134071999#gid=1134071999&range=A2" },
      ],
      skills: ["Google Apps Script", "Google Sheets", "JavaScript", "Dashboard Design", "Spreadsheet Automation" ],
    },
  ],

  experience: [
    {
      company: "Outsourced Doers",
      title: "Digital Marketing Virtual Assistant",
      dateRange: "March 2025 - March 2026",
      bullets: [
        "Automated marketing workflows using n8n",
        "Streamlined repetitive business processes",
        "Improved social media posting consistency",
      ],
    },
    {
      company: "Qualfon",
      title: "Human Resources Assistant",
      dateRange: "November 2023 - November 2024",
      bullets: [
        "Automated HR data entry using Python",
        "Improved HR data accuracy and efficiency",
        "Streamlined employee onboarding processes",
      ],
    },
    {
      company: "Asia United Bank",
      title: "Bank Teller",
      dateRange: "September 2021 - February 2023",
      bullets: [
        "Processed high-volume bank transactions",
        "Ensured transaction accuracy and compliance",
        "Balanced daily cash operations",
      ],
    },
    {
      company: "LEYECO V",
      title: "Human Resources Department Aide",
      dateRange: "August 2020 - January 2021",
      bullets: [
        "Maintained accurate HR records",
        "Processed health clearances during COVID-19",
        "Supported daily HR administrative operations",
      ],
    },
      {
      company: "KEITECH Educational Foundation, Inc.",
      title: "PROCUREMENT OFFICER",
      dateRange: "July 2019 - June 2020",
      bullets: [
        "Improved inventory tracking accuracy.",
        "Supported cost-effective purchasing.",
        "Maintained uninterrupted supply availability.",
      ],
    },
  ],

  education: [
    {
      school: "St. Peter's College of Ormoc",
      degree: "Bachelor of Science in Business Administration",
      dateRange: "July 2016 - April 2019",
      achievements: [
        "Major in Human Resource Development Management",
      ],
    },
  ],

  certifications: [
    {
      title: "LangGraph – Python",
      issuer: "LangChain Academy",
      date: "June 2026",
      image:"langgraph.jpg",
      link: "https://academy.langchain.com/certificates/is2wwkufja",
    },
    {
      title: "LangChain – Python",
      issuer: "LangChain Academy",
      date: "June 2026",
      image:"langchain.jpg",
      link: "https://academy.langchain.com/certificates/82s1v5yebv",
    },
    {
      title: "Deep Agents",
      issuer: "LangChain Academy",
      date: "July 2026",
      image:"deepagents.png",
      link: "https://academy.langchain.com/certificates/81fsps1yrc",
    },
    {
      title: "Complete Python Bootcamp",
      issuer: "Udemy",
      date: "August 2020",
      image:"https://udemy-certificate.s3.amazonaws.com/image/UC-a6c68572-105c-4369-b609-f787e7283756.jpg",
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-a6c68572-105c-4369-b609-f787e7283756.jpg",
    },
    {
      title: "Cybersecurty",
      issuer: "Zsecurity",
      date: "May 2020",
      image:"zsecurity.png",
      link: "zsecurity.png",
    },
  
    {
      title: "Software Engineering",
      issuer: "IBM",
      date: "July 2025",
      image:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~R1HUNUCV3KVG/CERTIFICATE_LANDING_PAGE~R1HUNUCV3KVG.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/R1HUNUCV3KVG",
    },
    {
      title: "Agile Development and Scrum",
      issuer: "IBM",
      date: "July 2025",
      image:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~NKMTPH4ZAO5I/CERTIFICATE_LANDING_PAGE~NKMTPH4ZAO5I.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/NKMTPH4ZAO5I",
    },    
    {
      title: "Cloud Computing",
      issuer: "IBM",
      date: "July 2025",
      image:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~C8ZRIJSZ2RLX/CERTIFICATE_LANDING_PAGE~C8ZRIJSZ2RLX.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/C8ZRIJSZ2RLX",
    },   
    {
      title: "Devops",
      issuer: "IBM",
      date: "July 2025",
      image:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~WH57YOSQKR3A/CERTIFICATE_LANDING_PAGE~WH57YOSQKR3A.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/WH57YOSQKR3A",
    },
  ],
};
