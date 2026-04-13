import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import PageHero from '@/components/ui/page-hero';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-[18px] font-semibold text-foreground mb-3">{title}</h2>
    <div className="text-[15px] text-muted-foreground leading-relaxed space-y-2">{children}</div>
  </div>
);

const content = {
  de: {
    label: 'Legal Notice',
    title: 'Impressum',
    subtitle: 'Pflichtangaben gemäß § 5 TMG (Telemediengesetz).',
    sections: [
      {
        title: 'Angaben gemäß § 5 TMG',
        body: (
          <>
            <p><strong className="text-foreground">Wager Technik</strong></p>
            <p>Schwalbenweg 11</p>
            <p>72356 Dautmergen</p>
            <p>Deutschland</p>
          </>
        ),
      },
      {
        title: 'Kontakt',
        body: (
          <p>E-Mail: <a href="mailto:hello@wagertechnik.de" className="text-foreground hover:underline">hello@wagertechnik.de</a></p>
        ),
      },
      {
        title: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
        body: (
          <>
            <p>Wager Technik</p>
            <p>Schwalbenweg 11</p>
            <p>72356 Dautmergen</p>
          </>
        ),
      },
      {
        title: 'Haftung für Inhalte',
        body: (
          <>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
          </>
        ),
      },
      {
        title: 'Haftung für Links',
        body: (
          <>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
            <p>Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
          </>
        ),
      },
      {
        title: 'Urheberrecht',
        body: (
          <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
        ),
      },
    ],
  },
  en: {
    label: 'Legal Notice',
    title: 'Legal Notice',
    subtitle: 'Mandatory disclosure information in accordance with § 5 TMG (German Telemedia Act).',
    sections: [
      {
        title: 'Information according to § 5 TMG',
        body: (
          <>
            <p><strong className="text-foreground">Wager Technik</strong></p>
            <p>Schwalbenweg 11</p>
            <p>72356 Dautmergen</p>
            <p>Germany</p>
          </>
        ),
      },
      {
        title: 'Contact',
        body: (
          <p>Email: <a href="mailto:hello@wagertechnik.de" className="text-foreground hover:underline">hello@wagertechnik.de</a></p>
        ),
      },
      {
        title: 'Responsible for content according to § 55 para. 2 RStV',
        body: (
          <>
            <p>Wager Technik</p>
            <p>Schwalbenweg 11</p>
            <p>72356 Dautmergen, Germany</p>
          </>
        ),
      },
      {
        title: 'Liability for Content',
        body: (
          <>
            <p>As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 para. 1 TMG. However, according to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.</p>
            <p>Obligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific infringement. Upon becoming aware of such violations, we will remove the content immediately.</p>
          </>
        ),
      },
      {
        title: 'Liability for Links',
        body: (
          <>
            <p>Our offering contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content.</p>
            <p>The linked pages were checked for possible legal violations at the time of linking. No illegal content was identified at the time. A permanent review of the linked pages is not reasonable without concrete indications of an infringement. Upon becoming aware of legal violations, we will remove such links immediately.</p>
          </>
        ),
      },
      {
        title: 'Copyright',
        body: (
          <p>The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.</p>
        ),
      },
    ],
  },
};

const Impressum = () => {
  const [lang, setLang] = useState('de');
  const c = content[lang];

  return (
    <PageTransition>
      <PageHero label={c.label} title={c.title} subtitle={c.subtitle} />

      <section className="bg-white py-20">
        <div className="container-max max-w-3xl">

          {/* Language toggle */}
          <div className="flex items-center gap-2 mb-12 p-1 bg-[#f8fafc] rounded-full w-fit border border-border">
            {['de', 'en'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="px-5 py-2 rounded-full text-[14px] font-medium transition-all"
                style={{
                  background: lang === l ? '#1a1a1a' : 'transparent',
                  color: lang === l ? '#ffffff' : '#64748b',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {l === 'de' ? 'Deutsch' : 'English'}
              </button>
            ))}
          </div>

          {c.sections.map((s) => (
            <Section key={s.title} title={s.title}>
              {s.body}
            </Section>
          ))}

          <p className="text-[13px] text-muted-foreground/50 mt-12">Stand / Last updated: April 2026</p>
        </div>
      </section>
    </PageTransition>
  );
};

export default Impressum;
