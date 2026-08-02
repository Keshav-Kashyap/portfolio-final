

export const projects = [
  {
    featured: true,
    index: "00",
    tag: "FEATURED PRODUCTION SYSTEM",
    badge: "Featured",
    title: "Solar Permit Automation System",
    desc: "The most technically demanding system I've built in production. It automates the full set of engineering permit documents required for residential solar installations in the US — generating complete plan sets, calculating materials, and merging engineering drawings dynamically, all served through a Flask + React stack backed by AWS.",
    extra: "Dynamic PDF generation, automatic BOM calculation, engineering table rendering, template mapping across PV/Battery/PV+Battery projects, and image placement for roof layouts and electrical diagrams.",
    tags: ["Python", "Flask", "React", "MongoDB", "AWS S3", "PyMuPDF"],

    live: "https://crm.oneplacesolar.com/",
    image: "/project_images/solar_crm.png",
    stats: [
      { value: "100%", label: "Automated Plan Sets" },
      { value: "500+", label: "Installs Approved" },
      { value: "99.9%", label: "Permit PDF Accuracy" }
    ]
  },
  {
    featured: false,
    index: "01",
    badge: "AI Powered",
    title: "AI Content Automation Platform",
    desc: "An AI-powered content automation platform designed to simplify and automate the entire content creation workflow for creators, agencies, and businesses. Manage everything from a single dashboard.",
    role: "Developed frontend components & backend APIs, integrated AI services for content generation, and implemented file uploads/dashboards.",
    tags: ["React.js", "Vite", "Tailwind CSS", "ShadCN UI", "Flask", "MongoDB", "OpenAI"],
    github: "https://github.com/Keshav-Kashyap/CreatorOS",

    image: "/project_images/creator_os.webp",
    stats: [
      { value: "200+", label: "Users" },
      { value: "5", label: "AI Agents" },
      { value: "1M+", label: "Tokens" }
    ]
  },
  {
    featured: false,
    index: "02",
    badge: "AI LMS",
    title: "EzyLearn (AI LMS)",
    desc: "An AI-enabled Learning Management System (LMS) that helps students learn through structured courses, quizzes, and AI-powered assistance.",
    role: "Designed and developed the full-stack application, built course management, integrated AI Tutor, and created responsive interfaces.",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "Framer Motion", "NeonDB(SQL)", "AWS S3", "OpenAI API", "Vercel"],
    github: "https://github.com/Keshav-Kashyap/EzyStudyNew",
    live: "https://www.ezy-learn.app",
    image: "/project_images/ezy.webp",
    stats: [
      { value: "100+", label: "Students" },
      { value: "50+", label: "Courses" },
      { value: "24/7", label: "AI Tutor" }
    ]
  },
  {
    featured: false,
    index: "03",
    badge: "AI Speech",
    title: "AI Mock Interview Platform",
    desc: "An AI interviewer that asks questions, listens to voice responses, and generates a scored feedback report.",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Supabase", "OpenAI", "VAPI", "Vercel"],
    github: "https://github.com/Keshav-Kashyap/AiCruiter2",
    live: "https://www.qracloud.tech",
    image: "/project_images/qra.webp",
    stats: [
      { value: "5 min", label: "Setup" },
      { value: "VAPI", label: "Live Voice" },
      { value: "AI-Scored", label: "Resume Reports" }
    ]
  },
  {
    featured: false,
    index: "04",
    badge: "Cloud DB",
    title: "Digital ID Card Management System (IMS)",
    desc: "A complete admin platform for schools and coaching institutes to register students, manage records, and generate ID cards with cloud image storage.",
    tags: ["React", "Node.js", "MongoDB", "Cloudinary", "Netlify", "Render"],
    github: "https://github.com/Keshav-Kashyap/Digital-ID-Card-Management-System",
    live: "https://surajprinting.netlify.app",
    image: "/project_images/idcard.webp",
    stats: [
      { value: "100%", label: "Registration" },
      { value: "Cloudinary", label: "Storage" },
      { value: "Instant", label: "ID Gen" }
    ]
  },
  {
    featured: false,
    index: "05",
    badge: "WebRTC Live",
    title: "Real-Time Video Meeting Application",
    desc: "A WebRTC video conferencing platform with room creation, screen sharing, and real-time audio/video over Socket.IO.",
    tags: ["React", "WebRTC", "Socket.IO", "Node.js", "Netlify"],
    github: "https://github.com/Keshav-Kashyap/Toking-Allvez",
    live: "https://tokingallvez.netlify.app/",
    image: "/project_images/video_meet.webp",
    stats: [
      { value: "0ms", label: "Visual Delay" },
      { value: "Socket.IO", label: "Sync" },
      { value: "WebRTC", label: "Video/Share" }
    ]
  },
  {
    featured: false,
    index: "06",
    badge: "AI Safety",
    title: "SERS - Smart Emergency Response System",
    desc: "An AI-powered emergency response and accident prediction system that detects potential accidents, predicts risk levels, sends instant emergency alerts with live location, and enables faster response for improved public safety.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Python",
      "Machine Learning",
      "Render"
    ],
    github: "https://github.com/Keshav-Kashyap/SERS-Full",
    live: "https://sers-full.onrender.com/",
    image: "/project_images/sers.webp",
    stats: [
      { value: "AI", label: "Prediction" },
      { value: "Real-Time", label: "Alerts" },
      { value: "GPS", label: "Location" }
    ]
  }
];

export const skillGroups = [
  {
    label: "Languages",
    items: [
      { name: "Java", icon: "/icons/Java-Light.svg" },
      { name: "JavaScript", icon: "/icons/JavaScript.svg" },
      { name: "Python", icon: "/icons/Python-Light.svg" },
      { name: "C", icon: "/icons/C.svg" },
      { name: "C++", icon: "/icons/CPP.svg" },
      { name: "TypeScript", icon: "/icons/TypeScript.svg" },
      { name: "HTML5", icon: "/icons/HTML.svg" },
    ]
  },
  {
    label: "Frontend",
    items: [
      { name: "React", icon: "/icons/React-Light.svg" },
      { name: "Next.js", icon: "/icons/NextJS-Light.svg" },
      { name: "Tailwind CSS", icon: "/icons/TailwindCSS-Light.svg" },
      { name: "Figma", icon: "/icons/Figma-Light.svg" },
      { name: "Vite", icon: "/icons/Vite-Light.svg" },
      { name: "CSS", icon: "/icons/CSS.svg" },
    ]
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: "/icons/NodeJS-Light.svg" },
      { name: "Express.js", icon: "/icons/ExpressJS-Light.svg" },
      { name: "FastAPI", icon: "/icons/FastAPI.svg" },
      { name: "Flask", icon: "/icons/Flask-Light.svg" },
      { name: "GraphQL", icon: "/icons/GraphQL-Light.svg" },
    ]
  },
  {
    label: "Database & Cloud",
    items: [
      { name: "PostgreSQL", icon: "/icons/PostgreSQL-Light.svg" },
      { name: "MongoDB", icon: "/icons/MongoDB.svg" },
      { name: "Redis", icon: "/icons/Redis-Light.svg" },
      { name: "Supabase", icon: "/icons/Supabase-Light.svg" },
      { name: "MySQL", icon: "/icons/MySQL-Light.svg" },
    ]
  },
  {
    label: "DevOps & Tools",
    items: [
      { name: "Docker", icon: "/icons/Docker.svg" },
      { name: "Git", icon: "/icons/Git.svg" },
      { name: "Github", icon: "/icons/Github-Light.svg" },
      { name: "Linux", icon: "/icons/Linux-Light.svg" },
      { name: "Vercel", icon: "/icons/Vercel-Light.svg" },
      { name: "Bash", icon: "/icons/Bash-Light.svg" },
      { name: "AWS", icon: "/icons/AWS-Light.svg" },
      { name: "VS Code", icon: "/icons/VSCode-Light.svg" },
    ]
  },
  {
    label: "AI & Core",
    items: [
      { name: "PyTorch", icon: "/icons/PyTorch-Light.svg" },
      { name: "OpenCV", icon: "/icons/OpenCV-Light.svg" },
      { name: "ScikitLearn", icon: "/icons/SciKitLearn-Light.svg" },
      { name: "ChatGPT", icon: "/icons/Chatgpt-Light.svg" },
      { name: "Claude", icon: "/icons/Claude-Light.svg" },
      { name: "Gemini", icon: "/icons/Gemini-Light.svg" }

    ]
  }
];
