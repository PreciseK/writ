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
const TOTAL  = people.length; // 35

const ORBIT_DURATION = 50; // seconds per full revolution

function getOrbitConfig(width?: number) {
  const w = width ?? (typeof window !== "undefined" ? window.innerWidth : 1200);
  if (w < 640) return { radius: 340, pivotY: 480, sectionH: 680, imgW: 110, imgH: 150 };
  if (w < 1024) return { radius: 700, pivotY: 900, sectionH: 800, imgW: 140, imgH: 190 };
  return { radius: 1100, pivotY: 1220, sectionH: 800, imgW: 170, imgH: 230 };
}

const CtaSection = () => {
  const router      = useRouter();
  const refs        = useRef<(HTMLDivElement | null)[]>([]);
  const rafId       = useRef<number>(0);
  const startTs     = useRef<number>(0);
  const orbitRef    = useRef(getOrbitConfig());
  const [imgSize, setImgSize]   = useState({ w: orbitRef.current.imgW, h: orbitRef.current.imgH });
  const [sectionH, setSectionH] = useState(orbitRef.current.sectionH);

  useEffect(() => {
    const onResize = () => {
      const cfg = getOrbitConfig(window.innerWidth);
      orbitRef.current = cfg;
      setImgSize({ w: cfg.imgW, h: cfg.imgH });
      setSectionH(cfg.sectionH);
    };
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

      for (let i = 0; i < TOTAL; i++) {
        const el = refs.current[i];
        if (!el) continue;
        const a = (2 * Math.PI * i / TOTAL) + base;
        const x = (radius * Math.sin(a)).toFixed(2);
        const y = (dy - radius * Math.cos(a)).toFixed(2);
        // Pure translate keeps each card upright; tilt is a fixed decorative rotation
        el.style.transform =
          `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${tilts[i]}deg)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-[#F5F0E6] flex flex-col items-center justify-end pb-28"
      style={{ height: sectionH }}
    >
      {/* Images — each anchored at section centre, moved by JS translate */}
      {people.map((src, i) => (
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
              borderRadius: 20,
              boxShadow: '0 6px 24px rgba(0,0,0,0.18)',
              display: 'block',
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-4 mt-8">
          Let's discuss your
          <br />
          <span
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
            className="italic"
          >
            delivery needs.
          </span>
        </h2>

        <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-sm mx-auto">
          Partner with a team that takes full accountability for delivery quality,
          technical oversight, and outcomes.
        </p>

        <button
          onClick={() => router.push('/contact')}
          className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors shadow-lg"
        >
          Book a Call
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
