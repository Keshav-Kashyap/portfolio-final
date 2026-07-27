import React, { useEffect, useState, useRef } from "react";
import { c, sans } from "../data/theme";
import { LayoutGroup } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Beyond from "../components/sections/Beyond";
import Reviews from "../components/sections/Reviews";
import Playground from "../components/sections/Playground";
import Contact from "../components/sections/Contact";
import FloatingSkills from "../components/ui/FloatingSkills";
import ImagesBadgeDemoTwo from "../components/images-badge-demo-2";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const [isHoveringSkills, setIsHoveringSkills] = useState(false);
  const [isHoveringPlayground, setIsHoveringPlayground] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Coordinate-based mouse hover detection for sections running on requestAnimationFrame
  useEffect(() => {
    let animationFrame;
    const checkHover = () => {
      const clientX = lastMousePos.current.x;
      const clientY = lastMousePos.current.y;

      // Check Skills section
      const section = document.getElementById("skills");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsHoveringSkills(
          clientX >= rect.left && clientX <= rect.right &&
          clientY >= rect.top && clientY <= rect.bottom
        );
      } else {
        setIsHoveringSkills(false);
      }

      // Check Playground pool section
      const poolEl = document.getElementById("skill-pool-area");
      const sectionEl = document.getElementById("playground");
      
      if (poolEl && sectionEl) {
        const pRect = poolEl.getBoundingClientRect();
        const sRect = sectionEl.getBoundingClientRect();

        setIsHoveringPlayground(prev => {
          if (!prev) {
            // Trigger when entering pool
            if (clientX >= pRect.left && clientX <= pRect.right && clientY >= pRect.top && clientY <= pRect.bottom) {
              return true;
            }
            return false;
          } else {
            // Release when leaving the ENTIRE playground section (add buffer to prevent glitching on borders)
            if (clientY < sRect.top - 50 || clientY > sRect.bottom + 50 || clientX < sRect.left - 50 || clientX > sRect.right + 50) {
              return false;
            }
            return true;
          }
        });
      }

      animationFrame = requestAnimationFrame(checkHover);
    };

    const handleMouseMove = (e) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    checkHover(); // Start animation frame loop

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Global Lenis Smooth Scroll Initialization synchronized with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
    };
  }, []);

  return (
    <LayoutGroup>
      <div style={{ ...sans, background: c.bg, color: c.ink, overflowX: "hidden", minHeight: "100vh" }}>
        <FloatingSkills isDocked={isHoveringSkills} isHidden={isHoveringPlayground} />

        {/* Standard Portfolio Styles */}
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background: ${c.moss};
          color: ${c.paper};
        }
        .kk-navlink {
          position: relative;
        }
        .kk-navlink::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 1px;
          background: ${c.clay};
          transition: width 0.25s ease;
        }
        .kk-navlink:hover::after {
          width: 100%;
        }
        .kk-navlink:hover {
          color: ${c.mossDeep} !important;
        }
        .kk-proj-card {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .kk-proj-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -20px rgba(42,39,30,0.3);
        }
        .kk-btn-dark:hover {
          background: ${c.ink} !important;
          color: ${c.paper} !important;
        }
        .kk-btn-moss:hover {
          background: ${c.moss} !important;
          color: ${c.paper} !important;
        }
        
        @media (max-width: 800px) {
          .kk-grid-collapse {
            grid-template-columns: 1fr !important;
          }
          .kk-grid-3 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 520px) {
          .kk-grid-3 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

        <Navbar />
        {/* Removed strict zIndex: 5 so that cursor can float BETWEEN backgrounds and content */}
        <div style={{ position: "relative" }}>
          <Hero />
          <About />
          <Experience />
          {/* <ImagesBadgeDemoTwo /> */}
          <Projects />
        </div>

        {/* Skills Section has zIndex: 1 (swarm floats on top) */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <Skills />
        </div>

        {/* Sections below Skills have zIndex: 5 (swarm floats behind them) */}
        <div style={{ position: "relative", zIndex: 5 }}>
          <Beyond />
          <Reviews />
          <Playground isActive={isHoveringPlayground} />
          <Contact />
          <Footer />
        </div>
      </div>
    </LayoutGroup>
  );
}
