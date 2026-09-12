import React, { useRef, useState } from "react";
import { profile } from "../../data/profile";

const SUGGESTIONS = [
  "Tell me about Ajad?",
  "What projects has Ajad built?",
  "What's his tech stack?",
  "How can I contact Ajad?",
];

const MAX_MESSAGES = 10;

export default function CopilotPanel({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef(null);

  const msgsUsed = messages.filter((m) => m.role === "user").length;
  const msgsLeft = Math.max(0, MAX_MESSAGES - msgsUsed);

  async function sendMessage(text) {
    const content = text ?? input;
    if (!content.trim() || loading || msgsLeft <= 0) return;

    const nextMessages = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError("");

    try {
      // Calls a serverless function at /api/chat (see api/chat.js).
      // Set ANTHROPIC_API_KEY in your deployment's environment variables.
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch (e) {
      setError(
        "Couldn't reach the AI backend. Have you deployed /api/chat with an API key? See README."
      );
    } finally {
      setLoading(false);
      setTimeout(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
      }, 50);
    }
  }

  return (
    <div className="w-80 sm:w-96 shrink-0 border-l border-[var(--border)] bg-[var(--panel)] flex flex-col h-full animate-fade-in">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)]">
        <span className="flex items-center gap-2 text-sm font-medium text-gray-200">
          ✨ {profile.firstName}'s AI Assistant
        </span>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-200">
          ✕
        </button>
      </div>

      <div className="px-4 py-2 border-b border-[var(--border)] flex items-center gap-2 text-[11px] text-gray-500">
        <span className="tracking-widest">WORKSPACE</span>
        <span className="flex items-center gap-1 bg-[var(--bg)] border border-[var(--border)] rounded-full px-2 py-0.5 text-gray-400">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" /> portfolio · ajad-bharti
        </span>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4">
        {messages.length === 0 && (
          <div className="text-center mt-4">
            <div className="w-14 h-14 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-2xl mx-auto mb-4">
              👋
            </div>
            <h3 className="text-sm font-semibold text-gray-100 mb-1">
              Hi! I'm {profile.firstName}'s Copilot
            </h3>
            <p className="text-xs text-gray-500 mb-5 max-w-[240px] mx-auto">
              Ask me anything about his projects, skills, experience, or achievements.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="text-left text-[11px] leading-snug text-gray-300 border border-[var(--border)] rounded-lg px-2.5 py-2 hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                m.role === "user"
                  ? "ml-auto bg-[var(--accent)] text-black"
                  : "bg-[var(--bg)] border border-[var(--border)] text-gray-200"
              }`}
            >
              {m.content}
            </div>
          ))}
          {loading && (
            <div className="bg-[var(--bg)] border border-[var(--border)] text-gray-500 text-sm rounded-lg px-3 py-2 w-fit">
              Thinking…
            </div>
          )}
          {error && <p className="text-xs text-red-400">{error}</p>}
        </div>
      </div>

      <div className="p-3 border-t border-[var(--border)]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="flex items-end gap-2 bg-[var(--bg)] border border-[var(--border)] rounded-lg px-3 py-2"
        >
          <textarea
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder={
              msgsLeft > 0
                ? "Ask about Ajad's projects, experience, skills…"
                : "Message limit reached"
            }
            disabled={msgsLeft <= 0}
            className="flex-1 bg-transparent outline-none text-sm text-gray-200 placeholder-gray-600 resize-none"
          />
          <button
            type="submit"
            disabled={msgsLeft <= 0 || loading}
            className="text-[var(--accent)] disabled:text-gray-600"
          >
            ➤
          </button>
        </form>
        <div className="flex items-center justify-between mt-2 text-[10px] text-gray-600">
          <span>{msgsLeft} msgs left</span>
          <span>AI can make mistakes · Contact Ajad directly for important info</span>
        </div>
      </div>
    </div>
  );
}