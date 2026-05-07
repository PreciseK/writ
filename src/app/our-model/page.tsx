"use client";

import React from 'react';
import { motion } from 'framer-motion';
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

const OurModel = () => {
  return (
    <PageTransition>
      <PageHero
        label="How We Engage"
        title="Our Subcontracting Model"
        subtitle="A specialised partnership designed to eliminate operational friction and deliver immediate technical value."
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
              <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">How the Model Works</h2>
              <p className="text-[18px] text-muted-foreground mb-10 leading-relaxed">
                We take on specific work packages or provide entire software capacities
                under our own management and responsibility.
              </p>
              <motion.div
                className="space-y-8"
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                {[
                  { icon: Briefcase, title: 'Subcontracting Partner', body: 'We take on specific work packages or provide entire software capacities under our own management and responsibility.' },
                  { icon: Target,    title: 'Delivery-Focused',       body: 'Our commitment is to the successful delivery of software, not just tracking hours. We manage the process, the people, and the quality.' },
                ].map(({ icon: Icon, title, body }) => (
                  <motion.div key={title} className="flex gap-4" variants={listItemVariants}>
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
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
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" alt="Subcontracting Model" className="w-full h-auto block" />
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
            <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">What We Are NOT</h2>
            <p className="text-[18px] text-muted-foreground mb-16 max-w-xl leading-relaxed">
              Clarity is key to our partnership. We strictly avoid models that
              introduce compliance risks or dilute responsibility.
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
              { icon: UserX,     title: 'Not Staff Augmentation',    body: "We don't loan out individual developers to be micro-managed by your team." },
              { icon: FileMinus, title: 'Not Body Leasing',           body: 'We operate strictly under service contracts, avoiding the risks of temporary employee leasing.' },
              { icon: Users,     title: 'Not Freelancer Marketplace', body: 'We provide cohesive, permanent teams. We are not a broker for independent contractors.' },
            ].map(({ icon: Icon, title, body }) => (
              <motion.div key={title} variants={cardVariants}>
                <Card variant="soft" className="p-8">
                  <div className="w-12 h-12 rounded-[8px] bg-muted flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{body}</p>
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
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" alt="Partnership" className="w-full h-auto block" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">Why This Model Works</h2>
              <p className="text-[18px] text-muted-foreground mb-10 leading-relaxed">
                Our approach eliminates the common friction points in traditional IT
                outsourcing by establishing clear boundaries and ownership.
              </p>
              <motion.div
                className="space-y-8"
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                {[
                  { icon: Shield,      title: 'Legal Clarity',  body: 'Clear contractual boundaries that protect both parties and comply fully with strict European labour laws.' },
                  { icon: CheckCircle, title: 'Accountability', body: 'We own the delivery process, the technical debt, and the ultimate quality of the output.' },
                  { icon: Clock,       title: 'Predictability', body: 'Transparent costs, defined capacities, and reliable delivery cadences that you can plan your business around.' },
                ].map(({ icon: Icon, title, body }) => (
                  <motion.div key={title} className="flex gap-4" variants={listItemVariants}>
                    <div className="w-10 h-10 rounded-[8px] bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
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
            <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">How Engagement Starts</h2>
            <p className="text-[18px] text-muted-foreground mb-16 max-w-xl leading-relaxed">
              A structured, risk-free onboarding process designed to build trust and prove value early.
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
              { num: '1', title: 'Discovery', desc: 'We align on your technical needs, current challenges, and the required delivery capacity.' },
              { num: '2', title: 'Pilot',     desc: 'A short, scoped initial engagement to demonstrate our capabilities, processes, and code quality.' },
              { num: '3', title: 'Delivery',  desc: 'The core engagement phase where our dedicated team integrates and begins consistent output.' },
              { num: '4', title: 'Scale',     desc: 'Flexible expansion of team size and responsibilities as your business requirements grow.' },
            ].map((item) => (
              <motion.div key={item.num} variants={cardVariants}>
                <Card variant="soft" className="p-8 text-center">
                  <div className="w-12 h-12 rounded-full border border-foreground bg-white flex items-center justify-center mb-6 mx-auto">
                    <span className="text-[14px] font-medium text-foreground">0{item.num}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
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

export default OurModel;
