"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ---- Concave-fan geometry (pure rotateY + uniform translateX) -------------
//
// 7 cards arranged in a uniformly-spaced row, each rotated around its own
// center to face the fan center. No translateZ — the "concave" effect reads
// from rotation alone, so cards keep uniform spacing in screen space (no
// perspective compression at the edges).
//
//   For card at offset ∈ {-3, -2, -1, 0, 1, 2, 3}:
//     x      = offset × CARD_SPACING
//     rotY   = -offset × STEP_DEG       (face inward toward fan center)
// ---------------------------------------------------------------------------

const VISIBLE_COUNT = 7;
const STEP_DEG = 22;
const CARD_W = 240;
const CARD_H = 360;
const CARD_SPACING = 224; // < CARD_W → adjacent cards visually overlap slightly

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function arcTargetForIndex(idx) {
  const offset = idx - Math.floor(VISIBLE_COUNT / 2);
  return {
    x: offset * CARD_SPACING,
    rotateY: -offset * STEP_DEG,
  };
}

export function PulseFitHero({
  title,
  subtitle,
  primaryAction = { label: "Get started for Free", onClick: () => {} },
  programs = [],
  captions = [],
  className,
}) {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  // Take exactly 7 entries; if fewer are provided, repeat to fill.
  const cards = [];
  for (let i = 0; i < VISIBLE_COUNT; i++) {
    cards.push(programs[i % Math.max(programs.length, 1)]);
  }

  useGSAP(
    () => {
      const els = cardRefs.current.filter(Boolean);
      if (els.length !== VISIBLE_COUNT) return;

      const targets = els.map((_, idx) => arcTargetForIndex(idx));

      // Reduced motion: skip ScrollTrigger; render in final fan immediately.
      if (prefersReducedMotion()) {
        els.forEach((el, idx) => gsap.set(el, targets[idx]));
        return;
      }

      // Initial state — every card collapsed at the origin facing viewer.
      els.forEach((el) => gsap.set(el, { x: 0, rotateY: 0 }));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      els.forEach((el, idx) => {
        tl.to(
          el,
          {
            x: targets[idx].x,
            rotateY: targets[idx].rotateY,
            ease: "none",
          },
          0
        );
      });
    },
    { scope: containerRef, dependencies: [cards.length] }
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full min-h-screen bg-[#FDFBF7] overflow-hidden flex flex-col items-center pt-28 pb-16",
        className
      )}
    >
      {/* Text block */}
      <motion.div
        className="flex flex-col items-center text-center z-10 px-4 mb-12"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#111827] leading-[1.1] mb-5 font-serif">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-[#4B5563] max-w-2xl mb-8">
          {subtitle}
        </p>
        <button
          onClick={primaryAction.onClick}
          className="flex items-center gap-2 bg-[#111827] text-white px-7 py-3.5 rounded-full text-base font-medium hover:bg-[#1f2937] transition-colors shadow-lg"
        >
          {primaryAction.label}
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Stage: cards stacked at origin, animated onto the cylinder arc */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{
          height: CARD_H + 40,
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div
          className="relative"
          style={{
            width: CARD_W,
            height: CARD_H,
            transformStyle: "preserve-3d",
          }}
        >
          {cards.map((program, idx) => {
            const offset = idx - Math.floor(VISIBLE_COUNT / 2);
            // Static z-index so center card sits on top in stacked state.
            const z = VISIBLE_COUNT - Math.abs(offset);
            return (
              <CurvedCard
                key={idx}
                program={program}
                zIndex={z}
                refCb={(el) => {
                  cardRefs.current[idx] = el;
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Captions */}
      {captions.length > 0 && (
        <div className="w-full max-w-5xl mx-auto px-8 mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {captions.map((cap, i) => (
            <div key={i}>
              <h3 className="text-[#111827] font-semibold text-base mb-2">
                {cap.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CurvedCard({ program, zIndex, refCb }) {
  if (!program) return null;
  return (
    <div
      ref={refCb}
      className="absolute top-0 left-0 rounded-[22px] overflow-hidden shadow-xl"
      style={{
        width: CARD_W,
        height: CARD_H,
        zIndex,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <img
        src={program.image}
        alt={program.title || ""}
        className="w-full h-full object-cover pointer-events-none select-none"
        draggable={false}
      />
    </div>
  );
}
