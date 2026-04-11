import { useNavigate } from 'react-router-dom';
import { PulseFitHero } from '@/components/ui/pulse-fit-hero';

const programs = [
  {
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&h=500&q=80',
    category: 'IT CONSULTANCIES',
    title: 'Dedicated delivery for tech firms',
  },
  {
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&h=500&q=80',
    category: 'DIGITAL AGENCIES',
    title: 'Scale capacity without hiring risk',
  },
  {
    image: 'https://images.unsplash.com/photo-1573496130407-57329f01f769?auto=format&fit=crop&w=400&h=500&q=80',
    category: 'SYSTEM INTEGRATORS',
    title: 'Structured teams, clear outcomes',
  },
  {
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&h=500&q=80',
    category: 'SAAS COMPANIES',
    title: 'Engineering capacity on demand',
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&h=500&q=80',
    category: 'PRODUCT COMPANIES',
    title: 'Outcome-focused subcontracting',
  },
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <PulseFitHero
      logo="Wager Technik"
      navigation={[
        { label: 'Services',      onClick: () => navigate('/services') },
        { label: 'How We Work',   onClick: () => navigate('/how-we-work') },
        { label: 'Our Model',     onClick: () => navigate('/our-model') },
        { label: 'About',         onClick: () => navigate('/about') },
      ]}
      ctaButton={{
        label: 'Contact Us',
        onClick: () => navigate('/contact'),
      }}
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
    />
  );
};

export default HeroSection;
