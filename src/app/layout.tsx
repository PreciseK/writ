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

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wagertechnik.de';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Wager Technik | Dedicated IT Delivery Teams & Subcontracting',
    template: '%s | Wager Technik',
  },
  description:
    'Wager Technik provides dedicated IT delivery teams under a capacity-based subcontracting model with German operational accountability and technical oversight.',
  keywords: [
    'IT Subcontracting',
    'Dedicated Delivery Teams',
    'Software Engineering Subcontractor',
    'IT Consultancy Partner',
    'Digital Agency Engineering',
    'System Integrator Capacity',
    'German IT Subcontractor',
    'Capacity-based Subcontracting',
    'Wager Technik',
  ],
  authors: [{ name: 'Wager Technik' }],
  creator: 'Wager Technik',
  publisher: 'Wager Technik',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  manifest: '/site.webmanifest',
  themeColor: '#0f172a',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Wager Technik',
    title: 'Wager Technik | Dedicated IT Delivery Teams & Subcontracting',
    description:
      'Predictable IT delivery capacity without hiring risk. Dedicated teams managed with German technical accountability.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Wager Technik Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wager Technik | Dedicated IT Delivery Teams',
    description:
      'Predictable IT delivery capacity without hiring risk. Dedicated teams managed with German technical accountability.',
    images: ['/logo.png'],
  },
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
