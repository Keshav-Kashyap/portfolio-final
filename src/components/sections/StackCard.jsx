import React from "react";
import ProjectCard from "./ProjectCard";

export default function StackCard({ group, zIndex }) {
  return (
    <div
      className="projects-stack-card"
      style={{ zIndex }}
    >
      <div className="projects-stack-card-inner">
        {group.isFeatured ? (
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }}>
            <ProjectCard p={group.projects[0]} isFeatured={true} />
          </div>
        ) : (
          <div className="kk-grid-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
            {group.projects.map((p) => (
              <ProjectCard key={p.title} p={p} isFeatured={false} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
