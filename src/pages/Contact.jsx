import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { profile } from "../data/profile";

// EmailJS (free plan). Fill these 4 values from your EmailJS dashboard.
//  - Service ID:   Email Services -> your Gmail service
//  - Public Key:   Account -> General
//  - Template IDs: Email Templates -> one to notify you, one auto-reply to the visitor
const EMAILJS_SERVICE_ID = "PASTE_SERVICE_ID";
const EMAILJS_PUBLIC_KEY = "PASTE_PUBLIC_KEY";
const EMAILJS_NOTIFY_TEMPLATE_ID = "PASTE_NOTIFY_TEMPLATE_ID";
const EMAILJS_REPLY_TEMPLATE_ID = "PASTE_AUTOREPLY_TEMPLATE_ID";

const EMAILJS_URL = "https://api.emailjs.com/api/v1.0/email/send";

function isConfigured() {
  return ![
    EMAILJS_SERVICE_ID,
    EMAILJS_PUBLIC_KEY,
    EMAILJS_NOTIFY_TEMPLATE_ID,
    EMAILJS_REPLY_TEMPLATE_ID,
  ].some((v) => v.startsWith("PASTE_"));
}

function sendEmailJS(templateId, templateParams) {
  return fetch(EMAILJS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: templateId,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: templateParams,
    }),
  });
}

const LINKS = [
  {
    label: "EMAIL",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: FaEnvelope,
    color: "#34d399",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/ajad62bharti",
    href: "https://linkedin.com/in/ajad62bharti",
    Icon: FaLinkedin,
    color: "#0A66C2",
  },
  {
    label: "GITHUB",
    value: "github.com/Ajadbharti",
    href: "https://github.com/Ajadbharti",
    Icon: FaGithub,
    color: "#e6edf3",
  },
  {
    label: "LEETCODE",
    value: "leetcode.com/u/ajad6299",
    href: "https://leetcode.com/u/ajad6299/",
    Icon: SiLeetcode,
    color: "#FFA116",
  },
  {
    label: "YOUTUBE",
    value: "youtube.com/@Mrajju0523",
    href: "https://www.youtube.com/@Mrajju0523",
    Icon: FaYoutube,
    color: "#FF0000",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // idle | sending | success | error | not-configured
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isConfigured()) {
      setStatus("not-configured");
      return;
    }

    setStatus("sending");

    const subject = form.subject.trim() || "Portfolio contact";

    try {
      // 1) Message to you. In the template, set "To Email" to your own address
      //    and "Reply To" to {{from_email}} so you can reply directly.
      const notify = await sendEmailJS(EMAILJS_NOTIFY_TEMPLATE_ID, {
        from_name: form.name.trim(),
        from_email: form.email.trim(),
        subject,
        message: form.message.trim(),
      });

      if (!notify.ok) throw new Error("Notification failed");

      // 2) Auto-reply to the visitor. In the template, set "To Email" to {{to_email}}.
      //    If this one fails, the message still reached you, so don't show an error.
      try {
        await sendEmailJS(EMAILJS_REPLY_TEMPLATE_ID, {
          to_name: form.name.trim(),
          to_email: form.email.trim(),
          subject,
          message: form.message.trim(),
        });
      } catch {
        /* auto-reply is best-effort */
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="
        w-full
        px-8
        sm:px-10
        lg:px-12
        py-8
        animate-fade-in
      "
    >
      {/* HEADER */}

      <p className="text-sm text-emerald-400 font-mono mb-3">
        {"/* contact.css — let's build something */"}
      </p>

      <h1
        className="
          font-display
          text-4xl
          sm:text-5xl
          font-bold
          text-gray-100
          mb-1
        "
      >
        Contact
      </h1>

      <p className="text-sm text-gray-500 mb-7 font-mono">
        // open to work, collabs & good conversations
      </p>

      {/* MAIN CONTENT */}

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl">
        {/* SOCIAL LINKS */}

        <div>
          <h2 className="text-xs tracking-widest text-emerald-400 font-bold mb-3">
            FIND ME ON
          </h2>

          <div className="space-y-2.5">
            {LINKS.map((l) => {
              const Icon = l.Icon;

              return (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-center
                    justify-between
                    border
                    border-[var(--border)]
                    rounded-lg
                    px-4
                    py-3
                    hover:border-[var(--accent)]/50
                    hover:bg-white/[0.02]
                    transition-colors
                    group
                  "
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <Icon
                      size={18}
                      style={{ color: l.color }}
                      className="shrink-0"
                    />

                    <span className="min-w-0">
                      <span className="block text-[11px] tracking-wider text-gray-500">
                        {l.label}
                      </span>

                      <span className="text-sm text-gray-200 truncate block">
                        {l.value}
                      </span>
                    </span>
                  </span>

                  <span className="text-gray-600 group-hover:text-[var(--accent)] transition-colors ml-3 shrink-0">
                    ↗
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* CONTACT FORM */}

        <div>
          <h2 className="text-xs tracking-widest text-emerald-400 font-bold mb-3">
            SEND A MESSAGE
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Field
              label="YOUR_NAME"
              required
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
            />

            <Field
              label="YOUR_EMAIL"
              required
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
            />

            <Field
              label="SUBJECT"
              value={form.subject}
              onChange={(v) => setForm({ ...form, subject: v })}
            />

            <div>
              <label className="text-xs text-gray-500 mb-1 block">
                // MESSAGE <span className="text-red-400">*</span>
              </label>

              <textarea
                required
                rows={4}
                placeholder="'''your message'''"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="
                  w-full
                  bg-[var(--panel)]
                  border
                  border-[var(--border)]
                  rounded-md
                  px-3
                  py-2
                  text-sm
                  text-gray-200
                  placeholder-gray-600
                  focus:outline-none
                  focus:border-[var(--accent)]
                  resize-y
                "
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="
                w-full
                bg-[var(--accent)]
                text-black
                font-semibold
                py-2.5
                rounded-md
                text-sm
                hover:opacity-90
                transition-opacity
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {status === "sending" ? "→ sending..." : "→ send_message()"}
            </button>

            {status === "success" && (
              <p className="text-xs text-emerald-400">
                // message sent — thanks! A confirmation is on its way to your inbox.
              </p>
            )}

            {status === "error" && (
              <p className="text-xs text-red-400">
                // couldn't send right now — please try again, or email me directly.
              </p>
            )}

            {status === "not-configured" && (
              <p className="text-xs text-amber-400">
                // form isn't connected yet — add your EmailJS keys at the top of Contact.jsx
              </p>
            )}

            {status === "idle" && (
              <p className="text-xs text-gray-600">
                // your message lands directly in my inbox
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", required }) {
  return (
    <div>
      <label className="text-xs text-gray-500 mb-1 block">
        // {label} {required && <span className="text-red-400">*</span>}
      </label>

      <input
        type={type}
        required={required}
        placeholder="string"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          bg-[var(--panel)]
          border
          border-[var(--border)]
          rounded-md
          px-3
          py-2
          text-sm
          text-gray-200
          placeholder-gray-600
          focus:outline-none
          focus:border-[var(--accent)]
        "
      />
    </div>
  );
}