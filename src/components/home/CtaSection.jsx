import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-[120px] bg-white text-center">
      <div className="container-max">
        <h2 className="text-[48px] font-extrabold text-[#0f172a] tracking-[-0.02em] mb-10">
          Let's discuss your delivery needs
        </h2>
        <Link
          to="/contact"
          className="btn btn-primary"
          style={{ padding: '16px 32px', fontSize: '18px' }}
        >
          Book a Call
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;