import React from "react";
import { c, mono, serif } from "../../data/theme";

export default function SectionHead({ index, title, em }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 56 }}>
      <span style={{ ...mono, fontSize: 13, color: c.clay }}>{index}</span>
      <h2 style={{ ...serif, fontWeight: 500, fontSize: 36, color: c.ink }}>
        {title} <em style={{ fontStyle: "italic", fontWeight: 400, color: c.mossDeep }}>{em}</em>
      </h2>
      <div style={{ flex: 1, height: 1, background: c.line }} />
    </div>
  );
}
