import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { c, mono, serif, sans } from "../../data/theme";
import SectionHead from "../ui/SectionHead";
import { Check, X } from "lucide-react";
import { skillGroups } from "../../data/portfolioData";
import Lottie from "lottie-react";
import congratulationsAnimation from "../../assets/congratulations.json";

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

const getCorrectCategoryForSkill = (skill) => {
  return CATEGORIES.find(cat => cat.match.includes(skill.groupLabel));
};



const generateScatter = () => {
  return allSkills.map(() => ({
    rotate: (Math.random() - 0.5) * 120, // -60 to 60 degrees
    left: 10 + Math.random() * 80, // 10% to 90%
    top: 30 + Math.random() * 30, // 30% to 90% (stays lower in the pool)
  }));
};

export default function Playground({ isActive, isHoveringPool, onPlacedChange, onGameStateChange }) {
  const LottiePlayer = Lottie && (Lottie.default || Lottie);
  const animationData = congratulationsAnimation && (congratulationsAnimation.default || congratulationsAnimation);

  const [placed, setPlaced] = useState({});
  const [skillsDropped, setSkillsDropped] = useState(false);
  const [wrong, setWrong] = useState(null);
  const [dragOffsets, setDragOffsets] = useState({});
  const dropRefs = useRef({});
  const boardRef = useRef(null); // The unified game board!

  const [gameState, setGameState] = useState("idle"); // "idle" | "playing" | "won"
  const [timeElapsed, setTimeElapsed] = useState(0);
  const scatterPositionsRef = useRef(generateScatter());



  const handleDragEnd = (event, info, skill) => {
    if (gameState !== "playing") return;
    const { x, y } = info.point;
    let droppedZoneId = null;

    const clientX = x - window.scrollX;
    const clientY = y - window.scrollY;

    // Check if dropped inside ANY zone
    Object.entries(dropRefs.current).forEach(([zoneId, el]) => {
      if (!el) return;
      const zRect = el.getBoundingClientRect();
      if (clientX >= zRect.left && clientX <= zRect.right && clientY >= zRect.top && clientY <= zRect.bottom) {
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
        if (clientX >= pRect.left && clientX <= pRect.right && clientY >= pRect.top && clientY <= pRect.bottom) {
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

  const placedCount = Object.values(placed).flat().length;
  const totalSkillsCount = allSkills.length;
  const isAllPlaced = placedCount === totalSkillsCount;

  // Reset game state when leaving the section, so skills fly back to pool!
  React.useEffect(() => {
    if (!isActive) {
      setGameState("idle");
      setPlaced({});
      setDragOffsets({});
      setWrong(null);
      setTimeElapsed(0);
      setSkillsDropped(false);
    }
  }, [isActive]);

  // Stopwatch timer hook
  React.useEffect(() => {
    let interval = null;
    if (gameState === "playing") {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [gameState]);

  // Check victory condition
  React.useEffect(() => {
    if (gameState === "playing" && isAllPlaced) {
      setGameState("won");
    }
  }, [isAllPlaced, gameState]);

  // Notify parent of placed skills change
  React.useEffect(() => {
    if (onPlacedChange) {
      const flatPlaced = Object.values(placed).flat();
      onPlacedChange(flatPlaced);
    }
  }, [placed, onPlacedChange]);

  // Notify parent of game state change
  React.useEffect(() => {
    if (onGameStateChange) {
      onGameStateChange(gameState);
    }
  }, [gameState, onGameStateChange]);

  // Synchronize falling animation triggers
  React.useEffect(() => {
    if (isHoveringPool || gameState === "playing") {
      if (!skillsDropped) {
        setSkillsDropped(true);
      }
    } else {
      setSkillsDropped(false);
    }
  }, [isHoveringPool, gameState, skillsDropped]);

  const startGame = () => {
    scatterPositionsRef.current = generateScatter();
    setPlaced({});
    setDragOffsets({});
    setWrong(null);
    setTimeElapsed(0);
    setGameState("playing");
  };

  const resetGame = () => {
    setGameState("idle");
    setPlaced({});
    setDragOffsets({});
    setWrong(null);
    setTimeElapsed(0);
    setSkillsDropped(false);
  };

  const isSkillPlaced = (skillName) => {
    return Object.values(placed).flat().includes(skillName);
  };

  return (
    <section id="playground" style={{ padding: "100px 0", position: "relative" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <SectionHead index="05" title="Play" em="ground" />

        <p style={{ ...mono, fontSize: 13, color: c.clay, textAlign: "center", marginBottom: 60 }}>
          SORT THE SKILLS INTO THEIR CORRECT ARCHITECTURE CATEGORIES
        </p>

        {/* UNIFIED GAME BOARD - EVERYTHING is trapped inside this Box */}
        <div
          ref={boardRef}
          onMouseEnter={() => {
            if (!skillsDropped) setSkillsDropped(true);
          }}
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


          {/* Top Half: Dashboard and Categories (only shown when game starts) */}
          <AnimatePresence>
            {gameState !== "idle" && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                animate={{ height: "auto", opacity: 1, marginBottom: 32 }}
                exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: "hidden" }}
              >
                {/* Game Status/Dashboard Bar */}
                {gameState === "playing" && (
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 24,
                    paddingBottom: 16,
                    borderBottom: `1px solid ${c.line}`,
                    gap: 16,
                    flexWrap: "wrap"
                  }}>
                    {/* Stopwatch Timer */}
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ ...mono, fontSize: 11, color: c.inkSoft, letterSpacing: 1 }}>TIME:</span>
                      <span style={{
                        ...mono,
                        fontSize: 13,
                        fontWeight: 700,
                        color: c.ink,
                        background: "rgba(0,0,0,0.05)",
                        padding: "4px 10px",
                        borderRadius: 8
                      }}>
                        {timeElapsed}s
                      </span>
                    </div>

                    {/* Progress bar showing items categorized */}
                    <div style={{ flex: 1, maxWidth: 300, display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ ...mono, fontSize: 11, color: c.inkSoft, letterSpacing: 1 }}>PROGRESS:</span>
                      <div style={{ flex: 1, height: 6, background: "rgba(0,0,0,0.05)", borderRadius: 3, overflow: "hidden", position: "relative" }}>
                        <motion.div
                          animate={{ width: `${(placedCount / totalSkillsCount) * 100}%` }}
                          transition={{ duration: 0.3 }}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            background: c.moss,
                            borderRadius: 3
                          }}
                        />
                      </div>
                      <span style={{
                        ...mono,
                        fontSize: 13,
                        fontWeight: 700,
                        color: c.ink,
                        minWidth: 45,
                        textAlign: "right"
                      }}>
                        {placedCount} / {totalSkillsCount}
                      </span>
                    </div>

                    {/* Give Up Button */}
                    <button
                      onClick={resetGame}
                      style={{
                        background: "rgba(0,0,0,0.02)",
                        border: `1px solid ${c.line}`,
                        padding: "6px 14px",
                        borderRadius: 12,
                        ...mono,
                        fontSize: 11,
                        color: c.inkSoft,
                        cursor: "pointer",
                        transition: "all 0.2s"
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = "rgba(0,0,0,0.06)";
                        e.currentTarget.style.color = c.ink;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = "rgba(0,0,0,0.02)";
                        e.currentTarget.style.color = c.inkSoft;
                      }}
                    >
                      GIVE UP
                    </button>
                  </div>
                )}

                {/* Drop Zones (Categories) */}
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
                                    alignItems: "center"
                                  }}
                                >
                                  <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    draggable="false"
                                    style={{
                                      width: 24,
                                      height: 24,
                                      borderRadius: "20%",
                                      objectFit: "contain",
                                      pointerEvents: "none",
                                      userSelect: "none"
                                    }}
                                  />
                                </motion.div>
                              );
                            })}
                          </AnimatePresence>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Divider between Zones and Pool */}
                <div style={{ height: 1, background: c.line, margin: "24px 0 0 0", opacity: 0.5 }}></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Half: The Pool of Draggable Icons */}
          <div style={{ position: "relative", height: 250 }}>
            <div style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)", ...mono, fontSize: 10, color: c.inkFaint, letterSpacing: 2 }}>
              SKILL POOL
            </div>

            <div id="skill-pool-area" style={{ position: "absolute", inset: 0, marginTop: 24, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <AnimatePresence mode="wait">
                {gameState === "idle" && (
                  <motion.div
                    key="idle-pool"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      zIndex: 20
                    }}
                  >
                    <p style={{ ...sans, fontSize: 14, color: c.inkSoft, marginBottom: 16, maxWidth: 450, lineHeight: 1.5 }}>

                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={startGame}
                      style={{
                        background: c.mossDeep,
                        color: c.paper,
                        border: "none",
                        padding: "12px 24px",
                        borderRadius: 24,
                        ...mono,
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                        boxShadow: "0 6px 15px rgba(86,96,71,0.2)"
                      }}
                    >
                      START GAME
                    </motion.button>
                  </motion.div>
                )}

                {gameState === "won" && (
                  <motion.div
                    key="won-pool"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      zIndex: 20,
                      position: "relative"
                    }}
                  >
                    {/* Lottie Confetti Animation */}
                    <div style={{
                      position: "absolute",
                      top: -100, // sit above card
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 320,
                      height: 320,
                      pointerEvents: "none",
                      zIndex: -1
                    }}>
                      <LottiePlayer
                        animationData={animationData}
                        loop={true}
                        autoplay={true}
                      />
                    </div>

                    <h4 style={{ ...serif, fontSize: 24, fontWeight: 700, color: c.mossDeep, marginBottom: 8, marginTop: 40 }}>
                      Congratulations!
                    </h4>
                    <p style={{ ...sans, fontSize: 14, color: c.inkSoft, marginBottom: 20 }}>
                      You successfully categorized all {totalSkillsCount} skills in <strong>{timeElapsed}s</strong>!
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={startGame}
                      style={{
                        background: c.mossDeep,
                        color: c.paper,
                        border: "none",
                        padding: "12px 24px",
                        borderRadius: 24,
                        ...mono,
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                        boxShadow: "0 6px 15px rgba(86,96,71,0.2)",
                        position: "relative",
                        zIndex: 10
                      }}
                    >
                      PLAY AGAIN
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              {(isHoveringPool || gameState === "playing") && gameState !== "won" && allSkills.map((skill, index) => {
                if (isSkillPlaced(skill.name)) return null;

                const isWrong = wrong === skill.name;
                const scatter = scatterPositionsRef.current[index] || { rotate: 0, left: 50, top: 50 };
                const currentOffset = dragOffsets[skill.name] || { x: 0, y: 0 };
                const isDraggable = gameState === "playing";

                // The animate state dynamically controls exactly where the icon rests
                const restAnimate = {
                  x: currentOffset.x,
                  y: skillsDropped ? currentOffset.y : -250, // Fall from top
                  rotate: scatter.rotate,
                  opacity: skillsDropped ? 1 : 0,
                  scale: skillsDropped ? 1 : 0.5,
                  filter: "none",
                  transition: {
                    delay: skillsDropped ? index * 0.025 : 0,
                    duration: 0.8,
                    type: "spring",
                    bounce: 0.3
                  }
                };

                const wrongAnimate = {
                  x: [currentOffset.x - 10, currentOffset.x + 10, currentOffset.x - 10, currentOffset.x + 10, currentOffset.x],
                  y: currentOffset.y,
                  rotate: scatter.rotate,
                  filter: "drop-shadow(0 0 8px #EF4444)",
                  opacity: 1,
                  transition: { duration: 0.4 }
                };

                return (
                  <motion.div
                    key={`drag-${skill.name}`}
                    layoutId={`swarm-${skill.name}`}
                    drag={isDraggable}
                    dragConstraints={boardRef} // STRICT LIMIT: Cannot drag outside the unified board!
                    dragElastic={0.1}
                    onDragEnd={(e, info) => handleDragEnd(e, info, skill)}
                    initial={{ opacity: 0, y: -250, rotate: scatter.rotate - 180, x: 0 }}
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
                      cursor: isDraggable ? "grab" : "default",
                      zIndex: 10,
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      draggable="false"
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "20%",
                        objectFit: "contain",
                        pointerEvents: "none",
                        userSelect: "none"
                      }}
                    />

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
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
