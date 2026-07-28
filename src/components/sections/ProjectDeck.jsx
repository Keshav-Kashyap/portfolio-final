import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/portfolioData";
import { c, mono, serif } from "../../data/theme";
import SectionHead from "../ui/SectionHead";
import { cn } from "../../lib/utils";

const defaultSpring = {
  type: "spring",
  visualDuration: 0.6,
  bounce: 0.25,
};

const cardConfigs = [
  {
    y: -20,
    rotate: -15,
    zIndex: 2,
    className: "bg-[#A4592F] text-white [&_h2]:text-white [&_p]:text-white/80", // Clay
  },
  {
    y: 20,
    rotate: 8,
    zIndex: 3,
    className: "bg-[#FAF7F0] text-[#2A271E] [&_h2]:text-[#2A271E] [&_p]:text-[#5B5643] border border-[rgba(42,39,30,0.12)]", // Paper/Parchment
  },
  {
    y: -60,
    rotate: -5,
    zIndex: 4,
    className: "bg-[#566047] text-white [&_h2]:text-white [&_p]:text-white/80", // Moss
  },
  {
    y: 20,
    rotate: 12,
    zIndex: 5,
    className: "bg-[#A98436] text-white [&_h2]:text-white [&_p]:text-white/80", // Gold
  },
  {
    y: 20,
    rotate: -5,
    zIndex: 6,
    className: "bg-[#2A271E] text-white [&_h2]:text-white [&_p]:text-white/80", // Ink
  },
];

// Bezier path calculations for background marquee text path
const ORIGINAL_SEGMENTS = [
  {
    p0: { x: 0.597656, y: 50.924805 },
    p1: { x: 17.4612, y: 143.2965 },
    p2: { x: 97.8522, y: 293.141 },
    p3: { x: 284.508, y: 353.548 },
  },
  {
    p0: { x: 284.508, y: 353.548 },
    p1: { x: 440.828, y: 399.056 },
    p2: { x: 583.839, y: 294.067 },
    p3: { x: 500.618, y: 184.7492 },
  },
  {
    p0: { x: 500.618, y: 184.7492 },
    p1: { x: 417.397, y: 75.4309 },
    p2: { x: 238.217, y: 282.098 },
    p3: { x: 499.258, y: 441.668 },
  },
  {
    p0: { x: 499.258, y: 441.668 },
    p1: { x: 551.913, y: 477.802 },
    p2: { x: 817.468, y: 561.26 },
    p3: { x: 1046.43, y: 565.235 },
  },
];

const SPLITS_PER_SEGMENT = 2;

const round = (n) => Math.round(n * 1000) / 1000;
const rp = (p) => ({ x: round(p.x), y: round(p.y) });
const lerp = (a, b, t) => ({
  x: a.x + (b.x - a.x) * t,
  y: a.y + (b.y - a.y) * t,
});

function splitCubic(b, t) {
  const a1 = lerp(b.p0, b.p1, t);
  const a2 = lerp(b.p1, b.p2, t);
  const a3 = lerp(b.p2, b.p3, t);
  const b1 = lerp(a1, a2, t);
  const b2 = lerp(a2, a3, t);
  const mid = lerp(b1, b2, t);
  return {
    left: { p0: b.p0, p1: a1, p2: b1, p3: mid },
    right: { p0: mid, p1: b2, p2: a3, p3: b.p3 },
  };
}

function subCubic(b, t0, t1) {
  const right = splitCubic(b, t0).right;
  const t = (t1 - t0) / (1 - t0);
  return splitCubic(right, t).left;
}

const DEFAULT_PATH_D = (() => {
  const start = rp(ORIGINAL_SEGMENTS[0].p0);
  const segments = ORIGINAL_SEGMENTS.flatMap((cubic) => {
    const segs = [];
    for (let i = 0; i < SPLITS_PER_SEGMENT; i++) {
      const sub = subCubic(
        cubic,
        i / SPLITS_PER_SEGMENT,
        (i + 1) / SPLITS_PER_SEGMENT,
      );
      segs.push({ c1: rp(sub.p1), c2: rp(sub.p2), end: rp(sub.p3) });
    }
    return segs;
  });

  let d = `M${round(start.x)} ${round(start.y)}`;
  for (const s of segments) {
    d += `C${round(s.c1.x)} ${round(s.c1.y)} ${round(s.c2.x)} ${round(s.c2.y)} ${round(s.end.x)} ${round(s.end.y)}`;
  }
  return d;
})();

const VIEW_W = 1048;
const VIEW_H = 594;

const KESHAV_BIO_TEXT = `KESHAV KASHYAP • FULL STACK SOFTWARE ENGINEER • AI & MACHINE LEARNING DEVELOPER • FRONTEND ARCHITECTURE • REACT & NEXT.JS ENGINE • FLASK & FASTAPI DEVELOPER • BACKEND SYSTEMS ENGINEERING • POSTGRESQL & MONGODB DATABASE OPTIMIZATION • DOCKER CONTAINERIZATION • AUTOMATED PERMIT SYSTEMS SPECIALIST • PYTHON FOR PLATFORM AUTOMATION • HIGH-PERFORMANCE WEB APPLICATIONS • 80K+ COMMUNITY YOUTUBE CREATOR • INTEGRATED MCA STUDENT • SHIPPED 8+ PRODUCTION PROJECTS • PYMUPDF DOCUMENT AUTOMATION • SYSTEM ARCHITECT • CLEAN CODE ADVOCATE • RESTFUL API SERVICES • AWS S3 DEPLOYMENTS • REAL-TIME MEETINGS SOCKET.IO • `.repeat(8);

export default function ProjectDeck({
  spring = defaultSpring,
  activeScale = 1.15,
}) {
  // Take first 5 projects
  const cardsData = projects.slice(0, 5);

  const cards = cardsData.map((project, index) => {
    const config = cardConfigs[index % cardConfigs.length];
    return {
      title: project.title,
      description: project.desc,
      image: project.image,
      github: project.github,
      live: project.live,
      tags: project.tags,
      className: config.className,
      config: {
        y: config.y,
        rotate: config.rotate,
        zIndex: config.zIndex,
      },
    };
  });

  const [active, setActive] = useState(null);
  const [spacing, setSpacing] = useState(180);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1024) {
        setSpacing(180);
      } else if (w >= 600) {
        setSpacing(125);
      } else {
        setSpacing(58);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const middle = (cards.length - 1) / 2;

  const isAnyCardActive = () => {
    return active?.title;
  };

  const isCurrentActive = (card) => {
    return active?.title === card.title;
  };

  return (
    <section id="project-deck" style={{ padding: "100px 0", position: "relative", overflow: "hidden" }}>
      
      {/* Background SVG Curve Marquee */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.7 }}>
        <svg
          className="h-full w-full"
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            id="deck-bg-curve"
            fill="transparent"
            stroke="rgba(42,39,30,0.12)"
            strokeWidth={0.8}
            d={DEFAULT_PATH_D}
          />

          <text x="0" style={{ fontSize: "7.5px", letterSpacing: "1.2px" }}>
            <textPath
              href="#deck-bg-curve"
              className="font-normal"
              style={{ 
                fill: c.ink, 
                opacity: 0.15,
                ...mono
              }}
            >
              {KESHAV_BIO_TEXT}
            </textPath>
            <animate
              attributeName="x"
              dur="65s"
              values="-2000;0"
              repeatCount="indefinite"
            />
          </text>
        </svg>
      </div>

      <style>{`
        .kk-deck-container {
          --card-width: 190px;
          --card-height: 270px;
        }
        @media (min-width: 600px) {
          .kk-deck-container {
            --card-width: 250px;
            --card-height: 350px;
          }
        }
        @media (min-width: 1024px) {
          .kk-deck-container {
            --card-width: 340px;
            --card-height: 450px;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px", width: "100%", position: "relative", zIndex: 1 }}>
        <SectionHead index="04" title="Selected" em="work" />

        <p style={{ ...mono, fontSize: 13, color: c.clay, textAlign: "center", marginBottom: 60, textTransform: "uppercase", letterSpacing: 1.5 }}>
          Click on any card to slide open technical details
        </p>

        <div className="relative flex w-full items-center justify-center" style={{ minHeight: "600px" }}>
          <motion.div
            ref={ref}
            onClick={() => setActive(null)}
            className="relative mx-auto flex items-center justify-center kk-deck-container"
            style={{ 
              width: "100%", 
              height: "var(--card-height)",
              position: "relative"
            }}
          >
            {cards.map((card, index) => {
              const offsetX = (index - middle) * spacing;
              const isLightCard = card.className.includes("bg-[#FAF7F0]");
              const btnTextColor = isLightCard ? "#2A271E" : "#FAF7F0";
              const btnBgColor = isLightCard ? "rgba(42, 39, 30, 0.08)" : "rgba(255, 255, 255, 0.18)";
              const btnBorder = isLightCard ? "1px solid rgba(42, 39, 30, 0.15)" : "1px solid rgba(255, 255, 255, 0.2)";

              return (
                <div key={card.title}>
                  <motion.div
                    initial={{
                      x: 0,
                      scale: 0,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(card);
                    }}
                    animate={{
                      y: isCurrentActive(card)
                        ? 0
                        : isAnyCardActive()
                          ? "calc(var(--card-height) * 0.96)"
                          : card.config.y,
                      x: isCurrentActive(card)
                        ? 0
                        : isAnyCardActive()
                          ? offsetX * 0.35
                          : offsetX,
                      rotate: isCurrentActive(card)
                        ? 0
                        : isAnyCardActive()
                          ? 0.15 * card.config.rotate
                          : card.config.rotate,
                      scale: isCurrentActive(card)
                        ? activeScale
                        : isAnyCardActive()
                          ? 0.65
                          : 1,
                    }}
                    whileHover={{
                      scale: isCurrentActive(card)
                        ? activeScale
                        : isAnyCardActive()
                          ? 0.65
                          : 1.04,
                    }}
                    transition={spring}
                    style={{
                      width: `var(--card-width)`,
                      height: `var(--card-height)`,
                      marginLeft: `calc(var(--card-width) / -2)`,
                      marginTop: `calc(var(--card-height) / -2)`,
                      zIndex: isCurrentActive(card) ? 50 : card.config.zIndex,
                    }}
                    className={cn(
                      "absolute top-1/2 left-1/2 flex cursor-pointer flex-col items-start justify-between overflow-hidden rounded-2xl p-4 shadow-xl transition-shadow duration-300",
                      card.className
                    )}
                  >
                    {/* Project Image Skeleton Preview */}
                    <div className="h-44 w-full rounded-xl overflow-hidden bg-neutral-900/10 relative border border-black/5 flex-shrink-0">
                      <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
                    </div>

                    <div className="mt-4 w-full flex flex-col justify-end flex-grow overflow-hidden">
                      <motion.h2
                        layoutId={card.title + "title"}
                        style={{ ...serif }}
                        className="font-bold text-left text-lg md:text-2xl leading-tight"
                      >
                        {card.title}
                      </motion.h2>

                      <AnimatePresence mode="popLayout">
                        {active?.title === card.title && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={spring}
                            className="mt-3 w-full"
                          >
                            {/* Render Project Technology Tags */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {card.tags.slice(0, 5).map((tag) => (
                                <span
                                  key={tag}
                                  style={{
                                    borderColor: isLightCard ? "rgba(42,39,30,0.15)" : "rgba(255,255,255,0.2)",
                                    background: isLightCard ? "rgba(42,39,30,0.04)" : "rgba(255,255,255,0.08)",
                                    color: btnTextColor,
                                    fontSize: "9px",
                                    ...mono
                                  }}
                                  className="px-2 py-0.5 rounded border text-[9px] uppercase tracking-wider font-semibold"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <p
                              style={{ ...mono }}
                              className="text-left text-xs opacity-90 line-clamp-3 leading-relaxed mb-4"
                            >
                              {card.description}
                            </p>

                            {/* Action CTA Buttons */}
                            <div className="flex gap-3">
                              <a
                                href={card.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                  color: btnTextColor,
                                  background: btnBgColor,
                                  border: btnBorder,
                                  ...mono
                                }}
                                className="px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-wider uppercase transition-colors duration-250 hover:opacity-80"
                              >
                                Source
                              </a>
                              <a
                                href={card.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                  color: btnTextColor,
                                  background: btnBgColor,
                                  border: btnBorder,
                                  ...mono
                                }}
                                className="px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-wider uppercase transition-colors duration-250 hover:opacity-80"
                              >
                                Launch →
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
