// Home page content. Everything here comes from Ajad's CV.

export const home = {
  badges: [
    { label: "Full Stack Dev", color: "emerald" },
    { label: "MERN Stack", color: "pink" },
    { label: "B.Tech CSE", color: "blue" },
    { label: "@ LPU", color: "violet" },
  ],

  // The typewriter cycles through these, one after another.
  typingLines: [
    "Full-Stack MERN Developer",
    "React • Node.js • Express • MongoDB",
    "Built MediRoute AI — smart emergency healthcare",
    "200+ DSA problems solved",
  ],

  // h: true = highlighted keyword
  intro: [
    { t: "I'm a " },
    { t: "B.Tech CSE student at LPU", h: true },
    { t: " who builds " },
    { t: "full-stack MERN apps", h: true },
    { t: " and solves real problems, from a food delivery platform to " },
    { t: "MediRoute AI", h: true },
    { t: ", an emergency healthcare system with " },
    { t: "Dijkstra-based ambulance routing", h: true },
    { t: ". I've solved " },
    { t: "200+ DSA problems", h: true },
    { t: " on LeetCode and GeeksforGeeks." },
  ],

  currentlyBuilding:
    "Food Delivery App — Full-Stack MERN (since Aug 2026)",

  stats: [
    { value: "200+", label: "DSA Problems" },
    { value: "3★", label: "HackerRank Python" },
    { value: "3", label: "Certificates" },
    { value: "2024", label: "At LPU Since" },
  ],
};