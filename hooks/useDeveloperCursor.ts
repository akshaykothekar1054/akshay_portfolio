"use client";

import { useEffect, useRef, useState } from "react";

export type CursorMode =
  | "caret"
  | "text"
  | "click"
  | "open"
  | "link"
  | "download"
  | "send"
  | "git"
  | "connect"
  | "mail";

const TRAIL_SIZE = 6;
const TRAIL_INTERVAL_MS = 45;
const DOT_LERP = 0.35;      // purple dot: the actual pointer, near-1:1 with minimal lag
const FOLLOWER_LERP = 0.12; // developer cursor: trails the dot with a visible delay
const IDLE_DELAY_MS = 140;

/**
 * Resolves what the cursor should display for a given hover target.
 * `[data-cursor]` (nearest ancestor-or-self) always wins over the generic
 * tag/href heuristics below it, so a labelled wrapper (e.g. a project card)
 * controls the cursor for everything nested inside it.
 */
function resolveMode(el: Element): CursorMode {
  const explicit = el.closest("[data-cursor]");
  if (explicit) {
    return (explicit.getAttribute("data-cursor") as CursorMode) || "click";
  }

  if (el.closest("input, textarea, select")) return "text";

  const generic = el.closest("a, button, [role='button']");
  if (!generic) return "caret";

  if (generic.tagName === "BUTTON" || generic.getAttribute("role") === "button") {
    return "click";
  }

  const href = generic.getAttribute("href") ?? "";
  if (href.endsWith(".pdf")) return "download";
  if (href.startsWith("mailto:")) return "mail";
  if (href.includes("github.com")) return "git";
  if (href.includes("linkedin.com")) return "connect";
  return "link";
}

function computeEnabled() {
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const wide = window.innerWidth >= 768;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return fine && wide && !reduced;
}

export function useDeveloperCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<CursorMode>("caret");
  const [idle, setIdle] = useState(true);
  const [isDown, setIsDown] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Feature detection: fine pointer + desktop width + no reduced-motion.
     Re-checked on resize so rotating a hybrid device or resizing the
     window below the breakpoint turns the custom cursor off live. */
  useEffect(() => {
    const recheck = () => setEnabled(computeEnabled());
    recheck();

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    window.addEventListener("resize", recheck);
    reducedMotionQuery.addEventListener("change", recheck);
    return () => {
      window.removeEventListener("resize", recheck);
      reducedMotionQuery.removeEventListener("change", recheck);
    };
  }, []);

  /* Native cursor is only ever hidden once this class is present — if JS
     fails to run at all, the class never gets added and nothing changes. */
  useEffect(() => {
    document.documentElement.classList.toggle("developer-cursor-active", enabled);
    return () => document.documentElement.classList.remove("developer-cursor-active");
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const follower = followerRef.current;
    if (!dot || !follower) return;

    const raw = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dotPos = { ...raw };
    const followerPos = { ...raw };
    let lastMoveAt = performance.now();
    let lastTrailAt = 0;
    let trailIndex = 0;
    let rafId = 0;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== "mouse") return;
      raw.x = e.clientX;
      raw.y = e.clientY;
      lastMoveAt = performance.now();
    };

    const onOver = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (!target) return;
      const next = resolveMode(target);
      setMode((prev) => (prev === next ? prev : next));
    };

    const onDown = () => setIsDown(true);
    const onUp = () => setIsDown(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    const tick = (now: number) => {
      // Dot: fast lerp, reads as "attached" to the real pointer.
      dotPos.x += (raw.x - dotPos.x) * DOT_LERP;
      dotPos.y += (raw.y - dotPos.y) * DOT_LERP;
      dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0)`;

      // Developer cursor: slower lerp, visibly trails the dot.
      followerPos.x += (raw.x - followerPos.x) * FOLLOWER_LERP;
      followerPos.y += (raw.y - followerPos.y) * FOLLOWER_LERP;
      follower.style.transform = `translate3d(${followerPos.x}px, ${followerPos.y}px, 0)`;

      const nowIdle = now - lastMoveAt > IDLE_DELAY_MS;
      setIdle((prev) => (prev === nowIdle ? prev : nowIdle));

      if (now - lastTrailAt > TRAIL_INTERVAL_MS) {
        lastTrailAt = now;
        const trailDot = trailRefs.current[trailIndex];
        trailIndex = (trailIndex + 1) % TRAIL_SIZE;
        if (trailDot) {
          trailDot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0)`;
          // Restart the CSS fade-out animation from frame zero.
          trailDot.style.animation = "none";
          void trailDot.offsetWidth;
          trailDot.style.animation = "";
        }
      }

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, [enabled]);

  const hovering = mode !== "caret" && mode !== "text";

  return { enabled, mode, idle, isDown, hovering, dotRef, followerRef, trailRefs };
}
