import React, { useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { files, resumeFile } from "../../data/files";
import { profile } from "../../data/profile";
import { projects } from "../../data/projects";
import { skillCategories } from "../../data/skills";
import { education } from "../../data/education";

const PROMPT_USER = "ajad@portfolio";

const HELP_LINES = [
  "Available commands:",
  "",
  "  help        Show this list of commands",
  "  ls          List files in this portfolio",
  "  about       Print a short bio",
  "  whoami      Who is Ajad?",
  "  skills      List tech skills",
  "  projects    List projects",
  "  education   List education",
  "  contact     Show contact / social links",
  "  resume      Open the resume",
  "  open <file> Open a file (e.g. 'open projects.js')",
  "  clear       Clear the terminal",
];

function buildLs() {
  const names = files.map((f) => f.name).concat(resumeFile.name);
  return names.join("   ");
}

function buildAbout() {
  return [profile.bio];
}

function buildWhoami() {
  return [
    `${profile.name} — ${profile.role}`,
    `Based in ${profile.location}.`,
  ];
}

function buildSkills() {
  const lines = [];
  skillCategories.forEach((cat) => {
    lines.push(`${cat.title}:`);
    lines.push("  " + cat.skills.map((s) => s.name).join(", "));
  });
  return lines;
}

function buildProjects() {
  return projects.map((p, i) => `${i + 1}. ${p.title} — ${p.description}`);
}

function buildEducation() {
  return education.map((e) => `${e.school} (${e.dateRange}) — ${e.degree}`);
}

function buildContact() {
  const lines = [`Email: ${profile.email}`];
  profile.socials.forEach((s) => lines.push(`${s.name}: ${s.url}`));
  return lines;
}

export default function TerminalPanel({ onClose, onOpenFile }) {
  const [tab, setTab] = useState("terminal");
  const [lines, setLines] = useState([
    { type: "system", text: "Welcome! Type 'help' to see available commands." },
  ]);
  const [input, setInput] = useState("");
  const [historyIdx, setHistoryIdx] = useState(null);
  const cmdHistory = useRef([]);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  function push(entries) {
    setLines((prev) => [...prev, ...entries]);
  }

  function runCommand(raw) {
    const cmd = raw.trim();
    push([{ type: "input", text: `${PROMPT_USER}:~$ ${cmd}` }]);

    if (!cmd) return;

    cmdHistory.current.push(cmd);
    setHistoryIdx(null);

    const [name, ...rest] = cmd.split(/\s+/);
    const arg = rest.join(" ");

    switch (name.toLowerCase()) {
      case "help":
        push(HELP_LINES.map((t) => ({ type: "output", text: t })));
        break;
      case "ls":
        push([{ type: "output", text: buildLs() }]);
        break;
      case "about":
        push(buildAbout().map((t) => ({ type: "output", text: t })));
        break;
      case "whoami":
        push(buildWhoami().map((t) => ({ type: "output", text: t })));
        break;
      case "skills":
        push(buildSkills().map((t) => ({ type: "output", text: t })));
        break;
      case "projects":
        push(buildProjects().map((t) => ({ type: "output", text: t })));
        break;
      case "education":
        push(buildEducation().map((t) => ({ type: "output", text: t })));
        break;
      case "contact":
      case "social":
        push(buildContact().map((t) => ({ type: "output", text: t })));
        break;
      case "resume":
        push([{ type: "output", text: `Opening ${resumeFile.name}...` }]);
        window.open("/" + resumeFile.name, "_blank");
        break;
      case "clear":
        setLines([]);
        break;
      case "sudo":
        push([{ type: "error", text: "Nice try. Permission denied." }]);
        break;
      case "open": {
        const file = files.find(
          (f) => f.name.toLowerCase() === arg.toLowerCase()
        );
        if (file) {
          push([{ type: "output", text: `Opening ${file.name}...` }]);
          onOpenFile?.(file.key);
        } else {
          push([
            {
              type: "error",
              text: `open: ${arg || "(missing filename)"}: No such file`,
            },
          ]);
        }
        break;
      }
      case "exit":
        onClose?.();
        break;
      default:
        push([
          {
            type: "error",
            text: `command not found: ${name} — type 'help' for commands`,
          },
        ]);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!cmdHistory.current.length) return;
      const nextIdx =
        historyIdx === null
          ? cmdHistory.current.length - 1
          : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInput(cmdHistory.current[nextIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx === null) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx >= cmdHistory.current.length) {
        setHistoryIdx(null);
        setInput("");
      } else {
        setHistoryIdx(nextIdx);
        setInput(cmdHistory.current[nextIdx]);
      }
    }
  }

  return (
    <div className="h-56 sm:h-64 shrink-0 border-t border-[var(--border)] bg-[var(--panel)] flex flex-col">
      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-[var(--border)] px-2">
        <div className="flex items-center gap-4 text-[11px] tracking-wide">
          {["terminal", "problems", "output"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`py-2 uppercase ${
                tab === t
                  ? "text-gray-200 border-b-2 border-[var(--accent)]"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-200 p-1"
          aria-label="Close terminal"
        >
          <FiX size={14} />
        </button>
      </div>

      {/* Body */}
      {tab === "terminal" ? (
        <div
          className="flex-1 min-h-0 overflow-y-auto px-3 py-2 font-mono text-[12px] sm:text-[13px] leading-relaxed"
          onClick={() => inputRef.current?.focus()}
          ref={scrollRef}
        >
          {lines.map((l, i) => (
            <div
              key={i}
              className={`whitespace-pre-wrap break-words ${
                l.type === "error"
                  ? "text-red-400"
                  : l.type === "input"
                  ? "text-[var(--accent)]"
                  : l.type === "system"
                  ? "text-gray-500"
                  : "text-gray-300"
              }`}
            >
              {l.text}
            </div>
          ))}

          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[var(--accent)] shrink-0">
              {PROMPT_USER}:~$
            </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
              className="flex-1 bg-transparent outline-none text-gray-100 caret-[var(--accent)]"
            />
          </div>
        </div>
      ) : (
        <div className="flex-1 min-h-0 flex items-center justify-center text-xs text-gray-600">
          Nothing to show.
        </div>
      )}
    </div>
  );
}