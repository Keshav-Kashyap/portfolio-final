import React from "react";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import ChipRow from "../ui/ChipRow";
import { c, mono, serif } from "../../data/theme";
import { projects } from "../../data/portfolioData";
import { ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="work" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <SectionHead index="03" title="Selected" em="work" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="kk-grid-collapse">
          {projects.map((p, i) => (
            <Reveal
              key={i}
              delay={i * 0.05}
              style={{
                background: c.paper,
                border: `1px solid ${c.line}`,
                padding: 30,
                gridColumn: p.featured ? "1 / -1" : undefined,
                display: p.featured ? "grid" : "block",
                gridTemplateColumns: p.featured ? "1fr 1fr" : undefined,
                gap: p.featured ? 40 : undefined,
              }}
            >
              <div className="kk-proj-card">
                <div style={{ ...mono, fontSize: 12, color: c.clay, marginBottom: 14 }}>{p.tag || p.index}</div>
                <h3 style={{ ...serif, fontSize: 23, fontWeight: 500, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: c.inkSoft, fontSize: 14.5, lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ marginBottom: 20 }}>
                  <ChipRow items={p.tags} bg="rgba(86,96,71,0.1)" fg={c.mossDeep} />
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="kk-btn-dark" style={{ ...mono, display: "flex", alignItems: "center", gap: 6, fontSize: 12, padding: "8px 12px", border: `1px solid ${c.ink}`, color: c.ink }}>
                    <Github size={13} /> Code
                  </a>
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="kk-btn-moss" style={{ ...mono, display: "flex", alignItems: "center", gap: 6, fontSize: 12, padding: "8px 12px", border: `1px solid ${c.moss}`, color: c.mossDeep }}>
                    <ExternalLink size={13} /> Live
                  </a>
                </div>
              </div>
              {p.extra && (
                <div>
                  <p style={{ color: c.inkSoft, fontSize: 14.5, lineHeight: 1.7 }}>
                    <strong style={{ color: c.ink }}>What it does: </strong>
                    {p.extra}
                  </p>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
