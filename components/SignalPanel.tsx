"use client";

import { useEffect, useState } from "react";

const lines = [
  "computer vision",
  "machine vision",
  "multimodal AI",
  "production ML",
  "applied R&D",
];

export function SignalPanel() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((v) => (v + 1) % lines.length), 1800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="signal-panel" aria-label="Animated engineering system panel">
      <div className="signal-topbar">
        <span><i className="status-dot" />SYSTEM / ONLINE</span>
        <span>BITOOM.01</span>
      </div>
      <div className="radar">
        <div className="radar-ring r1" />
        <div className="radar-ring r2" />
        <div className="radar-ring r3" />
        <div className="radar-axis x" />
        <div className="radar-axis y" />
        <div className="scan-line" />
        <span className="target t1" />
        <span className="target t2" />
        <span className="target t3" />
        <div className="radar-core">AI</div>
      </div>
      <div className="terminal-lines">
        <div><span className="muted">01</span> sensing / <b>{lines[active]}</b></div>
        <div><span className="muted">02</span> benchmark → validate → deploy</div>
        <div><span className="muted">03</span> <span className="terminal-cursor">ready for difficult problems_</span></div>
      </div>
    </div>
  );
}
