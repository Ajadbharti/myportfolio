// Vercel serverless function: POST /api/chat
// Deploy this project to Vercel and set the ANTHROPIC_API_KEY environment
// variable in your Vercel project settings (Settings -> Environment Variables).
// Get a key at https://console.anthropic.com

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
- LinkedIn: linkedin.com/in/ajad62bharti`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: "ANTHROPIC_API_KEY is not set on the server. Add it in your hosting provider's environment variables.",
    });
  }

  const { messages } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages array is required" });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: errText });
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text || "Sorry, I couldn't generate a response.";
    return res.status(200).json({ reply });
  } catch (err) {
    return res.status(500).json({ error: "Upstream request failed" });
  }
}