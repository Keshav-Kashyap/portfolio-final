import { 
  FaPython, FaReact, FaAws, FaNodeJs, FaDatabase, FaBrain, 
  FaGitAlt, FaTerminal, FaCode, FaLinux 
} from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiHtml5, SiTailwindcss, SiFigma, 
  SiDocker, SiMongodb, SiFastapi, SiSupabase, SiVite, 
  SiVercel, SiRedis, SiPostgresql, SiNextdotjs, SiGraphql
} from "react-icons/si";

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
    github: "https://github.com/keshav-kashyap",
    live: "https://github.com/keshav-kashyap",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "100%", label: "Automated Plan Sets" },
      { value: "500+", label: "Installs Approved" },
      { value: "99.9%", label: "BOM Accuracy" }
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
    github: "https://github.com/keshav-kashyap",
    live: "https://github.com/keshav-kashyap",
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
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Cloudinary", "OpenAI API"],
    github: "https://github.com/keshav-kashyap",
    live: "https://github.com/keshav-kashyap",
    image: "/project_images/ezy.webp",
    stats: [
      { value: "100+", label: "Students" },
      { value: "50+", label: "Lessons" },
      { value: "24/7", label: "AI Tutor" }
    ]
  },
  {
    featured: false,
    index: "03",
    badge: "AI Speech",
    title: "AI Mock Interview Platform (QRA)",
    desc: "An AI interviewer that asks questions, listens to voice responses, and generates a scored feedback report — with resume upload driving question generation.",
    tags: ["Next.js", "FastAPI", "Supabase", "OpenAI", "VAPI"],
    github: "https://github.com/keshav-kashyap",
    live: "https://github.com/keshav-kashyap",
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
    tags: ["React", "Node.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/keshav-kashyap",
    live: "https://github.com/keshav-kashyap",
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
    tags: ["React", "WebRTC", "Socket.IO", "Node.js"],
    github: "https://github.com/keshav-kashyap",
    live: "https://github.com/keshav-kashyap",
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
    badge: "Admin Suite",
    title: "Sankalp Classes Management System",
    desc: "A full coaching-institute management system — enrollment, attendance, fee tracking, and a role-based admin dashboard.",
    tags: ["React", "Express", "MongoDB Atlas"],
    github: "https://github.com/keshav-kashyap",
    live: "https://github.com/keshav-kashyap",
    image: "/project_images/sers.webp",
    stats: [
      { value: "Multi-Role", label: "Auth" },
      { value: "Atlas DB", label: "Hosted" },
      { value: "Audited", label: "Finances" }
    ]
  }
];

export const skillGroups = [
  {
    label: "Languages",
    items: [
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", size: 45 },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", size: 45 },
      { name: "Python", Icon: FaPython, color: "#3776AB", size: 45 },
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26", size: 40 },
    ]
  },
  {
    label: "Frontend",
    items: [
      { name: "React", Icon: FaReact, color: "#61DAFB", size: 55 },
      { name: "Next.js", Icon: SiNextdotjs, color: "#000000", size: 45 },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4", size: 50 },
      { name: "Figma", Icon: SiFigma, color: "#F24E1E", size: 40 },
      { name: "Vite", Icon: SiVite, color: "#646CFF", size: 45 },
    ]
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", Icon: FaNodeJs, color: "#339933", size: 50 },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688", size: 45 },
      { name: "GraphQL", Icon: SiGraphql, color: "#E10098", size: 45 },
    ]
  },
  {
    label: "Database & Cloud",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1", size: 50 },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248", size: 45 },
      { name: "Redis", Icon: SiRedis, color: "#DC382D", size: 45 },
      { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E", size: 40 },
      { name: "AWS", Icon: FaAws, color: "#FF9900", size: 40 },
    ]
  },
  {
    label: "DevOps & Tools",
    items: [
      { name: "Docker", Icon: SiDocker, color: "#2496ED", size: 45 },
      { name: "Git", Icon: FaGitAlt, color: "#F05032", size: 45 },
      { name: "Linux", Icon: FaLinux, color: "#FCC624", size: 45 },
      { name: "Vercel", Icon: SiVercel, color: "#000000", size: 40 },
      { name: "Terminal", Icon: FaTerminal, color: "#4D4D4D", size: 40 },
    ]
  },
  {
    label: "AI & Core",
    items: [
      { name: "AI & ML", Icon: FaBrain, color: "#FF4F8B", size: 45 },
      { name: "Database", Icon: FaDatabase, color: "#47A248", size: 35 },
      { name: "Code", Icon: FaCode, color: "#2E8B57", size: 40 },
    ]
  }
];
