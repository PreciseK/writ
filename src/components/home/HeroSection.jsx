import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck } = FiIcons;

const HeroSection = () => {
  return (
    <section className="py-[120px] bg-white overflow-hidden">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-[56px] font-extrabold text-[#0f172a] leading-[1.1] tracking-[-0.03em] mb-8">
              More delivery capacity.<br />
              Less risk.<br />
              Better control.
            </h1>

            <ul className="space-y-4 mb-12">
              {[
                'Dedicated IT delivery teams',
                'Capacity-based subcontracting',
                'WRIT owns delivery & quality',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[18px] text-[#64748b]">
                  <div className="w-6 h-6 rounded-full bg-[#0b5fff] flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Let's Talk
              </Link>
              <Link to="/our-model" className="btn btn-secondary">
                Explore Our Model
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-[12px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
              <img
                src="https://storage.googleapis.com/banani-generated-images/generated-images/330e63f8-5b12-41e6-8d2b-b4720f3e69d3.jpg"
                alt="WRIT Delivery Concept"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;