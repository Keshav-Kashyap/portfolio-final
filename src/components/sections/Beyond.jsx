import React from "react";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import { c, mono, serif } from "../../data/theme";

export default function Beyond() {
  return (
    <section id="beyond" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <SectionHead index="05" title="Beyond" em="the code" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="kk-grid-collapse">
          <Reveal style={{ border: `1px solid ${c.line}`, background: c.paper, padding: 34 }}>
            <div style={{ ...serif, fontStyle: "italic", fontSize: 44, color: c.mossDeep }}>80K+</div>
            <div style={{ ...mono, fontSize: 12, color: c.inkFaint, marginTop: 6, textTransform: "uppercase", letterSpacing: 1 }}>YouTube subscribers</div>
            <p style={{ color: c.inkSoft, fontSize: 14.5, lineHeight: 1.7, marginTop: 18 }}>
              I run a gaming and anime YouTube channel with 160+ videos and a shorts-first content strategy. It's taught me hands-on lessons in retention, SEO, and thumbnails — the same instincts I now bring to product decisions.
            </p>
          </Reveal>
          <Reveal delay={0.1} style={{ border: `1px solid ${c.line}`, background: c.paper, padding: 34 }}>
            <div style={{ ...serif, fontStyle: "italic", fontSize: 44, color: c.mossDeep }}>ML</div>
            <div style={{ ...mono, fontSize: 12, color: c.inkFaint, marginTop: 6, textTransform: "uppercase", letterSpacing: 1 }}>Current learning track</div>
            <p style={{ color: c.inkSoft, fontSize: 14.5, lineHeight: 1.7, marginTop: 18 }}>
              Working through the math behind classification models — cost functions, log loss, sigmoid, gradient descent — with hands-on implementations like a heart-attack prediction model, as I build toward deep learning and production AI agents.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
