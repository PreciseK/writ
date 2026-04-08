import React from 'react';
import { Link } from 'react-router-dom';

const ModelTeaserSection = () => {
  return (
    <section className="py-20 bg-[#f1f5f9] border-t border-b border-[#e2e8f0]">
      <div className="container-max">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[36px] font-bold text-[#0f172a] mb-6 tracking-[-0.02em]">
            Understanding Our Subcontracting Model
          </h2>
          <p className="text-[24px] text-[#0f172a] leading-relaxed font-normal mb-10">
            We are a true delivery partner, not a freelancer marketplace or staff augmentation service.
            We take ownership of the work so you can focus on your business.
          </p>
          <Link
            to="/our-model"
            className="btn btn-secondary"
            style={{ backgroundColor: '#ffffff' }}
          >
            Learn More About Our Model
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ModelTeaserSection;