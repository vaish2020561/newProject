import React, { useState } from "react";
import { motion } from "framer-motion";

const SendIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");
  const [sent,    setSent]    = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => setSent(true))
      .catch((err) => alert(err));
  }

  const inputClass =
    "w-full bg-white/[0.05] border border-white/10 focus:border-purple-500/50 focus:bg-purple-500/[0.06] rounded-xl text-white text-sm px-4 py-2.5 outline-none transition-all duration-200 placeholder:text-white/25";

  return (
    <section id="contact" className="relative bg-[#080810] overflow-hidden py-20 px-6">
      {/* Blobs */}
      <div className="absolute -top-24 -right-20 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[100px] opacity-[0.06] pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-[300px] h-[300px] bg-green-500 rounded-full blur-[90px] opacity-[0.05] pointer-events-none" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/25 text-purple-400 text-[11px] font-medium px-4 py-1.5 rounded-full tracking-widest mb-5">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
            GET IN TOUCH
          </div>
          <h2
            className="text-white font-extrabold leading-tight mb-3"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(26px,5vw,42px)" }}
          >
            Let's Work{" "}
            <span className="text-purple-400">Together</span>
          </h2>
          <p className="text-white/40 text-sm max-w-xs mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden border border-white/[0.08] h-[420px] bg-white/[0.03]"
          >
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              style={{ filter: "grayscale(1) invert(1) opacity(0.55)", border: "none" }}
              src="https://www.google.com/maps/embed/v1/place?q=kanpur&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
            {/* Map info overlay */}
            <div className="absolute bottom-4 left-4 bg-[#080810]/85 border border-purple-500/25 rounded-xl px-4 py-2.5 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-purple-400 mb-0.5">
                <MapPinIcon />
                <span
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Kanpur, India
                </span>
              </div>
              <p className="text-white/40 text-[11px]">Uttar Pradesh · Available Remote</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            name="contact"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7 flex flex-col"
          >
            {sent ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Message Sent!
                  </p>
                  <p className="text-white/45 text-sm mt-1">I'll get back to you within 24 hours.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="text-purple-400 text-xs border border-purple-500/25 px-4 py-1.5 rounded-lg hover:bg-purple-500/10 transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <>
                <p
                  className="text-white font-bold text-xl mb-1"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Send a Message
                </p>
                <p className="text-white/40 text-[13px] mb-6">
                  I usually respond within 24 hours.
                </p>

                <div className="flex flex-col gap-4 flex-1">
                  <div>
                    <label className="block text-[10px] font-semibold text-white/45 tracking-widest uppercase mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className={inputClass}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-white/45 tracking-widest uppercase mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className={inputClass}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-white/45 tracking-widest uppercase mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell me about your project..."
                      className={`${inputClass} resize-none`}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-200 mt-auto"
                  >
                    Send Message
                    <SendIcon />
                  </motion.button>
                </div>
              </>
            )}
          </motion.form>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
      `}</style>
    </section>
  );
}