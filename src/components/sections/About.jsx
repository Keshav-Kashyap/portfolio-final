import React from "react";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import { c, mono, serif } from "../../data/theme";

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <SectionHead index="01" title="About" em="me" />
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64 }} className="kk-grid-collapse">
          <Reveal style={{ fontSize: 17, lineHeight: 1.85, color: c.inkSoft, display: "flex", flexDirection: "column", gap: 18 }}>
            <p>
              I'm an <strong style={{ color: c.ink, fontWeight: 600 }}>Integrated MCA student</strong> at Raja Balwant Singh Management Technical Campus (AKTU), currently in my 7th semester — and a full stack developer working professionally in the solar permit automation industry.
            </p>
            <p>
              Day to day, I build tools that turn manual engineering workflows into automated pipelines: dynamic PDFs, BOM calculations, image overlays, and the plumbing that ships them to production. Alongside that, I'm going deeper into{" "}
              <strong style={{ color: c.ink, fontWeight: 600 }}>machine learning</strong> — from cost functions and gradient descent to real classification problems — because my goal is to become an AI Engineer who can also ship the full product around the model.
            </p>
            <p>
              Outside of code, I run a YouTube channel with <strong style={{ color: c.ink, fontWeight: 600 }}>80,000+ subscribers</strong> and 160+ videos — which taught me a different kind of product sense: what keeps someone watching, and what makes them leave.
            </p>
          </Reveal>
          <Reveal delay={0.1} style={{ background: c.paper, border: `1px solid ${c.line}`, padding: 28, height: "fit-content" }}>
            <span style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: 1, color: c.gold }}>Education</span>
            <h4 style={{ ...serif, fontSize: 22, fontWeight: 500, marginTop: 10 }}>Integrated MCA</h4>
            <p style={{ color: c.inkSoft, fontSize: 14, marginTop: 8, lineHeight: 1.6 }}>Raja Balwant Singh Management Technical Campus<br />Affiliated to AKTU · 7th Semester</p>
            <div style={{ height: 1, background: c.line, margin: "18px 0" }} />
            <span style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: 1, color: c.gold }}>Focus areas right now</span>
            <p style={{ color: c.inkSoft, fontSize: 14, marginTop: 8, lineHeight: 1.6 }}>Machine Learning fundamentals · Data Structures &amp; Algorithms · System Design · Production-ready AI agents</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
