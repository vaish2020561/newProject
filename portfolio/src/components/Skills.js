import { motion } from "framer-motion";
import { useState } from "react";
import {defaultSkills,FILTERS,STATS} from "../data";

// ─── Single Skill Card ────────────────────────────────────────────
function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 transition-colors duration-300 hover:border-green-500/30 hover:bg-white/[0.07] group"
    >
      {/* Icon + name row */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-bold"
          style={{ background: skill.bg, color: skill.color }}
        >
          {skill.icon}
        </div>
        <div>
          <p
            className="text-white font-bold text-[15px] leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {skill.name}
          </p>
          <p className="text-white/35 text-[11px] capitalize mt-0.5">
            {skill.cat}
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-white/[0.07] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.pct}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: index * 0.06 + 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>

      {/* Footer */}
      <div className="flex justify-between mt-2">
        <span className="text-white/35 text-[11px]">{skill.level}</span>
        <span className="text-green-400 text-[11px] font-semibold">
          {skill.pct}%
        </span>
      </div>
    </motion.div>
  );
}

// ─── Main Skills Component ────────────────────────────────────────
export default function Skills({ skills = defaultSkills }) {
  const [active, setActive] = useState("All Skills");

  const filtered =
    active === "All Skills"
      ? skills
      : skills.filter((s) => s.cat === active.toLowerCase());

  return (
    <section
      id="skills"
      className="relative bg-[#080810] overflow-hidden py-20 px-6"
    >
      {/* Background blobs */}
      <div className="absolute -top-36 -left-24 w-[500px] h-[500px] bg-green-500 rounded-full blur-[110px] opacity-[0.06] pointer-events-none" />
      <div className="absolute -bottom-20 -right-16 w-[350px] h-[350px] bg-blue-500 rounded-full blur-[100px] opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-purple-500 rounded-full blur-[90px] opacity-[0.05] pointer-events-none" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/25 text-green-400 text-[11px] font-medium px-4 py-1.5 rounded-full tracking-widest mb-5">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            EXPERTISE
          </div>

          <h2
            className="text-white font-extrabold leading-tight mb-4"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(26px, 5vw, 44px)",
            }}
          >
            Skills & <span className="text-green-400">Technologies</span>
          </h2>

          <p className="text-white/45 text-sm max-w-xl mx-auto leading-relaxed">
            Proficient in modern frontend development with React and Tailwind,
            building responsive, performant, and accessible web experiences.
          </p>
        </motion.div>

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-3 mb-14"
        >
          {STATS.map(({ num, label }) => (
            <div
              key={label}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 text-center hover:border-green-500/25 hover:bg-green-500/[0.04] transition-all duration-300"
            >
              <p
                className="text-green-400 font-extrabold text-3xl leading-none mb-1.5"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {num}
              </p>
              <p className="text-white/40 text-xs tracking-wide">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Filter Buttons ── */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-xs font-medium px-5 py-2 rounded-full border transition-all duration-200
                ${
                  active === f
                    ? "bg-green-500/12 border-green-500/35 text-green-400"
                    : "bg-white/5 border-white/10 text-white/50 hover:bg-green-500/8 hover:border-green-500/25 hover:text-green-400"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── Skills Grid ── */}
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-white/30 text-sm py-16">
            No skills in this category yet.
          </p>
        )}
      </div>

      {/* Syne font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
      `}</style>
    </section>
  );
}
