export const projects = [
  {
    featured: true,
    tag: "FEATURED",
    title: "Solar Permit Automation System",
    desc: "The most technically demanding system I've built in production. It automates the full set of engineering permit documents required for residential solar installations in the US — generating complete plan sets, calculating materials, and merging engineering drawings dynamically, all served through a Flask + React stack backed by AWS.",
    extra: "Dynamic PDF generation, automatic BOM calculation, engineering table rendering, template mapping across PV/Battery/PV+Battery projects, and image placement for roof layouts and electrical diagrams.",
    tags: ["Python", "Flask", "React", "MongoDB", "AWS S3", "PyMuPDF"],
    github: "#",
    live: "#",
  },
  {
    index: "01",
    title: "AI Mock Interview Platform (QRA)",
    desc: "An AI interviewer that asks questions, listens to voice responses, and generates a scored feedback report — with resume upload driving question generation.",
    tags: ["Next.js", "FastAPI", "Supabase", "OpenAI", "VAPI"],
    github: "#",
    live: "#",
  },
  {
    index: "02",
    title: "Student ID Card Management System",
    desc: "A complete admin platform for schools and coaching institutes to register students, manage records, and generate ID cards with cloud image storage.",
    tags: ["React", "Node.js", "MongoDB", "Cloudinary"],
    github: "#",
    live: "#",
  },
  {
    index: "03",
    title: "Real-Time Video Meeting Application",
    desc: "A WebRTC video conferencing platform with room creation, screen sharing, and real-time audio/video over Socket.IO.",
    tags: ["React", "WebRTC", "Socket.IO", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    index: "04",
    title: "Sankalp Classes Management System",
    desc: "A full coaching-institute management system — enrollment, attendance, fee tracking, and a role-based admin dashboard.",
    tags: ["React", "Express", "MongoDB Atlas"],
    github: "#",
    live: "#",
  },
];

export const skillGroups = [
  { label: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "C++"] },
  { label: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "ShadCN UI"] },
  { label: "Backend", items: ["Node.js", "Express", "Flask", "FastAPI"] },
  { label: "Database", items: ["MongoDB", "PostgreSQL", "Supabase", "Firebase"] },
  { label: "AI & ML", items: ["Logistic Regression", "Gradient Descent", "Prompt Engineering", "OpenAI API"] },
  { label: "PDF & Automation", items: ["PyMuPDF", "pdf-lib", "Template Mapping", "PDF Overlay"] },
];
