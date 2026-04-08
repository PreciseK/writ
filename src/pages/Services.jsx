import React from 'react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import { FiUsers, FiSettings, FiClock, FiTarget, FiFlag, FiTrendingUp, FiCpu, FiCode, FiUserPlus } from 'react-icons/fi';

const Services = () => {
  return (
    <PageTransition>
      {/* Header */}
      <section className="bg-white py-24 text-center">
        <div className="container-max max-w-3xl">
          <h1 className="text-[48px] font-extrabold text-[#0f172a] tracking-tight mb-6">Our Services</h1>
          <p className="text-[18px] text-[#64748b] leading-relaxed">
            We provide structured IT delivery, project execution, and technical
            leadership. Our services are designed to give you more capacity with less
            operational risk.
          </p>
        </div>
      </section>

      {/* Section 1: Dedicated Delivery Teams */}
      <section className="bg-[#f8fafc] py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[32px] font-bold text-[#0f172a] mb-4">Dedicated Delivery Teams</h2>
              <p className="text-[18px] text-[#64748b] mb-10 leading-relaxed">
                Fully formed engineering units integrated seamlessly into your workflow. 
                We take full ownership of the delivery process to drive continuous value.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-[#e2e8f0]">
                    <SafeIcon icon={FiUsers} className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">What it is</h4>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">A cohesive team of vetted engineers, managed by WRIT, entirely focused on your technical objectives.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-[#e2e8f0]">
                    <SafeIcon icon={FiSettings} className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">How it works</h4>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">We map your capacity needs, assemble the team, and take ongoing responsibility for the execution pipeline.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-[#e2e8f0]">
                    <SafeIcon icon={FiClock} className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">When to use</h4>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">Ideal for long-term product development or when you need to scale capacity quickly without the overhead of internal hiring.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[12px] overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Dedicated Teams" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Project-Based Development */}
      <section className="bg-white py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-[12px] overflow-hidden shadow-sm order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Project Based" className="w-full h-auto block" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[32px] font-bold text-[#0f172a] mb-4">Project-Based Development</h2>
              <p className="text-[18px] text-[#64748b] mb-10 leading-relaxed">
                End-to-end execution for well-defined technical initiatives. We
                turn your requirements into delivered, high-quality software.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiTarget} className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">Fixed Scope</h4>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">Clear deliverables, structured timelines, and predictable costs established confidently from day one.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiFlag} className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">Milestones</h4>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">Phased delivery approaches that ensure transparency, adaptability, and regular value creation.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">Pilot Projects</h4>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">Low-risk initial engagements designed to prove our delivery model before scaling up the partnership.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Technical Leadership */}
      <section className="bg-[#f8fafc] py-24">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] font-bold text-[#0f172a] mb-4">Technical Leadership</h2>
            <p className="text-[18px] text-[#64748b] leading-relaxed">
              Building your technology strategy and ensuring high standards of
              engineering excellence across your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded-[8px] bg-[#0b5fff] flex items-center justify-center mb-6">
                <SafeIcon icon={FiCpu} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Architecture</h3>
              <p className="text-[#64748b] leading-relaxed">
                Designing scalable, secure, and maintainable system architectures perfectly
                tailored to your long-term business goals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded-[8px] bg-[#0b5fff] flex items-center justify-center mb-6">
                <SafeIcon icon={FiCode} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Code Quality</h3>
              <p className="text-[#64748b] leading-relaxed">
                Establishing rigorous standards, conducting comprehensive code reviews,
                and maintaining strict technical hygiene.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded-[8px] bg-[#0b5fff] flex items-center justify-center mb-6">
                <SafeIcon icon={FiUserPlus} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Hiring Support</h3>
              <p className="text-[#64748b] leading-relaxed">
                Assisting in technical evaluations, interviewing processes, and building
                internal capabilities alongside our teams.
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

export default Services;