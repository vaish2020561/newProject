import { useState, useEffect } from "react";

export default function About() {
  const [text, setText] = useState("");
  const fullText = "Vaishnavi.";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setText("");
        setCurrentIndex(0);
      }, 2000);
      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex]);

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#0a0a0f] overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-500 rounded-full blur-[100px] opacity-30 animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[100px] opacity-25 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-purple-500 rounded-full blur-[80px] opacity-20 animate-pulse delay-500" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-10 py-20 flex md:flex-row flex-col-reverse items-center gap-16">
        
        {/* ── Text Side ── */}
        <div className="flex-1 flex flex-col md:items-start items-center md:text-left text-center animate-fadeInUp">

          {/* Available badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium px-4 py-1.5 rounded-full mb-5 tracking-wide">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Available for work
          </div>

          {/* Headline with typing */}
          <h1 className="font-extrabold text-white leading-tight mb-3"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px,5vw,52px)" }}>
            Hi, I'm{" "}
            <span className="text-green-400">{text}</span>
            <span className="inline-block w-0.5 h-[0.85em] bg-green-400 ml-0.5 align-middle animate-ping" />
          </h1>

          <p className="text-white/50 font-semibold mb-6"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(18px,3vw,28px)" }}>
            I love to build amazing apps
          </p>

          <p className="mb-8 leading-relaxed text-white/55 text-sm max-w-lg">
            Hello! I'm a passionate Frontend developer dedicated to crafting seamless digital
            experiences. With expertise in React, I specialize in building dynamic web applications
            that marry intuitive interfaces with powerful performance. Let's bring your next project
            to life!
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["React", "TypeScript", "Next.js", "Tailwind CSS", "UI/UX"].map((tag) => (
              <span
                key={tag}
                className="bg-white/5 border border-white/10 text-white/70 px-3 py-1 rounded-lg text-xs font-medium hover:bg-white/10 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            
             <a href="#contact"
              className="inline-flex items-center gap-2 bg-green-500 text-[#0a0a0f] font-semibold text-sm px-6 py-3 rounded-xl hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(34,197,94,0.35)] transition-all duration-300">
              ✦ Work With Me
            </a>
            
            <a href="#projects"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 font-medium text-sm px-6 py-3 rounded-xl hover:bg-white/10 hover:-translate-y-0.5 hover:border-white/25 transition-all duration-300">
              See My Work →
            </a>
          </div>
        </div>

        {/* ── Image Side ── */}
        <div className="flex flex-col items-center gap-5 animate-fadeInDown">
          
          {/* Avatar with spinning ring */}
          <div className="relative w-60 h-60">
            {/* Spinning conic gradient ring */}
            <div
              className="absolute -inset-3 rounded-full opacity-70"
              style={{
                background: "conic-gradient(from 0deg, #22c55e, #3b82f6, #a855f7, #22c55e)",
                animation: "spin 6s linear infinite",
              }}
            />
            {/* Mask to create ring effect */}
            <div className="absolute -inset-1.5 rounded-full bg-[#0a0a0f]" />

            {/* Glass avatar */}
            <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-xl border border-white/15 overflow-hidden z-10 hover:scale-105 transition-transform duration-500">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6rQzNeGUvuHQg1e1o8PVTD16HBp_qDl75hw&s"
                alt="Vaishnavi"
                className="w-full h-full object-cover rounded-full"
                style={{ mixBlendMode: "luminosity", opacity: 0.9 }}
              />
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating badges */}
            <div
              className="absolute top-2 -right-8 z-20 flex items-center gap-2 bg-[#0f0f19]/90 border border-white/10 backdrop-blur-xl rounded-xl px-3 py-2 text-xs text-white/70 font-medium"
              style={{ animation: "float 4s ease-in-out infinite" }}
            >
              ⚡ Frontend Dev
            </div>
            <div
              className="absolute bottom-2 -left-8 z-20 flex items-center gap-2 bg-[#0f0f19]/90 border border-white/10 backdrop-blur-xl rounded-xl px-3 py-2 text-xs text-white/70 font-medium"
              style={{ animation: "float 4s ease-in-out infinite 2s" }}
            >
              🎯 Open to Collab
            </div>
          </div>

          {/* Stats row */}
          <div className="flex gap-3">
            {[
              { num: "2+", label: "Years Exp" },
              { num: "15+", label: "Projects" },
              { num: "10+", label: "Clients" },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl px-4 py-3 text-center hover:bg-white/9 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-green-400 font-bold text-xl" style={{ fontFamily: "'Syne', sans-serif" }}>{num}</div>
                <div className="text-white/45 text-[10px] mt-0.5 tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom keyframes – add to your global CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp  { animation: fadeInUp  0.8s cubic-bezier(0.22,1,0.36,1) both; }
        .animate-fadeInDown{ animation: fadeInDown 0.9s 0.1s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>
    </section>
  );
}