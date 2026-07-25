import React, { useRef, useState, useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import DocLayer from "../ui/DocLayer";
import { c, mono, serif } from "../../data/theme";

export default function Hero() {
  const heroRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 15 });
  const smy = useSpring(my, { stiffness: 60, damping: 15 });
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
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
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
          <DocLayer mx={smx} my={smy} depth={22} rotate={-6} imageSrc="/project_images/image1.png" box={{ width: 260, height: 170, top: "14%", right: "8%" }} />
          <DocLayer mx={smx} my={smy} depth={14} rotate={4} imageSrc="/project_images/image2.png" box={{ width: 240, height: 150, top: "22%", right: "16%" }} />
          <DocLayer mx={smx} my={smy} depth={30} rotate={9} imageSrc="/project_images/image3.png" box={{ width: 220, height: 140, top: "34%", right: "4%", opacity: 0.85 }} />
        </div>
      )}

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1080, margin: "0 auto", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "40px", alignItems: "center" }}>
          <div>
            <div style={{ ...mono, display: "flex", alignItems: "center", gap: 10, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: c.clay, marginBottom: 26 }}>
              <span style={{ width: 26, height: 1, background: c.clay }} />
              Full Stack Developer — AI Engineer in progress
            </div>

            <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.05, fontSize: "clamp(32px, 5vw, 62px)", maxWidth: 750, color: c.ink }}>
              Keshav Kashyap<br />
              builds systems that <em style={{ fontStyle: "italic", fontWeight: 500, color: c.mossDeep }}>replace</em> the paperwork.
            </h1>

            <p style={{ marginTop: 26, fontSize: 18, color: c.inkSoft, maxWidth: 560, lineHeight: 1.6 }}>
              I'm a Full Stack Software Engineer passionate about building scalable, high-performance web applications and systems. Currently exploring machine learning and artificial intelligence to build smarter, data-driven products.
            </p>

            <div style={{ marginTop: 56, display: "flex", gap: 48, flexWrap: "wrap", borderTop: `1px solid ${c.line}`, paddingTop: 24 }}>
              {[["7th", "Semester, Integrated MCA"], ["80K+", "YouTube subscribers"], ["8+", "Shipped projects"], ["1", "Production automation system"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ ...serif, fontStyle: "italic", fontSize: 26, color: c.mossDeep }}>{num}</div>
                  <div style={{ ...mono, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: c.inkFaint, marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", pointerEvents: "none" }}>
            <img 
              src="/keshav.png" 
              alt="Keshav Kashyap"
              draggable="false"
              style={{ width: "100%", maxWidth: 360, borderRadius: 24, userSelect: "none", pointerEvents: "none", WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)", maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)" }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
