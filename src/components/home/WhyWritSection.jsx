import React from 'react';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiGitPullRequest, FiUserCheck, FiSmartphone, FiSettings } = FiIcons;

const reasons = [
  { icon: FiShield, title: 'German Accountability' },
  { icon: FiGitPullRequest, title: 'Technical Leadership' },
  { icon: FiUserCheck, title: 'Vetted Engineers' },
  { icon: FiSmartphone, title: 'Predictable Cost' },
  { icon: FiSettings, title: 'Legally Sound Model' },
];

const WhyWritSection = () => {
  return (
    <section className="py-24 bg-[#0b5fff]">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold text-white mb-4 tracking-[-0.02em]">Why Choose WRIT</h2>
          <p className="text-[18px] text-white/70 max-w-[600px] mx-auto">
            Building trust through structure, quality, and accountability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {reasons.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-[12px] bg-[#004ecc] flex items-center justify-center mb-6">
                <SafeIcon icon={item.icon} className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-[16px] font-medium text-white leading-snug">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWritSection;