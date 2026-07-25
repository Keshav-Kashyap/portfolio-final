import React from "react";
import { c, mono } from "../../data/theme";

export default function Navbar() {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(227,220,200,0.88)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${c.line}` }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ ...mono, fontSize: 14, border: `1px solid ${c.lineStrong}`, padding: "6px 10px" }}>KK</div>
        <div style={{ display: "flex", gap: 36 }}>
          {["About", "Experience", "Work", "Skills", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="kk-navlink" style={{ ...mono, fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: c.inkSoft }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
