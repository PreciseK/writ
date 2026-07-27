import { Metadata } from 'next';
import AboutClient from './AboutClient';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wagertechnik.de';
  const isDe = locale === 'de';

  const title = isDe
    ? 'Über Wager Technik | Deutscher IT-Delivery- & Subunternehmer-Partner'
    : 'About Wager Technik | German IT Delivery & Subcontracting Partner';

  const description = isDe
    ? 'Erfahren Sie mehr über Wager Technik: Führung, Vision und Philosophie für verlässliche IT-Subunternehmer-Kapazitäten mit deutscher Verantwortung.'
    : 'Learn about Wager Technik leadership, vision, and philosophy for reliable software engineering capacity under German operational accountability.';

  const currentUrl = isDe ? `${baseUrl}/de/about` : `${baseUrl}/about`;

  return {
    title,
    description,
    alternates: {
      canonical: currentUrl,
      languages: {
        en: `${baseUrl}/about`,
        de: `${baseUrl}/de/about`,
        'x-default': `${baseUrl}/about`,
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

export default function AboutPage() {
  return <AboutClient />;
}
