import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wagertechnik.de';
  const isDe = locale === 'de';

  const title = isDe
    ? 'IT-Subunternehmer-Leistungen & Dedizierte Teams | Wager Technik'
    : 'IT Subcontracting Services & Dedicated Teams | Wager Technik';

  const description = isDe
    ? 'Strukturierte IT-Delivery, dedizierte Software-Teams und technische Leitung für IT-Beratungen, Digitalagenturen und Systemintegratoren.'
    : 'Structured IT delivery, dedicated software engineering teams, and technical leadership designed for consultancies, agencies, and tech firms.';

  const currentUrl = isDe ? `${baseUrl}/de/services` : `${baseUrl}/services`;

  return {
    title,
    description,
    alternates: {
      canonical: currentUrl,
      languages: {
        en: `${baseUrl}/services`,
        de: `${baseUrl}/de/services`,
        'x-default': `${baseUrl}/services`,
      },
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName: 'Wager Technik',
      locale: isDe ? 'de_DE' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function ServicesPage() {
  return <ServicesClient />;
}
