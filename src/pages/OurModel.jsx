import React from 'react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import { FiBriefcase, FiTarget, FiUserX, FiFileMinus, FiUsers, FiShield, FiCheckCircle, FiClock } from 'react-icons/fi';

const OurModel = () => {
  return (
    <PageTransition>
      {/* Header & Section 1 */}
      <section className="bg-white py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-[48px] font-extrabold text-[#0f172a] tracking-tight mb-4">Our Subcontracting Model</h1>
              <p className="text-[18px] text-[#64748b] mb-12 leading-relaxed">
                A specialized partnership designed to eliminate operational friction and deliver immediate technical value.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiBriefcase} className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">Subcontracting Partner</h4>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">We take on specific work packages or provide entire software capacities under our own management and responsibility.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiTarget} className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">Delivery-Focused</h4>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">Our commitment is to the successful delivery of software, not just tracking hours. We manage the process, the people, and the quality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[12px] overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" alt="Wager Technik Delivery Team" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Are NOT */}
      <section className="bg-[#f8fafc] py-24 text-center">
        <div className="container-max">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] font-bold text-[#0f172a] mb-4">What We Are NOT</h2>
            <p className="text-[18px] text-[#64748b] leading-relaxed">
              Clarity is key to our partnership. We strictly avoid models that
              introduce compliance risks or dilute responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded-[8px] bg-gray-100 flex items-center justify-center mb-6 mx-auto">
                <SafeIcon icon={FiUserX} className="w-6 h-6 text-[#94a3b8]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Not Staff Augmentation</h3>
              <p className="text-[#64748b] leading-relaxed">
                We don't loan out individual developers to be micro-managed by your team.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded-[8px] bg-gray-100 flex items-center justify-center mb-6 mx-auto">
                <SafeIcon icon={FiFileMinus} className="w-6 h-6 text-[#94a3b8]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Not Body Leasing</h3>
              <p className="text-[#64748b] leading-relaxed">
                We operate strictly under service contracts, avoiding the risks of temporary employee leasing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e2e8f0]">
              <div className="w-12 h-12 rounded-[8px] bg-gray-100 flex items-center justify-center mb-6 mx-auto">
                <SafeIcon icon={FiUsers} className="w-6 h-6 text-[#94a3b8]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Not Freelancer Marketplace</h3>
              <p className="text-[#64748b] leading-relaxed">
                We provide cohesive, permanent teams. We are not a broker for independent contractors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why This Model Works */}
      <section className="bg-white py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-[12px] overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" alt="Partnership" className="w-full h-auto block" />
            </div>
            <div>
              <h2 className="text-[32px] font-bold text-[#0f172a] mb-4">Why This Model Works</h2>
              <p className="text-[18px] text-[#64748b] mb-10 leading-relaxed">
                Our approach is designed to eliminate the common friction
                points in traditional IT outsourcing by establishing clear
                boundaries and ownership.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-[8px] bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiShield} className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">Legal Clarity</h4>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">Clear contractual boundaries that protect both parties and comply fully with strict European labor laws.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-[8px] bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">Accountability</h4>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">We own the delivery process, the technical debt, and the ultimate quality of the output.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-[8px] bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiClock} className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">Predictability</h4>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">Transparent costs, defined capacities, and reliable delivery cadences that you can plan your business around.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How Engagement Starts */}
      <section className="bg-[#f8fafc] py-24">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] font-bold text-[#0f172a] mb-4">How Engagement Starts</h2>
            <p className="text-[18px] text-[#64748b] leading-relaxed">
              A structured, risk-free onboarding process designed to build trust and
              prove value early.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Discovery', desc: 'We align on your technical needs, current challenges, and the required delivery capacity.' },
              { step: '2', title: 'Pilot', desc: 'A short, scoped initial engagement to demonstrate our capabilities, processes, and code quality.' },
              { step: '3', title: 'Delivery', desc: 'The core engagement phase where our dedicated team integrates and begins consistent output.' },
              { step: '4', title: 'Scale', desc: 'Flexible expansion of the team size and responsibilities as your business requirements grow.' },
            ].map((item) => (
              <div key={item.step} className="bg-white p-8 rounded-xl shadow-sm border border-[#e2e8f0] text-center">
                <div className="w-12 h-12 rounded-[8px] bg-[#0b5fff] flex items-center justify-center mb-6 mx-auto">
                  <span className="text-xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{item.title}</h3>
                <p className="text-[15px] text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
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

export default OurModel;