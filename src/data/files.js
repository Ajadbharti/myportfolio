// Single source of truth for the "file explorer" sidebar + tab bar + breadcrumb.
// key: internal page id, matches the pages/ folder.
// type: used to pick a clean file-type icon (see components/common/FileIcon.jsx)
export const files = [
  { key: "home", name: "home.tsx", type: "react", folder: "src", lang: "TypeScript React" },
  { key: "about", name: "about.html", type: "html", folder: "src", lang: "HTML" },
  { key: "projects", name: "projects.js", type: "js", folder: "src", lang: "JavaScript" },
  { key: "skills", name: "skills.json", type: "json", folder: "data", lang: "JSON" },
  { key: "experience", name: "experience.ts", type: "ts", folder: "src", lang: "TypeScript" },
  { key: "contact", name: "contact.css", type: "css", folder: "src", lang: "CSS" },
  { key: "readme", name: "README.md", type: "md", folder: "./", lang: "Markdown" },
];

export const resumeFile = {
  name: "Ajad_Bharti_Resume.pdf",
  type: "pdf",
};