import React from "react";
import { c, sans } from "../data/theme";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Beyond from "../components/sections/Beyond";
import Contact from "../components/sections/Contact";
import FloatingSkills from "../components/ui/FloatingSkills";

export default function Portfolio() {
  return (
    <div style={{ ...sans, background: c.bg, color: c.ink, overflowX: "hidden", minHeight: "100vh" }}>
      <FloatingSkills />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        html { scroll-behavior: smooth; }
        ::selection { background: ${c.moss}; color: ${c.paper}; }
        .kk-navlink { position: relative; }
        .kk-navlink::after { content:''; position:absolute; left:0; bottom:-4px; width:0; height:1px; background:${c.clay}; transition: width .25s ease; }
        .kk-navlink:hover::after { width:100%; }
        .kk-navlink:hover { color: ${c.mossDeep} !important; }
        .kk-proj-card { transition: transform .25s ease, box-shadow .25s ease; }
        .kk-proj-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -20px rgba(42,39,30,0.3); }
        .kk-btn-dark:hover { background:${c.ink} !important; color:${c.paper} !important; }
        .kk-btn-moss:hover { background:${c.moss} !important; color:${c.paper} !important; }
        
        @media (max-width: 800px) {
          .kk-grid-collapse { grid-template-columns: 1fr !important; }
          .kk-grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .kk-grid-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Beyond />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
