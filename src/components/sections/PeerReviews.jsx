import React from "react";
import SectionHead from "../ui/SectionHead";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { c } from "../../data/theme";

export default function PeerReviews() {
  const testimonials = [
    {
      quote:
        "Keshav's automation pipelines are incredibly robust. He built a complex document processing flow using PyMuPDF that cut down our permit generation times from hours to seconds.",
      name: "Ajay",
      designation: "Data Scientist",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:
        "Working with Keshav on full stack apps is a breeze. His frontend architecture choices using Next.js and framer-motion make the apps feel incredibly fluid and premium, all while maintaining high performance.",
      name: "Digvijay",
      designation: "Full Stack Developer",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Keshav has a deep understanding of systems engineering. He designed our WebRTC-based video conferencing app with Socket.IO syncing, solving multiple tricky concurrency issues seamlessly.",
      name: "Shivam Bhardwaj",
      designation: "Software Engineer",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "He combines strong backend capabilities in Flask and FastAPI with outstanding aesthetic sense in CSS. A highly dependable developer who ships clean, reusable code.",
      name: "Rajat",
      designation: "Full Stack Developer",
      src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Keshav makes deployment and cloud operations smooth. His Docker containerization of complex Flask environments made our AWS S3 integrations and staging runs flawlessly reproducible.",
      name: "Shivalik",
      designation: "DevOps Engineer",
      src: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=3540&auto=format&fit=crop",
    },
  ];

  return (
    <section id="peer-reviews" style={{ padding: "100px 0", position: "relative" }}>
      {/* Background layer for section */}
      <div style={{ position: "absolute", inset: 0, background: c.bg, zIndex: -1, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 5, maxWidth: 1080, margin: "0 auto", padding: "0 32px", width: "100%" }}>
        <SectionHead index="08" title="Featured" em="testimonials" />

        <div style={{ marginTop: 40 }}>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div>
    </section>
  );
}
