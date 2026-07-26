import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { skillGroups } from "../../data/portfolioData";

function SwarmIcon({ skill, mouseX, mouseY, isHovering, isDocked }) {
  const x = useMotionValue(skill.homeX);
  const y = useMotionValue(skill.homeY);

  const springX = useSpring(x, { stiffness: skill.stiffness, damping: skill.damping });
  const springY = useSpring(y, { stiffness: skill.stiffness, damping: skill.damping });

  useEffect(() => {
    let animationFrame;
    const updatePosition = () => {
      if (isDocked) {
        // Dock exactly to the center of the placeholder div in Skills.jsx
        const targetEl = document.getElementById(`skill-tag-${skill.name}`);
        if (targetEl) {
          const rect = targetEl.getBoundingClientRect();
          // Centered relative to viewport (since FloatingSkills is fixed positioned)
          x.set(rect.left + rect.width / 2 - skill.size / 2);
          y.set(rect.top + rect.height / 2 - skill.size / 2);
        } else {
          x.set(skill.homeX);
          y.set(skill.homeY);
        }
      } else if (isHovering) {
        x.set(mouseX.get() + skill.clusterX);
        y.set(mouseY.get() + skill.clusterY);
      } else {
        x.set(skill.homeX);
        y.set(skill.homeY);
      }
      animationFrame = requestAnimationFrame(updatePosition);
    };
    updatePosition();
    return () => cancelAnimationFrame(animationFrame);
  }, [mouseX, mouseY, isHovering, isDocked, x, y, skill]);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        x: springX,
        y: springY,
        color: skill.color,
        fontSize: skill.size,
        pointerEvents: "none",
        zIndex: 10,
        opacity: isDocked ? 0.95 : (isHovering ? 0.6 : 0.2), // Brighten up when docked
      }}
      animate={isDocked ? { rotate: 0 } : { rotate: [0, 10, -10, 0] }} // Straighten up when docked
      transition={isDocked ? { type: "spring", stiffness: 100, damping: 20 } : {
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <skill.Icon />
    </motion.div>
  );
}

export default function FloatingSkills({ isDocked }) {
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);

  const skills = useMemo(() => {
    const allSkills = skillGroups.flatMap((group) => group.items);
    return allSkills.map((skill, index) => {
      const w = typeof window !== 'undefined' ? window.innerWidth : 1200;
      const h = typeof window !== 'undefined' ? window.innerHeight : 800;
      return {
        ...skill,
        homeX: w * (0.05 + Math.random() * 0.9),
        homeY: h * (0.05 + Math.random() * 0.9),
        clusterX: (Math.random() - 0.5) * 140,
        clusterY: (Math.random() - 0.5) * 140,
        stiffness: 100, // Slightly more springy for smooth docking flight
        damping: 15 + index * 6,
      };
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);

      setIsHovering(true);

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsHovering(false);
      }, 1500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutRef.current);
    };
  }, [mouseX, mouseY]);

  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 3 }}>
      {skills.map((s, i) => (
        <SwarmIcon key={i} skill={s} mouseX={mouseX} mouseY={mouseY} isHovering={isHovering} isDocked={isDocked} />
      ))}
    </div>
  );
}
