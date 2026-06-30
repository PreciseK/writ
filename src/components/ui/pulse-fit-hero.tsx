"use client";

import React, { useRef, useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { HeroBackground } from "./hero-background";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ---- Concave-fan geometry (pure rotateY + uniform translateX) -------------
const VISIBLE_COUNT = 7;
const STEP_DEG = 22;

function getCardConfig(width?: number) {
  const w = width ?? (typeof window !== "undefined" ? window.innerWidth : 1200);
  // scrollDist controls how far the user scrolls before WhatWeDoSection appears.
  // Mobile uses 60vh so the sticky hero exits quickly; desktop keeps 140vh for
  // the full cinematic spread feel.
  if (w < 640)  return { w: 78,  h: 116, spacing: 68,  heroHeight: "100vh", scrollDist: "60vh"  };
  if (w < 1024) return { w: 170, h: 255, spacing: 155, heroHeight: "125vh", scrollDist: "100vh" };
  return               { w: 240, h: 360, spacing: 224, heroHeight: "140vh", scrollDist: "140vh" };
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function arcTargetForIndex(idx: number, spacing: number) {
  const offset = idx - Math.floor(VISIBLE_COUNT / 2);
  return {
    x: offset * spacing,
    rotateY: -offset * STEP_DEG,
  };
}

interface Action {
  label: string;
  onClick: () => void;
}

interface Program {
  image: string;
  title?: string;
  category?: string;
}

interface Caption {
  title: string;
  description: string;
}

interface PulseFitHeroProps {
  title: ReactNode;
  subtitle: string;
  primaryAction?: Action;
  secondaryAction?: Action;
  programs?: Program[];
  captions?: Caption[];
  disclaimer?: string;
  className?: string;
}

export function PulseFitHero({
  title,
  subtitle,
  primaryAction = { label: "Get started for Free", onClick: () => {} },
  secondaryAction,
  programs = [],
  captions = [],
  disclaimer,
  className,
}: PulseFitHeroProps) {
  // SSR-safe: always start with desktop defaults so server/client HTML matches,
  // then correct to actual screen size after hydration in useEffect.
  const [cardCfg, setCardCfg] = useState({ w: 240, h: 360, spacing: 224, heroHeight: "140vh", scrollDist: "140vh" }); // desktop defaults for SSR

  useEffect(() => {
    setCardCfg(getCardConfig(window.innerWidth));
    const onResize = () => setCardCfg(getCardConfig(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // wrapperRef: tall outer div — the ScrollTrigger trigger
  const wrapperRef = useRef<HTMLDivElement>(null);
  // containerRef: sticky inner div — the GSAP scope
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const cards = [];
  for (let i = 0; i < VISIBLE_COUNT; i++) {
    cards.push(programs[i % Math.max(programs.length, 1)]);
  }

  useGSAP(
    () => {
      const els = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      if (els.length !== VISIBLE_COUNT || !wrapperRef.current) return;

      const targets = els.map((_, idx) => arcTargetForIndex(idx, cardCfg.spacing));

      if (prefersReducedMotion()) {
        els.forEach((el, idx) => gsap.set(el, targets[idx]));
        return;
      }

      els.forEach((el) => gsap.set(el, { x: 0, rotateY: 0 }));

      const tl = gsap.timeline({
        scrollTrigger: {
          // Trigger on the tall outer wrapper — CSS sticky keeps the hero
          // pinned natively; GSAP just drives the card spread animation.
          trigger: wrapperRef.current,
          start: "top top",
          end: `+=${cardCfg.scrollDist}`,
          scrub: 0.5,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        },
      });

      els.forEach((el, idx) => {
        tl.to(
          el,
          {
            x: targets[idx].x,
            rotateY: targets[idx].rotateY,
            ease: "power2.out",
          },
          0
        );
      });
    },
    { scope: containerRef, dependencies: [cards.length, cardCfg] }
  );

  return (
    // Outer wrapper: tall enough for hero + full card-spread scroll distance.
    // CSS sticky on the inner div does the pinning — no GSAP pin needed.
    <div ref={wrapperRef} style={{ minHeight: `calc(${cardCfg.heroHeight} + ${cardCfg.scrollDist})` }}>
      <div
        ref={containerRef}
        className={cn(
          "sticky top-0 w-full overflow-hidden flex flex-col items-center pt-20 md:pt-44 lg:pt-56 pb-4 md:pb-16 bg-[#FDFBF7]",
          className
        )}
        style={{ height: cardCfg.heroHeight }}
      >
        <HeroBackground />

        {/* Title — full width, outside constrained block */}
        <div className="w-full z-10 mb-3 md:mb-6">
          <h1 className="w-full text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#111827] font-normal leading-[1.1]">
            {title}
          </h1>
        </div>

        {/* Subtitle + CTAs */}
        <div className="flex flex-col items-center text-center z-10 px-4 mb-3 md:mb-12 w-full">
          <p className="text-lg md:text-xl text-[#4B5563] max-w-2xl mb-4 md:mb-8">
            {subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={primaryAction.onClick}
              className="flex items-center gap-2 bg-[#111827] text-white px-7 py-3.5 rounded-full text-base font-medium hover:bg-[#1f2937] transition-colors shadow-lg"
            >
              {primaryAction.label}
              <ArrowRight className="w-4 h-4" />
            </button>

            {secondaryAction && (
              <button
                onClick={secondaryAction.onClick}
                className="flex items-center gap-2 bg-white text-[#111827] border border-gray-200 px-7 py-3.5 rounded-full text-base font-medium hover:bg-gray-50 transition-colors shadow-sm"
              >
                {secondaryAction.label}
              </button>
            )}
          </div>
        </div>

        {/* Stage: cards stacked at origin, animated onto the cylinder arc */}
        <div
          className="relative w-full flex items-center justify-center"
          style={{
            height: cardCfg.h + 40,
            perspective: "1200px",
            perspectiveOrigin: "50% 50%",
          }}
        >
          <div
            className="relative"
            style={{
              width: cardCfg.w,
              height: cardCfg.h,
              transformStyle: "preserve-3d",
            }}
          >
            {cards.map((program, idx) => {
              const offset = idx - Math.floor(VISIBLE_COUNT / 2);
              const z = VISIBLE_COUNT - Math.abs(offset);
              return (
                <CurvedCard
                  key={idx}
                  program={program}
                  zIndex={z}
                  cardW={cardCfg.w}
                  cardH={cardCfg.h}
                  refCb={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Disclaimer / Captions Section */}
        <div className="w-full max-w-5xl mx-auto px-8 mt-4 md:mt-10 text-center">
          {disclaimer ? (
            <p className="text-[#6B7280] text-lg font-medium italic">
              {disclaimer}
            </p>
          ) : captions.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
      </div>
    </div>
  );
}

interface CurvedCardProps {
  program: Program;
  zIndex: number;
  cardW: number;
  cardH: number;
  refCb: (el: HTMLDivElement | null) => void;
}

function CurvedCard({ program, zIndex, cardW, cardH, refCb }: CurvedCardProps) {
  if (!program) return null;
  return (
    <div
      ref={refCb}
      className="absolute top-0 left-0 rounded-[22px] overflow-hidden shadow-xl"
      style={{
        width: cardW,
        height: cardH,
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
