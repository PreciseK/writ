const steps = [
  {
    num: '01',
    title: 'Capacity-Based Engagement',
    desc: 'We scope the exact capacity you need instead of dealing with piecemeal tasks or uncertain hours.',
  },
  {
    num: '02',
    title: 'Wager Technik Owns Delivery',
    desc: 'You define the goals, and we manage the execution, ensuring milestones are met on time.',
  },
  {
    num: '03',
    title: 'Transparent Communication',
    desc: 'Regular updates, weekly check-ins, and full visibility into progress and potential blockers.',
  },
  {
    num: '04',
    title: 'Flexible Scaling',
    desc: 'Adjust team size as project demands change, keeping your overhead lean and predictable.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-max">

        {/* Two-column layout: title left, steps right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — heading + image */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-[42px] font-normal text-[#0f172a] leading-[1.15] tracking-tight">
              How It<br />Works.
            </h2>
            <p className="mt-4 text-[17px] text-[#64748b] leading-relaxed max-w-xs">
              A straightforward model designed to reduce risk and maximise output.
            </p>
            <div className="mt-8 rounded-[16px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
                alt="Wager Technik delivery team"
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* Right — numbered steps with curved connector */}
          <div className="relative">
            {/* Curved SVG line connecting circles */}
            <svg
              className="absolute left-[19px] top-0 h-full w-10 pointer-events-none"
              viewBox="0 0 40 600"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 0 C 40 80, 0 140, 20 220 C 40 300, 0 360, 20 440 C 40 520, 0 560, 20 600"
                stroke="#e2e8f0"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>

            <div className="flex flex-col gap-14">
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-8">
                  {/* Numbered circle */}
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border border-[#0f172a] bg-white flex items-center justify-center">
                    <span className="text-[13px] font-medium text-[#0f172a] tracking-tight">
                      {step.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-[18px] font-semibold text-[#0f172a] mb-2">{step.title}</h3>
                    <p className="text-[15px] text-[#64748b] leading-relaxed max-w-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
