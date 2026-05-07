"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HeroBackground } from '@/components/ui/hero-background';

export default function WhatWeDoSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#FDFBF7]">
      <HeroBackground />
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: title and body */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.h2
              className="text-foreground text-4xl font-semibold tracking-tight mb-6"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
            >
              What We Do
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              Wager Technik is a subcontracting partner for organisations that already deliver technology and need to deliver more. We provide dedicated delivery teams that work alongside your organisation while Wager Technik remains fully accountable for delivery quality, technical standards, and outcomes.
            </motion.p>
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              We are not a staff augmentation provider. We deliver structured, outcome-focused engineering capacity.
            </motion.p>
          </motion.div>

          {/* Right: stacked image composition */}
          <motion.div
            className="relative h-[420px] lg:h-[480px]"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >

            {/* Dot grid — top right */}
            <div className="dot-grid absolute top-0 right-0 w-24 h-24 opacity-30" />

            {/* Dot grid — bottom left */}
            <div className="dot-grid absolute bottom-0 left-0 w-24 h-24 opacity-30" />

            {/* Main image — top right */}
            <div className="absolute top-4 right-4 w-[72%] h-[68%] rounded-[20px] overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaborating"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Secondary image — bottom left */}
            <div className="absolute bottom-4 left-4 w-[52%] h-[52%] rounded-[20px] overflow-hidden shadow-xl border-4 border-[#FDFBF7]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                alt="Engineers working"
                className="w-full h-full object-cover"
              />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
