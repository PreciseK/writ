import CtaSection from '@/components/home/CtaSection';
import PageHero from '@/components/ui/page-hero';
import PageTransition from '../components/PageTransition';
import { Card } from '@/components/ui/card';
import { Briefcase, Target, UserX, FileMinus, Users, Shield, CheckCircle, Clock } from 'lucide-react';

const OurModel = () => {
  return (
    <PageTransition>
      <PageHero
        label="How We Engage"
        title="Our Subcontracting Model"
        subtitle="A specialised partnership designed to eliminate operational friction and deliver immediate technical value."
      />

      {/* Section 1: What the model is */}
      <section className="bg-[#f8fafc] py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">How the Model Works</h2>
              <p className="text-[18px] text-muted-foreground mb-10 leading-relaxed">
                We take on specific work packages or provide entire software capacities
                under our own management and responsibility.
              </p>
              <div className="space-y-8">
                {[
                  { icon: Briefcase, title: 'Subcontracting Partner', body: 'We take on specific work packages or provide entire software capacities under our own management and responsibility.' },
                  { icon: Target,    title: 'Delivery-Focused',       body: 'Our commitment is to the successful delivery of software, not just tracking hours. We manage the process, the people, and the quality.' },
                ].map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
                      <p className="text-muted-foreground text-[15px] leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[16px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" alt="Subcontracting Model" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Are NOT */}
      <section className="bg-white py-24">
        <div className="container-max">
          <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">What We Are NOT</h2>
          <p className="text-[18px] text-muted-foreground mb-16 max-w-xl leading-relaxed">
            Clarity is key to our partnership. We strictly avoid models that
            introduce compliance risks or dilute responsibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: UserX,     title: 'Not Staff Augmentation',    body: "We don't loan out individual developers to be micro-managed by your team." },
              { icon: FileMinus, title: 'Not Body Leasing',           body: 'We operate strictly under service contracts, avoiding the risks of temporary employee leasing.' },
              { icon: Users,     title: 'Not Freelancer Marketplace', body: 'We provide cohesive, permanent teams. We are not a broker for independent contractors.' },
            ].map(({ icon: Icon, title, body }) => (
              <Card key={title} variant="soft" className="p-8">
                <div className="w-12 h-12 rounded-[8px] bg-muted flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why This Model Works */}
      <section className="bg-[#f8fafc] py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-[16px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" alt="Partnership" className="w-full h-auto block" />
            </div>
            <div>
              <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">Why This Model Works</h2>
              <p className="text-[18px] text-muted-foreground mb-10 leading-relaxed">
                Our approach eliminates the common friction points in traditional IT
                outsourcing by establishing clear boundaries and ownership.
              </p>
              <div className="space-y-8">
                {[
                  { icon: Shield,       title: 'Legal Clarity',   body: 'Clear contractual boundaries that protect both parties and comply fully with strict European labour laws.' },
                  { icon: CheckCircle,  title: 'Accountability',  body: 'We own the delivery process, the technical debt, and the ultimate quality of the output.' },
                  { icon: Clock,        title: 'Predictability',  body: 'Transparent costs, defined capacities, and reliable delivery cadences that you can plan your business around.' },
                ].map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-[8px] bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
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

      {/* Section 4: How Engagement Starts */}
      <section className="bg-white py-24">
        <div className="container-max">
          <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">How Engagement Starts</h2>
          <p className="text-[18px] text-muted-foreground mb-16 max-w-xl leading-relaxed">
            A structured, risk-free onboarding process designed to build trust and prove value early.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Discovery', desc: 'We align on your technical needs, current challenges, and the required delivery capacity.' },
              { num: '2', title: 'Pilot',     desc: 'A short, scoped initial engagement to demonstrate our capabilities, processes, and code quality.' },
              { num: '3', title: 'Delivery',  desc: 'The core engagement phase where our dedicated team integrates and begins consistent output.' },
              { num: '4', title: 'Scale',     desc: 'Flexible expansion of team size and responsibilities as your business requirements grow.' },
            ].map((item) => (
              <Card key={item.num} variant="soft" className="p-8 text-center">
                <div className="w-12 h-12 rounded-full border border-foreground bg-white flex items-center justify-center mb-6 mx-auto">
                  <span className="text-[14px] font-medium text-foreground">0{item.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </PageTransition>
  );
};

export default OurModel;
