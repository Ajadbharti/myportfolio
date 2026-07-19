const portfolio = {
  personal: {
    name: "Ajad Bharti",
    title: "Full Stack MERN Developer",
    subtitle: "B.Tech Student",
    location: "India",

    description:
      "I'm a passionate Full Stack MERN Developer who enjoys building modern, responsive, and scalable web applications. I love learning new technologies and solving real-world problems through clean and efficient code.",

    email: "azadbharati802223@gmail.com",

    github: "https://github.com/Ajadbharti",

    linkedin: "https://www.linkedin.com/in/ajad62bharti/",
  },

  stats: [
    {
      number: "20+",
      label: "Projects",
    },
    {
      number: "100%",
      label: "Dedication",
    },
    {
      number: "24/7",
      label: "Learning",
    },
  ],

  skills: {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
    ],

    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],

    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],
  }, // ✅ Skills object yahan close hoga

  // ✅ Projects alag property hogi
  projects: [
    {
      id: 1,
      title: "Apna Store",
      description:
        "A full-stack hyperlocal e-commerce platform where users can buy products from nearby local shops.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Ajadbharti",
      live: "#",
    },
    {
      id: 2,
      title: "Fitness Training Portal",
      description:
        "A MERN application for workout plans, progress tracking and fitness management.",
      tech: ["React", "Express", "MongoDB"],
      github: "https://github.com/Ajadbharti",
      live: "#",
    },
  ],
};

export default portfolio;