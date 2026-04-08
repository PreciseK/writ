import React from 'react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import { FiCheckCircle, FiShield, FiRefreshCw, FiBarChart2, FiEye, FiCode, FiAward, FiFileText } from 'react-icons/fi';

const HowWeWork = () => {
  return (
    <PageTransition>
      {/* Header */}
      <section className="bg-white py-24 text-center">
        <div className="container-max max-w-3xl">
          <h1 className="text-[48px] font-extrabold text-[#0f172a] tracking-tight mb-6">How We Work</h1>
          <p className="text-[18px] text-[#64748b] leading-relaxed">
            A proven, structured delivery model that integrates seamlessly into your
            business, balancing transparency with independent execution.
          </p>
        </div>
      </section>

      {/* Section 1: Delivery Structure */}
      <section className="bg-[#f8fafc] py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[32px] font-bold text-[#0f172a] mb-4">Delivery Structure</h2>
              <p className="text-[18px] text-[#64748b] mb-10 leading-relaxed">
                We manage the complexities of software delivery so you don't
                have to. You maintain vision and direction, while we handle the
                execution.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-[#e2e8f0]">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">WRIT Owns Delivery</h4>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">We take complete responsibility for the development process, timeline, and the final output quality.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-[#e2e8f0]">
                    <SafeIcon icon={FiShield} className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">Client Collaborates</h4>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">You provide the goals and business context. We collaborate closely but spare you the daily management overhead.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[12px] overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Delivery Structure" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Communication */}
      <section className="bg-white py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-[12px] overflow-hidden shadow-sm order-2 lg:order-1 relative bg-gray-100 aspect-square flex items-center justify-center">
              {/* Checkered pattern background equivalent */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0f172a 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Communication" className="relative z-10 w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[32px] font-bold text-[#0f172a] mb-4">Communication</h2>
              <p className="text-[18px] text-[#64748b] mb-10 leading-relaxed">
                Radical transparency and clear reporting ensure you always
                know the exact status of your project without needing to ask.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiRefreshCw} className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">Weekly Updates</h4>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">Regular syncs and concise updates on progress, current blockers, and upcoming next steps.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiBarChart2} className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">Reporting</h4>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">Comprehensive sprint reports and metric-driven insights into team velocity and project health.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiEye} className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">Transparency</h4>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">Open access to our agile boards, code repositories, and decision logs. No black boxes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Quality Assurance */}
      <section className="bg-[#f8fafc] py-24">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] font-bold text-[#0f172a] mb-4">Quality Assurance</h2>
            <p className="text-[18px] text-[#64748b] leading-relaxed">
              Built-in engineering excellence applied rigorously at every stage of
              the software development lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded-[8px] bg-[#0b5fff] flex items-center justify-center mb-6">
                <SafeIcon icon={FiCode} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Code Reviews</h3>
              <p className="text-[#64748b] leading-relaxed">
                Mandatory peer reviews ensure high maintainability, ironclad security, and
                strict adherence to industry best practices.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded-[8px] bg-[#0b5fff] flex items-center justify-center mb-6">
                <SafeIcon icon={FiEye} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Technical Oversight</h3>
              <p className="text-[#64748b] leading-relaxed">
                Dedicated senior technical leaders actively oversee system architecture and
                resolve the most complex engineering challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded-[8px] bg-[#0b5fff] flex items-center justify-center mb-6">
                <SafeIcon icon={FiFileText} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Standards</h3>
              <p className="text-[#64748b] leading-relaxed">
                Implementation of strict CI/CD pipelines, automated testing suites, and uniform
                coding standards across all projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-white py-24 text-center">
        <div className="container-max">
          <h2 className="text-[36px] font-extrabold text-[#0f172a] mb-8">Ready to improve your delivery?</h2>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '18px' }}>
            Book a Call
          </Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default HowWeWork;