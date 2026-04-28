import CtaSection from '@/components/home/CtaSection';
import PageHero from '@/components/ui/page-hero';
import PageTransition from '../components/PageTransition';
import { Card } from '@/components/ui/card';
import { Users, Settings, Clock, Target, Flag, TrendingUp, Cpu, Code, UserPlus } from 'lucide-react';

const IconDot = ({ icon: Icon }) => (
  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-border">
    <Icon className="w-4 h-4 text-primary" />
  </div>
);

const Services = () => {
  return (
    <PageTransition>
      <PageHero
        label="What We Offer"
        title="Our Services"
        subtitle="Structured IT delivery, project execution, and technical leadership — designed to give you more capacity with less operational risk."
      />

      {/* Section 1: Dedicated Delivery Teams */}
      <section className="bg-[#f8fafc] py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">Dedicated Delivery Teams</h2>
              <p className="text-[18px] text-muted-foreground mb-10 leading-relaxed">
                Fully formed engineering units integrated seamlessly into your workflow.
                We take full ownership of the delivery process to drive continuous value.
              </p>
              <div className="space-y-8">
                {[
                  { icon: Users,    title: 'What it is',   body: 'A cohesive team of vetted engineers, managed by Wager Technik, entirely focused on your technical objectives.' },
                  { icon: Settings, title: 'How it works', body: 'We map your capacity needs, assemble the team, and take ongoing responsibility for the execution pipeline.' },
                  { icon: Clock,    title: 'When to use',  body: 'Ideal for long-term product development or when you need to scale capacity quickly without the overhead of internal hiring.' },
                ].map(({ icon, title, body }) => (
                  <div key={title} className="flex gap-4">
                    <IconDot icon={icon} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
                      <p className="text-muted-foreground text-[15px] leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[16px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=1200&q=80" alt="Dedicated Teams" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Project-Based Development */}
      <section className="bg-white py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-[16px] overflow-hidden order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80" alt="Project Based" className="w-full h-auto block" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">Project-Based Development</h2>
              <p className="text-[18px] text-muted-foreground mb-10 leading-relaxed">
                End-to-end execution for well-defined technical initiatives.
                We turn your requirements into delivered, high-quality software.
              </p>
              <div className="space-y-8">
                {[
                  { icon: Target,     title: 'Fixed Scope',     body: 'Clear deliverables, structured timelines, and predictable costs established confidently from day one.' },
                  { icon: Flag,       title: 'Milestones',      body: 'Phased delivery approaches that ensure transparency, adaptability, and regular value creation.' },
                  { icon: TrendingUp, title: 'Pilot Projects',  body: 'Low-risk initial engagements designed to prove our delivery model before scaling up the partnership.' },
                ].map(({ icon, title, body }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      {(() => { const Icon = icon; return <Icon className="w-4 h-4 text-primary" />; })()}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
                      <p className="text-muted-foreground text-[15px] leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Technical Leadership */}
      <section className="bg-[#f8fafc] py-24">
        <div className="container-max">
          <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">Technical Leadership</h2>
          <p className="text-[18px] text-muted-foreground mb-16 max-w-xl leading-relaxed">
            Building your technology strategy and ensuring high standards of
            engineering excellence across your organisation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Cpu,      title: 'Architecture',      body: 'Designing scalable, secure, and maintainable system architectures tailored to your long-term business goals.' },
              { icon: Code,     title: 'Code Quality',      body: 'Establishing rigorous standards, conducting comprehensive code reviews, and maintaining strict technical hygiene.' },
              { icon: UserPlus, title: 'Hiring Support',    body: 'Assisting in technical evaluations, interviewing processes, and building internal capabilities alongside our teams.' },
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

      <CtaSection />
    </PageTransition>
  );
};

export default Services;
