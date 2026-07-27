import HomeNavbar from '../../components/HomeNavbar';
import Footer from '../../components/Footer';
import React, { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import JsonLd from '@/components/seo/JsonLd';
import { Metadata } from 'next';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wagertechnik.de';
  const isDe = locale === 'de';

  const title = isDe
    ? 'Wager Technik | Dedizierte IT-Delivery-Teams & Subunternehmer'
    : 'Wager Technik | Dedicated IT Delivery Teams & Subcontracting';

  const description = isDe
    ? 'Wager Technik bietet dedizierte IT-Delivery-Teams im rahmen von kapazitätsbasierten Subunternehmer-Modellen mit deutscher Verantwortung und technischer Leitung.'
    : 'Wager Technik provides dedicated IT delivery teams under a capacity-based subcontracting model with German operational accountability and technical oversight.';

  const currentUrl = isDe ? `${baseUrl}/de` : baseUrl;

  return {
    title,
    description,
    alternates: {
      canonical: currentUrl,
      languages: {
        en: baseUrl,
        de: `${baseUrl}/de`,
        'x-default': baseUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName: 'Wager Technik',
      locale: isDe ? 'de_DE' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/logo.png`,
          width: 1200,
          height: 630,
          alt: 'Wager Technik Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/logo.png`],
    },
  };
}

export default async function LocaleLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <JsonLd locale={locale} />
      <HomeNavbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}
