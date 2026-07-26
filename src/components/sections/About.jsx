import React from "react";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import { c, mono, serif } from "../../data/theme";

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <SectionHead index="01" title="About" em="me" />
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64 }} className="kk-grid-collapse">
          {/* Left Column: Shortened Text */}
          <Reveal style={{ fontSize: 16, lineHeight: 1.8, color: c.inkSoft, display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ margin: 0 }}>
              I'm an <strong style={{ color: c.ink, fontWeight: 600 }}>Integrated MCA student (7th Sem)</strong> at RBS Management Technical Campus, AKTU. I work professionally as a Full-Stack Software Engineer specializing in automation.
            </p>
            <p style={{ margin: 0 }}>
              My day-to-day work is centered on turning complex engineering workflows into instant pipelines. I automate document generation, BOM calculations, and template mappings at production scale.
            </p>
            <p style={{ margin: 0 }}>
              Beyond my core work, I focus on <strong style={{ color: c.ink, fontWeight: 600 }}>Machine Learning</strong> and system design. My goal is to build intelligent, data-driven systems from models to production UI.
            </p>
            <p style={{ margin: 0 }}>
              I also share my journey with a community of <strong style={{ color: c.ink, fontWeight: 600 }}>80,000+ subscribers</strong> on YouTube, which helps me stay sharp on teaching, product design, and audience retention.
            </p>
          </Reveal>

          {/* Right Column: Visual Dashboard */}
          <Reveal delay={0.1} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Card 1: MCA Academic Tracker */}
            <div style={{ background: c.paper, border: `1px solid ${c.line}`, borderRadius: 16, padding: 24, boxShadow: "0 4px 12px rgba(42,39,30,0.02)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: 1, color: c.gold, fontWeight: 600 }}>Integrated MCA</span>
                <span style={{ ...mono, fontSize: 11, color: c.inkSoft }}>70% Progress</span>
              </div>
              <div style={{ width: "100%", height: 6, background: "rgba(42,39,30,0.08)", borderRadius: 3, overflow: "hidden", marginBottom: 14 }}>
                <div style={{ width: "70%", height: "100%", background: c.gold, borderRadius: 3 }} />
              </div>
              <p style={{ color: c.ink, fontSize: 13, fontWeight: 500, margin: "0 0 4px 0" }}>RBS MTC (AKTU) · Semester VII</p>
              <p style={{ color: c.inkSoft, fontSize: 12, margin: 0, lineHeight: 1.5 }}>Focusing on Machine Learning, Algorithms &amp; Production Architectures</p>
            </div>

            {/* Card 2: Visual Automation Pipeline */}
            <div style={{ background: c.paper, border: `1px solid ${c.line}`, borderRadius: 16, padding: 24, boxShadow: "0 4px 12px rgba(42,39,30,0.02)" }}>
              <span style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: 1, color: c.clay, fontWeight: 600, display: "block", marginBottom: 14 }}>SDE Automation Pipeline</span>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
                {/* Horizontal line running behind nodes */}
                <div style={{ position: "absolute", left: 16, right: 16, top: 16, height: 2, borderTop: `1px dashed ${c.inkFaint}`, zIndex: 0 }} />
                
                {[
                  { label: "Data Input", color: c.moss },
                  { label: "AI & Rules", color: c.clay },
                  { label: "PDF Engine", color: c.gold },
                  { label: "S3 Deliver", color: c.ink }
                ].map((node, index) => (
                  <div key={node.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1, position: "relative" }}>
                    <div style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: node.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: c.paper,
                      fontSize: 11,
                      fontWeight: 600,
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      animation: `kk-pulse 2s infinite ${index * 0.5}s`
                    }}>
                      {index + 1}
                    </div>
                    <span style={{ ...mono, fontSize: 10, color: c.inkSoft, marginTop: 8, textAlign: "center" }}>{node.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: YouTube Impact */}
            <div style={{ background: c.paper, border: `1px solid ${c.line}`, borderRadius: 16, padding: 24, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 16, alignItems: "center", boxShadow: "0 4px 12px rgba(42,39,30,0.02)" }}>
              <div>
                <span style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: 1, color: c.moss, fontWeight: 600, display: "block", marginBottom: 8 }}>Creator Metrics</span>
                <h4 style={{ ...serif, fontSize: 26, fontWeight: 600, color: c.ink, margin: "0 0 2px 0" }}>80,000+</h4>
                <p style={{ color: c.inkSoft, fontSize: 12, margin: 0 }}>Subscribers on YouTube</p>
                <p style={{ color: c.inkFaint, fontSize: 11, margin: "6px 0 0 0", ...mono }}>160+ VIDEOS PUBLISHED</p>
              </div>
              {/* Visual Mock Trendline Chart */}
              <div style={{ position: "relative", height: 60 }}>
                <svg viewBox="0 0 100 40" style={{ width: "100%", height: "100%", overflow: "visible" }}>
                  <path
                    d="M0,35 Q15,30 30,25 T60,15 T90,5 L100,2"
                    fill="none"
                    stroke={c.clay}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="100" cy="2" r="3.5" fill={c.clay} />
                  <circle cx="100" cy="2" r="7" fill="none" stroke={c.clay} strokeWidth="1" style={{ opacity: 0.5 }} />
                </svg>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      
      {/* Dynamic pulse CSS for dashboard widgets */}
      <style>{`
        @keyframes kk-pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(42,39,30,0.2); }
          70% { transform: scale(1.08); box-shadow: 0 0 0 8px rgba(42,39,30,0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(42,39,30,0); }
        }
      `}</style>
    </section>
  );
}
