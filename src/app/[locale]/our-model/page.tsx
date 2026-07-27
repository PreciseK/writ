import { Metadata } from 'next';
import OurModelClient from './OurModelClient';
import FaqJsonLd from '@/components/seo/FaqJsonLd';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wagertechnik.de';
  const isDe = locale === 'de';

  const title = isDe
    ? 'Unser Subunternehmer-Modell (Keine ANÜ) | Wager Technik'
    : 'Capacity-Based Subcontracting Model (No Body Leasing) | Wager Technik';

  const description = isDe
    ? 'Erfahren Sie wie unser kapazitätsbasiertes Subunternehmer-Modell rechtliche Klarheit, deutsche Verantwortung und verlässliche Software-Ergebnisse bietet.'
    : 'Discover our capacity-based subcontracting model offering legal clarity, German operational accountability, and reliable engineering outcomes.';

  const currentUrl = isDe ? `${baseUrl}/de/our-model` : `${baseUrl}/our-model`;

  return {
    title,
    description,
    alternates: {
      canonical: currentUrl,
      languages: {
        en: `${baseUrl}/our-model`,
        de: `${baseUrl}/de/our-model`,
        'x-default': `${baseUrl}/our-model`,
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

export default function OurModelPage({ params }: { params: { locale: string } }) {
  return (
    <>
      <FaqJsonLd locale={params.locale} />
      <OurModelClient />
    </>
  );
}
