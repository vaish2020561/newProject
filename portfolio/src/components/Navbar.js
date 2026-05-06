import React from "react";
import { Link } from "react-scroll";

const ArrowRight = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const NAV_LINKS = [
  { label: "Past Work", to: "projects" },
  { label: "Skills",    to: "skills"   },
  { label: "About Me",  to: "aboutme"  },
];

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 bg-[#080810]/95 border-b border-white/[0.07] backdrop-blur-xl"
      style={{ animation: "slideDown .5s cubic-bezier(.22,1,.36,1) both" }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <span
            className="text-lg font-extrabold text-white tracking-tight select-none"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Vaishnavi{" "}
            <span className="text-purple-400">Bharti</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={500}
              className="relative cursor-pointer text-white/55 hover:text-white text-sm font-medium px-3.5 py-1.5 rounded-lg hover:bg-white/[0.06] transition-all duration-200 group"
            >
              {label}
              <span className="absolute bottom-1 left-3.5 right-3.5 h-px bg-purple-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-250" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:-translate-y-px"
        >
          Hire Me
          <ArrowRight />
        </Link>
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-100%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap');
      `}</style>
    </header>
  );
}