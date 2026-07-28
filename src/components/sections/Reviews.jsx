import React, { useRef, useEffect, useState } from "react";
import SectionHead from "../ui/SectionHead";
import { c, serif, mono } from "../../data/theme";
import { Star } from "lucide-react";

// Generate realistic looking avatars using ui-avatars as a reliable fallback
const getAvatar = (name) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=128&font-size=0.4`;

const reviews = [
  { text: "Keshav transformed our complex workflows into a seamless automated pipeline. Exceptional engineering.", author: "Sarah Jenkins", role: "Product Manager", pic: getAvatar("Sarah Jenkins") },
  { text: "His attention to detail and ability to scale systems is unmatched. A true asset to any tech team.", author: "David Chen", role: "CTO, SolarTech", pic: getAvatar("David Chen") },
  { text: "Fast, reliable, and incredibly scalable. Keshav built out our entire backend in record time.", author: "Michael Ross", role: "Startup Founder", pic: getAvatar("Michael Ross") },
  { text: "Not just a developer, but a visionary. The way he integrates AI into existing products is phenomenal.", author: "Elena Rodriguez", role: "Head of AI", pic: getAvatar("Elena Rodriguez") },
  { text: "The cleanest code we've ever audited. Keshav is a true professional.", author: "Alex Mercer", role: "Lead Architect", pic: getAvatar("Alex Mercer") },
  { text: "He delivered the project weeks ahead of schedule without sacrificing an ounce of quality.", author: "Priya Patel", role: "Engineering Manager", pic: getAvatar("Priya Patel") },
  { text: "A rare mix of deep technical expertise and strong product intuition. Highly recommended.", author: "James Carter", role: "CEO, InnovateX", pic: getAvatar("James Carter") },
  { text: "Keshav's systems have handled our exponential user growth flawlessly. We are extremely impressed.", author: "Sophie Laurent", role: "VP of Engineering", pic: getAvatar("Sophie Laurent") }
];

export default function Reviews() {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const lastMouseX = useRef(0);
  const velocity = useRef(0);
  const [isGrabbed, setIsGrabbed] = useState(false);

  // Physics loop
  useEffect(() => {
    let animationId;
    const baseSpeed = 1.2;
    
    const loop = () => {
      const el = scrollRef.current;
      if (el) {
        if (isDragging.current) {
          // If the user holds the mouse still, decay the velocity quickly
          velocity.current *= 0.5;
        } else {
          // When released, apply momentum + base speed
          el.scrollLeft += velocity.current + baseSpeed;
          
          // Friction to slowly stop the momentum
          velocity.current *= 0.95; 
          
          // Seamless infinite wrap around
          if (el.scrollLeft >= el.scrollWidth / 2) {
            el.scrollLeft -= el.scrollWidth / 2;
          } else if (el.scrollLeft <= 0 && (velocity.current + baseSpeed) < 0) {
            el.scrollLeft += el.scrollWidth / 2;
          }
        }
      }
      animationId = requestAnimationFrame(loop);
    };
    
    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    setIsGrabbed(true);
    lastMouseX.current = e.pageX - scrollRef.current.offsetLeft;
    velocity.current = 0; // Reset momentum on grab
  };
  
  const handleMouseLeave = () => {
    isDragging.current = false;
    setIsGrabbed(false);
  };
  
  const handleMouseUp = () => {
    isDragging.current = false;
    setIsGrabbed(false);
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    
    const el = scrollRef.current;
    const x = e.pageX - el.offsetLeft;
    const dx = x - lastMouseX.current;
    
    // Sensitivity multiplier for the drag
    const moveAmount = -dx * 1.5; 
    
    // Impart momentum
    velocity.current = moveAmount;
    lastMouseX.current = x;
    
    // Instantly update scroll position for responsive dragging
    let newScrollLeft = el.scrollLeft + moveAmount;
    
    // Wrap around logic while dragging
    if (newScrollLeft >= el.scrollWidth / 2) {
      newScrollLeft -= el.scrollWidth / 2;
    } else if (newScrollLeft <= 0) {
      newScrollLeft += el.scrollWidth / 2;
    }
    
    el.scrollLeft = newScrollLeft;
  };

  return (
    <section id="reviews" style={{ padding: "100px 0", overflow: "hidden", width: "100%", maxWidth: "100vw" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px", marginBottom: 60 }}>
        <SectionHead index="07" title="Client" em="reviews" />
      </div>

      {/* Marquee Wrapper */}
      <div style={{
        position: "relative",
        width: "100%",
        display: "flex",
        background: "rgba(255,255,255,0.2)",
        padding: "60px 0",
        borderTop: `1px solid ${c.line}`,
        borderBottom: `1px solid ${c.line}`,
      }}>
        {/* Shadow overlays */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "25%", background: `linear-gradient(to right, ${c.bg} 5%, transparent 100%)`, zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "25%", background: `linear-gradient(to left, ${c.bg} 5%, transparent 100%)`, zIndex: 2, pointerEvents: "none" }} />

        {/* Scrollable track */}
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="kk-hide-scrollbar"
          style={{ 
            display: "flex", 
            overflowX: "auto",
            width: "100%",
            cursor: isGrabbed ? "grabbing" : "grab",
            userSelect: "none", // Prevent text selection while dragging
          }}
        >
          <div style={{ display: "flex", width: "max-content", paddingLeft: 32 }}>
            {[...reviews, ...reviews].map((r, i) => (
              <div key={`review-${i}`} className="kk-review-card" style={{
                display: "inline-flex",
                flexDirection: "column",
                whiteSpace: "normal",
                width: 400,
                marginRight: 24,
                background: c.paper,
                border: `1px solid ${c.line}`,
                borderRadius: 20,
                padding: 32,
                boxShadow: "0 8px 30px rgba(42,39,30,0.06)",
                flexShrink: 0
              }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                
                <p style={{ ...serif, fontSize: 18, color: c.ink, lineHeight: 1.6, fontStyle: "italic", marginBottom: 32 }}>
                  "{r.text}"
                </p>

                <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 16 }}>
                  <img src={r.pic} alt={r.author} draggable={false} style={{ width: 48, height: 48, borderRadius: "50%", border: `2px solid ${c.line}`, pointerEvents: "none" }} />
                  <div>
                    <div style={{ color: c.clay, fontWeight: 700, fontSize: 16 }}>{r.author}</div>
                    <div style={{ ...mono, color: c.inkFaint, fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginTop: 4 }}>{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .kk-hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .kk-hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        @media (max-width: 800px) {
          .kk-review-card {
            width: 320px !important;
          }
        }
      `}</style>
    </section>
  );
}
