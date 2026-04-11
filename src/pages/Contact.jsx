import React from 'react';
import PageTransition from '../components/PageTransition';
import SafeIcon from '../common/SafeIcon';
import { FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <PageTransition>
      <section className="bg-white py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div>
              <h1 className="text-[48px] font-extrabold text-[#0f172a] tracking-tight mb-6 leading-tight">
                Let's talk about your project
              </h1>
              <p className="text-[18px] text-[#64748b] leading-relaxed mb-12 max-w-md">
                Ready to increase your delivery capacity? Reach out
                to discuss your technical needs and how our model
                can help you scale.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-[8px] bg-[#f8fafc] flex items-center justify-center flex-shrink-0 border border-[#e2e8f0]">
                    <SafeIcon icon={FiMail} className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">Email Us</h4>
                    <p className="text-[#64748b] text-[15px]">hello@wagertechnik.de</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-[8px] bg-[#f8fafc] flex items-center justify-center flex-shrink-0 border border-[#e2e8f0]">
                    <SafeIcon icon={FiMapPin} className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">Location</h4>
                    <p className="text-[#64748b] text-[15px]">Schwalbenweg 11, 72356 Dautmergen, Germany</p>
                    <p className="text-[#64748b] text-[15px]">Remote Delivery Teams Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white p-10 rounded-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e2e8f0]">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#0f172a] mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full rounded-[8px] border border-[#e2e8f0] p-3 text-[15px] focus:outline-none focus:border-[#0b5fff] focus:ring-1 focus:ring-[#0b5fff] transition-colors" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#0f172a] mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full rounded-[8px] border border-[#e2e8f0] p-3 text-[15px] focus:outline-none focus:border-[#0b5fff] focus:ring-1 focus:ring-[#0b5fff] transition-colors" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#0f172a] mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full rounded-[8px] border border-[#e2e8f0] p-3 text-[15px] focus:outline-none focus:border-[#0b5fff] focus:ring-1 focus:ring-[#0b5fff] transition-colors resize-none" 
                    placeholder="Tell us about your project, current bottlenecks, and capacity needs..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full justify-center" style={{ padding: '14px 24px', fontSize: '16px' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;