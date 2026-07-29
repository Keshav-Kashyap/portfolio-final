import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  touchMultiplier: 2,
});

// Sync Lenis with ScrollTrigger
lenis.on("scroll", ScrollTrigger.update);

// GSAP ticker
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// Disable GSAP lag smoothing
gsap.ticker.lagSmoothing(0);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);