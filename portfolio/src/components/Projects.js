import React, { useState } from "react";
import { motion } from "framer-motion";
import { defaultProjects } from "../data";

// ─── Sample projects data (apni data.js file se replace karo) ───

// ─── Tag color mapping ───────────────────────────────────────────
const tagColors = {
  React: "bg-green-500/10 border border-green-500/20 text-green-400",
  Tailwind: "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400",
  TypeScript: "bg-purple-500/10 border border-purple-500/20 text-purple-400",
  Firebase: "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400",
  "Socket.io": "bg-purple-500/10 border border-purple-500/20 text-purple-400",
  default: "bg-blue-500/10 border border-blue-500/20 text-blue-400",
};

const getTagClass = (tag) => tagColors[tag] || tagColors.default;

// ─── GitHub Icon ─────────────────────────────────────────────────
const GithubIcon = () => (
  <svg
    className="w-3 h-3"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

// ─── Single Project Card ─────────────────────────────────────────
const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    whileHover={{ y: -6 }}
    className={`relative bg-white/[0.04] border rounded-2xl overflow-hidden cursor-pointer group transition-colors duration-300
      ${
        project.featured
          ? "border-green-500/20 hover:border-green-500/40"
          : "border-white/[0.08] hover:border-green-500/25 hover:bg-white/[0.07]"
      }`}
  >
    {/* Featured badge */}
    {project.featured && (
      <span className="absolute top-3 right-3 z-10 bg-green-500/15 border border-green-500/30 text-green-400 text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wider">
        ⭐ Featured
      </span>
    )}

    {/* Icon / image area */}
    <div
      className={`w-full h-44 flex items-center justify-center bg-gradient-to-br ${project.gradient} overflow-hidden`}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        project.icon
      )}
    </div>

    {/* Card body */}
    <div className="p-5">
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`text-[10px] font-medium px-2.5 py-0.5 rounded-full ${getTagClass(tag)}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <h3
        className="text-white font-bold text-lg mb-2 leading-snug"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {project.title}
      </h3>

      <p className="text-white/50 text-[13px] leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-green-500 hover:bg-green-400 text-[#080810] text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors duration-200"
          >
            ↗ Live
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white/7 hover:bg-white/12 border border-white/10 text-white/70 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors duration-200"
          >
            <GithubIcon /> Code
          </a>
        </div>
        <span className="text-white/30 text-[11px]">{project.year}</span>
      </div>
    </div>
  </motion.div>
);

// ─── Main Projects Component ─────────────────────────────────────
const FILTERS = ["All Projects", "React", "UI/UX", "Full Stack"];

export default function Projects({ projects = defaultProjects }) {
  const [active, setActive] = useState("All Projects");

  const filtered =
    active === "All Projects"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="relative bg-[#080810] overflow-hidden py-20 px-6"
    >
      {/* Background blobs */}
      <div className="absolute -top-48 -right-24 w-[600px] h-[600px] bg-green-500 rounded-full blur-[120px] opacity-[0.07] pointer-events-none" />
      <div className="absolute -bottom-24 -left-20 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[100px] opacity-[0.06] pointer-events-none" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-width-6xl max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/25 text-green-400 text-[11px] font-medium px-4 py-1.5 rounded-full tracking-widest mb-5">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            PORTFOLIO
          </div>

          <h2
            className="text-white font-extrabold leading-tight mb-4"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 5vw, 46px)",
            }}
          >
            Apps I've <span className="text-green-400">Built</span>
          </h2>

          <p className="text-white/45 text-[15px] max-w-lg mx-auto leading-relaxed">
            Frontend projects crafted with React, Tailwind, and a passion for
            clean, performant UI experiences.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex gap-2 justify-center flex-wrap mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-xs font-medium px-5 py-2 rounded-full border transition-all duration-200
                ${
                  active === f
                    ? "bg-green-500/12 border-green-500/35 text-green-400"
                    : "bg-white/5 border-white/10 text-white/55 hover:bg-green-500/8 hover:border-green-500/25 hover:text-green-400"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center text-white/30 text-sm py-16">
            No projects in this category yet.
          </div>
        )}
      </div>

      {/* Syne font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
      `}</style>
    </section>
  );
}
