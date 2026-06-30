"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { HeroBackground } from '@/components/ui/hero-background';

const ModelTeaserSection = () => {
  const t = useTranslations('modelTeaser');
  const locale = useLocale();

  const localePath = (path: string) => locale === 'de' ? `/de${path}` : path;

  const points = [
    t('point1'),
    t('point2'),
    t('point3'),
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-[#FDFBF7] border-t border-b border-border">
      <HeroBackground />
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.h2
              className="text-[36px] font-normal text-foreground mb-6 tracking-tight"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {t('title')}
            </motion.h2>
            <motion.p
              className="text-[18px] text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {t('body')}
            </motion.p>

            <ul className="space-y-4 mb-10">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-[16px] text-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-[15px] text-muted-foreground italic mb-10 border-l-2 border-border pl-4">
              {t('disclaimer')}
            </p>

            <Link
              href={localePath('/our-model')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-foreground text-foreground font-medium text-[16px] hover:bg-foreground hover:text-white transition-all"
            >
              {t('cta')}
            </Link>
          </motion.div>

          {/* Right — stacked image composition */}
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
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
                alt="Delivery team at work"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Secondary image — bottom left */}
            <div className="absolute bottom-4 left-4 w-[52%] h-[52%] rounded-[20px] overflow-hidden shadow-xl border-4 border-[#FDFBF7]">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                alt="Technical oversight"
                className="w-full h-full object-cover"
              />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ModelTeaserSection;
