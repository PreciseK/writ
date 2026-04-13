import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const points = [
  'Dedicated delivery teams',
  'Defined responsibility and ownership',
  'Clear accountability for outcomes',
];

const ModelTeaserSection = () => {
  return (
    <section className="py-24 bg-[#f8fafc] border-t border-b border-border">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <h2 className="text-[36px] font-normal text-foreground mb-6 tracking-tight">
              Our Model
            </h2>
            <p className="text-[18px] text-muted-foreground leading-relaxed mb-8">
              Wager Technik operates under a capacity-based subcontracting model.
              We remain responsible for delivery and quality at all times.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-[16px] text-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-[15px] text-muted-foreground italic mb-10 border-l-2 border-border pl-4">
              Wager Technik does not provide body leasing or staff augmentation services.
            </p>

            <Link
              to="/our-model"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-foreground text-foreground font-medium text-[16px] hover:bg-foreground hover:text-white transition-all"
            >
              Learn More About Our Model
            </Link>
          </div>

          {/* Right — visual stat blocks */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { label: 'Capacity-Based Engagement', desc: 'Defined scope and team size — no ambiguous hours.' },
              { label: 'Wager Technik Owns Delivery', desc: 'We manage technical direction, QA, and execution end-to-end.' },
              { label: 'Transparent Communication', desc: 'Weekly reporting and a single German-speaking point of contact.' },
              { label: 'Flexible Scaling', desc: 'Adjust capacity as your needs evolve — no long-term hiring commitments.' },
            ].map((item, i) => (
              <div key={item.label} className="flex items-start gap-5 bg-white rounded-xl border border-border p-6">
                <div className="w-10 h-10 rounded-full border border-foreground bg-white flex items-center justify-center flex-shrink-0">
                  <span className="text-[13px] font-medium text-foreground">0{i + 1}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ModelTeaserSection;
