import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/home/HeroSection';
import WhatWeDoSection from '../components/home/WhatWeDoSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import WhyWritSection from '../components/home/WhyWritSection';
import WhoWeWorkWithSection from '../components/home/WhoWeWorkWithSection';
import ModelTeaserSection from '../components/home/ModelTeaserSection';
import CtaSection from '../components/home/CtaSection';

const Home = () => {
  return (
    <PageTransition>
      <HeroSection />
      <WhatWeDoSection />
      <HowItWorksSection />
      <WhyWritSection />
      <WhoWeWorkWithSection />
      <ModelTeaserSection />
      <CtaSection />
    </PageTransition>
  );
};

export default Home;