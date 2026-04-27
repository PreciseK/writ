"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Concave-fan geometry. Indices 0..6, center is index 3.
// Final rotateY = -(index - 3) * STEP_DEG → +66°, +44°, +22°, 0°, -22°, -44°, -66°
const VISIBLE_COUNT = 7;
const STEP_DEG = 22;
const CARD_W = 200;
const CARD_GAP = 12;
const ROT_INITIAL_FACTOR = 0.3;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function PulseFitHero({
  title,
  subtitle,
  primaryAction = { label: "Get started for Free", onClick: () => {} },
  programs = [],
  captions = [],
  className,
}) {
  const containerRef = useRef(null);
  const stageRef = useRef(null);
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

      const center = Math.floor(VISIBLE_COUNT / 2);

      // Per-card targets
      const targets = els.map((_, idx) => {
        const offset = idx - center;
        return {
          finalX: offset * (CARD_W + CARD_GAP),
          finalRotY: -offset * STEP_DEG,
        };
      });

      // Reduced motion: render the final fan immediately, no scroll trigger.
      if (prefersReducedMotion()) {
        els.forEach((el, idx) => {
          gsap.set(el, {
            x: targets[idx].finalX,
            rotateY: targets[idx].finalRotY,
          });
        });
        return;
      }

      // Initial state — stacked at center with partial pre-rotation
      els.forEach((el, idx) => {
        gsap.set(el, {
          x: 0,
          rotateY: targets[idx].finalRotY * ROT_INITIAL_FACTOR,
        });
      });

      // Scrub timeline pinned to one viewport height
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
            x: targets[idx].finalX,
            rotateY: targets[idx].finalRotY,
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

      {/* Stage: stacked cards that spread on scroll */}
      <div
        ref={stageRef}
        className="relative w-full flex items-center justify-center"
        style={{
          height: "360px",
          perspective: "1100px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div className="relative" style={{ width: CARD_W, height: 320 }}>
          {cards.map((program, idx) => {
            const offset = idx - Math.floor(VISIBLE_COUNT / 2);
            // Static z-index so center card sits on top of the stack at progress 0
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
      className="absolute top-0 left-0 rounded-[22px] overflow-hidden"
      style={{
        width: CARD_W,
        height: 320,
        zIndex,
        transformOrigin: "center center",
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
