"use client";

import { useEffect, useState } from "react";

export function StageBackground() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setMouse({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      mq.removeEventListener("change", handler);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 transition-[background] duration-700 ease-out"
        style={{
          background: `
            radial-gradient(ellipse at ${Math.max(55, mouse.x)}% ${mouse.y}%, rgba(0,255,163,0.025) 0%, transparent 50%),
            radial-gradient(ellipse at ${Math.max(60, 100 - mouse.x)}% ${100 - mouse.y}%, rgba(26,58,92,0.06) 0%, transparent 50%),
            linear-gradient(180deg, #0a0a0a 0%, #0e0e0e 50%, #0a0a0a 100%)
          `,
        }}
      />
      {!reducedMotion && (
        <>
          <div className="spotlight-orb spotlight-orb-1" />
          <div className="spotlight-orb spotlight-orb-2" />
          <div className="spotlight-orb spotlight-orb-3" />
        </>
      )}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
