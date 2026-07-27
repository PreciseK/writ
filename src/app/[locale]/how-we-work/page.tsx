import { Metadata } from 'next';
import HowWeWorkClient from './HowWeWorkClient';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wagertechnik.de';
  const isDe = locale === 'de';

  const title = isDe
    ? 'Wie Wir Arbeiten | Agiler Delivery-Prozess & Qualitätssicherung'
    : 'How We Work | Agile Delivery Process & Quality Assurance';

  const description = isDe
    ? 'Erfahren Sie wie Wager Technik Software-Delivery strukturiert: Radikale Transparenz, wöchentliche Updates, strenger Code Review und technische Leitung.'
    : 'Discover how Wager Technik manages software delivery: radical transparency, weekly updates, mandatory code reviews, and senior technical oversight.';

  const currentUrl = isDe ? `${baseUrl}/de/how-we-work` : `${baseUrl}/how-we-work`;

  return {
    title,
    description,
    alternates: {
      canonical: currentUrl,
      languages: {
        en: `${baseUrl}/how-we-work`,
        de: `${baseUrl}/de/how-we-work`,
        'x-default': `${baseUrl}/how-we-work`,
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

export default function HowWeWorkPage() {
  return <HowWeWorkClient />;
}
