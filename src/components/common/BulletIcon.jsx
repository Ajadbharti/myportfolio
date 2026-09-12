import React from "react";
import { FiTool, FiCpu, FiZap, FiSend } from "react-icons/fi";

const MAP = {
  tool: FiTool,
  cpu: FiCpu,
  zap: FiZap,
  rocket: FiSend,
};

export default function BulletIcon({ icon, size = 14, className = "" }) {
  const Icon = MAP[icon] || FiZap;
  return <Icon size={size} className={className} />;
}