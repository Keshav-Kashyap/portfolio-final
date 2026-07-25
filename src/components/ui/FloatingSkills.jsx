import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaPython, FaReact, FaAws, FaNodeJs, FaDatabase, FaBrain, FaGitAlt, FaTerminal, FaCode, FaLinux } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiHtml5, SiTailwindcss, SiFigma, SiDocker, SiMongodb, SiFastapi, SiSupabase, SiVite, SiVercel, SiRedis, SiPostgresql, SiNextdotjs, SiGraphql } from "react-icons/si";

const allSkills = [
  { Icon: FaPython, color: "#3776AB", size: 45 },
  { Icon: FaReact, color: "#61DAFB", size: 55 },
  { Icon: FaAws, color: "#FF9900", size: 40 },
  { Icon: FaNodeJs, color: "#339933", size: 50 },
  { Icon: FaDatabase, color: "#47A248", size: 35 },
  { Icon: FaBrain, color: "#FF4F8B", size: 45 },
  { Icon: SiJavascript, color: "#F7DF1E", size: 45 },
  { Icon: SiTypescript, color: "#3178C6", size: 45 },
  { Icon: SiHtml5, color: "#E34F26", size: 40 },
  { Icon: SiTailwindcss, color: "#06B6D4", size: 50 },
  { Icon: SiFigma, color: "#F24E1E", size: 40 },
  { Icon: SiDocker, color: "#2496ED", size: 45 },
  { Icon: SiMongodb, color: "#47A248", size: 45 },
  { Icon: SiFastapi, color: "#009688", size: 45 },
  { Icon: SiSupabase, color: "#3ECF8E", size: 40 },
  { Icon: FaGitAlt, color: "#F05032", size: 45 },
  { Icon: FaTerminal, color: "#4D4D4D", size: 40 },
  { Icon: FaCode, color: "#2E8B57", size: 40 },
  { Icon: FaLinux, color: "#FCC624", size: 45 },
  { Icon: SiVite, color: "#646CFF", size: 45 },
  { Icon: SiVercel, color: "#000000", size: 40 },
  { Icon: SiRedis, color: "#DC382D", size: 45 },
  { Icon: SiPostgresql, color: "#4169E1", size: 50 },
  { Icon: SiNextdotjs, color: "#000000", size: 45 },
  { Icon: SiGraphql, color: "#E10098", size: 45 },
];

function SwarmIcon({ skill, mouseX, mouseY, isHovering }) {
  const x = useMotionValue(skill.homeX);
  const y = useMotionValue(skill.homeY);
  
  const springX = useSpring(x, { stiffness: skill.stiffness, damping: skill.damping });
  const springY = useSpring(y, { stiffness: skill.stiffness, damping: skill.damping });

  useEffect(() => {
    let animationFrame;
    const updatePosition = () => {
      if (isHovering) {
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
  }, [mouseX, mouseY, isHovering, x, y, skill]);

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
        zIndex: 0,
        opacity: isHovering ? 0.6 : 0.2,
      }}
      animate={{
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <skill.Icon />
    </motion.div>
  );
}

export default function FloatingSkills() {
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);

  const skills = useMemo(() => {
    return allSkills.map((skill, index) => {
      const w = typeof window !== 'undefined' ? window.innerWidth : 1200;
      const h = typeof window !== 'undefined' ? window.innerHeight : 800;
      return {
        ...skill,
        homeX: w * (0.05 + Math.random() * 0.9),
        homeY: h * (0.05 + Math.random() * 0.9),
        clusterX: (Math.random() - 0.5) * 140, // Wider spread so they don't overlap as much when clustered
        clusterY: (Math.random() - 0.5) * 140,
        stiffness: 120, 
        damping: 15 + index * 6, // Larger gap in damping spreads out the trail more
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
    <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {skills.map((s, i) => (
        <SwarmIcon key={i} skill={s} mouseX={mouseX} mouseY={mouseY} isHovering={isHovering} />
      ))}
    </div>
  );
}
