"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HeroBackground } from '@/components/ui/hero-background';

const steps = [
  {
    num: '01',
    title: 'Capacity-Based Engagement',
    desc: 'Defined delivery capacity with named team members.',
  },
  {
    num: '02',
    title: 'Wager Technik Owns Delivery',
    desc: 'We manage technical direction, quality assurance, and execution.',
  },
  {
    num: '03',
    title: 'Transparent Communication',
    desc: 'Weekly reporting, clear milestones, and a single German-speaking point of contact.',
  },
  {
    num: '04',
    title: 'Flexible Scaling',
    desc: 'Adjust capacity as your needs evolve without long-term hiring commitments.',
  },
];

const stepsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const stepItemVariants = {
  hidden: { opacity: 0, y: 80, x: -20 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const HowItWorksSection = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-[#FDFBF7]">
      <HeroBackground />
      <div className="container-max">

        {/* Two-column layout: title left, steps right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — heading + image */}
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-[42px] font-normal text-[#0f172a] leading-[1.15] tracking-tight">
              How We<br />Work
            </h2>
            <p className="mt-4 text-[17px] text-[#64748b] leading-relaxed max-w-xs">
              A clear, low-risk delivery approach:
            </p>
            <div className="mt-8 rounded-[16px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
                alt="Wager Technik delivery team"
                className="w-full h-auto block"
              />
            </div>
          </motion.div>

          {/* Right — numbered steps with curved connector */}
          <div className="relative">
            {/* Curved SVG line connecting circles */}
            <svg
              className="absolute left-[19px] top-0 h-full w-10 pointer-events-none"
              viewBox="0 0 40 600"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 0 C 40 80, 0 140, 20 220 C 40 300, 0 360, 20 440 C 40 520, 0 560, 20 600"
                stroke="#e2e8f0"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>

            <motion.div
              className="flex flex-col gap-14"
              variants={stepsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {steps.map((step) => (
                <motion.div key={step.num} className="flex items-start gap-8" variants={stepItemVariants}>
                  {/* Numbered circle */}
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border border-[#0f172a] bg-white flex items-center justify-center">
                    <span className="text-[13px] font-medium text-[#0f172a] tracking-tight">
                      {step.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-[18px] font-semibold text-[#0f172a] mb-2">{step.title}</h3>
                    <p className="text-[15px] text-[#64748b] leading-relaxed max-w-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
