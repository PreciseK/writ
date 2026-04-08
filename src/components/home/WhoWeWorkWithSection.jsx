import React from 'react';

const clients = ['IT Consultancies', 'Digital Agencies', 'SaaS Companies', 'System Integrators'];

const WhoWeWorkWithSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-max">
        <div className="text-center mb-4">
          <h2 className="text-[36px] font-bold text-[#0f172a] mb-4 tracking-[-0.02em]">Who We Work With</h2>
          <p className="text-[18px] text-[#64748b] max-w-[600px] mx-auto">
            Partnering with teams that need reliable execution engines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {clients.map((client) => (
            <div key={client} className="bg-[#f1f5f9] py-10 px-6 text-center rounded-[8px]">
              <span className="text-[18px] font-semibold text-[#0f172a]">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWithSection;