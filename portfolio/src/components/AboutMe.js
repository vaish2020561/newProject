import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// ─── Timeline data ────────────────────────────────────────────────
const timeline = [
  {
    id: 1,
    period: "2006 – 2018",
    name: "Kendriya Vidyalaya",
    place: "Secondary & Senior Secondary Education",
    pills: [
      { label: "10th — 81%", color: "purple" },
      { label: "12th — 70%", color: "purple" },
    ],
    icon: "school",
    side: "left",
  },
  {
    id: 2,
    period: "2018 – 2022",
    name: "Feroze Gandhi Institute of Engineering & Technology",
    place: "B.Tech · Computer Science & Engineering",
    pills: [
      { label: "CGPA — 80%", color: "green" },
      { label: "CSE Specialization", color: "blue" },
    ],
    icon: "college",
    side: "right",
  },
  {
    id: 3,
    period: "Jun 2022 – Sep 2023",
    name: "GlobalLogic",
    place: "Frontend Developer",
    pills: [
      { label: "React", color: "green" },
      { label: "Tailwind", color: "green" },
      { label: "1.3 yrs", color: "blue" },
    ],
    icon: "work",
    side: "left",
  },
];

const pillColors = {
  purple: "bg-purple-500/10 border border-purple-500/20 text-purple-400",
  green:  "bg-green-500/10 border border-green-500/20 text-green-400",
  blue:   "bg-blue-500/10 border border-blue-500/20 text-blue-400",
};

// ─── SVG Icons for timeline dots ─────────────────────────────────
const SchoolIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="1.8">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const CollegeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="1.8">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);
const WorkIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="1.8">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
const DownloadIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const iconMap = { school: <SchoolIcon />, college: <CollegeIcon />, work: <WorkIcon /> };

// ─── Timeline Item ────────────────────────────────────────────────
function TimelineItem({ item, index }) {
  const isRight = item.side === "right";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`flex gap-6 mb-10 ${isRight ? "flex-row-reverse" : ""} relative`}
    >
      {/* Content card */}
      <div className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 hover:border-purple-500/30 hover:bg-purple-500/[0.04] transition-all duration-300">
        <p className="text-[10px] text-purple-400 font-semibold tracking-widest uppercase mb-1.5">
          {item.period}
        </p>
        <p className="text-white font-bold text-base mb-1 leading-snug"
          style={{ fontFamily: "'Syne', sans-serif" }}>
          {item.name}
        </p>
        <p className="text-white/50 text-[13px] mb-3">{item.place}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.pills.map((pill) => (
            <span
              key={pill.label}
              className={`text-[10px] font-medium px-2.5 py-1 rounded-full ${pillColors[pill.color]}`}
            >
              {pill.label}
            </span>
          ))}
        </div>
      </div>

      {/* Dot */}
      <div className="w-11 flex-shrink-0 flex justify-center pt-4">
        <div className="w-11 h-11 rounded-full bg-purple-500/15 border-2 border-purple-500/40 flex items-center justify-center">
          {iconMap[item.icon]}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main AboutMe Component ───────────────────────────────────────
export default function AboutMe() {
  const [text, setText] = useState("");
  const fullText = "Know more about my journey, education, and skills";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const t = setTimeout(() => {
        setText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((i) => i + 1);
      }, 60);
      return () => clearTimeout(t);
    } else {
      const r = setTimeout(() => {
        setText("");
        setCurrentIndex(0);
      }, 2000);
      return () => clearTimeout(r);
    }
  }, [currentIndex]);

  return (
    <section
      id="about-section"
      className="relative bg-[#080810] overflow-hidden py-20 px-6"
    >
      {/* Background blobs */}
      <div className="absolute -top-36 -right-20 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[110px] opacity-[0.07] pointer-events-none" />
      <div className="absolute -bottom-20 -left-16 w-[350px] h-[350px] bg-green-500 rounded-full blur-[100px] opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[180px] h-[180px] bg-blue-500 rounded-full blur-[90px] opacity-[0.05] pointer-events-none" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-width-4xl max-w-4xl mx-auto">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/25 text-purple-400 text-[11px] font-medium px-4 py-1.5 rounded-full tracking-widest mb-5">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
            ABOUT ME
          </div>

          <h2
            className="text-white font-extrabold leading-tight mb-3"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px,5vw,46px)" }}
          >
            Who <span className="text-purple-400">I Am</span>
          </h2>

          {/* Typing effect */}
          <p className="text-white/45 text-sm min-h-[20px]">
            {text}
            <span className="inline-block w-0.5 h-3.5 bg-purple-400 ml-0.5 align-middle animate-pulse" />
          </p>
        </motion.div>

        {/* ── Top Grid: Images + Bio ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div>
              <motion.img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR5954dwPYTRABdv1mdL6jtssIge0A84akb8xQOoGGsaAblnlgqXs69buptFUpPzMr3kU&usqp=CAU"
                alt="School — Kendriya Vidyalaya"
                className="w-full h-52 object-cover rounded-2xl border border-purple-500/20"
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <p className="text-[10px] text-purple-400/80 text-center mt-2 tracking-widest uppercase">
                Kendriya Vidyalaya — Schooling
              </p>
            </div>
            <div>
              <motion.img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeMT28ObPvR0whP1MV5pN1BRgNeqwy5Xmybg&s"
                alt="College — FGIET"
                className="w-full h-52 object-cover rounded-2xl border border-purple-500/20"
                whileHover={{ scale: 1.03, rotate: -1 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <p className="text-[10px] text-purple-400/80 text-center mt-2 tracking-widest uppercase">
                FGIET — B.Tech CSE
              </p>
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-[11px] px-3 py-1 rounded-full w-fit">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Frontend Developer · 1.3 yrs experience
            </div>

            <p className="text-white/65 text-sm leading-relaxed">
              Hello! I'm{" "}
              <span className="text-white font-semibold">Vaishnavi Bharti</span>, a
              passionate Frontend Developer specializing in building responsive,
              user-friendly interfaces using{" "}
              <span className="text-purple-400 font-medium">React</span> and{" "}
              <span className="text-purple-400 font-medium">Tailwind CSS</span>.
            </p>

            <p className="text-white/65 text-sm leading-relaxed">
              I've worked on exciting projects — e-commerce websites, Chrome
              extensions, and more — with a strong focus on clean code and{" "}
              <span className="text-white font-medium">Framer Motion</span> animations
              for smooth, interactive UI experiences.
            </p>

            <p className="text-white/65 text-sm leading-relaxed">
              B.Tech in Computer Science from{" "}
              <span className="text-white font-medium">
                Feroze Gandhi Institute of Engineering and Technology
              </span>
              , with expertise across React, Node.js, Firebase, and REST APIs.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-1">
              {["React", "Tailwind CSS", "Node.js", "Firebase", "Framer Motion", "TypeScript"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-white/5 border border-white/10 text-white/60 text-[11px] px-3 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* CV button */}
            <motion.a
              href="/path-to-your-cv.pdf"
              download
              className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold px-6 py-3 rounded-xl w-fit mt-2 transition-colors duration-200"
              whileHover={{ scale: 1.04, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <DownloadIcon />
              Download My CV
            </motion.a>
          </motion.div>
        </div>

        {/* ── Timeline ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3
            className="text-white font-extrabold mb-2"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(22px,4vw,34px)" }}
          >
            Education & Career{" "}
            <span className="text-purple-400">Journey</span>
          </h3>
          <p className="text-white/40 text-sm">My path from school to professional life</p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-purple-500/20 -translate-x-1/2 hidden sm:block" />

          {timeline.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Syne font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
      `}</style>
    </section>
  );
}