import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#f8fafc] pt-16 pb-8 border-t border-[#e2e8f0]">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 border-b border-[#e2e8f0]"
          style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
          <div>
            <h4 className="text-[20px] font-bold text-[#0f172a] mb-4">WRIT GmbH</h4>
            <p className="text-[15px] text-[#64748b] mb-2">Musterstraße 123</p>
            <p className="text-[15px] text-[#64748b] mb-2">10115 Berlin, Germany</p>
            <a href="mailto:hello@writ.com" className="text-[15px] text-[#64748b] hover:text-[#0f172a] mt-4 block">
              hello@writ.com
            </a>
          </div>

          <div>
            <h5 className="text-[14px] font-semibold tracking-[0.05em] uppercase text-[#0f172a] mb-6">Company</h5>
            <ul className="space-y-3">
              {['About Us', 'Services', 'How We Work', 'Our Model'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-[15px] text-[#64748b] hover:text-[#0f172a] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[14px] font-semibold tracking-[0.05em] uppercase text-[#0f172a] mb-6">Legal</h5>
            <ul className="space-y-3">
              <li><Link to="/impressum" className="text-[15px] text-[#64748b] hover:text-[#0f172a] transition-colors">Impressum</Link></li>
              <li><Link to="/privacy" className="text-[15px] text-[#64748b] hover:text-[#0f172a] transition-colors">Datenschutz (Privacy)</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[14px] text-[#64748b] gap-4">
          <p>© 2024 WRIT GmbH. All rights reserved.</p>
          <p>Designed with clarity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;