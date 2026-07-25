import React from "react";
import { c, mono } from "../../data/theme";

export default function ChipRow({ items, bg, fg }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {items.map((t) => (
        <span key={t} style={{ ...mono, fontSize: 11, padding: "5px 10px", border: `1px solid ${c.lineStrong}`, color: fg || c.inkSoft, background: bg || c.paper }}>
          {t}
        </span>
      ))}
    </div>
  );
}
