export const siteConfig = {
  name: "Claude Daigan",
  title: "Automation Virtual Assistant",
  description: "Automation-focused Virtual Assistant specializing in AI workflows, n8n, Python, and business process optimization",
  accentColor: "#2563eb",
  social: {
    email: "claude_daigan@protonmail.com",
    linkedin: "https://linkedin.com/in/claude-lester-d-a84558288/",
    twitter: "", // Leave empty if none
    github: "https://github.com/Lackey43", // Update with your actual GitHub if different
  },
  aboutMe: `Automation-focused Virtual Assistant with professional experience in business operations, digital marketing, human resources, and administrative support. Skilled in workflow automation using n8n, Zapier, Python, and Google Apps Script to streamline business processes and improve operational efficiency.`,

  skills: [
    "AI Workflow Automation (n8n)",
    "Python Automation & Scripting",
    "Google Apps Script & Javascript",
    "LangChain & LangGraph",
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
    title: "Instagram Carousel",
    category: "Social Media Post",
    image: "images/carousel.png",
    link: "https://drive.google.com/drive/folders/1Qf4Q8whp9S-uWxH1pbh4yLB0_0_vHfrz?usp=sharing",
    tools: ["Canva"],
  },
  {
    title: "Instagram Reel",
    category: "Social Media Video",
    image: "images/fitness-thumbnail.png",
    link: "https://drive.google.com/file/d/1fYcQnOAEkww5JgqCM5FOqO79k5SfdApG/view?usp=sharing",
    tools: ["Canva"],
  },
],

  projects: [
    {
      name: "AI Chatbot with RAG",
      description: "A powerful RAG-powered AI chatbot that retrieves accurate information from uploaded documents. Demonstrated using the full Lord of the Rings book collection as the knowledge base. Ideal for customer support, internal knowledge bases, employee training, and domain-specific Q&A systems.",

      links: [
      { name: "View Chatbot Demo", url: "https://lotr-rag-chatbot-claudai.streamlit.app/" },
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
      skills: ["n8n", "Google Sheets", "Docker", "AI:Gemini"],
    },
    {
      name: "AI HR Resume Analyzer",
      description: 
      "HR AI Resume Fit Analyzer is an intelligent web application that automates resume screening and job-fit evaluation. Users upload a PDF resume, enter a job role and description, and the system instantly delivers a 1–10 qualification score plus detailed, professional feedback on strengths, gaps, and improvement recommendations.",
      links: [
        { name: "View Demo", url: "https://lackey43.duckdns.org/streamlit/" },
      ],
      skills: ["Langgraph", "Streamlit", "Docker", "AI:Gemini"],
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
      title: "Foundation: Introduction to LangGraph – Python",
      issuer: "LangChain Academy",
      date: "June 2026",
      image:"langgraph.jpg",
      link: "https://academy.langchain.com/certificates/is2wwkufja",
    },
    {
      title: "Foundation: Introduction to LangChain – Python",
      issuer: "LangChain Academy",
      date: "June 2026",
      image:"langchain.jpg",
      link: "https://academy.langchain.com/certificates/82s1v5yebv",
    },
    {
      title: "Foundation: Introduction to Deep Agents",
      issuer: "LangChain Academy",
      date: "July 2026",
      image:"deepagents.png",
      link: "https://academy.langchain.com/certificates/81fsps1yrc"",
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
      title: "Introduction to Software Engineering",
      issuer: "IBM",
      date: "July 2025",
      image:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~R1HUNUCV3KVG/CERTIFICATE_LANDING_PAGE~R1HUNUCV3KVG.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/R1HUNUCV3KVG",
    },
    {
      title: "Introduction to Agile Development and Scrum",
      issuer: "IBM",
      date: "July 2025",
      image:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~NKMTPH4ZAO5I/CERTIFICATE_LANDING_PAGE~NKMTPH4ZAO5I.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/NKMTPH4ZAO5I",
    },    
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM",
      date: "July 2025",
      image:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~C8ZRIJSZ2RLX/CERTIFICATE_LANDING_PAGE~C8ZRIJSZ2RLX.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/C8ZRIJSZ2RLX",
    },   
    {
      title: "Introduction to Devops",
      issuer: "IBM",
      date: "July 2025",
      image:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~WH57YOSQKR3A/CERTIFICATE_LANDING_PAGE~WH57YOSQKR3A.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/WH57YOSQKR3A",
    },
  ],
};
