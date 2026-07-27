import React from 'react';

interface FaqJsonLdProps {
  locale?: string;
}

export default function FaqJsonLd({ locale = 'en' }: FaqJsonLdProps) {
  const isDe = locale === 'de';

  const faqData = isDe
    ? [
        {
          question: 'Was unterscheidet Wager Technik von Personalvermittlung oder Arbeitnehmerüberlassung?',
          answer:
            'Wager Technik bietet dedizierte IT-Delivery-Teams auf Werk- bzw. Dienstvertragsbasis. Wir bleiben stets voll verantwortlich für die Qualität, technische Leitung und Projektergebnisse. Wir betreiben keine Arbeitnehmerüberlassung (ANÜ) und verleihen keine einzelnen Entwickler.',
        },
        {
          question: 'Für welche Unternehmen sind die Subunternehmer-Dienste von Wager Technik geeignet?',
          answer:
            'Wir arbeiten primär mit IT-Beratungen, Digitalagenturen, Systemintegratoren, SaaS-Unternehmen und skalierenden Produktunternehmen zusammen, die verlässliche Engineering-Kapazitäten ohne Einstellungsrisiko benötigen.',
        },
        {
          question: 'Wo hat Wager Technik seinen Sitz?',
          answer:
            'Wager Technik hat seinen Hauptsitz in Dautmergen, Deutschland (Schwalbenweg 11, 72356 Dautmergen). Wir verbinden deutsche Rechtskonformität und Management mit globalen Engineering-Delivery-Kapazitäten.',
        },
        {
          question: 'Wie erfolgt die Kommunikation und Projektsteuerung?',
          answer:
            'Sie haben einen zentralen deutsch- und englischsprachigen Ansprechpartner bei Wager Technik. Wir bieten wöchentliche Updates, transparente Berichterstattung und vollen Einblick in agile Boards und Repositories.',
        },
      ]
    : [
        {
          question: 'How is Wager Technik different from staff augmentation or body leasing?',
          answer:
            'Wager Technik delivers structured IT engineering capacity under service contracts. We take full ownership of technical direction, quality assurance, and project outcomes without introducing temporary worker leasing (ANÜ) compliance risks.',
        },
        {
          question: 'Which types of businesses partner with Wager Technik?',
          answer:
            'We partner primarily with IT consultancies, digital agencies, system integrators, SaaS firms, and product companies looking to scale delivery capacity with zero hiring risk.',
        },
        {
          question: 'Where is Wager Technik based?',
          answer:
            'Wager Technik is headquartered in Dautmergen, Germany (Schwalbenweg 11, 72356 Dautmergen). We combine strict German legal accountability with global software delivery capability.',
        },
        {
          question: 'How does engagement communication work?',
          answer:
            'You get a dedicated German- and English-speaking point of contact with weekly updates, progress reports, and open access to project management boards and code repositories.',
        },
      ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
