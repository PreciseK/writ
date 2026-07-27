"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import CtaSection from '@/components/home/CtaSection';
import PageHero from '@/components/ui/page-hero';
import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import { Briefcase, Target, UserX, FileMinus, Users, Shield, CheckCircle, Clock } from 'lucide-react';
import { HeroBackground } from '@/components/ui/hero-background';

const listContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const listItemVariants = {
  hidden: { opacity: 0, y: 40, x: -20 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const cardContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } },
};

const OurModelClient = () => {
  const t = useTranslations('ourModel');

  return (
    <PageTransition>
      <PageHero
        label={t('heroLabel')}
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
      />

      {/* Section 1: How the model works */}
      <section className="relative overflow-hidden bg-[#FDFBF7] py-24">
        <HeroBackground />
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">{t('howModelTitle')}</h2>
              <p className="text-[18px] text-muted-foreground mb-10 leading-relaxed">
                {t('howModelBody')}
              </p>
              <motion.div
                className="space-y-8"
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                {[
                  { icon: Briefcase, titleKey: 'subcontractingTitle',  bodyKey: 'subcontractingBody' },
                  { icon: Target,    titleKey: 'deliveryFocusedTitle', bodyKey: 'deliveryFocusedBody' },
                ].map(({ icon: Icon, titleKey, bodyKey }) => (
                  <motion.div key={titleKey} className="flex gap-4" variants={listItemVariants}>
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{t(titleKey as any)}</h4>
                      <p className="text-muted-foreground text-[15px] leading-relaxed">{t(bodyKey as any)}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="rounded-[16px] overflow-hidden"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" alt="Capacity Based Subcontracting Model" className="w-full h-auto block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Are NOT */}
      <section className="relative overflow-hidden bg-[#FDFBF7] py-24">
        <HeroBackground />
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">{t('notTitle')}</h2>
            <p className="text-[18px] text-muted-foreground mb-16 max-w-xl leading-relaxed">
              {t('notSubtitle')}
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
              { icon: UserX,     titleKey: 'notStaffTitle',      bodyKey: 'notStaffBody' },
              { icon: FileMinus, titleKey: 'notBodyTitle',        bodyKey: 'notBodyBody' },
              { icon: Users,     titleKey: 'notFreelancerTitle',  bodyKey: 'notFreelancerBody' },
            ].map(({ icon: Icon, titleKey, bodyKey }) => (
              <motion.div key={titleKey} variants={cardVariants}>
                <Card variant="soft" className="p-8">
                  <div className="w-12 h-12 rounded-[8px] bg-muted flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{t(titleKey as any)}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{t(bodyKey as any)}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3: Why This Model Works */}
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
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" alt="Subcontracting Partnership" className="w-full h-auto block" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">{t('whyTitle')}</h2>
              <p className="text-[18px] text-muted-foreground mb-10 leading-relaxed">
                {t('whyBody')}
              </p>
              <motion.div
                className="space-y-8"
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                {[
                  { icon: Shield,      titleKey: 'legalClarityTitle',  bodyKey: 'legalClarityBody' },
                  { icon: CheckCircle, titleKey: 'accountabilityTitle', bodyKey: 'accountabilityBody' },
                  { icon: Clock,       titleKey: 'predictabilityTitle', bodyKey: 'predictabilityBody' },
                ].map(({ icon: Icon, titleKey, bodyKey }) => (
                  <motion.div key={titleKey} className="flex gap-4" variants={listItemVariants}>
                    <div className="w-10 h-10 rounded-[8px] bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{t(titleKey as any)}</h4>
                      <p className="text-muted-foreground text-[15px] leading-relaxed">{t(bodyKey as any)}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: How Engagement Starts */}
      <section className="relative overflow-hidden bg-[#FDFBF7] py-24">
        <HeroBackground />
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">{t('engagementTitle')}</h2>
            <p className="text-[18px] text-muted-foreground mb-16 max-w-xl leading-relaxed">
              {t('engagementSubtitle')}
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            {[
              { num: '1', titleKey: 'discoveryTitle', descKey: 'discoveryDesc' },
              { num: '2', titleKey: 'pilotTitle',     descKey: 'pilotDesc' },
              { num: '3', titleKey: 'deliveryTitle',  descKey: 'deliveryDesc' },
              { num: '4', titleKey: 'scaleTitle',     descKey: 'scaleDesc' },
            ].map((item) => (
              <motion.div key={item.num} variants={cardVariants}>
                <Card variant="soft" className="p-8 text-center">
                  <div className="w-12 h-12 rounded-full border border-foreground bg-white flex items-center justify-center mb-6 mx-auto">
                    <span className="text-[14px] font-medium text-foreground">0{item.num}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{t(item.titleKey as any)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(item.descKey as any)}</p>
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

export default OurModelClient;
