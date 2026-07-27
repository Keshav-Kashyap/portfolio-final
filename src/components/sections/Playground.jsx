import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { c, mono, serif } from "../../data/theme";
import SectionHead from "../ui/SectionHead";
import { Check, X } from "lucide-react";
import { skillGroups } from "../../data/portfolioData";

// Define the Category Buckets
const CATEGORIES = [
  { id: "frontend", label: "Frontend", match: ["Frontend", "Languages"] },
  { id: "backend", label: "Backend", match: ["Backend"] },
  { id: "database", label: "Database", match: ["Database & Cloud"] },
  { id: "deployment", label: "Deployment", match: ["DevOps & Tools"] },
  { id: "ai", label: "AI", match: ["AI & Core"] },
];

const allSkills = skillGroups.flatMap(g => 
  g.items.map(item => ({ ...item, groupLabel: g.label }))
);

export default function Playground({ isActive }) {
  const [placed, setPlaced] = useState({}); // { frontend: ["React", "HTML5"], backend: ["Node.js"] }
  const [wrong, setWrong] = useState(null);
  const [dragOffsets, setDragOffsets] = useState({}); 
  const dropRefs = useRef({});
  const boardRef = useRef(null); // The unified game board!

  // Helper to check which category a skill belongs to
  const getCorrectCategoryForSkill = (skill) => {
    return CATEGORIES.find(cat => cat.match.includes(skill.groupLabel));
  };

  const handleDragEnd = (event, info, skill) => {
    const { x, y } = info.point;
    let droppedZoneId = null;

    // Check if dropped inside ANY zone
    Object.entries(dropRefs.current).forEach(([zoneId, el]) => {
      if (!el) return;
      const zRect = el.getBoundingClientRect();
      if (x >= zRect.left && x <= zRect.right && y >= zRect.top && y <= zRect.bottom) {
        droppedZoneId = zoneId;
      }
    });

    if (droppedZoneId) {
      const correctCategory = getCorrectCategoryForSkill(skill);
      if (correctCategory && correctCategory.id === droppedZoneId) {
        // Success! It goes into the box
        setPlaced(prev => {
          const current = prev[droppedZoneId] || [];
          if (!current.includes(skill.name)) {
            return { ...prev, [droppedZoneId]: [...current, skill.name] };
          }
          return prev;
        });
      } else {
        // Wrong Zone!
        setWrong(skill.name);
        setTimeout(() => setWrong(null), 500);
      }
    } else {
      // Check if dropped back into the Pool Area (bottom half of the board)
      const poolEl = document.getElementById("skill-pool-area");
      if (poolEl) {
        const pRect = poolEl.getBoundingClientRect();
        if (x >= pRect.left && x <= pRect.right && y >= pRect.top && y <= pRect.bottom) {
          // Valid drop in the pool! Update its offset to stay here
          setDragOffsets(prev => {
            const curr = prev[skill.name] || { x: 0, y: 0 };
            return {
              ...prev,
              [skill.name]: { x: curr.x + info.offset.x, y: curr.y + info.offset.y }
            };
          });
        }
      }
    }
  };

  const isAllPlaced = Object.values(placed).flat().length === allSkills.length;

  // Reset game state when leaving the section, so skills fly back to mouse!
  React.useEffect(() => {
    if (!isActive) {
      setPlaced({});
      setDragOffsets({});
      setWrong(null);
    }
  }, [isActive]);

  // Initial messy absolute scatter inside the fixed pool
  const randomScatter = React.useMemo(() => {
    return allSkills.map(() => ({
      rotate: (Math.random() - 0.5) * 120, // -60 to 60 degrees
      left: 10 + Math.random() * 80, // 10% to 90%
      top: 10 + Math.random() * 70, // 10% to 80%
    }));
  }, [isActive]); 

  const isSkillPlaced = (skillName) => {
    return Object.values(placed).flat().includes(skillName);
  };

  return (
    <section id="playground" style={{ padding: "100px 0", position: "relative" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <SectionHead index="07" title="System" em="architecture" />
        
        <p style={{ ...mono, fontSize: 13, color: c.clay, textAlign: "center", marginBottom: 60 }}>
          SORT THE SKILLS INTO THEIR CORRECT ARCHITECTURE CATEGORIES
        </p>

        {/* UNIFIED GAME BOARD - EVERYTHING is trapped inside this Box */}
        <div 
          ref={boardRef}
          style={{
            background: c.paper, 
            border: `1px solid ${c.line}`, 
            borderRadius: 32, 
            padding: "40px 24px",
            position: "relative",
            boxShadow: "inset 0 4px 20px rgba(0,0,0,0.02), 0 20px 40px rgba(0,0,0,0.05)",
            overflow: "hidden" // Strictly clips anything outside the board
          }}
        >
          {/* Top Half: Drop Zones (Categories) - Single Line */}
          <div style={{ display: "flex", flexWrap: "nowrap", justifyContent: "space-between", gap: 16, overflowX: "auto", paddingBottom: 16 }}>
            {CATEGORIES.map((cat) => {
              const bucketSkills = placed[cat.id] || [];
              const isFilled = bucketSkills.length > 0;
              
              return (
                <div 
                  key={`zone-${cat.id}`}
                  ref={(el) => dropRefs.current[cat.id] = el}
                  style={{
                    flex: 1,
                    minWidth: 160,
                    minHeight: 180,
                    border: isFilled ? `2px solid ${c.moss}` : `2px dashed ${c.lineStrong}`,
                    borderRadius: 24,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    background: isFilled ? "rgba(255,255,255,0.8)" : "transparent",
                    transition: "all 0.3s ease",
                    position: "relative",
                    padding: 16,
                    zIndex: 5
                  }}
                >
                  <div style={{ ...mono, color: isFilled ? c.ink : c.inkFaint, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16, fontWeight: isFilled ? 700 : 400, textAlign: "center" }}>
                    {cat.label}
                  </div>
                  
                  {/* Placed Skills stack neatly inside this bucket */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
                    <AnimatePresence>
                      {bucketSkills.map(skillName => {
                        const skill = allSkills.find(s => s.name === skillName);
                        return (
                          <motion.div
                            key={`placed-${skill.name}`}
                            layoutId={`swarm-${skill.name}`} // Morph seamlessly into the box!
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              color: skill.color
                            }}
                          >
                            <skill.Icon size={24} />
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>

                  {isFilled && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      style={{
                        position: "absolute",
                        top: -10,
                        right: -10,
                        background: "#10B981",
                        color: "#fff",
                        borderRadius: "50%",
                        padding: 4,
                        boxShadow: "0 4px 10px rgba(16,185,129,0.3)"
                      }}
                    >
                      <Check size={14} strokeWidth={3} />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Divider between Zones and Pool */}
          <div style={{ height: 1, background: c.line, margin: "32px 0", opacity: 0.5 }}></div>

          {/* Bottom Half: The Pool of Draggable Icons */}
          <div style={{ position: "relative", height: 250 }}>
            <div style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)", ...mono, fontSize: 10, color: c.inkFaint, letterSpacing: 2 }}>
              SKILL POOL
            </div>
            
            <div id="skill-pool-area" style={{ position: "absolute", inset: 0, marginTop: 24 }}>
              <AnimatePresence>
                {isActive && allSkills.map((skill, index) => {
                  if (isSkillPlaced(skill.name)) return null; 
                  
                  const isWrong = wrong === skill.name;
                  const scatter = randomScatter[index] || { rotate: 0, left: 50, top: 50 };
                  const currentOffset = dragOffsets[skill.name] || { x: 0, y: 0 };

                  // The animate state dynamically controls exactly where the icon rests
                  const restAnimate = {
                    x: currentOffset.x,
                    y: currentOffset.y,
                    rotate: scatter.rotate,
                    color: skill.color,
                    opacity: 1,
                    transition: { delay: index * 0.01, duration: 2, type: "spring", bounce: 0.25 }
                  };

                  const wrongAnimate = {
                    x: [currentOffset.x - 10, currentOffset.x + 10, currentOffset.x - 10, currentOffset.x + 10, currentOffset.x],
                    y: currentOffset.y,
                    rotate: scatter.rotate,
                    color: "#EF4444",
                    opacity: 1,
                    transition: { duration: 0.4 }
                  };

                  return (
                    <motion.div
                      key={`drag-${skill.name}`}
                      layoutId={`swarm-${skill.name}`}
                      drag
                      dragConstraints={boardRef} // STRICT LIMIT: Cannot drag outside the unified board!
                      dragElastic={0.1}
                      onDragEnd={(e, info) => handleDragEnd(e, info, skill)}
                      initial={{ opacity: 1, rotate: scatter.rotate - 180, x: 0, y: 0 }}
                      animate={isWrong ? wrongAnimate : restAnimate}
                      whileDrag={{ scale: 1.2, rotate: 0, cursor: "grabbing", zIndex: 99 }}
                      style={{
                        padding: 20,
                        position: "absolute",
                        left: `${scatter.left}%`,
                        top: `${scatter.top}%`,
                        transform: "translate(-50%, -50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "grab",
                        zIndex: 10,
                        color: skill.color,
                      }}
                    >
                      <skill.Icon size={40} />
                      
                      <AnimatePresence>
                        {isWrong && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            style={{
                              position: "absolute",
                              top: 0,
                              right: 0,
                              background: "#EF4444",
                              color: "#fff",
                              borderRadius: "50%",
                              padding: 2
                            }}
                          >
                            <X size={12} strokeWidth={3} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Victory Celebration */}
        <AnimatePresence>
          {isAllPlaced && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.5 }}
              style={{
                position: "fixed",
                bottom: 40,
                left: "50%",
                transform: "translateX(-50%)",
                background: c.mossDeep,
                color: c.paper,
                padding: "24px 48px",
                borderRadius: 100,
                boxShadow: "0 20px 40px rgba(60,68,50,0.4)",
                display: "flex",
                alignItems: "center",
                gap: 16,
                zIndex: 9999
              }}
            >
              <span style={{ fontSize: 24 }}>🎉</span>
              <div>
                <div style={{ ...serif, fontSize: 24, fontWeight: 600 }}>System Fully Configured!</div>
                <div style={{ ...mono, fontSize: 12, opacity: 0.8, letterSpacing: 1, marginTop: 4 }}>ALL SKILLS CATEGORIZED</div>
              </div>
              <button 
                onClick={() => {
                  setPlaced({});
                  setDragOffsets({});
                }}
                style={{
                  background: c.paper,
                  color: c.mossDeep,
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: 20,
                  ...mono,
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  marginLeft: 16
                }}
              >
                RESET
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
