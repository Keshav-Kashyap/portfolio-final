import React from "react";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import ChipRow from "../ui/ChipRow";
import { c, mono } from "../../data/theme";
import { skillGroups } from "../../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 0", background: c.bgDeep }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <SectionHead index="04" title="Technical" em="skills" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 36 }} className="kk-grid-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.05}>
              <span style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: 1, color: c.gold, marginBottom: 14, display: "block" }}>{g.label}</span>
              <ChipRow items={g.items} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
