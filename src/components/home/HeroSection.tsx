"use client";

import React from "react";
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { PulseFitHero } from '@/components/ui/pulse-fit-hero';
import VaporizeTextCycle, { Tag } from '@/components/ui/vapour-text-effect';

const HeroSection = () => {
  const t = useTranslations('hero');
  const locale = useLocale();
  const router = useRouter();

  const localePath = (path: string) => locale === 'de' ? `/de${path}` : path;

  const programs = [
    {
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=640&q=80',
      category: t('programs.itConsultancies'),
      title: t('programs.itConsultanciesTitle'),
    },
    {
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&h=640&q=80',
      category: t('programs.digitalAgencies'),
      title: t('programs.digitalAgenciesTitle'),
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=640&q=80',
      category: t('programs.systemIntegrators'),
      title: t('programs.systemIntegratorsTitle'),
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=640&q=80',
      category: t('programs.saasCompanies'),
      title: t('programs.saasCompaniesTitle'),
    },
    {
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=640&q=80',
      category: t('programs.productCompanies'),
      title: t('programs.productCompaniesTitle'),
    },
    {
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=640&q=80',
      category: t('programs.enterprise'),
      title: t('programs.enterpriseTitle'),
    },
    {
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=640&q=80',
      category: t('programs.startups'),
      title: t('programs.startupsTitle'),
    },
  ];

  const HeroTitle = () => (
    <span className="block h-[65px] md:h-[190px] lg:h-[230px] w-full">
      <VaporizeTextCycle
        texts={[
          t('text1'),
          t('text2'),
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

  return (
    <PulseFitHero
      title={<HeroTitle />}
      subtitle={t('subtitle')}
      primaryAction={{
        label: t('primaryCta'),
        onClick: () => router.push(localePath('/contact')),
      }}
      secondaryAction={{
        label: t('secondaryCta'),
        onClick: () => router.push(localePath('/our-model')),
      }}
      disclaimer={t('disclaimer')}
      programs={programs}
    />
  );
};

export default HeroSection;
