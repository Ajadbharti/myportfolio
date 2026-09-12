import React from "react";

const ICONS = {
  react: {
    color: "#61DAFB",
    type: "react",
  },

  html: {
    color: "#E34F26",
    type: "html",
  },

  js: {
    color: "#F7DF1E",
    type: "js",
  },

  json: {
    color: "#C9A227",
    type: "json",
  },

  ts: {
    color: "#3178C6",
    type: "ts",
  },

  css: {
    color: "#1572B6",
    type: "css",
  },

  md: {
    color: "#7AA2F7",
    type: "md",
  },

  pdf: {
    color: "#F44747",
    type: "pdf",
  },
};

function ReactIcon({ color }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        stroke={color}
        strokeWidth="1.6"
      />

      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        transform="rotate(60 12 12)"
        stroke={color}
        strokeWidth="1.6"
      />

      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        transform="rotate(120 12 12)"
        stroke={color}
        strokeWidth="1.6"
      />

      <circle
        cx="12"
        cy="12"
        r="2"
        fill={color}
      />
    </svg>
  );
}

function HtmlIcon({ color }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 3h14l-1.4 16.5L12 21l-5.6-1.5L5 3Z"
        fill={color}
      />

      <path
        d="m8.2 7.2.5 5.6h6.6l.5-5.6H8.2Z"
        fill="#ffffff"
        opacity="0.95"
      />

      <path
        d="M8.8 14.2h6.4l-.4 3.1-2.8.8-2.8-.8-.4-3.1Z"
        fill="#ffffff"
        opacity="0.9"
      />
    </svg>
  );
}

function JsIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="2"
        fill="#F7DF1E"
      />

      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontSize="10"
        fontWeight="800"
        fill="#111111"
        fontFamily="Arial, sans-serif"
      >
        JS
      </text>
    </svg>
  );
}

function JsonIcon({ color }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8.5 5.5c-2 0-2 1.5-2 3v1c0 1.2-.5 2-1.8 2.5 1.3.5 1.8 1.3 1.8 2.5v1c0 1.5 0 3 2 3"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M15.5 5.5c2 0 2 1.5 2 3v1c0 1.2.5 2 1.8 2.5-1.3.5-1.8 1.3-1.8 2.5v1c0 1.5 0 3-2 3"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <circle
        cx="12"
        cy="12"
        r="1"
        fill={color}
      />
    </svg>
  );
}

function TsIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="2"
        fill="#3178C6"
      />

      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontSize="9"
        fontWeight="800"
        fill="#ffffff"
        fontFamily="Arial, sans-serif"
      >
        TS
      </text>
    </svg>
  );
}

function CssIcon({ color }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M5 3h14l-1.4 16.5L12 21l-5.6-1.5L5 3Z"
        fill={color}
      />

      <text
        x="12"
        y="15.5"
        textAnchor="middle"
        fontSize="7"
        fontWeight="800"
        fill="#ffffff"
        fontFamily="Arial, sans-serif"
      >
        CSS
      </text>
    </svg>
  );
}

function MarkdownIcon({ color }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 5h16v14H4V5Z"
        stroke={color}
        strokeWidth="1.6"
        rx="1"
      />

      <path
        d="M7 15v-5l3 3 3-3v5M16 10v5M14.5 13.5 16 15l1.5-1.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PdfIcon({ color }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 3h8l4 4v14H6V3Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M14 3v5h4"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="800"
        fill={color}
        fontFamily="Arial, sans-serif"
      >
        PDF
      </text>
    </svg>
  );
}

export default function FileIcon({ type }) {
  const icon = ICONS[type] || ICONS.md;

  switch (icon.type) {
    case "react":
      return <ReactIcon color={icon.color} />;

    case "html":
      return <HtmlIcon color={icon.color} />;

    case "js":
      return <JsIcon />;

    case "json":
      return <JsonIcon color={icon.color} />;

    case "ts":
      return <TsIcon />;

    case "css":
      return <CssIcon color={icon.color} />;

    case "md":
      return <MarkdownIcon color={icon.color} />;

    case "pdf":
      return <PdfIcon color={icon.color} />;

    default:
      return <MarkdownIcon color={icon.color} />;
  }
}