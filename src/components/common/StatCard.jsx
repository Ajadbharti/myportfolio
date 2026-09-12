import React from "react";

export default function StatCard({ value, label }) {
  return (
    <div className="flex-1 border border-[var(--border)] py-6 text-center">
      <p className="font-display text-2xl font-bold text-gray-100 mb-1">{value}</p>
      <p className="text-[11px] tracking-widest text-gray-500">{label.toUpperCase()}</p>
    </div>
  );
}