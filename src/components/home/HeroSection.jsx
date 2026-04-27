"use client";

import { useRouter } from 'next/navigation';
import { PulseFitHero } from '@/components/ui/pulse-fit-hero';

// 7 portrait headshots for the static concave fan. Mixed demographics,
// neutral backgrounds, eye-level framing — matches the reference design.
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

const HeroSection = () => {
  const navigate = useRouter();

  return (
    <PulseFitHero
      title={
        <>
          More delivery capacity.<br />
          Less risk. Better control.
        </>
      }
      subtitle="Wager Technik provides dedicated IT delivery teams under a capacity-based subcontracting model. We own delivery quality, technical oversight, and outcomes so you gain predictable capacity without hiring risk."
      primaryAction={{
        label: "Let's Talk",
        onClick: () => navigate('/contact'),
      }}
      secondaryAction={{
        label: 'Explore Our Model',
        onClick: () => navigate('/our-model'),
      }}
      disclaimer="We don't lease developers. We deliver outcomes with accountable teams."
      programs={programs}
      captions={[
        {
          title: 'Dedicated Delivery Teams',
          description: 'Senior engineers, technical leads, and accountable management — assembled into a delivery unit that owns outcomes end-to-end.',
        },
        {
          title: 'Capacity-Based Subcontracting',
          description: 'Predictable monthly capacity instead of hourly billing. Scale up or down without hiring risk or contract churn.',
        },
        {
          title: 'Quality You Can Audit',
          description: 'Code reviews, technical oversight, and delivery reporting baked in. We own quality, not just hours.',
        },
      ]}
    />
  );
};

export default HeroSection;
