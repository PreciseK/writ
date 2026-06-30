import '../../index.css';
import HomeNavbar from '../../components/HomeNavbar';
import Footer from '../../components/Footer';
import React, { ReactNode } from 'react';
import { Instrument_Serif } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata = {
  title: 'Wager Technik',
  description: 'IT Consultancies, Digital Agencies, System Integrators',
  icons: {
    icon: '/favicon.png',
  },
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={instrumentSerif.variable}>
      <body className="flex flex-col min-h-screen bg-white text-[#0f172a]">
        <NextIntlClientProvider messages={messages}>
          <HomeNavbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
