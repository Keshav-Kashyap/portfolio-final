import React from "react";
import SectionHead from "../ui/SectionHead";
import { c, mono } from "../../data/theme";
import { skillGroups } from "../../data/portfolioData";
import { motion } from "framer-motion";

// Framer Motion animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 80, 
      damping: 14 
    } 
  }
};

const tagContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.15
    }
  }
};

const tagVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 120, 
      damping: 10 
    } 
  }
};

export default function Skills() {
  return (
    <section 
      id="skills" 
      style={{ padding: "100px 0", background: c.bgDeep, position: "relative" }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <SectionHead index="04" title="Technical" em="skills" />
        
        {/* Bounding box target used by Portfolio.jsx coordinate tracking */}
        <motion.div 
          id="skills-grid-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, marginTop: 40 }} 
          className="kk-grid-3"
        >
          {skillGroups.map((g) => (
            <motion.div
              key={g.label}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                borderColor: c.gold,
                boxShadow: "0 12px 30px rgba(42,39,30,0.06)",
                transition: { type: "spring", stiffness: 200, damping: 15 }
              }}
              style={{
                background: c.paper,
                border: `1px solid ${c.line}`,
                borderRadius: 16,
                padding: 24,
                boxShadow: "0 4px 12px rgba(42,39,30,0.02)",
                cursor: "default"
              }}
            >
              {/* Category Title */}
              <span style={{ 
                ...mono, 
                fontSize: 11, 
                textTransform: "uppercase", 
                letterSpacing: 1, 
                color: c.gold, 
                marginBottom: 16, 
                display: "block", 
                fontWeight: 600,
                borderBottom: `1px solid rgba(42,39,30,0.08)`,
                paddingBottom: 8
              }}>
                {g.label}
              </span>

              {/* Grid block layout for skill tag slots */}
              <motion.div 
                variants={tagContainerVariants}
                style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 16 }}
              >
                {g.items.map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    variants={tagVariants}
                    whileHover={{
                      scale: 1.05,
                      borderColor: c.clay,
                      background: "rgba(164,89,47,0.02)"
                    }}
                    style={{ 
                      ...mono, 
                      fontSize: 10, 
                      border: `1px solid ${c.line}`, 
                      color: c.inkSoft, 
                      background: c.bg,
                      borderRadius: 12,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 6px",
                      minHeight: 95,
                      boxSizing: "border-box",
                      userSelect: "none",
                      transition: "border-color 0.25s, background-color 0.25s"
                    }}
                  >
                    {/* The dedicated target placeholder with the ID for the fly-in icons */}
                    <div 
                      id={`skill-tag-${skill.name}`}
                      style={{ width: 55, height: 55, display: "flex", alignItems: "center", justifyContent: "center" }}
                    />
                    <span style={{ textAlign: "center", fontWeight: 500, fontSize: 9, marginTop: 4 }}>{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
