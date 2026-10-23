"use client";

import { useId, useRef } from "react";

/** Ink-bleed hover: letters near the pointer swell and roughen like wet ink on paper. Skipped under reduced motion. */
export default function InkName({ text, className }: { text: string; className?: string }) {
  const root = useRef<HTMLSpanElement>(null);
  const fid = `ink-${useId().replace(/:/g, "")}`;

  const move = (e: React.PointerEvent) => {
    if (e.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.current?.querySelectorAll<HTMLElement>("[data-l]").forEach((el) => {
      const r = el.getBoundingClientRect();
      const d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
      const reach = r.height * 0.9;
      el.dataset.b = d < reach * 0.35 ? "3" : d < reach * 0.7 ? "2" : d < reach ? "1" : "0";
    });
  };
  const leave = () => root.current?.querySelectorAll<HTMLElement>("[data-l]").forEach((el) => (el.dataset.b = "0"));

  return (
    <span ref={root} className={className} onPointerMove={move} onPointerLeave={leave}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {Array.from(text).map((ch, i) =>
          ch === " " ? " " : (
            <span key={i} data-l="" data-b="0" className="ink-l" style={{ "--ink": `url(#${fid})` } as React.CSSProperties}>{ch}</span>
          ),
        )}
      </span>
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
        <filter id={fid} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </span>
  );
}
