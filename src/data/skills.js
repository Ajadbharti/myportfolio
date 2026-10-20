// Skills shown on the Skills page.
//
// A skill WITH a `level` (0-100) is drawn as a progress bar.
// A skill WITHOUT a `level` is drawn as a tag under the bars.
//
// The bar numbers are self-ratings: set them to what you honestly feel.
// Everything else below comes from the CV.
export const skillCategories = [
  {
    title: "Languages",
    color: "#f472b6",
    skills: [
      { name: "JavaScript", level: 88 },
      { name: "C++", level: 80 },
      { name: "Java", level: 75 },
      { name: "C", level: 78 },
      { name: "Python", level: 70 },
      { name: "TypeScript" },
    ],
  },
  {
    title: "Frontend",
    color: "#34d399",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "Vite", level: 82 },
      { name: "shadcn/ui" },
    ],
  },
  {
    title: "Backend & APIs",
    color: "#60a5fa",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "REST API", level: 85 },
      { name: "JWT", level: 78 },
      { name: "Supabase" },
    ],
  },
  {
    title: "Databases",
    color: "#fbbf24",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 76 },
      { name: "PostgreSQL" },
      { name: "Firestore (Firebase)" },
    ],
  },
  {
    title: "CS Fundamentals",
    color: "#a78bfa",
    skills: [
      { name: "Data Structures", level: 82 },
      { name: "Algorithms", level: 80 },
      { name: "DBMS", level: 78 },
      { name: "Operating Systems", level: 75 },
      { name: "Dijkstra's Algorithm" },
    ],
  },
  {
    title: "Data & ML Libraries",
    color: "#38bdf8",
    skills: [
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Matplotlib" },
      { name: "Scikit-learn" },
      { name: "OpenCV" },
      { name: "Scikit-image" },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "#fb923c",
    skills: [
      { name: "VS Code" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Kaggle" },
    ],
  },
  {
    title: "Soft Skills",
    color: "#c084fc",
    skills: [
      { name: "Analytical Thinking" },
      { name: "System Design Mindset" },
      { name: "Clear Technical Communication" },
    ],
  },
];