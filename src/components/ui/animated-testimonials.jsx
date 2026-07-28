"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { c, mono, serif } from "../../data/theme";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  const getRotation = (index) => {
    const rotations = [-6, 5, -3, 7, -5];
    return rotations[index % rotations.length];
  };

  return (
    <div style={{ position: "relative", zIndex: 10 }} className="mx-auto max-w-sm px-4 py-8 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-12 md:gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full" style={{ minHeight: "320px" }}>
            <AnimatePresence>
              {testimonials.map((testimonial, index) => {
                const rot = getRotation(index);
                return (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: rot,
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : rot,
                      zIndex: isActive(index)
                        ? 40
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: rot,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center shadow-lg border border-[rgba(42,39,30,0.1)]"
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 style={{ ...serif, color: c.ink }} className="text-2xl font-bold">
              {testimonials[active].name}
            </h3>
            <p style={{ ...mono, color: c.inkSoft }} className="text-xs uppercase tracking-wider mt-1">
              {testimonials[active].designation}
            </p>
            
            <p style={{ ...serif, color: c.inkSoft, fontStyle: "italic", lineHeight: 1.6 }} className="mt-8 text-lg md:text-xl">
              "{testimonials[active].quote}"
            </p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              style={{
                background: c.paper,
                border: `1px solid ${c.line}`,
                color: c.ink
              }}
              className="group/button flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:opacity-85"
            >
              <ArrowLeft className="h-4 w-4 text-black transition-transform duration-300 group-hover/button:-translate-x-0.5" />
            </button>
            <button
              onClick={handleNext}
              style={{
                background: c.paper,
                border: `1px solid ${c.line}`,
                color: c.ink
              }}
              className="group/button flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:opacity-85"
            >
              <ArrowRight className="h-4 w-4 text-black transition-transform duration-300 group-hover/button:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
