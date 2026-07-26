import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useProjectsTimeline(containerRef, cardRefs, totalCards, headerHeight) {
  useLayoutEffect(() => {
    // Accessibility check: Skip timeline setup if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const cards = cardRefs.current;
    if (!cards || cards.length <= 1) return;

    // Create GSAP context for proper React cleanup
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop stacking animation: Pin whole section, slide up next card, shrink previous card
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top", // Pins the section when its top meets viewport top
            end: () => `+=${(totalCards - 1) * window.innerHeight}`,
            pin: true,
            pinSpacing: true,
            scrub: 1, // Smooth scrub with scroll inertia
            snap: {
              snapTo: 1 / (totalCards - 1),
              duration: 0.3,
              delay: 0.1,
              ease: "power1.inOut",
            },
            invalidateOnRefresh: true,
            markers: false,
          },
        });

        // Loop cards and map them sequentially on the master timeline
        cards.forEach((card, index) => {
          if (index === 0) return; // Card 0 is active from start

          const prevCard = cards[index - 1];
          const prevInner = prevCard?.querySelector(".projects-stack-card-inner");
          const stepStart = `step-${index}`;

          // 1. Slide up the entering card
          tl.fromTo(
            card,
            { y: "100vh" },
            { y: 0, ease: "none" },
            stepStart
          );

          // 2. Shrink, translate up and fade the previous card's inner content
          if (prevInner) {
            tl.fromTo(
              prevInner,
              { scale: 1, opacity: 1, y: 0 },
              { scale: 0.94, opacity: 0.6, y: -20, ease: "none" },
              stepStart
            );
          }

          // 3. Parallax zoom entering card's images
          const currentImages = card.querySelectorAll(".kk-project-image");
          if (currentImages.length > 0) {
            tl.fromTo(
              currentImages,
              { scale: 1.1, y: 40 },
              { scale: 1, y: 0, ease: "none" },
              stepStart
            );
          }

          // 4. Slightly fade details of the previous card
          const contents = prevCard?.querySelectorAll(
            ".kk-btn-dark, .kk-btn-moss, .kk-project-tags-row, .kk-project-details"
          );
          if (contents && contents.length > 0) {
            tl.fromTo(
              contents,
              { opacity: 1 },
              { opacity: 0.3, ease: "none" },
              stepStart
            );
          }
        });
      });

      mm.add("(max-width: 767px)", () => {
        // Mobile falls back to normal vertical flow (handled natively in Projects.css)
      });

      ScrollTrigger.refresh();

      return () => {
        mm.revert();
      };
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [containerRef, cardRefs, totalCards, headerHeight]);
}
