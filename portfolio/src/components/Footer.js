import { motion } from "framer-motion";

const socials = [
  {
    label: "Instagram",
    href:  "https://www.instagram.com/vaishuu_ridhima/",
    icon: (
      <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href:  "https://github.com/vaish2020561",
    icon: (
      <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href:  "https://www.linkedin.com/in/vaishnavi-bharti-0196831bb/",
    icon: (
      <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Email",
    href:  "mailto:vaishnavi@example.com",
    icon: (
      <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#040408] border-t border-white/[0.06] py-10 px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Logo */}
        <p
          className="text-white font-extrabold text-xl mb-1"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Vaishnavi <span className="text-purple-400">Bharti</span>
        </p>
        <p className="text-white/30 text-xs mb-8 tracking-wide">
          Frontend Developer · Open to opportunities
        </p>

        {/* Social icons — inline SVG, no FontAwesome needed */}
        <div className="flex justify-center gap-3 mb-8">
          {socials.map(({ label, href, icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -4, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-white/55 hover:bg-purple-500/15 hover:border-purple-500/35 hover:text-purple-400 transition-colors duration-200"
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.05] mb-6" />

        {/* Copyright */}
        <p className="text-white/25 text-xs">
          © {new Date().getFullYear()}{" "}
          <span className="text-purple-400/70">Vaishnavi Bharti</span>{" "}
          · Built with React & Tailwind
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap');
      `}</style>
    </motion.footer>
  );
}