import React from 'react';

const steps = [
  {
    step: 'Step 1',
    title: 'Capacity-Based Engagement',
    desc: 'We scope the exact capacity you need instead of dealing with piecemeal tasks or uncertain hours.',
  },
  {
    step: 'Step 2',
    title: 'WRIT Owns Delivery',
    desc: 'You define the goals, and we manage the execution, ensuring milestones are met on time.',
  },
  {
    step: 'Step 3',
    title: 'Transparent Communication',
    desc: 'Regular updates, weekly check-ins, and full visibility into progress and potential blockers.',
  },
  {
    step: 'Step 4',
    title: 'Flexible Scaling',
    desc: 'Adjust team size as project demands change, keeping your overhead lean and predictable.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-[36px] font-bold text-[#0f172a] mb-4 tracking-[-0.02em]">How It Works</h2>
          <p className="text-[18px] text-[#64748b] max-w-[600px] mx-auto">
            A straightforward model designed to reduce risk and maximize output.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((item) => (
            <div key={item.step} className="p-8 bg-white border border-[#e2e8f0] rounded-[8px] hover:shadow-md transition-shadow">
              <div className="inline-block px-3 py-1.5 bg-[#e6f0ff] text-[#0b5fff] text-[14px] font-bold rounded-full mb-6">
                {item.step}
              </div>
              <h3 className="text-[18px] font-semibold text-[#0f172a] mb-3">{item.title}</h3>
              <p className="text-[15px] text-[#64748b] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;