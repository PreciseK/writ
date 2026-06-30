"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation';

const BASE_PEOPLE = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=420&q=80',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&h=420&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=420&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=420&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=420&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=420&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=420&q=80',
];
const BASE_TILTS = [-4, 5, -2, 6, -3, 4, -6];

const N_REPEATS = 5;
const people = Array.from({ length: N_REPEATS }, () => BASE_PEOPLE).flat();
const tilts  = Array.from({ length: N_REPEATS }, () => BASE_TILTS).flat();

const ORBIT_DURATION = 50;

// Mobile: pivotY = sectionH/2 so DY = 0 — orbit centres exactly on the
// section centre where the content lives, forming a complete visible ring.
// Only 7 images are rendered on mobile so the ring has clean gaps.
// Tablet/desktop: large radius with orbit centre well below the section,
// showing only the top arc — the original "horizon" effect.
function getOrbitConfig(width = 1200) {
  if (width < 640)  return { radius: 150, pivotY: 225, sectionH: 450, imgW: 58,  imgH: 79,  imageCount: 7  };
  if (width < 1024) return { radius: 620, pivotY: 820, sectionH: 760, imgW: 130, imgH: 175, imageCount: 21 };
  return                   { radius: 1100, pivotY: 1220, sectionH: 800, imgW: 170, imgH: 230, imageCount: 35 };
}

const CtaSection = () => {
  const router  = useRouter();
  const refs    = useRef<(HTMLDivElement | null)[]>([]);
  const rafId   = useRef<number>(0);
  const startTs = useRef<number>(0);

  // SSR-safe desktop defaults — updated after hydration in useEffect
  const orbitRef       = useRef(getOrbitConfig());
  const renderCountRef = useRef(35);

  const [imgSize, setImgSize]         = useState({ w: 170, h: 230 });
  const [sectionH, setSectionH]       = useState(800);
  const [renderCount, setRenderCount] = useState(35);

  useEffect(() => {
    const update = (w: number) => {
      const cfg = getOrbitConfig(w);
      orbitRef.current       = cfg;
      renderCountRef.current = cfg.imageCount;
      setImgSize({ w: cfg.imgW, h: cfg.imgH });
      setSectionH(cfg.sectionH);
      setRenderCount(cfg.imageCount);
    };
    update(window.innerWidth);
    const onResize = () => update(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const tick = (now: number) => {
      if (!startTs.current) startTs.current = now;
      const elapsed = (now - startTs.current) / 1000;
      const base    = (elapsed / ORBIT_DURATION) * 2 * Math.PI;
      const { radius, pivotY, sectionH: sh } = orbitRef.current;
      const dy = pivotY - sh / 2;
      const rc = renderCountRef.current;

      for (let i = 0; i < rc; i++) {
        const el = refs.current[i];
        if (!el) continue;
        // Space images evenly around the full circle using rc (not total pool)
        const a = (2 * Math.PI * i / rc) + base;
        const x = (radius * Math.sin(a)).toFixed(2);
        const y = (dy - radius * Math.cos(a)).toFixed(2);
        el.style.transform =
          `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${tilts[i % tilts.length]}deg)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  return (
    // Mobile: justify-center so content sits at section centre (inside the ring)
    // Tablet+: justify-end so content sits at bottom below the top arc
    <section
      className="relative overflow-hidden bg-[#F5F0E6] flex flex-col items-center justify-center sm:justify-end sm:pb-28"
      style={{ height: sectionH }}
    >
      {people.slice(0, renderCount).map((src, i) => (
        <div
          key={i}
          ref={el => { refs.current[i] = el; }}
          style={{ position: 'absolute', left: '50%', top: '50%' }}
        >
          <img
            src={src}
            alt=""
            style={{
              width: imgSize.w,
              height: imgSize.h,
              objectFit: 'cover',
              borderRadius: 14,
              boxShadow: '0 6px 24px rgba(0,0,0,0.18)',
              display: 'block',
            }}
          />
        </div>
      ))}

      {/* Content — z-10 keeps it in front of orbit images on mobile */}
      <div className="relative z-10 text-center max-w-[185px] sm:max-w-lg mx-auto px-2 sm:px-6">
        <h2 className="text-[22px] sm:text-5xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
          Let's discuss your
          <br />
          <span
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
            className="italic"
          >
            delivery needs.
          </span>
        </h2>

        {/* Paragraph hidden on mobile — not enough space inside the ring */}
        <p className="hidden sm:block text-gray-500 text-base leading-relaxed mb-10 max-w-sm mx-auto">
          Partner with a team that takes full accountability for delivery quality,
          technical oversight, and outcomes.
        </p>

        <button
          onClick={() => router.push('/contact')}
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors shadow-lg"
        >
          Book a Call
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
