"use client";

import React from 'react';
import { motion } from 'framer-motion';
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

const IconDot = ({ icon: Icon, bg = 'bg-white' }: { icon: LucideIcon; bg?: string }) => (
  <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center flex-shrink-0 shadow-sm border border-border`}>
    <Icon className="w-4 h-4 text-primary" />
  </div>
);

const HowWeWork = () => {
  return (
    <PageTransition>
      <PageHero
        label="Our Process"
        title="How We Work"
        subtitle="A proven, structured delivery model that integrates seamlessly into your business — balancing transparency with independent execution."
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
              <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">Delivery Structure</h2>
              <p className="text-[18px] text-muted-foreground mb-10 leading-relaxed">
                We manage the complexities of software delivery so you don't have to.
                You maintain vision and direction, while we handle execution.
              </p>
              <motion.div
                className="space-y-8"
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                {[
                  { icon: CheckCircle, title: 'Wager Technik Owns Delivery', body: 'We take complete responsibility for the development process, timeline, and the final output quality.' },
                  { icon: Shield,      title: 'Client Collaborates',         body: 'You provide the goals and business context. We collaborate closely but spare you the daily management overhead.' },
                ].map(({ icon, title, body }) => (
                  <motion.div key={title} className="flex gap-4" variants={listItemVariants}>
                    <IconDot icon={icon} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
                      <p className="text-muted-foreground text-[15px] leading-relaxed">{body}</p>
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
              <img src="https://images.unsplash.com/photo-1573496130407-57329f01f769?auto=format&fit=crop&w=1200&q=80" alt="Delivery Structure" className="w-full h-auto block" />
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
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Communication" className="w-full h-auto block" />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">Communication</h2>
              <p className="text-[18px] text-muted-foreground mb-10 leading-relaxed">
                Radical transparency and clear reporting ensure you always
                know the exact status of your project without needing to ask.
              </p>
              <motion.div
                className="space-y-8"
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                {[
                  { icon: RefreshCw, title: 'Weekly Updates', body: 'Regular syncs and concise updates on progress, current blockers, and upcoming next steps.' },
                  { icon: BarChart2, title: 'Reporting',      body: 'Comprehensive sprint reports and metric-driven insights into team velocity and project health.' },
                  { icon: Eye,       title: 'Transparency',   body: 'Open access to our agile boards, code repositories, and decision logs. No black boxes.' },
                ].map(({ icon, title, body }) => (
                  <motion.div key={title} className="flex gap-4" variants={listItemVariants}>
                    <IconDot icon={icon} bg="bg-blue-50" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
                      <p className="text-muted-foreground text-[15px] leading-relaxed">{body}</p>
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
            <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">Quality Assurance</h2>
            <p className="text-[18px] text-muted-foreground mb-16 max-w-xl leading-relaxed">
              Built-in engineering excellence applied rigorously at every stage of
              the software development lifecycle.
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
              { icon: Code,     title: 'Code Reviews',       body: 'Mandatory peer reviews ensure high maintainability, ironclad security, and strict adherence to industry best practices.' },
              { icon: Eye,      title: 'Technical Oversight', body: 'Dedicated senior technical leaders actively oversee system architecture and resolve the most complex engineering challenges.' },
              { icon: FileText, title: 'Standards',           body: 'Implementation of strict CI/CD pipelines, automated testing suites, and uniform coding standards across all projects.' },
            ].map(({ icon: Icon, title, body }) => (
              <motion.div key={title} variants={cardVariants}>
                <Card variant="soft" className="p-8">
                  <div className="w-12 h-12 rounded-[8px] bg-primary flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{body}</p>
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

export default HowWeWork;
