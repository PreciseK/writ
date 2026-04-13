import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Services',    path: '/services' },
  { name: 'How We Work', path: '/how-we-work' },
  { name: 'Our Model',   path: '/our-model' },
  { name: 'About',       path: '/about' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-[#e2e8f0]">
      <div className="flex justify-between items-center px-8 lg:px-16" style={{ paddingTop: '32px', paddingBottom: '32px' }}>

        {/* Logo — matches PulseFitHero */}
        <Link to="/" style={{ fontWeight: 700, fontSize: '24px', color: '#1a1a1a', textDecoration: 'none' }}>
          Wager Technik
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              style={({ isActive }) => ({
                fontSize: '16px',
                fontWeight: 400,
                color: isActive ? '#1a1a1a' : '#4a5568',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              })}
              className="hover:opacity-70"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* CTA — matches PulseFitHero rounded-full button */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-6 py-3 rounded-full transition-all hover:scale-105"
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            fontSize: '16px',
            fontWeight: 500,
            color: '#1a1a1a',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            textDecoration: 'none',
          }}
        >
          Contact Us
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4a5568' }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[#e2e8f0] px-8 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{ fontSize: '16px', fontWeight: 400, color: '#4a5568', textDecoration: 'none' }}
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 flex items-center justify-center px-6 py-3 rounded-full"
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              fontSize: '16px',
              fontWeight: 500,
              color: '#1a1a1a',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              textDecoration: 'none',
            }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
