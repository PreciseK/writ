"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations, useLocale } from 'next-intl';

const HomeNavbar = () => {
  const t = useTranslations('nav');
  const locale = useLocale();

  const links = [
    { name: t('services'),   path: '/services' },
    { name: t('ourModel'),   path: '/our-model' },
    { name: t('howWeWork'),  path: '/how-we-work' },
    { name: t('about'),      path: '/about' },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useRouter();
  const pathname = usePathname();

  // Strip locale prefix for comparison
  const pathnameWithoutLocale = pathname.startsWith('/de')
    ? pathname.slice(3) || '/'
    : pathname;

  const isHome = pathnameWithoutLocale === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  const handleNav = (path: string) => {
    const newPath = locale === 'de' ? `/de${path}` : path;
    navigate.push(newPath);
    setIsOpen(false);
  };

  const switchLocale = (newLocale: string) => {
    const newPath = newLocale === 'de'
      ? `/de${pathnameWithoutLocale}`
      : pathnameWithoutLocale;
    navigate.push(newPath);
  };

  // On inner pages always show the pill/solid state
  const isPill = scrolled || !isHome;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div
        className={cn(
          'mx-auto transition-all duration-500',
          isPill ? 'max-w-[1200px] px-[48px] pt-3' : 'max-w-none px-0 pt-0'
        )}
      >
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={cn(
            'flex flex-row justify-between items-center transition-all duration-500',
            isPill
              ? 'bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg shadow-black/5 rounded-full px-6 lg:px-8 py-3'
              : 'bg-transparent px-8 lg:px-16 py-8'
          )}
        >
          {/* Logo */}
          <button type="button" onClick={() => handleNav('/')} className="bg-transparent border-0 p-0 cursor-pointer">
            <img src="/logo.png" alt="Wager Technik" className="h-9 w-auto block" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex flex-row items-center gap-8">
            {links.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNav(item.path)}
                className="hover:opacity-70 transition-opacity"
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  color: pathnameWithoutLocale === item.path ? '#1a1a1a' : '#4a5568',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  borderBottom: pathnameWithoutLocale === item.path ? '1px solid #1a1a1a' : 'none',
                  paddingBottom: '2px',
                }}
              >
                {item.name}
              </button>
            ))}

            {/* Language switcher */}
            <div className="flex items-center gap-1 ml-2">
              <button
                onClick={() => switchLocale('en')}
                style={{
                  fontSize: '13px',
                  fontWeight: locale === 'en' ? 600 : 400,
                  opacity: locale === 'en' ? 1 : 0.45,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#1a1a1a',
                  padding: '2px 0',
                }}
              >
                EN
              </button>
              <span style={{ color: '#cbd5e1', fontSize: '13px', userSelect: 'none' }}>|</span>
              <button
                onClick={() => switchLocale('de')}
                style={{
                  fontSize: '13px',
                  fontWeight: locale === 'de' ? 600 : 400,
                  opacity: locale === 'de' ? 1 : 0.45,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#1a1a1a',
                  padding: '2px 0',
                }}
              >
                DE
              </button>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNav('/contact')}
              className="px-6 py-2.5 rounded-full transition-all hover:scale-105"
              style={{
                background: '#1a1a1a',
                fontSize: '15px',
                fontWeight: 500,
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.01em',
              }}
            >
              {t('contact')}
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full"
            style={{
              background: isOpen ? '#f1f5f9' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#1a1a1a',
            }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.header>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="lg:hidden bg-white/95 backdrop-blur-md border border-black/8 rounded-2xl mt-2 overflow-hidden shadow-xl shadow-black/10"
            >
              {/* Nav links */}
              <div className="px-4 pt-4 pb-3 flex flex-col gap-1">
                {links.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNav(item.path)}
                    className="flex items-center w-full px-4 py-3 rounded-xl text-left transition-colors hover:bg-slate-50"
                    style={{
                      fontSize: '16px',
                      fontWeight: pathnameWithoutLocale === item.path ? 500 : 400,
                      color: pathnameWithoutLocale === item.path ? '#1a1a1a' : '#4a5568',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Language switcher mobile */}
              <div className="mx-4 border-t border-slate-100" />
              <div className="px-4 py-3 flex items-center gap-3">
                <span style={{ fontSize: '13px', color: '#94a3b8' }}>Language:</span>
                <button
                  onClick={() => { switchLocale('en'); setIsOpen(false); }}
                  style={{
                    fontSize: '13px',
                    fontWeight: locale === 'en' ? 600 : 400,
                    opacity: locale === 'en' ? 1 : 0.5,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#1a1a1a',
                  }}
                >
                  EN
                </button>
                <span style={{ color: '#cbd5e1', fontSize: '13px' }}>|</span>
                <button
                  onClick={() => { switchLocale('de'); setIsOpen(false); }}
                  style={{
                    fontSize: '13px',
                    fontWeight: locale === 'de' ? 600 : 400,
                    opacity: locale === 'de' ? 1 : 0.5,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#1a1a1a',
                  }}
                >
                  DE
                </button>
              </div>

              {/* Divider */}
              <div className="mx-4 border-t border-slate-100" />

              {/* Contact CTA */}
              <div className="px-4 py-4">
                <button
                  onClick={() => handleNav('/contact')}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all"
                  style={{
                    background: '#1a1a1a',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {t('contact')}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomeNavbar;
