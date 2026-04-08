import React from 'react';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiBriefcase, FiAward } = FiIcons;

const features = [
  {
    icon: FiUsers,
    title: 'Dedicated delivery teams',
    desc: 'Fully formed engineering units integrated seamlessly into your workflow.',
  },
  {
    icon: FiBriefcase,
    title: 'Project-based support',
    desc: 'End-to-end execution for specific milestones and fixed scopes.',
  },
  {
    icon: FiAward,
    title: 'Technical leadership',
    desc: 'Oversight on architecture, code quality, and best practices.',
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="py-24 bg-[#f1f5f9]">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[36px] font-bold text-[#0f172a] mb-6 tracking-[-0.02em]">What We Do</h2>
            <p className="text-[18px] text-[#64748b] leading-relaxed">
              We provide structural IT capacity to businesses that need reliable execution without the overhead of hiring. By engaging WRIT as a delivery-focused subcontractor, you gain an entire team dedicated to your technical goals.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4 bg-white p-6 rounded-[8px] border border-[#e2e8f0]">
                <div className="w-12 h-12 rounded-[4px] bg-[#e6f0ff] flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={f.icon} className="w-6 h-6 text-[#0b5fff]" />
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#0f172a] mb-1">{f.title}</h3>
                  <p className="text-[15px] text-[#64748b]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;