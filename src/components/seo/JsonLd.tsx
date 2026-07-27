import React from 'react';

interface JsonLdProps {
  locale?: string;
}

export default function JsonLd({ locale = 'en' }: JsonLdProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wagertechnik.de';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#organization`,
    name: 'Wager Technik',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/logo.png`,
    description:
      locale === 'de'
        ? 'Wager Technik bietet dedizierte IT-Delivery-Teams im rahmen von kapazitätsbasierten Subunternehmer-Modellen mit deutscher Verantwortung.'
        : 'Wager Technik provides dedicated IT delivery teams under a capacity-based subcontracting model with full technical accountability.',
    email: 'hello@wagertechnik.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Schwalbenweg 11',
      addressLocality: 'Dautmergen',
      postalCode: '72356',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'DE',
    },
    areaServed: ['Germany', 'Europe', 'Worldwide'],
    knowsLanguage: ['en', 'de'],
    serviceType: [
      'IT Subcontracting',
      'Dedicated Delivery Teams',
      'Software Engineering',
      'Technical Leadership',
      'Project-Based Development',
    ],
    sameAs: [
      baseUrl,
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Wager Technik',
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    inLanguage: ['en', 'de'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
