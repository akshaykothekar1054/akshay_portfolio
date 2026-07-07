"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useDeveloperCursor, type CursorMode } from "@/hooks/useDeveloperCursor";
import styles from "./DeveloperCursor.module.css";

const LABELS: Partial<Record<CursorMode, string>> = {
  click: "Click()",
  open: "{ Open }",
  link: "</>",
  download: "Download()",
  send: "Send()",
  git: "Git()",
  connect: "Connect()",
  mail: "Mail()",
};

const BADGE_CLASS: Partial<Record<CursorMode, string>> = {
  open: styles.badgeOpen,
  link: styles.badgeLink,
};

const TRAIL_DOTS = Array.from({ length: 6 });

/**
 * Layered custom cursor:
 *  - a small purple dot IS the actual pointer — near-1:1 with the mouse,
 *    grows and glows brighter over interactive elements.
 *  - the "developer cursor" (blinking caret / code-style badge) trails
 *    the dot with a slight delay, morphing per hovered element.
 *
 * Position for both layers is driven imperatively off a rAF/lerp loop
 * (see useDeveloperCursor) so 60fps tracking never goes through React
 * state; only the discrete mode/idle/pressed/hovering flags are React
 * state, since those change rarely.
 *
 * Renders nothing (leaving the native cursor untouched) on touch devices,
 * screens under 768px, reduced-motion preference, or if JS never mounts it.
 */
export default function DeveloperCursor() {
  const { enabled, mode, idle, isDown, hovering, dotRef, followerRef, trailRefs } =
    useDeveloperCursor();

  if (!enabled) return null;

  const label = LABELS[mode];

  return (
    <>
      <div className={styles.trailLayer} aria-hidden="true">
        {TRAIL_DOTS.map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              trailRefs.current[i] = el;
            }}
            className={styles.trailDot}
          />
        ))}
      </div>

      {/* Purple dot — the actual pointer */}
      <div ref={dotRef} className={styles.dotLayer} aria-hidden="true">
        <motion.div
          className={styles.dot}
          animate={{
            scale: isDown ? 0.75 : hovering ? 1.7 : 1,
            opacity: mode === "text" ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      </div>

      {/* Developer cursor — trails the dot, morphs per hovered element */}
      <div ref={followerRef} className={styles.follower} aria-hidden="true">
        <motion.div
          className={styles.inner}
          animate={{ scale: isDown ? 0.82 : 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mode === "text" ? null : label ? (
              <motion.span
                key={mode}
                className={[styles.badge, BADGE_CLASS[mode]].filter(Boolean).join(" ")}
                initial={{ opacity: 0, scale: 0.7, x: "-50%", y: "calc(-50% + 4px)" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                exit={{ opacity: 0, scale: 0.7, x: "-50%", y: "calc(-50% - 4px)" }}
                transition={{ type: "spring", stiffness: 380, damping: 22, mass: 0.6 }}
              >
                {label}
              </motion.span>
            ) : (
              <motion.span
                key="caret"
                className={idle ? styles.caret : `${styles.caret} ${styles.caretMoving}`}
                initial={{ opacity: 0, scale: 0.6, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                exit={{ opacity: 0, scale: 0.6, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.15 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}
