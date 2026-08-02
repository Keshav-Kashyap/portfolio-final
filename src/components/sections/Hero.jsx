import React, { useRef, useState, useEffect } from "react";
import { useMotionValue, useSpring, motion, AnimatePresence } from "framer-motion";
import DocLayer from "../ui/DocLayer";
import { c, mono, serif } from "../../data/theme";

const WORDS = [
  "AI-driven",
  "intelligent",
  "full-stack",
  "scalable",
];

export default function Hero() {
  const heroRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 15 });
  const smy = useSpring(my, { stiffness: 60, damping: 15 });
  const [reduced, setReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    handleResize();
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (reduced) return;
    const rect = heroRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="hero-section"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "100px 32px 60px", overflow: "hidden" }}
    >
      {!reduced && (
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: 1080, height: "100%" }}>
            <DocLayer mx={smx} my={smy} depth={22} rotate={-6} imageSrc="/project_images/ezy.webp" box={{ width: isMobile ? 180 : 260, height: isMobile ? 120 : 170, top: isMobile ? "58%" : "14%", right: isMobile ? "2%" : "0%" }} />
            <DocLayer mx={smx} my={smy} depth={14} rotate={4} imageSrc="/project_images/qra.webp" box={{ width: isMobile ? 160 : 240, height: isMobile ? 100 : 150, top: isMobile ? "61%" : "25%", right: isMobile ? "48%" : "10%" }} />
            <DocLayer mx={smx} my={smy} depth={30} rotate={9} imageSrc="/project_images/sers.webp" box={{ width: isMobile ? 150 : 220, height: isMobile ? 95 : 140, top: isMobile ? "69%" : "34%", right: isMobile ? "-5%" : "-8%", opacity: 0.85 }} />
          </div>
        </div>
      )}

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1080, margin: "0 auto", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "40px", alignItems: "center" }} className="kk-grid-collapse">
          <div>
            <div style={{ ...mono, display: "flex", alignItems: "center", gap: 10, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: c.clay, marginBottom: 26 }}>
              <span style={{ width: 26, height: 1, background: c.clay }} />
              Full Stack Developer — AI Engineer in progress
            </div>

            <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.05, fontSize: "clamp(32px, 5vw, 62px)", maxWidth: 750, color: c.ink }}>
              Keshav Kashyap<br />
              <span style={{ whiteSpace: "nowrap" }}>
                Building,{" "}
                <span style={{ display: "inline-block", width: "6.8em", position: "relative", verticalAlign: "bottom" }}>
                  <AnimatePresence>
                    <motion.span
                      key={wordIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      style={{ position: "absolute", left: 0, bottom: 0, whiteSpace: "nowrap" }}
                    >
                      <em style={{ fontStyle: "italic", fontWeight: 500, color: c.mossDeep }}>{WORDS[wordIndex]}</em>
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>{" "}
              systems.
            </h1>

            <p style={{ marginTop: 26, fontSize: 18, color: c.inkSoft, maxWidth: 560, lineHeight: 1.6 }}>
              I'm a Full Stack Software Engineer passionate about building high-performance web applications. Currently exploring AI and machine learning to build smarter products.
            </p>

            <div style={{ marginTop: 32 }}>
              <a
                href="/Keshav_Kashyap_Resume_new.pdf"
                download="Keshav_Kashyap_Resume.pdf"
                style={{
                  ...mono,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  padding: "14px 28px",
                  background: c.mossDeep,
                  border: `1px solid ${c.mossDeep}`,
                  color: c.paper,
                  borderRadius: 8,
                  boxShadow: "0 4px 14px rgba(60, 68, 50, 0.2)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = c.ink;
                  e.currentTarget.style.borderColor = c.ink;
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(42, 39, 30, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = c.mossDeep;
                  e.currentTarget.style.borderColor = c.mossDeep;
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(60, 68, 50, 0.2)";
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 2 }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>

            <div style={{ marginTop: 40, display: "flex", gap: 24, flexWrap: "wrap", paddingTop: 16 }}>
              {[["7th", "Semester, Integrated MCA"], ["80K+", "YouTube subscribers"], ["8+", "Shipped projects"]].map(([num, label]) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.4)", border: `1px solid ${c.line}`, padding: "20px 24px", borderRadius: 16, backdropFilter: "blur(10px)", flex: "1 1 140px" }}>
                  <div style={{ ...serif, fontStyle: "italic", fontSize: 32, color: c.mossDeep, marginBottom: 4 }}>{num}</div>
                  <div style={{ ...mono, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: c.inkSoft, lineHeight: 1.4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative", display: "flex", justifyContent: "center", pointerEvents: "none" }}>
            <img
              src="/keshav.webp"
              alt="Keshav Kashyap"
              draggable="false"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              style={{ width: "100%", maxWidth: 360, borderRadius: 24, userSelect: "none", pointerEvents: "none", WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)", maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
