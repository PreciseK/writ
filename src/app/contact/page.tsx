"use client";

import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import PageHero from '@/components/ui/page-hero';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { HeroBackground } from '@/components/ui/hero-background';

const Contact = () => {
  return (
    <PageTransition>
      <PageHero
        label="Get In Touch"
        title="Let's talk about your project"
        subtitle="Ready to increase your delivery capacity? Reach out to discuss your technical needs and how our model can help you scale."
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
                  <div className="w-12 h-12 rounded-[8px] bg-[#f8fafc] flex items-center justify-center flex-shrink-0 border border-border">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                    <a href="mailto:hello@wager-technik.de" className="text-muted-foreground text-[15px] hover:text-foreground transition-colors">
                      hello@wager-technik.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-[8px] bg-[#f8fafc] flex items-center justify-center flex-shrink-0 border border-border">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a href="tel:015127172196" className="text-muted-foreground text-[15px] hover:text-foreground transition-colors">
                      015127172196
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-[8px] bg-[#f8fafc] flex items-center justify-center flex-shrink-0 border border-border">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground text-[15px]">Schwalbenweg 11</p>
                    <p className="text-muted-foreground text-[15px]">72356 Dautmergen, Germany</p>
                    <p className="text-muted-foreground text-[15px] mt-1">Remote Delivery Teams Available</p>
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
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-[8px] border border-border p-3 text-[15px] bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-[8px] border border-border p-3 text-[15px] bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-[8px] border border-border p-3 text-[15px] bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      placeholder="Tell us about your project, current bottlenecks, and capacity needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 rounded-full font-medium text-[15px] transition-all hover:opacity-90"
                    style={{ background: '#1a1a1a', color: '#ffffff' }}
                  >
                    Send Message
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

export default Contact;
