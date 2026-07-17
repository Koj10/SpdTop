"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { m, useReducedMotion, useSpring } from "framer-motion";

const MAX_OFFSET = 20;
const REPULSE_RADIUS = 140;

function getLetterDelay(index: number) {
  return ((index * 73) % 400) / 1000;
}

interface RepellingLetterProps {
  char: string;
  mouseX: number;
  mouseY: number;
  delay: number;
  className?: string;
}

function RepellingLetter({
  char,
  mouseX,
  mouseY,
  delay,
  className = "",
}: RepellingLetterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const offsetX = useSpring(0, { stiffness: 150, damping: 18 });
  const offsetY = useSpring(0, { stiffness: 150, damping: 18 });

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = cx - mouseX;
    const dy = cy - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < REPULSE_RADIUS && dist > 0) {
      const force = (REPULSE_RADIUS - dist) / REPULSE_RADIUS;
      const rawX = (dx / dist) * force * MAX_OFFSET;
      const rawY = (dy / dist) * force * MAX_OFFSET;
      offsetX.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, rawX)));
      offsetY.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, rawY)));
    } else {
      offsetX.set(0);
      offsetY.set(0);
    }
  }, [mouseX, mouseY, offsetX, offsetY]);

  return (
    <m.span
      ref={ref}
      className={`inline-block ${className}`}
      style={{ x: offsetX, y: offsetY }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {char === " " ? "\u00A0" : char}
    </m.span>
  );
}

interface RepellingTextProps {
  text: string;
  className?: string;
  letterClassName?: string;
  as?: "h1" | "h2" | "div" | "p";
  ariaLabel?: string;
}

export function RepellingText({
  text,
  className = "",
  letterClassName = "",
  as: Tag = "div",
  ariaLabel,
}: RepellingTextProps) {
  const reduced = useReducedMotion();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const letters = useMemo(
    () =>
      text.split("").map((char, index) => ({
        char,
        delay: getLetterDelay(index),
        index,
      })),
    [text],
  );

  if (reduced) {
    return (
      <Tag className={className} aria-label={ariaLabel ?? text}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag
      className={`inline-flex ${className}`}
      aria-label={ariaLabel ?? text}
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
    >
      {letters.map(({ char, delay, index }) => (
        <RepellingLetter
          key={`${char}-${index}`}
          char={char}
          mouseX={mouse.x}
          mouseY={mouse.y}
          delay={delay}
          className={letterClassName}
        />
      ))}
    </Tag>
  );
}
