import React from "react";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import { c, mono, serif } from "../../data/theme";
import { Mail } from "lucide-react";
import { FaGithub as Github, FaYoutube as Youtube, FaLinkedin as Linkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 0", background: c.bgDeep }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <SectionHead index="06" title="Let's" em="talk" />
        <Reveal style={{ marginTop: 24 }}>
          <p style={{ ...serif, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(32px, 5vw, 60px)", maxWidth: 700, lineHeight: 1.1, color: c.ink }}>
            Building something with automation, AI, or a full stack product? I'd like to hear about it.
          </p>
          <p style={{ color: c.inkSoft, fontSize: 16, marginTop: 20, maxWidth: 520, lineHeight: 1.7 }}>
            Currently open to full stack, Python automation, and early AI engineering roles or collaborations.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 40 }}>
            <a href="mailto:keshavkashyap9058@gmail.com" style={{ ...mono, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "14px 24px", background: c.mossDeep, border: `1px solid ${c.mossDeep}`, color: c.paper, borderRadius: 6 }}>
              <Mail size={14} /> Email me
            </a>
            <a href="https://github.com/keshav-kashyap" target="_blank" rel="noopener noreferrer" className="kk-btn-dark" style={{ ...mono, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "14px 24px", border: `1px solid ${c.ink}`, color: c.ink, borderRadius: 6, transition: "all 0.2s" }}>
              <Github size={14} /> GitHub
            </a>
            <a href="https://linkedin.com/in/keshav-kashyap" target="_blank" rel="noopener noreferrer" className="kk-btn-dark" style={{ ...mono, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "14px 24px", border: `1px solid ${c.ink}`, color: c.ink, borderRadius: 6, transition: "all 0.2s" }}>
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href="https://www.youtube.com/c/zenithcrew" target="_blank" rel="noopener noreferrer" className="kk-btn-dark" style={{ ...mono, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "14px 24px", border: `1px solid ${c.ink}`, color: c.ink, borderRadius: 6, transition: "all 0.2s" }}>
              <Youtube size={14} /> YouTube
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
