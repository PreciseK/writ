"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import PageTransition from '@/components/PageTransition';
import PageHero from '@/components/ui/page-hero';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { HeroBackground } from '@/components/ui/hero-background';

const ContactClient = () => {
  const t = useTranslations('contact');

  return (
    <PageTransition>
      <PageHero
        label={t('heroLabel')}
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
      />

      <section className="relative overflow-hidden bg-[#FDFBF7] py-24">
        <HeroBackground />
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-[8px] bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t('emailLabel')}</h4>
                    <a href="mailto:hello@wagertechnik.de" className="text-muted-foreground text-[15px] hover:text-foreground transition-colors">
                      hello@wagertechnik.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-[8px] bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t('phoneLabel')}</h4>
                    <a href="tel:015127172196" className="text-muted-foreground text-[15px] hover:text-foreground transition-colors">
                      015127172196
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-[8px] bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t('locationLabel')}</h4>
                    <p className="text-muted-foreground text-[15px]">{t('locationLine1')}</p>
                    <p className="text-muted-foreground text-[15px]">{t('locationLine2')}</p>
                    <p className="text-muted-foreground text-[15px] mt-1">{t('locationLine3')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card className="p-10">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">{t('nameLabel')}</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-[8px] border border-border p-3 text-[15px] bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder={t('namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">{t('emailInputLabel')}</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-[8px] border border-border p-3 text-[15px] bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder={t('emailPlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">{t('messageLabel')}</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-[8px] border border-border p-3 text-[15px] bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      placeholder={t('messagePlaceholder')}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 rounded-full font-medium text-[15px] transition-all hover:opacity-90"
                    style={{ background: '#1a1a1a', color: '#ffffff' }}
                  >
                    {t('sendButton')}
                  </button>
                </form>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactClient;
