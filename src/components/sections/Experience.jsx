import React, { useState } from "react";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import ChipRow from "../ui/ChipRow";
import { c, mono, serif } from "../../data/theme";
import { Award, Briefcase, Calendar, X, Eye, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <section id="experience" style={{ padding: "100px 0", position: "relative" }}>
      {/* Background container: zIndex 2 puts it above root background but behind the cursor (3) */}
      <div style={{ position: "absolute", inset: 0, background: c.bgDeep, zIndex: 2, pointerEvents: "none" }} />
      {/* Main content div: zIndex 10 puts it above the cursor (3) */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <SectionHead index="02" title="Career" em="road" />

        <div style={{ position: "relative", marginTop: 60, paddingBottom: 40 }}>
          {/* The Vertical Road Track */}
          <div
            style={{
              position: "absolute",
              left: 70, // Centers on the 140px left column
              top: 0,
              bottom: 0,
              width: 24,
              background: "#32372A", // Asphalt dark color
              transform: "translateX(-50%)",
              borderRadius: 12,
              border: `2px solid ${c.lineStrong}`,
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
              overflow: "hidden",
              zIndex: 1
            }}
            className="kk-road-track"
          >
            {/* Dotted/Dashed Road Line */}
            <div style={{
              width: 0,
              height: "100%",
              borderLeft: "2px dashed #E3B448", // Gold/Yellow road dash
              margin: "0 auto",
              opacity: 0.95
            }} />
          </div>

          {/* Timeline Milestones */}
          <div style={{ display: "flex", flexDirection: "column", gap: 60, position: "relative" }}>

            {/* Milestone 2: SDE (Full-Time) - CURRENT ROLE */}
            <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 48, position: "relative" }} className="kk-milestone-row">
              
              {/* Left Column: Icon and Date */}
              <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 20 }} className="kk-milestone-left">
                {/* Milestone Dot/Icon */}
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: c.mossDeep,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: c.paper,
                  zIndex: 2,
                  boxShadow: `0 0 0 10px ${c.bgDeep}`
                }} className="kk-milestone-dot">
                  <Briefcase size={20} strokeWidth={2} />
                </div>
                
                {/* Date under the icon */}
                <div style={{ 
                  textAlign: "center", 
                  marginTop: 24,
                  background: c.paper,
                  padding: "8px 16px",
                  borderRadius: 20,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  border: `1px solid ${c.line}`,
                  position: "relative",
                  zIndex: 5
                }} className="kk-milestone-date">
                  <div style={{ ...mono, fontSize: 11, color: c.clay, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>Present</div>
                  <div style={{ ...serif, fontSize: 15, color: c.ink, fontWeight: 600 }}>Apr 2026</div>
                </div>
              </div>

              {/* Card Container */}
              <div className="kk-milestone-card-container">
                <Reveal>
                  <div style={{
                    background: c.paper,
                    border: `1px solid ${c.line}`,
                    borderRadius: 16,
                    padding: 28,
                    boxShadow: "0 8px 30px rgba(42,39,30,0.06)",
                    position: "relative"
                  }}>
                    {/* Role Tag */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
                      <span style={{
                        background: c.mossDeep,
                        color: c.paper,
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: 1.5,
                        ...mono,
                        padding: "4px 8px",
                        borderRadius: 4,
                        textTransform: "uppercase"
                      }}>
                        Full-Time
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, ...mono, fontSize: 12, color: c.inkFaint }}>
                        <Calendar size={13} />
                        Apr 2026 - Present
                      </div>
                    </div>

                    <h3 style={{ ...serif, fontSize: 22, fontWeight: 600, marginTop: 14, color: c.ink }}>
                      Software Development Engineer (SDE)
                    </h3>
                    <div style={{ color: c.clay, fontWeight: 600, marginTop: 4, fontSize: 14, ...mono }}>
                      OnePlaceSolar (OPS)
                    </div>

                    <p style={{ color: c.inkSoft, fontSize: 14.5, lineHeight: 1.6, marginTop: 14, marginBottom: 18 }}>
                      Led backend and automation systems development, focusing on internal CRM modules, U.S. solar permit package automation, and dynamic PDF generation.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                      {[
                        "Developed solar permit CRM modules and dynamic PDF automation using Python (PyMuPDF) to generate U.S. permit plan-sets (PV & Battery)",
                        "Automated structural tables, electrical calculations, roof details, and equipment schedules, significantly reducing manual effort",
                        "Built scalable internal tools and API pipelines using Flask, React.js, PostgreSQL, and JavaScript",
                        "Optimized databases, managed storage uploads, resolved production bugs, and collaborated on deployment workflows"
                      ].map((item, idx) => (
                        <div key={idx} style={{ display: "flex", gap: 8, fontSize: 13.5, color: c.inkSoft, lineHeight: 1.4 }}>
                          <span style={{ color: c.clay }}>▸</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <ChipRow items={["Python", "Flask", "React.js", "PostgreSQL", "PyMuPDF (Fitz)", "JavaScript", "HTML", "CSS", "Git", "REST APIs"]} bg="rgba(164,89,47,0.08)" fg={c.clay} />
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Milestone 1: SDE Intern */}
            <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 48, position: "relative" }} className="kk-milestone-row">
              
              {/* Left Column: Icon and Date */}
              <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 20 }} className="kk-milestone-left">
                {/* Milestone Dot/Icon */}
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: c.clay,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: c.paper,
                  zIndex: 2,
                  boxShadow: `0 0 0 10px ${c.bgDeep}`
                }} className="kk-milestone-dot">
                  <GraduationCap size={22} strokeWidth={2} />
                </div>
                
                {/* Date under the icon */}
                <div style={{ 
                  textAlign: "center", 
                  marginTop: 24,
                  background: c.paper,
                  padding: "8px 16px",
                  borderRadius: 20,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  border: `1px solid ${c.line}`,
                  position: "relative",
                  zIndex: 5
                }} className="kk-milestone-date">
                  <div style={{ ...mono, fontSize: 11, color: c.clay, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>Jan 2026</div>
                  <div style={{ ...serif, fontSize: 15, color: c.ink, fontWeight: 600 }}>Apr 2026</div>
                </div>
              </div>

              {/* Card Container */}
              <div className="kk-milestone-card-container">
                <Reveal>
                  <div style={{
                    background: c.paper,
                    border: `1px solid ${c.line}`,
                    borderRadius: 16,
                    padding: 28,
                    boxShadow: "0 8px 30px rgba(42,39,30,0.06)",
                    position: "relative"
                  }}>
                    {/* Role Tag */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
                      <span style={{
                        background: c.moss,
                        color: c.paper,
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: 1.5,
                        ...mono,
                        padding: "4px 8px",
                        borderRadius: 4,
                        textTransform: "uppercase"
                      }}>
                        Internship
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, ...mono, fontSize: 12, color: c.inkFaint }}>
                        <Calendar size={13} />
                        Jan 2026 - Apr 2026
                      </div>
                    </div>

                    <h3 style={{ ...serif, fontSize: 22, fontWeight: 600, marginTop: 14, color: c.ink }}>
                      Software Development Engineer (SDE Intern)
                    </h3>
                    <div style={{ color: c.clay, fontWeight: 600, marginTop: 4, fontSize: 14, ...mono }}>
                      OnePlaceSolar (OPS)
                    </div>

                    <p style={{ color: c.inkSoft, fontSize: 14.5, lineHeight: 1.6, marginTop: 14, marginBottom: 18 }}>
                      Contributed to internal CRM development and automated workflows, gaining hands-on experience in building features and integrating backend systems.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                      {[
                        "Assisted in developing the internal Solar CRM platform and backend REST APIs using Flask",
                        "Created frontend components with React.js and integrated with PostgreSQL database queries",
                        "Fixed production bugs and implemented new features within Agile workflow practices"
                      ].map((item, idx) => (
                        <div key={idx} style={{ display: "flex", gap: 8, fontSize: 13.5, color: c.inkSoft, lineHeight: 1.4 }}>
                          <span style={{ color: c.moss }}>▸</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                      <ChipRow items={["Python", "Flask", "React.js", "PostgreSQL", "JavaScript", "Git"]} bg="rgba(86,96,71,0.08)" fg={c.mossDeep} />

                      {/* View Certificate Button */}
                      <button
                        onClick={() => setShowCertificate(true)}
                        style={{
                          background: c.gold,
                          color: c.paper,
                          border: "none",
                          borderRadius: 6,
                          padding: "8px 14px",
                          fontSize: 12,
                          ...mono,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          boxShadow: "0 2px 6px rgba(169,132,54,0.3)",
                          transition: "background 0.2s"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = "#92712D"}
                        onMouseLeave={(e) => e.currentTarget.style.background = c.gold}
                      >
                        <Award size={14} /> Certificate
                      </button>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Internship Certificate Modal */}
      <AnimatePresence>
        {showCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(42,39,30,0.6)",
              backdropFilter: "blur(4px)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24
            }}
            onClick={() => setShowCertificate(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              style={{
                background: "#FAF7F0", // Premium parchment color
                width: "100%",
                maxWidth: 780,
                borderRadius: 12,
                boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                border: "16px solid #FAF7F0", // Double border container
                position: "relative",
                cursor: "default"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Outer Thin Border */}
              <div style={{
                border: `2px solid ${c.gold}`,
                padding: "32px 40px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
              }}>
                {/* Close Button */}
                <button
                  onClick={() => setShowCertificate(false)}
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: c.inkSoft
                  }}
                >
                  <X size={20} />
                </button>

                {/* Ribbon / Seal representation */}
                <div style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: c.gold,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FAF7F0",
                  marginBottom: 16,
                  boxShadow: "0 4px 10px rgba(169,132,54,0.3)"
                }}>
                  <Award size={26} />
                </div>

                {/* Company & Certificate Title */}
                <h4 style={{ ...mono, fontSize: 12, color: c.mossDeep, letterSpacing: 3, textTransform: "uppercase", margin: 0 }}>
                  OnePlaceSolar (OPS)
                </h4>

                <h2 style={{ ...serif, fontSize: 28, fontStyle: "italic", color: c.ink, margin: "10px 0 20px 0", fontWeight: 500 }}>
                  Certificate of Internship Completion
                </h2>

                <p style={{ ...mono, fontSize: 11, color: c.inkFaint, textTransform: "uppercase", letterSpacing: 1.5, margin: 0 }}>
                  This is proudly presented to
                </p>

                <h1 style={{ ...serif, fontSize: 36, color: c.clay, margin: "12px 0 16px 0", fontWeight: 600 }}>
                  Keshav Kashyap
                </h1>

                <p style={{ color: c.inkSoft, fontSize: 14.5, lineHeight: 1.7, maxWidth: 540, margin: "0 auto 28px" }}>
                  For outstanding contribution, dedication, and professional excellence displayed during their tenure as a <strong style={{ color: c.ink }}>Software Development Engineer (SDE Intern)</strong> from January 2026 to April 2026.
                </p>

                {/* Signature details */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, width: "100%", maxWidth: 480, marginTop: 12, borderTop: `1px solid ${c.line}`, paddingTop: 18 }}>
                  <div>
                    <div style={{ ...serif, fontStyle: "italic", fontSize: 16, color: c.ink, height: 26 }}>OnePlaceSolar Tech</div>
                    <div style={{ ...mono, fontSize: 10, color: c.inkFaint, textTransform: "uppercase", letterSpacing: 1, marginTop: 4 }}>Tech Lead, OPS</div>
                  </div>
                  <div>
                    <div style={{ ...serif, fontStyle: "italic", fontSize: 16, color: c.ink, height: 26 }}>Authorized HR</div>
                    <div style={{ ...mono, fontSize: 10, color: c.inkFaint, textTransform: "uppercase", letterSpacing: 1, marginTop: 4 }}>Human Resources</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS adjustments for mobile styling of the road timeline */}
      <style>{`
        @media (max-width: 800px) {
          .kk-road-track {
            left: 40px !important;
          }
          .kk-milestone-row {
            grid-template-columns: 80px 1fr !important;
            gap: 16px !important;
          }
          .kk-milestone-left {
            padding-top: 10px !important;
          }
          .kk-milestone-dot {
            width: 36px !important;
            height: 36px !important;
            box-shadow: 0 0 0 6px #FAF7F0 !important;
          }
          .kk-milestone-dot svg {
            width: 16px !important;
            height: 16px !important;
          }
          .kk-milestone-date {
            margin-top: 16px !important;
          }
          .kk-milestone-date > div:first-child {
            font-size: 9px !important;
          }
          .kk-milestone-date > div:last-child {
            font-size: 14px !important;
          }
          .kk-milestone-card-container {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
