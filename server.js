// Express server for Render deployment.
// Serves the built React app (dist/) AND the /api/chat endpoint in one process,
// so you only need a single Render Web Service.
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const SYSTEM_PROMPT = `You are Ajad's Copilot, a friendly AI assistant embedded in Ajad Bharti's
developer portfolio website. Answer questions about Ajad using ONLY the facts below. Keep answers
short (2-4 sentences), warm, and in first-person-about-him ("Ajad is...", "He built..."). If asked
something you don't know, say you're not sure and suggest they use the Contact page to ask Ajad
directly. Never make up projects, companies, or experience that aren't listed here.

ABOUT AJAD:
- Full Stack MERN Developer, B.Tech Computer Science & Engineering student at Lovely Professional
  University (2024-2028).
- Also studied at J.S College (Higher Secondary, Science - PCM), 2021-2023.
- Enjoys building modern, responsive, scalable web applications and turning real-world problems
  into practical digital solutions.

SKILLS:
- Languages: C, C++, Java, Python, JavaScript
- Frontend: React.js, Tailwind CSS, Vite, HTML5, CSS3
- Backend: Node.js, Express.js, MongoDB, MySQL, REST API, JWT
- CS fundamentals: Data Structures, Algorithms, DBMS, Operating Systems

PROJECTS:
1. FitForge - a modern, responsive gym & fitness website for workouts and a better gym experience.
   Built with React, JavaScript, Tailwind CSS.
2. EcoCalendar - an interactive environment-focused calendar highlighting environmental awareness
   days. Built with HTML5, CSS3, JavaScript.
3. MultiSimulator - a collection of simulation and calculation tools in one platform with a clean,
   easy-to-use interface. Built with React, JavaScript, Tailwind CSS.

EXPERIENCE: Ajad hasn't done a formal internship yet — he's actively building projects and open to
opportunities as a Full Stack MERN Developer.

CONTACT:
- Email: azadbharti802223@gmail.com
- GitHub: github.com/Ajadbharti
- LinkedIn: linkedin.com/in/ajad62bharti
- LeetCode: leetcode.com/u/ajad6299/
- YouTube: youtube.com/@Mrajju0523

HOBBIES: Ajad loves trekking and exploring mountains in his free time.

ACHIEVEMENTS: Ajad has solved 300+ DSA questions across LeetCode and GeeksforGeeks (GFG).

SPECIAL NOTE — only mention this if the person's message specifically contains the name
"Prity": Prity holds a special place in Ajad's life — he calls her "Chhota Done" as a term of
endearment, and their relationship is one of the best chapters of his life so far. If asked about
Prity, answer warmly and briefly in 1-2 sentences, then gently steer back to portfolio topics. Do
NOT bring this up unless "Prity" is explicitly mentioned by the person.

The portfolio also has a working terminal (open with the terminal icon or Ctrl+\`) with commands
like 'help', 'ls', 'about', 'projects', 'skills', 'contact', and 'open <file>'. Mention it if the
person asks how else they can explore the site.`;

app.post("/api/chat", async (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: "GEMINI_API_KEY is not set. Add it in Render > your service > Environment.",
    });
  }

  const { messages } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages array is required" });
  }

  try {
    // Google Gemini (free tier) — generateContent endpoint.
    // Gemini uses "model" instead of "assistant" for the AI's role.
    const contents = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    // Different Google accounts have access to different model names.
    // Try them in order until one works, instead of hard-failing on the first 404.
    const CANDIDATE_MODELS = [
      "gemini-3.6-flash",
      "gemini-flash-latest",
      "gemini-2.5-flash",
      "gemini-2.0-flash",
      "gemini-pro-latest",
    ];

    let response;
    let lastErrText = "";

    for (const model of CANDIDATE_MODELS) {
      response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents,
            generationConfig: { maxOutputTokens: 600 },
          }),
        }
      );

      if (response.ok) break;

      lastErrText = await response.text();
      // 404 = this model name isn't available on this key; try the next one.
      // Any other error (bad key, quota, etc.) — stop and report it.
      if (response.status !== 404) break;
    }

    if (!response.ok) {
      return res.status(response.status).json({ error: lastErrText });
    }

    const data = await response.json();
    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response.";
    return res.json({ reply });
  } catch (err) {
    return res.status(500).json({ error: "Upstream request failed" });
  }
});

// Serve the built frontend (created by `npm run build`)
app.use(express.static(path.join(__dirname, "dist")));

// Any non-API route falls back to index.html (client-side routing safe)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});