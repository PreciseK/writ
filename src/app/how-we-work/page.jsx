import CtaSection from '@/components/home/CtaSection';
import PageHero from '@/components/ui/page-hero';
import PageTransition from '../components/PageTransition';
import { Card } from '@/components/ui/card';
import { CheckCircle, Shield, RefreshCw, BarChart2, Eye, Code, FileText } from 'lucide-react';

const IconDot = ({ icon: Icon, bg = 'bg-white' }) => (
  <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center flex-shrink-0 shadow-sm border border-border`}>
    <Icon className="w-4 h-4 text-primary" />
  </div>
);

const HowWeWork = () => {
  return (
    <PageTransition>
      <PageHero
        label="Our Process"
        title="How We Work"
        subtitle="A proven, structured delivery model that integrates seamlessly into your business — balancing transparency with independent execution."
      />

      {/* Section 1: Delivery Structure */}
      <section className="bg-[#f8fafc] py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">Delivery Structure</h2>
              <p className="text-[18px] text-muted-foreground mb-10 leading-relaxed">
                We manage the complexities of software delivery so you don't have to.
                You maintain vision and direction, while we handle execution.
              </p>
              <div className="space-y-8">
                {[
                  { icon: CheckCircle, title: 'Wager Technik Owns Delivery', body: 'We take complete responsibility for the development process, timeline, and the final output quality.' },
                  { icon: Shield,      title: 'Client Collaborates',         body: 'You provide the goals and business context. We collaborate closely but spare you the daily management overhead.' },
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
              <img src="https://images.unsplash.com/photo-1573496130407-57329f01f769?auto=format&fit=crop&w=1200&q=80" alt="Delivery Structure" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Communication */}
      <section className="bg-white py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-[16px] overflow-hidden order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Communication" className="w-full h-auto block" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">Communication</h2>
              <p className="text-[18px] text-muted-foreground mb-10 leading-relaxed">
                Radical transparency and clear reporting ensure you always
                know the exact status of your project without needing to ask.
              </p>
              <div className="space-y-8">
                {[
                  { icon: RefreshCw, title: 'Weekly Updates', body: 'Regular syncs and concise updates on progress, current blockers, and upcoming next steps.' },
                  { icon: BarChart2, title: 'Reporting',      body: 'Comprehensive sprint reports and metric-driven insights into team velocity and project health.' },
                  { icon: Eye,       title: 'Transparency',   body: 'Open access to our agile boards, code repositories, and decision logs. No black boxes.' },
                ].map(({ icon, title, body }) => (
                  <div key={title} className="flex gap-4">
                    <IconDot icon={icon} bg="bg-blue-50" />
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

      {/* Section 3: Quality Assurance */}
      <section className="bg-[#f8fafc] py-24">
        <div className="container-max">
          <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">Quality Assurance</h2>
          <p className="text-[18px] text-muted-foreground mb-16 max-w-xl leading-relaxed">
            Built-in engineering excellence applied rigorously at every stage of
            the software development lifecycle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Code,     title: 'Code Reviews',       body: 'Mandatory peer reviews ensure high maintainability, ironclad security, and strict adherence to industry best practices.' },
              { icon: Eye,      title: 'Technical Oversight', body: 'Dedicated senior technical leaders actively oversee system architecture and resolve the most complex engineering challenges.' },
              { icon: FileText, title: 'Standards',           body: 'Implementation of strict CI/CD pipelines, automated testing suites, and uniform coding standards across all projects.' },
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

export default HowWeWork;
