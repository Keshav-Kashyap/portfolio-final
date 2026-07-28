import React, { useState, useEffect } from "react";
import { c, mono } from "../../data/theme";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Near top of page, always show
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down, hide
        setIsVisible(false);
      } else {
        // Scrolling up, show
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <style>{`
        .kk-navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(244, 239, 225, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(42, 39, 30, 0.16);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .kk-navbar-hidden {
          transform: translateY(-100%);
        }

        .kk-navbar-inner {
          max-width: 1080px;
          margin: 0 auto;
          padding: 12px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }

        .kk-logo {
          border: 1px solid ${c.lineStrong};
          padding: 6px 10px;
          font-size: 14px;
          color: ${c.ink};
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .kk-logo:hover {
          background: ${c.ink};
          color: ${c.paper};
          border-color: ${c.ink};
        }

        .kk-nav-links {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        .kk-hire-btn {
          background: ${c.mossDeep};
          color: ${c.paper};
          padding: 8px 18px;
          border-radius: 4px;
          border: none;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.25s ease;
        }

        .kk-hire-btn:hover {
          background: ${c.clay};
          color: ${c.paper} !important;
        }

        /* Responsive styling */
        @media (max-width: 850px) {
          .kk-nav-links {
            gap: 24px;
          }
          .kk-navlink-about {
            display: none;
          }
        }

        @media (max-width: 650px) {
          .kk-navlink-skills {
            display: none;
          }
        }

        @media (max-width: 520px) {
          .kk-navbar-inner {
            padding: 12px 16px;
            height: 56px;
          }
          .kk-nav-links {
            gap: 16px;
          }
          .kk-navlink-experience {
            display: none;
          }
          .kk-logo {
            padding: 4px 8px;
            font-size: 12px;
          }
          .kk-hire-btn {
            padding: 6px 12px;
            font-size: 10px;
          }
        }
      `}</style>

      <nav className={`kk-navbar-container ${isVisible ? "" : "kk-navbar-hidden"}`}>
        <div className="kk-navbar-inner">
          {/* Logo */}
          <a href="#" className="kk-logo" style={{ ...mono }}>
            KK
          </a>

          {/* Navigation Links */}
          <div className="kk-nav-links">
            {["About", "Experience", "Work", "Skills", "Playground"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className={`kk-navlink kk-navlink-${l.toLowerCase()}`}
                style={{
                  ...mono,
                  fontSize: 12,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  color: c.inkSoft,
                  textDecoration: "none"
                }}
              >
                {l}
              </a>
            ))}
          </div>

          {/* Hire Me CTA Button */}
          <a href="#contact" className="kk-hire-btn" style={{ ...mono }}>
            Hire Me <ArrowRight size={13} />
          </a>
        </div>
      </nav>
    </>
  );
}
