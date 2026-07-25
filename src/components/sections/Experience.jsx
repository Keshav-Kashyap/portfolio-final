import React from "react";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import ChipRow from "../ui/ChipRow";
import { c, mono, serif } from "../../data/theme";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 0", background: c.bgDeep }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <SectionHead index="02" title="Work" em="experience" />
        <Reveal style={{ borderLeft: `2px solid ${c.moss}`, paddingLeft: 32, display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 40 }}>
          <div>
            <h3 style={{ ...serif, fontSize: 26, fontWeight: 500 }}>Python Automation Developer</h3>
            <div style={{ color: c.clay, fontWeight: 600, marginTop: 6, fontSize: 15 }}>OnePlaceSolar (OPS)</div>
            <div style={{ ...mono, fontSize: 12, color: c.inkFaint, marginTop: 10 }}>CURRENT ROLE</div>
          </div>
          <div>
            <p style={{ color: c.inkSoft, fontSize: 15, lineHeight: 1.7, marginBottom: 16 }}>
              Building automation software for the US solar industry — generating the engineering documents required for residential solar installations, at production scale.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Dynamic PDF generation for solar permit plan sets, built entirely in code rather than templates",
                "Automated Bill of Materials (BOM) generation using engineering calculation rules",
                "Image processing and PDF overlay — placing roof layouts, electrical diagrams, and equipment images into generated plans",
                "Engineering table generation and dynamic template mapping across PV, Battery, and PV+Battery project types",
                "Flask and FastAPI backends with React interfaces for managing the permit workflow, backed by AWS S3 storage",
              ].map((item, i) => (
                <div key={i} style={{ position: "relative", paddingLeft: 20, color: c.inkSoft, fontSize: 15, lineHeight: 1.6 }}>
                  <span style={{ position: "absolute", left: 0, color: c.gold }}>—</span>
                  {item}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 22 }}>
              <ChipRow items={["Python", "Flask", "FastAPI", "PyMuPDF", "PDF-Lib", "React", "MongoDB", "AWS S3"]} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
