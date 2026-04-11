import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX } = FiIcons;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How We Work', path: '/how-we-work' },
    { name: 'Our Model', path: '/our-model' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav style={{ position: 'fixed', width: '100%', backgroundColor: '#ffffff', zIndex: 50, borderBottom: '1px solid #e2e8f0' }}>
      <div className="container-max">
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '80px', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.05em', textDecoration: 'none' }}>
            Wager Technik
          </Link>

          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '32px' }}>
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                style={({ isActive }) => ({
                  fontSize: '14px',
                  fontWeight: 500,
                  color: isActive ? '#0f172a' : '#64748b',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                })}
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/contact" className="btn btn-primary btn-sm">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
          >
            <SafeIcon icon={isOpen ? FiX : FiMenu} style={{ width: '24px', height: '24px' }} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '16px 48px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{ display: 'block', padding: '8px 0', fontSize: '14px', fontWeight: 500, color: '#64748b', textDecoration: 'none' }}
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: '12px', display: 'flex', justifyContent: 'center' }}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;