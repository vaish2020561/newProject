export const defaultProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    subtitle: "Personal Project",
    description:
      "Personal developer portfolio with animated sections, dark theme, and smooth scroll interactions built entirely with React and Tailwind.",
    tags: ["React", "Tailwind", "TypeScript"],
    year: "2024",
    category: "React",
    featured: true,
    link: "#",
    github: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4ade80"
        strokeWidth="1.5"
        className="w-10 h-10"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    gradient: "from-[#0f2e1a] to-[#0a0a0f]",
  },
  {
    id: 2,
    title: "E-Commerce Cart App",
    subtitle: "React Project",
    description:
      "Fully functional shopping cart with product filtering, cart state management via Context API, and responsive checkout flow.",
    tags: ["React", "Context API"],
    year: "2024",
    category: "React",
    link: "#",
    github: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="1.5"
        className="w-10 h-10"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    gradient: "from-[#0e1a2e] to-[#080810]",
  },
  {
    id: 3,
    title: "Task Manager",
    subtitle: "Full Stack",
    description:
      "Drag-and-drop Kanban board with real-time sync via Firebase, user auth, and priority tagging for team productivity.",
    tags: ["React", "Firebase"],
    year: "2023",
    category: "Full Stack",
    link: "#",
    github: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#c084fc"
        strokeWidth="1.5"
        className="w-10 h-10"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    gradient: "from-[#1a0e2e] to-[#080810]",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    subtitle: "API Project",
    description:
      "Real-time weather app with 7-day forecast, city search, dynamic background themes, and animated weather icons.",
    tags: ["React", "REST API"],
    year: "2023",
    category: "React",
    link: "#",
    github: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#facc15"
        strokeWidth="1.5"
        className="w-10 h-10"
      >
        <path d="M3 3h18v18H3z" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    gradient: "from-[#1a1a0e] to-[#080810]",
  },
  {
    id: 5,
    title: "Real-time Chat App",
    subtitle: "Full Stack",
    description:
      "Multi-room chat with live typing indicators, message reactions, and user presence built using Socket.io.",
    tags: ["React", "Socket.io"],
    year: "2023",
    category: "Full Stack",
    link: "#",
    github: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#34d399"
        strokeWidth="1.5"
        className="w-10 h-10"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    gradient: "from-[#0e2820] to-[#080810]",
  },
  {
    id: 6,
    title: "Recipe Finder App",
    subtitle: "React Project",
    description:
      "Search and save recipes from a public API with ingredient filters, favorites list, and step-by-step cooking mode.",
    tags: ["React", "LocalStorage"],
    year: "2023",
    category: "UI/UX",
    link: "#",
    github: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f87171"
        strokeWidth="1.5"
        className="w-10 h-10"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    gradient: "from-[#2e0e0e] to-[#080810]",
  },
];

export const defaultSkills = [
  { name: "React.js",     cat: "frontend", pct: 92, level: "Expert",       icon: "⚛",  bg: "rgba(97,218,251,.12)",  color: "#61dafb" },
  { name: "Tailwind CSS", cat: "frontend", pct: 90, level: "Expert",       icon: "◈",  bg: "rgba(56,189,248,.12)",  color: "#38bdf8" },
  { name: "JavaScript",   cat: "frontend", pct: 88, level: "Expert",       icon: "JS", bg: "rgba(250,204,21,.12)",  color: "#facc15" },
  { name: "TypeScript",   cat: "frontend", pct: 78, level: "Advanced",     icon: "TS", bg: "rgba(59,130,246,.12)",  color: "#3b82f6" },
  { name: "Next.js",      cat: "frontend", pct: 75, level: "Advanced",     icon: "N",  bg: "rgba(255,255,255,.07)", color: "#ffffff" },
  { name: "HTML & CSS",   cat: "frontend", pct: 95, level: "Expert",       icon: "🌐", bg: "rgba(239,111,60,.12)",  color: "#ef6f3c" },
  { name: "Node.js",      cat: "backend",  pct: 70, level: "Intermediate", icon: "⬡",  bg: "rgba(34,197,94,.12)",   color: "#22c55e" },
  { name: "Express.js",   cat: "backend",  pct: 68, level: "Intermediate", icon: "EX", bg: "rgba(200,200,200,.07)", color: "#aaaaaa" },
  { name: "Firebase",     cat: "backend",  pct: 72, level: "Advanced",     icon: "🔥", bg: "rgba(251,146,60,.12)",  color: "#fb923c" },
  { name: "REST APIs",    cat: "backend",  pct: 80, level: "Advanced",     icon: "↔",  bg: "rgba(168,85,247,.12)",  color: "#c084fc" },
  { name: "Git & GitHub", cat: "tools",    pct: 85, level: "Expert",       icon: "⑂",  bg: "rgba(249,115,22,.12)",  color: "#f97316" },
  { name: "VS Code",      cat: "tools",    pct: 90, level: "Expert",       icon: "◈",  bg: "rgba(59,130,246,.12)",  color: "#3b82f6" },
];

export const FILTERS = ["All Skills", "Frontend", "Backend", "Tools"];

export const STATS = [
  { num: "1+", label: "Years Experience" },
  { num: "12+", label: "Technologies" },
  { num: "15+", label: "Projects Shipped" },
];

export const testimonials = [
  {
    quote:
      "Working with JavaScript and React.js has been incredibly rewarding. It's amazing how powerful these technologies can be.",
    image:
      "https://t4.ftcdn.net/jpg/05/56/30/03/360_F_556300316_yzdmBXMPGTslQfvuNJMbkC8x2yBbcp0u.jpg",
    name: "Saurabh Pandey",
    company: "Global Logic",
  },
  {
    quote:
      "HTML and CSS are the foundation of web development. They allow me to create beautiful and responsive designs easily.",
    image:
      "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719273600&semt=ais_user",
    name: "Tushyup",
    company: "CDAC ",
  },
  {
    quote:
      "Bootstrap and Tailwind CSS have revolutionized how I approach styling. They make it so much faster and easier to create modern UIs.",
    image:
      "https://i.pinimg.com/originals/1d/a9/44/1da944eeeea58e27db560ba9abd1948e.jpg",
    name: "Kanika ",
    company: "Google",
  },
  {
    quote:
      "Bootstrap and Tailwind CSS have revolutionized how I approach styling. They make it so much faster and easier to create modern UIs.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyfltomQi7jUNZHNSv6lRfniUaMwyEJQiXFoNYTBuKqqRzEcmzx0WWDSlcOQChsDvnZVM&usqp=CAU",
    name: "Mayank ",
    company: "Onelogica",
  },
];
