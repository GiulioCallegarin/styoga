"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { motion } from "motion/react";

export default function AnimatedLogo() {
  // 0 = idle, 'prep' = pre-move spring, 1 = traveling right, 2 = wrapped and returning
  const [stage, setStage] = useState<0 | 'prep' | 1 | 2>(0);
  const anchorRef = useRef<HTMLSpanElement | null>(null);
  const [overlay, setOverlay] = useState<
    | { top: number; left: number; width: number; height: number; vw: number }
    | null
  >(null);
  const [postFadeChip, setPostFadeChip] = useState<
    | { top: number; left: number; width: number; height: number }
    | null
  >(null);
  const trailColor = "61, 83, 177";
  const trailGradient = `linear-gradient(90deg, rgba(${trailColor},0) 0%, rgba(${trailColor},0.35) 50%, rgba(${trailColor},0.95) 100%)`;
  // No persistent long trail; we'll render a tiny, quick-fading trail during movement only

  const onClick = () => {
    const traveling = stage !== 0;
    if (traveling) return;
    // Measure and start traveling immediately
    const el = anchorRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth;
    setOverlay({ top: rect.top, left: rect.left, width: rect.width, height: rect.height, vw });
    setStage('prep');
  };

  // Compute a reasonable speed (px/sec) and duration for a full traversal
  const travel = useMemo(() => {
    if (!overlay) return null;
    const speed = 140; // px/sec; tweak to taste
    // Stage 1: from current x to off-right (fully out)
    const toRight = (overlay.vw - overlay.left) + overlay.width;
    const dur1 = Math.max(0.2, toRight / speed);
    // Stage 2: wrap to off-left then move back to original x
    const finalX = overlay.left + overlay.width; // from -width to original left
    const dur2 = Math.max(0.2, finalX / speed);
    return { toRight, dur1, finalX, dur2 };
  }, [overlay]);

  return (
    <>
      {/* Anchor keeps layout; hidden when traveling so only overlay is visible */}
      <span ref={anchorRef} className="flex items-center justify-center">
        <motion.div
          onClick={onClick}
          style={{
            display: "inline-block",
            cursor: stage !== 0 ? "default" : "pointer",
            willChange: "transform",
            visibility: stage !== 0 ? "hidden" : "visible",
          }}
          aria-label="Snail logo"
          role="img"
        >
          <Image src="/logo.svg" alt="Logo" width={48} height={48} />
        </motion.div>
      </span>

      {/* Preparation overlay: short spring-like squish before moving */}
      {stage === 'prep' && overlay && (
        <motion.div
          key="snail-prep"
          style={{
            position: "fixed",
            top: overlay.top,
            left: overlay.left,
            width: overlay.width,
            height: overlay.height,
            display: "inline-block",
            willChange: "transform",
            zIndex: 9999,
            pointerEvents: "none",
          }}
          initial={{ x: 0 }}
          animate={{
            x: [0, -3, 0],
            rotate: [0, -2, 0],
            scaleX: [1, 0.90, 1],
            scaleY: [1, 1.1, 1],
          }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          onAnimationComplete={() => setStage(1)}
        >
          <Image src="/logo.svg" alt="Logo" width={overlay.width} height={overlay.height} />
        </motion.div>
      )}

      {/* Traveling overlay: stage 1 (move right), stage 2 (wrap and return), then stop */}
      {stage === 1 && overlay && travel && (
        <motion.div
          key="snail-stage-1"
          style={{
            position: "fixed",
            top: overlay.top,
            left: overlay.left,
            width: overlay.width,
            height: overlay.height,
            display: "inline-block",
            willChange: "transform",
            zIndex: 9999,
            pointerEvents: "none",
          }}
          initial={{ x: 0 }}
          animate={{ x: travel.toRight }}
          transition={{ duration: travel.dur1, ease: "linear" }}
          onAnimationComplete={() => setStage(2)}
        >
          {/* Tiny trail chip just behind the snail (stays visible while moving) */}
          <motion.div
            aria-hidden
            style={{
              position: "absolute",
              bottom: 6,
              left: -52,
              width: 56,
              height: 4,
              borderRadius: 2,
              background: trailGradient,
              filter: "blur(0.4px)",
              zIndex: 0,
            }}
          // Visible during stage; removed on stage transition/unmount
          />
          <motion.div
            animate={{
              rotate: [0, 2, -1.5, 2, 0],
              scaleX: [1, 0.96, 1.04, 0.98, 1],
              scaleY: [1, 1.04, 0.96, 1.02, 1],
            }}
            transition={{
              rotate: { duration: 0.8, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
              scaleX: { duration: 0.8, ease: "easeInOut", repeat: Infinity },
              scaleY: { duration: 0.8, ease: "easeInOut", repeat: Infinity },
            }}
            style={{ display: "inline-block", position: "relative", zIndex: 1 }}
          >
            <Image src="/logo.svg" alt="Logo" width={overlay.width} height={overlay.height} />
          </motion.div>
        </motion.div>
      )}
      {stage === 2 && overlay && travel && (
        <motion.div
          key="snail-stage-2"
          style={{
            position: "fixed",
            top: overlay.top,
            left: -overlay.width,
            width: overlay.width,
            height: overlay.height,
            display: "inline-block",
            willChange: "transform",
            zIndex: 9999,
            pointerEvents: "none",
          }}
          initial={{ x: 0 }}
          animate={{ x: travel.finalX }}
          transition={{ duration: travel.dur2, ease: "linear" }}
          onAnimationComplete={() => {
            // Create a fading chip at the final position
            const CHIP_W = 56;
            const CHIP_H = 4;
            const CHIP_OFFSET_LEFT = 54; // matches chip's left offset while moving
            const CHIP_OFFSET_BOTTOM = 2;
            const top = overlay.top + overlay.height - (CHIP_H + CHIP_OFFSET_BOTTOM);
            const left = overlay.left - CHIP_OFFSET_LEFT;
            setPostFadeChip({ top, left, width: CHIP_W, height: CHIP_H });
            setStage(0);
            setOverlay(null);
          }}
        >
          {/* Tiny trail chip just behind the snail (stays visible while moving) */}
          <motion.div
            aria-hidden
            style={{
              position: "absolute",
              bottom: 6,
              left: -52,
              width: 56,
              height: 4,
              borderRadius: 2,
              background: trailGradient,
              filter: "blur(0.4px)",
              zIndex: 0,
            }}
          // Visible during stage; removed when animation ends
          />
          <motion.div
            animate={{
              rotate: [0, 2, -1.5, 2, 0],
              scaleX: [1, 0.96, 1.04, 0.98, 1],
              scaleY: [1, 1.04, 0.96, 1.02, 1],
            }}
            transition={{
              rotate: { duration: 0.8, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
              scaleX: { duration: 0.8, ease: "easeInOut", repeat: Infinity },
              scaleY: { duration: 0.8, ease: "easeInOut", repeat: Infinity },
            }}
            style={{ display: "inline-block", position: "relative", zIndex: 1 }}
          >
            <Image src="/logo.svg" alt="Logo" width={overlay.width} height={overlay.height} />
          </motion.div>
        </motion.div>
      )}

      {/* Post-return fading chip */}
      {postFadeChip && (
        <motion.div
          key="snail-post-fade-chip"
          initial={{ opacity: 0.95 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onAnimationComplete={() => setPostFadeChip(null)}
          style={{
            position: "fixed",
            top: postFadeChip.top - 4,
            left: postFadeChip.left + 2,
            width: postFadeChip.width,
            height: postFadeChip.height,
            borderRadius: 2,
            zIndex: 9997,
            pointerEvents: "none",
            background: trailGradient,
            filter: "blur(0.4px)",
          }}
        />
      )}

    </>
  );
}
