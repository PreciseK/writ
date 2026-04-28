import CtaSection from '@/components/home/CtaSection';
import PageHero from '@/components/ui/page-hero';
import PageTransition from '../components/PageTransition';
import { Card } from '@/components/ui/card';
import { CheckCircle, Shield, Link2, MapPin, Globe } from 'lucide-react';

const About = () => {
  return (
    <PageTransition>
      <PageHero
        label="Who We Are"
        title="About Wager Technik"
        subtitle="We are a dedicated IT delivery partner focused on bringing reliable engineering capacity to ambitious companies."
      />

      {/* Section 1: Leadership & Vision */}
      <section className="bg-[#f8fafc] py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-[16px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1573497701240-345a300b8d36?auto=format&fit=crop&w=1200&q=80" alt="Leadership" className="w-full h-auto block" />
            </div>
            <div>
              <h2 className="text-[36px] font-normal text-foreground mb-6 tracking-tight">Leadership & Vision</h2>
              <p className="text-[18px] text-muted-foreground mb-6 leading-relaxed">
                With deep roots in software engineering and technical leadership, our founding
                philosophy revolves around bridging the gap between talent and structured delivery.
              </p>
              <p className="text-[18px] text-muted-foreground leading-relaxed">
                We believe in building operational models that empower engineers to do their best
                work while guaranteeing accountability, predictability, and high-quality results
                for our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Philosophy */}
      <section className="bg-white py-24">
        <div className="container-max">
          <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">Our Philosophy</h2>
          <p className="text-[18px] text-muted-foreground mb-16 max-w-xl leading-relaxed">
            The core principles that guide our work, shape our teams, and define our partnerships.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: CheckCircle, title: 'Quality',                body: 'We do not compromise on engineering standards. High-quality code and robust architecture are the foundation of sustainable software products.' },
              { icon: Shield,      title: 'Accountability',         body: 'We take full ownership of the delivery process. When we commit to a project or capacity, we guarantee reliable and predictable outcomes.' },
              { icon: Link2,       title: 'Long-Term Partnerships', body: 'We build lasting relationships based on trust, total transparency, and a shared commitment to achieving your business goals.' },
            ].map(({ icon: Icon, title, body }) => (
              <Card key={title} variant="soft" className="p-8">
                <div className="w-12 h-12 rounded-[8px] bg-primary flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Locations */}
      <section className="bg-[#f8fafc] py-24">
        <div className="container-max">
          <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">Locations & Reach</h2>
          <p className="text-[18px] text-muted-foreground mb-16 max-w-xl leading-relaxed">
            Combining strict German accountability with exceptional global engineering talent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {[
              {
                icon: MapPin,
                title: 'Germany',
                body: 'Our headquarters and the centre of our operations, legal compliance, and strategic management. We bring German accountability, solid legal frameworks, and structured processes to every engagement.',
                detail: 'Schwalbenweg 11, 72356 Dautmergen',
              },
              {
                icon: Globe,
                title: 'Remote Teams',
                body: "We source vetted, top-tier engineering talent globally. Our remote delivery centres are integrated seamlessly into our strict quality and management frameworks to ensure peak performance.",
                detail: 'Global delivery capability',
              },
            ].map(({ icon: Icon, title, body, detail }) => (
              <Card key={title} variant="soft" className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-[8px] bg-primary flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-[22px] font-semibold text-foreground">{title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px] mb-4">{body}</p>
                <span className="text-xs text-primary font-medium uppercase tracking-wide">{detail}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </PageTransition>
  );
};

export default About;
