"use client";

import { useCallback, useState, type CSSProperties, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

const PERSPECTIVE = 1600;
const SCALE_STEP = 0.16;
const DEPTH = 240;
const TRANSITION_CSS =
  "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)";

export interface CoverflowSlide {
  image: string;
  alt?: string;
  title?: string;
}

type TitleCorner = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

export interface CoverflowGalleryProps {
  slides: CoverflowSlide[];
  cardWidth?: number;
  cardHeight?: number;
  tilt?: number;
  sideTilt?: number;
  gap?: number;
  maxVisible?: number;
  showTitle?: boolean;
  titleColor?: string;
  titleCorner?: TitleCorner;
  /**
   * Continuous active index (0..slides.length-1). Omit for interactive
   * click/keyboard navigation; pass a value (e.g. driven by a scroll
   * listener) to take positioning over externally and disable clicks.
   */
  progress?: number;
  className?: string;
}

export function CoverflowGallery({
  slides,
  cardWidth = 240,
  cardHeight = 360,
  tilt = 12,
  sideTilt = 8,
  gap = 8,
  maxVisible = 2,
  showTitle = true,
  titleColor = "#ffffff",
  titleCorner = "bottomLeft",
  progress,
  className,
}: CoverflowGalleryProps) {
  const isControlled = progress !== undefined;
  const [active, setActive] = useState(0);
  const activeProgress = isControlled ? (progress as number) : active;
  const n = slides.length;

  const step = useCallback(
    (dir: number) => setActive((a) => (((a + dir) % n) + n) % n),
    [n]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (isControlled) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      }
    },
    [isControlled, step]
  );

  if (n === 0) return null;

  const isTop = titleCorner === "topLeft" || titleCorner === "topRight";
  const isRight = titleCorner === "topRight" || titleCorner === "bottomRight";

  return (
    <div
      className={cn("relative flex items-center justify-center outline-none", className)}
      style={{ width: "100%", height: "100%", perspective: PERSPECTIVE }}
      tabIndex={isControlled ? -1 : 0}
      role="group"
      aria-roledescription="carousel"
      onKeyDown={onKeyDown}
    >
      <div
        className="relative"
        style={{ width: cardWidth, height: cardHeight, transformStyle: "preserve-3d" }}
      >
        {slides.map((slide, i) => {
          let rel = i - activeProgress;
          if (rel > n / 2) rel -= n;
          if (rel < -n / 2) rel += n;

          const ax = Math.abs(rel);
          const visible = ax <= maxVisible;
          const isActive = ax < 0.5;
          const scale = Math.max(0.4, 1 - ax * SCALE_STEP);

          const cardStyle: CSSProperties = {
            position: "absolute",
            left: "50%",
            top: "50%",
            width: cardWidth,
            height: cardHeight,
            borderRadius: 22,
            overflow: "hidden",
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
            transform: `translate(-50%, -50%) translateX(${rel * gap * 30}px) translateZ(${-ax * DEPTH}px) rotateY(${-rel * tilt}deg) rotateZ(${rel * sideTilt}deg) scale(${scale})`,
            transition: isControlled ? "none" : TRANSITION_CSS,
            opacity: visible ? 1 : 0,
            cursor: isControlled || isActive ? "default" : "pointer",
            pointerEvents: visible && !isControlled ? "auto" : "none",
            backgroundColor: "#1a1a1a",
          };

          return (
            <div
              key={i}
              style={cardStyle}
              onClick={isControlled ? undefined : () => (i === active ? step(1) : setActive(i))}
              aria-label={slide.title}
              aria-hidden={!visible}
            >
              <img
                src={slide.image}
                alt={slide.alt || slide.title || ""}
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              />

              {showTitle && slide.title && (
                <>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: isTop
                        ? "linear-gradient(0deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.7) 100%)"
                        : "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.7) 100%)",
                    }}
                  />
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      left: 22,
                      right: 22,
                      [isTop ? "top" : "bottom"]: 24,
                      textAlign: isRight ? "right" : "left",
                    }}
                  >
                    <span
                      className="font-bold whitespace-pre-line"
                      style={{
                        color: titleColor,
                        fontSize: 20,
                        lineHeight: "1.1em",
                        letterSpacing: "-0.02em",
                        textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                      }}
                    >
                      {slide.title}
                    </span>
                  </div>
                </>
              )}

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "#000000",
                  opacity: isActive ? 0 : 0.4,
                  transition: `opacity ${isControlled ? "0s" : "0.6s"} ease`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
