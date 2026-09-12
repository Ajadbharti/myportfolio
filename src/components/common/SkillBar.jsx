import React, { useEffect, useRef, useState } from "react";

export default function SkillBar({ name, level, color }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="flex items-center gap-3">
      <span className="text-sm text-gray-300 w-40 shrink-0">{name}</span>
      <div className="flex-1 h-[3px] bg-[var(--border)] rounded-full overflow-hidden">
        <div
          className="skill-fill h-full rounded-full"
          style={{ width: `${width}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-xs w-9 text-right shrink-0" style={{ color }}>
        {level}%
      </span>
    </div>
  );
}