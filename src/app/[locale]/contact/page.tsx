import { Metadata } from 'next';
import ContactClient from './ContactClient';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wagertechnik.de';
  const isDe = locale === 'de';

  const title = isDe
    ? 'Kontakt Wager Technik | IT-Delivery-Kapazitäten Erweitern'
    : 'Contact Wager Technik | Scale Your IT Delivery Capacity';

  const description = isDe
    ? 'Sprechen Sie mit Wager Technik über Ihre IT-Delivery-Anforderungen. Nehmen Sie Kontakt mit unserem Team in Dautmergen auf.'
    : 'Contact Wager Technik to discuss your software engineering delivery needs, capacity requirements, and subcontracting partnerships.';

  const currentUrl = isDe ? `${baseUrl}/de/contact` : `${baseUrl}/contact`;

  return {
    title,
    description,
    alternates: {
      canonical: currentUrl,
      languages: {
        en: `${baseUrl}/contact`,
        de: `${baseUrl}/de/contact`,
        'x-default': `${baseUrl}/contact`,
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

export default function ContactPage() {
  return <ContactClient />;
}
