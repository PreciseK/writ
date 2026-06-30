"use client";

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');
  const locale = useLocale();

  const localePath = (path: string) => locale === 'de' ? `/de${path}` : path;

  return (
    <footer className="bg-[#f8fafc] pt-16 pb-8 border-t border-[#e2e8f0]">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 border-b border-[#e2e8f0]"
          style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
          <div>
            <img src="/logo.png" alt="Wager Technik" className="h-8 w-auto mb-6" />
            <p className="text-[15px] text-[#64748b] mb-2">Schwalbenweg 11</p>
            <p className="text-[15px] text-[#64748b] mb-2">72356 Dautmergen, Germany</p>
            <a href="mailto:hello@wager-technik.de" className="text-[15px] text-[#64748b] hover:text-[#0f172a] mt-4 block">
              hello@wager-technik.de
            </a>
            <a href="tel:015127172196" className="text-[15px] text-[#64748b] hover:text-[#0f172a] mt-2 block">
              015127172196
            </a>
          </div>

          <div>
            <h5 className="text-[14px] font-semibold tracking-[0.05em] uppercase text-[#0f172a] mb-6">{t('companyHeading')}</h5>
            <ul className="space-y-3">
              {[
                { labelKey: 'aboutUs',    path: '/about' },
                { labelKey: 'services',   path: '/services' },
                { labelKey: 'howWeWork',  path: '/how-we-work' },
                { labelKey: 'ourModel',   path: '/our-model' },
              ].map(({ labelKey, path }) => (
                <li key={labelKey}>
                  <Link href={localePath(path)} className="text-[15px] text-[#64748b] hover:text-[#0f172a] transition-colors">
                    {t(labelKey as any)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[14px] font-semibold tracking-[0.05em] uppercase text-[#0f172a] mb-6">{t('legalHeading')}</h5>
            <ul className="space-y-3">
              <li><Link href={localePath('/impressum')} className="text-[15px] text-[#64748b] hover:text-[#0f172a] transition-colors">{t('impressum')}</Link></li>
              <li><Link href={localePath('/privacy')} className="text-[15px] text-[#64748b] hover:text-[#0f172a] transition-colors">{t('privacy')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[14px] text-[#64748b] gap-4">
          <p>© {new Date().getFullYear()} Wager Technik. {t('rights')}</p>
          <p>
            {t('designedBy')}{' '}
            <a
              href="https://maxmarkagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0f172a] transition-colors"
            >
              Maxmark Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
