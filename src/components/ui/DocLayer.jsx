import React from "react";
import { motion, useTransform } from "framer-motion";
import { c } from "../../data/theme";

export default function DocLayer({ mx, my, depth, rotate, imageSrc, box }) {
  const tx = useTransform(mx, (v) => v * depth);
  const ty = useTransform(my, (v) => v * depth);
  const rot = useTransform(mx, (v) => rotate + v * 4);
  return (
    <motion.div
      style={{
        x: tx,
        y: ty,
        rotate: rot,
        position: "absolute",
        ...box,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: c.paper,
          border: `1px solid ${c.lineStrong}`,
          borderRadius: 8,
          boxShadow: "0 30px 60px -20px rgba(42,39,30,0.25)",
          overflow: "hidden",
        }}
      >
        <div style={{ height: 20, borderBottom: `1px solid ${c.line}`, display: "flex", alignItems: "center", gap: 6, padding: "0 10px", background: "rgba(255,255,255,0.5)" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF5F56" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFBD2E" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#27C93F" }} />
        </div>
        <div style={{ width: "100%", height: "calc(100% - 20px)", background: c.lineLight }}>
          {imageSrc && (
            <img src={imageSrc} alt="Project Demo" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", userSelect: "none", pointerEvents: "none" }} />
          )}
        </div>
      </div>
    </motion.div>
  );
}
