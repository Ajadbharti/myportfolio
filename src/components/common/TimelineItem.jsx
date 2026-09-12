import React from "react";

export default function TimelineItem({
  dateRange,
  title,
  subtitle,
  description,
  tech,
  isLast,
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <span className="w-3 h-3 rounded-full border-2 border-[var(--accent)] shrink-0 mt-1.5" />
        {!isLast && <span className="w-px flex-1 bg-[var(--border)] my-1" />}
      </div>
      <div className="pb-10 flex-1">
        <p className="text-xs text-gray-500 mb-1">{dateRange}</p>
        <h3 className="font-display text-xl font-bold text-gray-100">{title}</h3>
        {subtitle && (
          <p className="text-sm text-[var(--accent)] font-medium mb-2">{subtitle}</p>
        )}
        {description && (
          <p className="text-sm text-gray-400 leading-relaxed mb-3 max-w-2xl">{description}</p>
        )}
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2 py-1 rounded border border-[var(--border)] text-[var(--accent)] bg-[var(--accent)]/5"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}