export const c = {
  bg: "#E3DCC8",
  bgDeep: "#D6CDB2",
  paper: "#F4EFE1",
  ink: "#2A271E",
  inkSoft: "#5B5643",
  inkFaint: "#8A8467",
  moss: "#566047",
  mossDeep: "#3C4432",
  clay: "#A4592F",
  gold: "#A98436",
  line: "rgba(42,39,30,0.16)",
  lineStrong: "rgba(42,39,30,0.28)",
};

export const serif = { fontFamily: "'Newsreader', serif" };
export const mono = { fontFamily: "'JetBrains Mono', monospace" };
export const sans = { fontFamily: "'Inter', sans-serif" };

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
