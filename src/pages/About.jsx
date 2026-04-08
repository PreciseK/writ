import React from 'react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import { FiCheckCircle, FiShield, FiLink, FiMapPin, FiGlobe } from 'react-icons/fi';

const About = () => {
  return (
    <PageTransition>
      {/* Header & Section 1 */}
      <section className="bg-white py-24">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-[48px] font-extrabold text-[#0f172a] tracking-tight mb-6">About WRIT</h1>
            <p className="text-[18px] text-[#64748b] leading-relaxed">
              We are a dedicated IT delivery partner focused on bringing reliable
              engineering capacity to ambitious companies. Our story began with a
              simple observation: businesses need true execution capabilities, not just
              temporary hands.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-[12px] overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80" alt="Leadership" className="w-full h-auto block" />
            </div>
            <div>
              <h2 className="text-[32px] font-bold text-[#0f172a] mb-6">Leadership & Vision</h2>
              <p className="text-[18px] text-[#64748b] mb-6 leading-relaxed">
                With deep roots in software engineering and technical
                leadership, our founding philosophy revolves around bridging
                the gap between talent and structured delivery.
              </p>
              <p className="text-[18px] text-[#64748b] leading-relaxed">
                We believe in building operational models that empower
                engineers to do their best work while guaranteeing
                accountability, predictability, and high-quality results for our
                partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Philosophy */}
      <section className="bg-[#f8fafc] py-24 text-center">
        <div className="container-max">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] font-bold text-[#0f172a] mb-4">Our Philosophy</h2>
            <p className="text-[18px] text-[#64748b] leading-relaxed">
              The core principles that guide our work, shape our teams, and define
              our partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded-[8px] bg-[#0b5fff] flex items-center justify-center mb-6 mx-auto">
                <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Quality</h3>
              <p className="text-[#64748b] leading-relaxed">
                We do not compromise on engineering standards. High-quality code and robust
                architecture are the foundation of sustainable and reliable software products.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded-[8px] bg-[#0b5fff] flex items-center justify-center mb-6 mx-auto">
                <SafeIcon icon={FiShield} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Accountability</h3>
              <p className="text-[#64748b] leading-relaxed">
                We take full ownership of the delivery process. When we commit to a project or
                capacity, we guarantee reliable and predictable outcomes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded-[8px] bg-[#0b5fff] flex items-center justify-center mb-6 mx-auto">
                <SafeIcon icon={FiLink} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Long-Term Partnerships</h3>
              <p className="text-[#64748b] leading-relaxed">
                We build lasting relationships based on trust, total transparency, and a shared,
                unwavering commitment to achieving your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Locations & Reach */}
      <section className="bg-white py-24">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] font-bold text-[#0f172a] mb-4">Locations & Reach</h2>
            <p className="text-[18px] text-[#64748b] leading-relaxed">
              Combining strict German accountability with exceptional global
              engineering talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#f8fafc] p-10 rounded-2xl shadow-sm border border-[#e2e8f0] text-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-[8px] bg-[#0b5fff] flex items-center justify-center">
                  <SafeIcon icon={FiMapPin} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[24px] font-bold text-[#0f172a]">Germany</h3>
              </div>
              <p className="text-[16px] text-[#64748b] leading-relaxed">
                Our headquarters and the center of our operations, legal
                compliance, and strategic management. We bring German
                accountability, solid legal frameworks, and structured
                processes to every engagement.
              </p>
            </div>

            <div className="bg-[#f8fafc] p-10 rounded-2xl shadow-sm border border-[#e2e8f0] text-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-[8px] bg-[#0b5fff] flex items-center justify-center">
                  <SafeIcon icon={FiGlobe} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[24px] font-bold text-[#0f172a]">Remote Teams</h3>
              </div>
              <p className="text-[16px] text-[#64748b] leading-relaxed">
                We source vetted, top-tier engineering talent globally. Our
                remote delivery centers are integrated seamlessly into our
                strict quality and management frameworks to ensure peak
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-white py-24 text-center">
        <div className="container-max">
          <h2 className="text-[36px] font-extrabold text-[#0f172a] mb-8">Let's discuss your delivery needs</h2>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '18px' }}>
            Book a Call
          </Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;