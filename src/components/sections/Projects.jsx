import React from "react";
import SectionHead from "../ui/SectionHead";
import { projects } from "../../data/portfolioData";
import StackCard from "./StackCard";
import "./Projects.css";

// Chunk helper function to split array into specified sizes
const chunk = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export default function Projects() {
  // Grouping logic: Featured project is Card 1, others are chunked in pairs of 2
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const groupedCards = [];
  if (featuredProject) {
    groupedCards.push({
      isFeatured: true,
      projects: [featuredProject],
    });
  }
  
  const otherChunks = chunk(otherProjects, 2);
  otherChunks.forEach((c) => {
    groupedCards.push({
      isFeatured: false,
      projects: c,
    });
  });

  return (
    <section id="work" className="projects-section-pinned">
      <div className="projects-stack-viewport">
        <SectionHead index="03" title="Selected" em="projects" />
        
        <div className="projects-stack-container">
          {groupedCards.map((group, index) => (
            <StackCard
              key={index}
              group={group}
              zIndex={10 + index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
