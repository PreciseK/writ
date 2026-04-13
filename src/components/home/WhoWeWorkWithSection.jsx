import { Building2, Monitor, Server, Package } from 'lucide-react';

const clients = [
  {
    label: 'IT Consultancies',
    icon: Building2,
    desc: 'Scale delivery without growing your headcount.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Digital Agencies',
    icon: Monitor,
    desc: 'Ship client projects on time with accountable teams.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'System Integrators',
    icon: Server,
    desc: 'Structured capacity for complex integration work.',
    image: 'https://images.unsplash.com/photo-1573496130407-57329f01f769?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'SaaS Companies',
    icon: Package,
    desc: 'Engineering power for fast-growing product teams.',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80',
  },
];

const WhoWeWorkWithSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-max">
        <h2 className="text-[36px] font-normal text-foreground mb-4 tracking-tight">Who We Work With</h2>
        <p className="text-[18px] text-muted-foreground mb-16 max-w-xl leading-relaxed">
          Partnering with teams where delivery pressure is real and deadlines matter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map(({ label, icon: Icon, desc, image }) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-xl border border-border bg-muted/50 p-8 cursor-default transition-all duration-500 hover:border-transparent"
              style={{ minHeight: '320px' }}
            >
              {/* Background image — fades in on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{ backgroundImage: `url(${image})` }}
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full justify-end">
                <div className="w-12 h-12 rounded-[8px] bg-primary/10 group-hover:bg-white/15 flex items-center justify-center mb-5 transition-colors duration-500">
                  <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-[16px] font-semibold text-foreground group-hover:text-white mb-2 transition-colors duration-500">
                  {label}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-white/80 leading-relaxed transition-colors duration-500">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWithSection;
