'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Monitor, Server, Package } from 'lucide-react';
import { HeroBackground } from '@/components/ui/hero-background';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const clients = [
  {
    label: 'IT Consultancies',
    icon: Building2,
    desc: 'Scale delivery without growing your headcount.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Digital Agencies',
    icon: Monitor,
    desc: 'Ship client projects on time with accountable teams.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'System Integrators',
    icon: Server,
    desc: 'Structured capacity for complex integration work.',
    image: 'https://images.unsplash.com/photo-1573496130407-57329f01f769?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'SaaS Companies',
    icon: Package,
    desc: 'Engineering power for fast-growing product teams.',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80',
  },
];

const WhoWeWorkWithSection = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-[#FDFBF7]">
      <HeroBackground />
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">Who We Work With</h2>
          <p className="text-[18px] text-muted-foreground mb-16 max-w-xl leading-relaxed">
            Partnering with teams where delivery pressure is real and deadlines matter.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {clients.map(({ label, icon: Icon, desc, image }) => (
            <motion.div
              key={label}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-xl border border-border bg-muted/50 p-8 cursor-default transition-all duration-500 hover:border-transparent"
              style={{ minHeight: '320px' }}
            >
              {/* Background image — visible by default, fades out on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                style={{ backgroundImage: `url(${image})` }}
              />
              {/* Dark overlay — visible by default, fades out on hover */}
              <div className="absolute inset-0 bg-black/55 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full justify-end">
                <div className="w-12 h-12 rounded-[8px] bg-white/15 group-hover:bg-primary/10 flex items-center justify-center mb-5 transition-colors duration-500">
                  <Icon className="w-5 h-5 text-white group-hover:text-primary transition-colors duration-500" />
                </div>
                <h3 className="text-[16px] font-semibold text-white group-hover:text-foreground mb-2 transition-colors duration-500">
                  {label}
                </h3>
                <p className="text-sm text-white/80 group-hover:text-muted-foreground leading-relaxed transition-colors duration-500">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className="text-[15px] text-muted-foreground mt-10 italic"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        >
          If deadlines and quality matter, Wager Technik fits.
        </motion.p>
      </div>
    </section>
  );
};

export default WhoWeWorkWithSection;
