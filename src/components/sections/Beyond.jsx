import React from "react";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import { c, mono, serif } from "../../data/theme";

export default function Beyond() {
  const cardStyle = {
    background: "rgba(255,255,255,0.3)",
    backdropFilter: "blur(12px)",
    border: `1px solid ${c.line}`,
    borderRadius: 24,
    padding: 32,
    position: "relative",
    overflow: "hidden",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    cursor: "default"
  };

  return (
    <section id="beyond" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <SectionHead index="05" title="Beyond" em="the code" />
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 20 }}>
          
          {/* Card 1: YouTube */}
          <Reveal delay={0.0}>
            <div 
              style={cardStyle}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.04)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5, color: c.mossDeep, fontWeight: 600 }}>Creator</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c.mossDeep} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </div>
              <div style={{ ...serif, fontSize: 42, color: c.ink, marginTop: 16, fontWeight: 600, letterSpacing: "-0.02em" }}>80K+</div>
              <div style={{ ...mono, fontSize: 12, color: c.inkFaint, marginTop: 4, textTransform: "uppercase", letterSpacing: 1 }}>YouTube Subs</div>
              <p style={{ color: c.inkSoft, fontSize: 14.5, lineHeight: 1.6, marginTop: 16, marginBottom: 0 }}>
                I run a tech & gaming channel with 160+ videos. It's taught me hands-on lessons in audience retention, SEO, and storytelling—instincts I now bring to product design.
              </p>
            </div>
          </Reveal>

          {/* Card 2: ML */}
          <Reveal delay={0.1}>
            <div 
              style={cardStyle}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.04)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5, color: c.clay, fontWeight: 600 }}>Learning</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c.clay} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div style={{ ...serif, fontSize: 42, color: c.ink, marginTop: 16, fontWeight: 600, letterSpacing: "-0.02em" }}>ML & AI</div>
              <div style={{ ...mono, fontSize: 12, color: c.inkFaint, marginTop: 4, textTransform: "uppercase", letterSpacing: 1 }}>Current Track</div>
              <p style={{ color: c.inkSoft, fontSize: 14.5, lineHeight: 1.6, marginTop: 16, marginBottom: 0 }}>
                Working through the math behind classification models—cost functions, sigmoid, gradient descent—building toward deep learning and production-ready AI agents.
              </p>
            </div>
          </Reveal>

          {/* Card 3: Chess */}
          <Reveal delay={0.2}>
            <div 
              style={cardStyle}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.04)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5, color: c.ink, fontWeight: 600 }}>Strategy</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 22h20"/>
                  <path d="M12 2l3 7h-6z"/>
                  <path d="M10 9v9"/>
                  <path d="M14 9v9"/>
                  <path d="M8 18h8"/>
                </svg>
              </div>
              <div style={{ ...serif, fontSize: 42, color: c.ink, marginTop: 16, fontWeight: 600, letterSpacing: "-0.02em" }}>Chess</div>
              <div style={{ ...mono, fontSize: 12, color: c.inkFaint, marginTop: 4, textTransform: "uppercase", letterSpacing: 1 }}>Tactical Mindset</div>
              <p style={{ color: c.inkSoft, fontSize: 14.5, lineHeight: 1.6, marginTop: 16, marginBottom: 0 }}>
                Playing chess sharpens my pattern recognition, forecasting, and calculating multiple steps ahead. These skills directly translate to architecting complex, scalable software systems.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
