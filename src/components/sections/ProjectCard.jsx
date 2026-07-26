import React from "react";
import Reveal from "../ui/Reveal";
import { c, mono, serif } from "../../data/theme";
import { ExternalLink } from "lucide-react";
import {
  FaReact, FaPython, FaNodeJs, FaAws, FaGitAlt, FaBrain, FaVideo, FaDatabase
} from "react-icons/fa";
import {
  SiFlask, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiSupabase,
  SiFigma, SiDocker, SiVite, SiVercel, SiGraphql, SiExpress, SiSocketdotio, SiCloudinary
} from "react-icons/si";

// Dynamic mapper to load official React Icons for the tech stack
const getTechDetails = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes("react")) return { label: "React", Icon: FaReact, color: "#61DAFB" };
  if (t.includes("next")) return { label: "Next.js", Icon: SiNextdotjs, color: "#000000" };
  if (t.includes("node")) return { label: "Node.js", Icon: FaNodeJs, color: "#339933" };
  if (t.includes("python")) return { label: "Python", Icon: FaPython, color: "#3776AB" };
  if (t.includes("flask")) return { label: "Flask", Icon: SiFlask, color: "#000000" };
  if (t.includes("fastapi")) return { label: "FastAPI", Icon: SiSupabase, color: "#009688" };
  if (t.includes("mongo")) return { label: "MongoDB", Icon: SiMongodb, color: "#47A248" };
  if (t.includes("postgres")) return { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" };
  if (t.includes("supabase")) return { label: "Supabase", Icon: SiSupabase, color: "#3ECF8E" };
  if (t.includes("aws")) return { label: "AWS", Icon: FaAws, color: "#FF9900" };
  if (t.includes("tailwind")) return { label: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" };
  if (t.includes("openai")) return { label: "OpenAI", Icon: FaBrain, color: "#FF4F8B" }; // Safe fallback brain icon for OpenAI to avoid missing export SiOpenai
  if (t.includes("webrtc")) return { label: "WebRTC", Icon: FaVideo, color: "#000000" };
  if (t.includes("figma")) return { label: "Figma", Icon: SiFigma, color: "#F24E1E" };
  if (t.includes("docker")) return { label: "Docker", Icon: SiDocker, color: "#2496ED" };
  if (t.includes("git")) return { label: "Git", Icon: FaGitAlt, color: "#F05032" };
  if (t.includes("vite")) return { label: "Vite", Icon: SiVite, color: "#646CFF" };
  if (t.includes("vercel")) return { label: "Vercel", Icon: SiVercel, color: "#000000" };
  if (t.includes("graphql")) return { label: "GraphQL", Icon: SiGraphql, color: "#E10098" };
  if (t.includes("express")) return { label: "Express", Icon: SiExpress, color: "#000000" };
  if (t.includes("socket.io")) return { label: "Socket.IO", Icon: SiSocketdotio, color: "#010101" };
  if (t.includes("cloudinary")) return { label: "Cloudinary", Icon: SiCloudinary, color: "#3448C5" };
  return { label: tech, Icon: null, color: "#566047" };
};

export default function ProjectCard({ p, isFeatured }) {
  return (
    <Reveal
      className="premium-card"
      style={{
        background: "#FCFBF8", // Option 2: almost white for cards to pop against FAF8F3 page background
        border: `1px solid rgba(42,39,30,0.08)`,
        borderRadius: 24, // Soft, large rounded corners
        overflow: "hidden",
        gridColumn: isFeatured ? "1 / -1" : undefined,
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 15px 40px rgba(42, 39, 30, 0.02)",
        width: "100%",
        height: isFeatured ? 500 : 550, // Reduced heights to make cards compact
        margin: "0 auto",
        boxSizing: "border-box"
      }}
    >
      <div
        className="kk-proj-card-wrapper"
        style={{
          display: isFeatured ? "grid" : "flex",
          flexDirection: isFeatured ? undefined : "column",
          gridTemplateColumns: isFeatured ? "1.2fr 1fr" : undefined,
          height: "100%",
        }}
      >
        {/* Project Image Preview Container (Interactive) */}
        <div
          className="image-preview-container"
          style={{
            position: "relative",
            overflow: "hidden",
            height: isFeatured ? 418 : 220, // Adjusted height for featured layout
            background: c.bgDeep,
            borderRadius: 16,
            margin: 16,
            boxSizing: "border-box"
          }}
        >
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            decoding="async"
            className="kk-project-image"
          />
          <div className="image-hover-overlay" />

          {/* Action Hover Prompt */}
          <div className="image-action-indicator">
            Launch Project <ExternalLink size={13} style={{ marginLeft: 2 }} />
          </div>
        </div>

        {/* Project Info Container */}
        <div style={{
          padding: isFeatured ? "24px 36px 24px 20px" : "12px 24px 24px 24px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          boxSizing: "border-box",
          height: isFeatured ? 418 : 248
        }} className="kk-project-info">
          <div>
            {/* Index Header Line */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div style={{ ...mono, fontSize: 11, color: c.gold, letterSpacing: 4, textTransform: "uppercase" }}>
                {isFeatured ? "★ FEATURED" : `PROJECT ${p.index}`}
              </div>

              {/* Status Badge */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(164,89,47,0.06)",
                border: `1px solid rgba(164,89,47,0.15)`,
                color: c.clay,
                ...mono,
                fontSize: 9,
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: 12,
                letterSpacing: 0.5
              }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: c.clay, display: "inline-block" }} />
                {p.badge}
              </div>
            </div>

            <hr style={{ border: 0, borderBottom: `1px solid rgba(42,39,30,0.05)`, margin: "0 0 16px 0" }} />

            <h3 style={{ ...serif, fontSize: isFeatured ? 30 : 23, fontWeight: 700, color: c.ink, marginBottom: 16, lineHeight: 1.15 }}>
              {p.title}
            </h3>

            <p style={{
              color: c.inkSoft,
              fontSize: 14,
              lineHeight: 1.55,
              marginBottom: 24,
              maxWidth: "100%",
              display: "-webkit-box",
              WebkitLineClamp: isFeatured ? 3 : 2, // Limit description lines to prevent overflow
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}>
              {p.desc}
            </p>

            {isFeatured && p.extra && (
              <p className="kk-project-details" style={{
                color: c.inkSoft,
                fontSize: 13,
                lineHeight: 1.5,
                fontStyle: "italic",
                borderLeft: `2px solid ${c.clay}`,
                paddingLeft: 12,
                marginTop: 12,
                marginBottom: 20,
                maxWidth: "90%"
              }}>
                <strong>Technical Details: </strong> {p.extra}
              </p>
            )}
          </div>

          <div>


            {/* Custom Tech Stack tags with official React Icons */}
            <div className="kk-project-tags-row" style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
              {p.tags.slice(0, isFeatured ? 7 : 4).map((t) => {
                const details = getTechDetails(t);
                const IconComponent = details.Icon;
                return (
                  <span key={t} style={{
                    ...mono,
                    fontSize: 9,
                    padding: "4px 8px",
                    background: "rgba(86,96,71,0.04)",
                    color: c.mossDeep,
                    borderRadius: 6,
                    border: "1px solid rgba(86,96,71,0.08)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4
                  }}>
                    {IconComponent && <IconComponent size={10} style={{ color: details.color }} />}
                    {details.label}
                  </span>
                );
              })}
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: "auto" }}>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="premium-btn-github" style={{ height: 38, padding: "0 16px", display: "inline-flex", alignItems: "center", boxSizing: "border-box" }}>
                <span className="arrow-slide">←</span> Source
              </a>
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="premium-btn-live" style={{ height: 38, padding: "0 18px", display: "inline-flex", alignItems: "center", boxSizing: "border-box" }}>
                Launch <span className="arrow-slide" style={{ marginLeft: 4 }}>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
