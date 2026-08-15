import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineChatBubbleLeftRight,
  HiXMark,
  HiPaperAirplane,
  HiArrowPath,
  HiUser,
  HiCodeBracket,
  HiBriefcase,
  HiEnvelope,
  HiDocumentText,
  HiSparkles,
} from "react-icons/hi2";
import { useTheme } from "../../context/ThemeContext";

const initialMessages = [
  {
    id: 1,
    sender: "bot",
    text: (
      <>
        👋 Welcome, <strong>Ajad Bharti</strong>!
        <br />
        Thanks for visiting my portfolio. Feel free to explore my projects,
        skills, experience, or reach out anytime. 🚀
      </>
    ),
    time: "Now",
  },
];

const quickActions = [
  {
    label: "About Me",
    icon: HiUser,
    message: "Tell me about Ajad",
  },
  {
    label: "My Skills",
    icon: HiCodeBracket,
    message: "What skills does Ajad have?",
  },
  {
    label: "Projects",
    icon: HiBriefcase,
    message: "Show me Ajad's projects",
  },
  {
    label: "Contact Me",
    icon: HiEnvelope,
    message: "How can I contact Ajad?",
  },
];

const suggestions = [
  "Tell me about Ajad",
  "Show my projects",
  "What skills do I have?",
  "How to contact you?",
];

function getBotReply(message) {
  const text = message.toLowerCase();

  if (
    text.includes("about") ||
    text.includes("who") ||
    text.includes("aj ad") ||
    text.includes("ajad")
  ) {
    return (
      <>
        I'm <strong>Ajad Bharti</strong>, a Full Stack MERN Developer and
        B.Tech student. I enjoy building modern, responsive and scalable web
        applications using technologies like React, Node.js, Express.js and
        MongoDB. 🚀
      </>
    );
  }

  if (
    text.includes("skill") ||
    text.includes("technology") ||
    text.includes("tech stack")
  ) {
    return (
      <>
        Ajad works with <strong>HTML, CSS, JavaScript, React.js, Tailwind
        CSS, Node.js, Express.js, MongoDB, REST APIs, Git and GitHub</strong>.
        He is also learning technologies like C and DBMS. 💻
      </>
    );
  }

  if (
    text.includes("project") ||
    text.includes("work") ||
    text.includes("portfolio")
  ) {
    return (
      <>
        Ajad has worked on modern web projects including MERN-based
        applications and portfolio projects. You can explore the
        <strong> Projects </strong> section of this portfolio to see them in
        detail. 🚀
      </>
    );
  }

  if (
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("reach")
  ) {
    return (
      <>
        You can reach Ajad through the <strong>Contact</strong> section of
        this portfolio. 📩
        <br />
        Feel free to send a message for collaboration, projects or
        opportunities.
      </>
    );
  }

  if (
    text.includes("resume") ||
    text.includes("cv")
  ) {
    return (
      <>
        You can check the <strong>Resume</strong> section of the portfolio
        to learn more about Ajad's education, skills and experience. 📄
      </>
    );
  }

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return (
      <>
        Hey! 👋
        <br />
        Nice to meet you. I'm <strong>Portfolio Bot</strong>. Ask me anything
        about Ajad, his skills, projects or portfolio.
      </>
    );
  }

  if (
    text.includes("react") ||
    text.includes("mern") ||
    text.includes("developer")
  ) {
    return (
      <>
        Ajad is focused on <strong>Full Stack MERN Development</strong> and
        enjoys creating clean, responsive and user-friendly web applications
        with React and Node.js. ⚡
      </>
    );
  }

  return (
    <>
      I'm still learning about that! 🤖
      <br />
      Try asking me about <strong>Ajad, his skills, projects, resume or
      contact information</strong>.
    </>
  );
}

function WelcomeBot() {
  const { dark } = useTheme();

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const inputRef = useRef(null);

  // Keep scrolling inside the chat panel only; do not force the page to scroll.

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [open]);

  const addMessage = (text, sender = "user") => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender,
        text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  };

  const handleSend = (customMessage = null) => {
    const message = customMessage || input.trim();

    if (!message || typing) return;

    addMessage(message, "user");
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const reply = getBotReply(message);

      addMessage(reply, "bot");
      setTyping(false);
    }, 900);
  };

  const handleReset = () => {
    setMessages(initialMessages);
    setInput("");
    setTyping(false);
  };

  const handleQuickAction = (action) => {
    handleSend(action.message);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 25,
              scale: 0.92,
            }}
            transition={{
              duration: 0.28,
              ease: "easeOut",
            }}
            className={`mb-4 flex h-[620px] w-[390px] max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-[30px] border shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl ${
              dark
                ? "border-white/10 bg-[#090b12]/95 text-white"
                : "border-slate-200 bg-white/95 text-slate-900"
            }`}
          >
            {/* HEADER */}
            <div
              className={`relative flex shrink-0 items-center justify-between border-b bg-gradient-to-r from-violet-500/[0.06] via-transparent to-cyan-500/[0.06] px-5 py-4 ${
                dark
                  ? "border-white/10"
                  : "border-slate-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 text-xl shadow-lg">
                  🤖

                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-400" />
                </div>

                <div>
                  <h3 className="text-base font-bold">
                    Portfolio Bot
                  </h3>

                  <div className="mt-0.5 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />

                    <span className="text-xs font-medium text-emerald-400">
                      Online
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleReset}
                  title="Reset chat"
                  className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
                    dark
                      ? "text-slate-400 hover:bg-white/10 hover:text-white"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <HiArrowPath size={18} />
                </button>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  title="Close"
                  className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
                    dark
                      ? "text-slate-400 hover:bg-white/10 hover:text-white"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <HiXMark size={21} />
                </button>
              </div>
            </div>

            {/* CHAT AREA */}
            <div
              className={`min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 scrollbar-thin ${
                dark
                  ? "scrollbar-thumb-slate-700"
                  : "scrollbar-thumb-slate-300"
              }`}
            >
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex max-w-[88%] gap-2 ${
                        message.sender === "user"
                          ? "flex-row-reverse"
                          : "flex-row"
                      }`}
                    >
                      {/* BOT AVATAR */}
                      {message.sender === "bot" && (
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 text-sm shadow-md">
                          🤖
                        </div>
                      )}

                      <div>
                        <div
                          className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
                            message.sender === "user"
                              ? "rounded-br-md bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20"
                              : dark
                              ? "rounded-tl-md bg-white/[0.06] text-slate-200"
                              : "rounded-tl-md bg-slate-100 text-slate-700"
                          }`}
                        >
                          {message.text}
                        </div>

                        <div
                          className={`mt-1 flex items-center gap-1 text-[10px] ${
                            message.sender === "user"
                              ? "justify-end"
                              : "justify-start"
                          } ${
                            dark
                              ? "text-slate-600"
                              : "text-slate-400"
                          }`}
                        >
                          {message.time}

                          {message.sender === "user" && (
                            <span className="text-violet-500">
                              ✓✓
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* TYPING */}
                {typing && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="flex items-center gap-2"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 text-sm">
                      🤖
                    </div>

                    <div
                      className={`flex items-center gap-1 rounded-2xl rounded-tl-md px-4 py-3 ${
                        dark
                          ? "bg-white/[0.06]"
                          : "bg-slate-100"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-500" />
                      <span
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-500"
                        style={{ animationDelay: "0.15s" }}
                      />
                      <span
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-500"
                        style={{ animationDelay: "0.3s" }}
                      />
                    </div>
                  </motion.div>
                )}

                <div />
              </div>
            </div>

            {/* QUICK ACTIONS */}
            <div
              className={`shrink-0 border-t px-4 pt-3 ${
                dark
                  ? "border-white/10"
                  : "border-slate-200"
              }`}
            >
              <div className="mb-2 flex items-center gap-1.5">
                <HiSparkles className="text-violet-500" size={15} />

                <span
                  className={`text-xs font-semibold ${
                    dark
                      ? "text-slate-400"
                      : "text-slate-500"
                  }`}
                >
                  Quick actions
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => {
                  const Icon = action.icon;

                  return (
                    <button
                      key={action.label}
                      type="button"
                      disabled={typing}
                      onClick={() => handleQuickAction(action)}
                      className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                        dark
                          ? "border-violet-500/20 bg-violet-500/5 text-slate-300 hover:border-violet-500/40 hover:bg-violet-500/10"
                          : "border-violet-200 bg-violet-50/60 text-violet-700 hover:border-violet-300 hover:bg-violet-50"
                      } disabled:cursor-not-allowed disabled:opacity-50`}
                    >
                      <Icon size={16} />
                      {action.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SUGGESTIONS */}
            <div className="shrink-0 px-4 py-3">
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    disabled={typing}
                    onClick={() => handleSend(suggestion)}
                    className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-[11px] font-medium transition ${
                      dark
                        ? "border-white/10 bg-white/[0.03] text-slate-400 hover:border-violet-500/30 hover:text-violet-300"
                        : "border-slate-200 bg-slate-50 text-slate-500 hover:border-violet-200 hover:text-violet-600"
                    } disabled:opacity-50`}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* INPUT */}
            <div className="shrink-0 px-4 pb-3">
              <div
                className={`flex items-center gap-2 rounded-2xl border p-1.5 shadow-inner transition-all focus-within:ring-2 focus-within:ring-violet-500/20 ${
                  dark
                    ? "border-white/10 bg-white/[0.04] focus-within:border-violet-500/50"
                    : "border-slate-200 bg-slate-50 focus-within:border-violet-400"
                }`}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend();
                    }
                  }}
                  placeholder="Ask me anything..."
                  className={`min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none ${
                    dark
                      ? "text-white placeholder:text-slate-500"
                      : "text-slate-900 placeholder:text-slate-400"
                  }`}
                />

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSend()}
                  disabled={!input.trim() || typing}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20 transition disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <HiPaperAirplane
                    size={18}
                    className="-rotate-6"
                  />
                </motion.button>
              </div>

              <div className="mt-2 flex items-center justify-center gap-1 text-[10px] text-slate-400">
                <HiSparkles
                  size={11}
                  className="text-violet-500"
                />
                Powered by Portfolio AI
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING BUTTON */}
      {!open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.94,
            }}
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              y: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 text-white shadow-[0_12px_40px_rgba(99,102,241,0.45)]"
          >
            <HiOutlineChatBubbleLeftRight size={25} />

            <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400" />
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}

export default WelcomeBot;