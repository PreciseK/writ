"use client";

import React from "react";
import { useRouter } from 'next/navigation';
import { PulseFitHero } from '@/components/ui/pulse-fit-hero';
import VaporizeTextCycle, { Tag } from '@/components/ui/vapour-text-effect';

const programs = [
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=640&q=80',
    category: 'IT CONSULTANCIES',
    title: 'Dedicated delivery for tech firms',
  },
  {
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&h=640&q=80',
    category: 'DIGITAL AGENCIES',
    title: 'Scale capacity without hiring risk',
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=640&q=80',
    category: 'SYSTEM INTEGRATORS',
    title: 'Structured teams, clear outcomes',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=640&q=80',
    category: 'SAAS COMPANIES',
    title: 'Engineering capacity on demand',
  },
  {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=640&q=80',
    category: 'PRODUCT COMPANIES',
    title: 'Outcome-focused subcontracting',
  },
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=640&q=80',
    category: 'ENTERPRISE',
    title: 'Senior engineering leadership',
  },
  {
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=640&q=80',
    category: 'STARTUPS',
    title: 'Build velocity without hiring',
  },
];

const HeroTitle = () => (
  <span className="block h-[65px] md:h-[190px] lg:h-[230px] w-full">
    <VaporizeTextCycle
      texts={[
        "More delivery capacity.",
        "Less risk. Better control.",
      ]}
      font={{
        fontFamily: '"Century Gothic", CenturyGothic, AppleGothic, "Trebuchet MS", sans-serif',
        fontSize: "142px",
        fontWeight: 700,
      }}
      color="rgb(17, 24, 39)"
      spread={4}
      density={6}
      animation={{ vaporizeDuration: 1, fadeInDuration: 1, waitDuration: 3 }}
      direction="left-to-right"
      alignment="center"
      tag={Tag.H1}
    />
  </span>
);

const HeroSection = () => {
  const router = useRouter();

  return (
    <PulseFitHero
      title={<HeroTitle />}
      subtitle="Wager Technik provides dedicated IT delivery teams under a capacity-based subcontracting model.
We own delivery quality, technical oversight, and outcomes, so you gain predictable capacity without hiring risk."
      primaryAction={{
        label: "Let's Talk",
        onClick: () => router.push('/contact'),
      }}
      secondaryAction={{
        label: 'Explore Our Model',
        onClick: () => router.push('/our-model'),
      }}
      disclaimer="We don't lease developers. We deliver outcomes with accountable teams."
      programs={programs}
    />
  );
};

export default HeroSection;
