"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import CtaSection from '@/components/home/CtaSection';
import PageHero from '@/components/ui/page-hero';
import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import { CheckCircle, Shield, RefreshCw, BarChart2, Eye, Code, FileText, LucideIcon } from 'lucide-react';
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

const IconDot = ({ icon: Icon, bg = 'bg-[#1a1a1a]' }: { icon: LucideIcon; bg?: string }) => (
  <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
    <Icon className="w-4 h-4 text-white" />
  </div>
);

const HowWeWorkClient = () => {
  const t = useTranslations('howWeWork');

  return (
    <PageTransition>
      <PageHero
        label={t('heroLabel')}
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
      />

      {/* Section 1: Delivery Structure */}
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
              <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">{t('deliveryTitle')}</h2>
              <p className="text-[18px] text-muted-foreground mb-10 leading-relaxed">
                {t('deliveryBody')}
              </p>
              <motion.div
                className="space-y-8"
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                {[
                  { icon: CheckCircle, titleKey: 'ownsDeliveryTitle', bodyKey: 'ownsDeliveryBody' },
                  { icon: Shield,      titleKey: 'clientCollabTitle', bodyKey: 'clientCollabBody' },
                ].map(({ icon, titleKey, bodyKey }) => (
                  <motion.div key={titleKey} className="flex gap-4" variants={listItemVariants}>
                    <IconDot icon={icon} />
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
              <img src="https://images.unsplash.com/photo-1573496130407-57329f01f769?auto=format&fit=crop&w=1200&q=80" alt="Delivery Structure and Workflow" className="w-full h-auto block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Communication */}
      <section className="relative overflow-hidden bg-[#FDFBF7] py-24">
        <HeroBackground />
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="rounded-[16px] overflow-hidden order-2 lg:order-1"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Transparent Communication & Reporting" className="w-full h-auto block" />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">{t('commTitle')}</h2>
              <p className="text-[18px] text-muted-foreground mb-10 leading-relaxed">
                {t('commBody')}
              </p>
              <motion.div
                className="space-y-8"
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                {[
                  { icon: RefreshCw, titleKey: 'weeklyUpdatesTitle', bodyKey: 'weeklyUpdatesBody' },
                  { icon: BarChart2, titleKey: 'reportingTitle',     bodyKey: 'reportingBody' },
                  { icon: Eye,       titleKey: 'transparencyTitle',  bodyKey: 'transparencyBody' },
                ].map(({ icon, titleKey, bodyKey }) => (
                  <motion.div key={titleKey} className="flex gap-4" variants={listItemVariants}>
                    <IconDot icon={icon} />
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

      {/* Section 3: Quality Assurance */}
      <section className="relative overflow-hidden bg-[#FDFBF7] py-24">
        <HeroBackground />
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">{t('qaTitle')}</h2>
            <p className="text-[18px] text-muted-foreground mb-16 max-w-xl leading-relaxed">
              {t('qaSubtitle')}
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
              { icon: Code,     titleKey: 'codeReviewsTitle',  bodyKey: 'codeReviewsBody' },
              { icon: Eye,      titleKey: 'techOversightTitle', bodyKey: 'techOversightBody' },
              { icon: FileText, titleKey: 'standardsTitle',    bodyKey: 'standardsBody' },
            ].map(({ icon: Icon, titleKey, bodyKey }) => (
              <motion.div key={titleKey} variants={cardVariants}>
                <Card variant="soft" className="p-8">
                  <div className="w-12 h-12 rounded-[8px] bg-[#1a1a1a] flex items-center justify-center mb-6">
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

      <CtaSection />
    </PageTransition>
  );
};

export default HowWeWorkClient;
