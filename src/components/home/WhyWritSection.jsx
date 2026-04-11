import {
  Shield01FreeIcons,
  UserStar01FreeIcons,
  UserCheck01FreeIcons,
  MoneyBag01FreeIcons,
  BalanceScaleFreeIcons,
  TaskDone01FreeIcons,
  UserGroup02FreeIcons,
  CheckmarkCircle01FreeIcons,
} from '@hugeicons/core-free-icons';
import { FeatureCarousel } from '@/components/ui/feature-carousel';

const FEATURES = [
  {
    id: 'accountability',
    label: 'German Accountability',
    icon: Shield01FreeIcons,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200',
    description: 'German-registered GmbH with full legal accountability for every delivery.',
  },
  {
    id: 'leadership',
    label: 'Technical Leadership',
    icon: UserStar01FreeIcons,
    image: 'https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=1200',
    description: 'Senior tech leads who own architecture decisions and delivery standards.',
  },
  {
    id: 'vetted',
    label: 'Vetted Engineers',
    icon: UserCheck01FreeIcons,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200',
    description: 'Carefully screened engineers, continuously reviewed against quality benchmarks.',
  },
  {
    id: 'cost',
    label: 'Predictable Cost',
    icon: MoneyBag01FreeIcons,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200',
    description: 'Capacity-based pricing with no hidden fees or surprise invoices.',
  },
  {
    id: 'legal',
    label: 'Legally Sound Model',
    icon: BalanceScaleFreeIcons,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200',
    description: 'Service contracts designed for the German market — zero body-leasing risk.',
  },
  {
    id: 'delivery',
    label: 'Delivery Ownership',
    icon: TaskDone01FreeIcons,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200',
    description: 'We own quality, timelines, and outcomes — not just hours billed.',
  },
  {
    id: 'scaling',
    label: 'Flexible Scaling',
    icon: UserGroup02FreeIcons,
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=1200',
    description: 'Scale teams up or down without long-term hiring commitments.',
  },
  {
    id: 'quality',
    label: 'Quality Assurance',
    icon: CheckmarkCircle01FreeIcons,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200',
    description: 'Built-in QA processes, code reviews, and CI/CD standards on every project.',
  },
];

const WhyWritSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-[36px] font-normal text-white mb-4 tracking-tight">
            Why Choose Wager Technik
          </h2>
          <p className="text-[18px] text-white/50 max-w-[600px] mx-auto">
            Building trust through structure, quality, and accountability.
          </p>
        </div>
        <FeatureCarousel features={FEATURES} accentColor="#000000" />
      </div>
    </section>
  );
};

export default WhyWritSection;
