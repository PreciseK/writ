import '../index.css';
import React, { ReactNode } from 'react';
import { Instrument_Serif } from 'next/font/google';

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
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={instrumentSerif.variable}>
      <body className="flex flex-col min-h-screen bg-white text-[#0f172a]">
        {children}
      </body>
    </html>
  );
}
