"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Users, Tag, Scale } from 'lucide-react';

const FEATURES = [
  {
    icon: Shield,
    text: 'German-facing accountability through Wager Technik',
  },
  {
    icon: Star,
    text: 'Strong technical leadership and delivery oversight',
  },
  {
    icon: Users,
    text: 'Carefully vetted and continuously reviewed teams',
  },
  {
    icon: Tag,
    text: 'Predictable pricing models',
  },
  {
    icon: Scale,
    text: 'A legally sound subcontracting model designed for the German market',
  },
];

const bulletContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const bulletItemVariants = {
  hidden: { opacity: 0, y: 40, x: 20 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const WhyWritSection = () => {
  return (
    <section className="overflow-hidden bg-[#0f0f0f]">
      <div className="flex flex-col lg:flex-row min-h-[600px]">

        {/* Left — image */}
        <motion.div
          className="relative lg:w-1/2 h-72 lg:h-auto"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1400&auto=format&fit=crop"
            alt="Team collaboration"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* subtle gradient so image bleeds into the dark content side on desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f0f0f]/60 hidden lg:block" />
        </motion.div>

        {/* Right — content */}
        <motion.div
          className="lg:w-1/2 flex items-center px-10 py-16 lg:px-16 lg:py-24"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="max-w-lg">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              Why Wager Technik
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug mb-4">
              Built for trust and long-term<br className="hidden lg:block" /> delivery partnerships
            </h2>
            <div className="w-12 h-0.5 bg-white/20 mb-10" />

            <motion.ul
              className="space-y-6"
              variants={bulletContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {FEATURES.map(({ icon: Icon, text }, i) => (
                <motion.li key={i} className="flex items-start gap-4" variants={bulletItemVariants}>
                  <span className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white/80" strokeWidth={1.5} />
                  </span>
                  <p className="text-white/70 text-[15px] leading-relaxed pt-1.5">{text}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyWritSection;
