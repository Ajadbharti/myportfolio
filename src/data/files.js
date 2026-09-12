// Single source of truth for the "file explorer" sidebar + tab bar + breadcrumb.
// key: internal page id, matches the pages/ folder.
export const files = [
  { key: "home", name: "home.tsx", icon: "⚛️", folder: "src", lang: "TypeScript React" },
  { key: "about", name: "about.html", icon: "🌐", folder: "src", lang: "HTML" },
  { key: "projects", name: "projects.js", icon: "JS", folder: "src", lang: "JavaScript" },
  { key: "skills", name: "skills.json", icon: "{}", folder: "data", lang: "JSON" },
  { key: "experience", name: "experience.ts", icon: "TS", folder: "src", lang: "TypeScript" },
  { key: "contact", name: "contact.css", icon: "🎨", folder: "src", lang: "CSS" },
  { key: "readme", name: "README.md", icon: "📖", folder: "./", lang: "Markdown" },
];

export const resumeFile = {
  name: "Ajad_Bharti_Resume.pdf",
  icon: "📄",
};