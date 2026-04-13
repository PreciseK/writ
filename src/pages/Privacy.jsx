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
    label: 'Rechtliches',
    title: 'Datenschutzerklärung',
    subtitle: 'Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.',
    sections: [
      {
        title: '1. Verantwortliche Stelle',
        body: (
          <>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <p><strong className="text-foreground">Wager Technik</strong></p>
            <p>Schwalbenweg 11, 72356 Dautmergen, Deutschland</p>
            <p>E-Mail: <a href="mailto:hello@wagertechnik.de" className="text-foreground hover:underline">hello@wagertechnik.de</a></p>
          </>
        ),
      },
      {
        title: '2. Erhebung und Verarbeitung personenbezogener Daten',
        body: (
          <p>Wir erheben personenbezogene Daten nur, wenn Sie uns diese im Rahmen einer Kontaktaufnahme (z. B. per E-Mail oder über unser Kontaktformular) freiwillig mitteilen. Die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, Nachricht) verwenden wir ausschließlich zur Bearbeitung Ihrer Anfrage.</p>
        ),
      },
      {
        title: '3. Zweck der Datenverarbeitung',
        body: (
          <>
            <p>Ihre Daten werden ausschließlich für folgende Zwecke verarbeitet:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Bearbeitung von Anfragen und Kontaktaufnahmen</li>
              <li>Anbahnung und Abwicklung von Geschäftsbeziehungen</li>
              <li>Erfüllung gesetzlicher Aufbewahrungspflichten</li>
            </ul>
          </>
        ),
      },
      {
        title: '4. Rechtsgrundlage',
        body: (
          <p>Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung oder -erfüllung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen an der Kommunikation mit Interessenten).</p>
        ),
      },
      {
        title: '5. Weitergabe von Daten',
        body: (
          <p>Wir geben Ihre personenbezogenen Daten nicht ohne Ihre ausdrückliche Zustimmung an Dritte weiter, es sei denn, wir sind gesetzlich dazu verpflichtet oder es ist zur Vertragserfüllung erforderlich.</p>
        ),
      },
      {
        title: '6. Speicherdauer',
        body: (
          <p>Ihre Daten werden gelöscht, sobald sie für den Zweck, für den sie erhoben wurden, nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Kontaktanfragen werden in der Regel nach 6 Monaten gelöscht, sofern kein Geschäftsverhältnis entstanden ist.</p>
        ),
      },
      {
        title: '7. Ihre Rechte',
        body: (
          <>
            <p>Sie haben das Recht auf:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p>Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:hello@wagertechnik.de" className="text-foreground hover:underline">hello@wagertechnik.de</a></p>
          </>
        ),
      },
      {
        title: '8. Beschwerderecht',
        body: (
          <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde für Baden-Württemberg ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW).</p>
        ),
      },
      {
        title: '9. Hosting & technische Infrastruktur',
        body: (
          <p>Diese Website wird auf modernen Webhosting-Infrastrukturen betrieben. Beim Aufruf unserer Website werden automatisch Verbindungsdaten (IP-Adresse, Datum, Uhrzeit, aufgerufene Seite) in Server-Logfiles gespeichert. Diese Daten sind nicht personenbezogen auswertbar und werden nach spätestens 7 Tagen gelöscht.</p>
        ),
      },
      {
        title: '10. Cookies',
        body: (
          <p>Diese Website verwendet keine Tracking-Cookies oder Analyse-Dienste von Drittanbietern. Es werden ausschließlich technisch notwendige Cookies verwendet, die für den Betrieb der Website erforderlich sind.</p>
        ),
      },
    ],
  },
  en: {
    label: 'Legal',
    title: 'Privacy Policy',
    subtitle: 'Information on how we handle your personal data in accordance with GDPR (DSGVO).',
    sections: [
      {
        title: '1. Data Controller',
        body: (
          <>
            <p>The party responsible for data processing on this website is:</p>
            <p><strong className="text-foreground">Wager Technik</strong></p>
            <p>Schwalbenweg 11, 72356 Dautmergen, Germany</p>
            <p>Email: <a href="mailto:hello@wagertechnik.de" className="text-foreground hover:underline">hello@wagertechnik.de</a></p>
          </>
        ),
      },
      {
        title: '2. Collection and Processing of Personal Data',
        body: (
          <p>We only collect personal data when you voluntarily provide it to us as part of a contact inquiry (e.g. via email or our contact form). The data you provide (name, email address, message) is used exclusively to process your inquiry.</p>
        ),
      },
      {
        title: '3. Purpose of Data Processing',
        body: (
          <>
            <p>Your data is processed exclusively for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Processing inquiries and contact requests</li>
              <li>Initiating and fulfilling business relationships</li>
              <li>Fulfilling statutory retention obligations</li>
            </ul>
          </>
        ),
      },
      {
        title: '4. Legal Basis',
        body: (
          <p>The processing of your data is based on Art. 6 para. 1 lit. b GDPR (contract initiation or performance) and Art. 6 para. 1 lit. f GDPR (legitimate interest in communicating with prospective clients).</p>
        ),
      },
      {
        title: '5. Disclosure of Data',
        body: (
          <p>We do not pass on your personal data to third parties without your explicit consent, unless we are legally required to do so or it is necessary for the fulfilment of a contract.</p>
        ),
      },
      {
        title: '6. Retention Period',
        body: (
          <p>Your data will be deleted as soon as it is no longer required for the purpose for which it was collected and no statutory retention obligations apply. Contact inquiries are generally deleted after 6 months if no business relationship has been established.</p>
        ),
      },
      {
        title: '7. Your Rights',
        body: (
          <>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access the data stored about you (Art. 15 GDPR)</li>
              <li>Rectification of incorrect data (Art. 16 GDPR)</li>
              <li>Erasure of your data (Art. 17 GDPR)</li>
              <li>Restriction of processing (Art. 18 GDPR)</li>
              <li>Data portability (Art. 20 GDPR)</li>
              <li>Object to processing (Art. 21 GDPR)</li>
            </ul>
            <p>To exercise these rights, please contact: <a href="mailto:hello@wagertechnik.de" className="text-foreground hover:underline">hello@wagertechnik.de</a></p>
          </>
        ),
      },
      {
        title: '8. Right to Lodge a Complaint',
        body: (
          <p>You have the right to lodge a complaint with a data protection supervisory authority regarding the processing of your personal data by us. The competent authority for Baden-Württemberg is the State Commissioner for Data Protection and Freedom of Information Baden-Württemberg (LfDI BW).</p>
        ),
      },
      {
        title: '9. Hosting & Technical Infrastructure',
        body: (
          <p>This website is operated on modern web hosting infrastructure. When you access our website, connection data (IP address, date, time, page accessed) is automatically stored in server log files. This data cannot be evaluated on a personal basis and is deleted after a maximum of 7 days.</p>
        ),
      },
      {
        title: '10. Cookies',
        body: (
          <p>This website does not use tracking cookies or third-party analytics services. Only technically necessary cookies are used that are required for the operation of the website.</p>
        ),
      },
    ],
  },
};

const Privacy = () => {
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

export default Privacy;
