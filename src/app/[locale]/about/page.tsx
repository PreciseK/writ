"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import CtaSection from '@/components/home/CtaSection';
import PageHero from '@/components/ui/page-hero';
import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import { CheckCircle, Shield, Link2, MapPin, Globe, LucideIcon } from 'lucide-react';
import { HeroBackground } from '@/components/ui/hero-background';

const cardContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } },
};

const About = () => {
  const t = useTranslations('about');

  return (
    <PageTransition>
      <PageHero
        label={t('heroLabel')}
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
      />

      {/* Section 1: Leadership & Vision */}
      <section className="relative overflow-hidden bg-[#FDFBF7] py-24">
        <HeroBackground />
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="rounded-[16px] overflow-hidden"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <img src="https://images.unsplash.com/photo-1573497701240-345a300b8d36?auto=format&fit=crop&w=1200&q=80" alt="Leadership" className="w-full h-auto block" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className="text-[36px] font-normal text-foreground mb-6 tracking-tight">{t('leadershipTitle')}</h2>
              <p className="text-[18px] text-muted-foreground mb-6 leading-relaxed">
                {t('leadershipBody1')}
              </p>
              <p className="text-[18px] text-muted-foreground leading-relaxed">
                {t('leadershipBody2')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Philosophy */}
      <section className="relative overflow-hidden bg-[#FDFBF7] py-24">
        <HeroBackground />
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">{t('philosophyTitle')}</h2>
            <p className="text-[18px] text-muted-foreground mb-16 max-w-xl leading-relaxed">
              {t('philosophySubtitle')}
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            {[
              { icon: CheckCircle, titleKey: 'qualityTitle',       bodyKey: 'qualityBody' },
              { icon: Shield,      titleKey: 'accountabilityTitle', bodyKey: 'accountabilityBody' },
              { icon: Link2,       titleKey: 'partnershipsTitle',   bodyKey: 'partnershipsBody' },
            ].map(({ icon: Icon, titleKey, bodyKey }) => (
              <motion.div key={titleKey} variants={cardVariants}>
                <Card variant="soft" className="p-8">
                  <div className="w-12 h-12 rounded-[8px] bg-primary flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{t(titleKey as any)}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{t(bodyKey as any)}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3: Locations */}
      <section className="relative overflow-hidden bg-[#FDFBF7] py-24">
        <HeroBackground />
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">{t('locationsTitle')}</h2>
            <p className="text-[18px] text-muted-foreground mb-16 max-w-xl leading-relaxed">
              {t('locationsSubtitle')}
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            {[
              { icon: MapPin, titleKey: 'germanyTitle', bodyKey: 'germanyBody', detailKey: 'germanyDetail' },
              { icon: Globe,  titleKey: 'remoteTitle',  bodyKey: 'remoteBody',  detailKey: 'remoteDetail' },
            ].map(({ icon: Icon, titleKey, bodyKey, detailKey }) => (
              <motion.div key={titleKey} variants={cardVariants}>
                <Card variant="soft" className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-[8px] bg-primary flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-[22px] font-semibold text-foreground">{t(titleKey as any)}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-[15px] mb-4">{t(bodyKey as any)}</p>
                  <span className="text-xs text-primary font-medium uppercase tracking-wide">{t(detailKey as any)}</span>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </PageTransition>
  );
};

export default About;
