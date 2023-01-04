import classNames from 'classnames';
import { NextPage } from 'next';
import BaseTemplate from '../../templates/BaseTemplate';

const BoardPage: NextPage = () => {
  const sections: Array<{ headline: string; subline: string; content: string[] }> = [
    {
      headline: 'Vorsitzende:r',
      subline:
        'Zuständig für die strategische Ausrichtung des Vereins, administrative Belange, Koordination des Vorstands sowie Repräsentation nach Außen.',
      content: [
        'Hey, ich bin Jakob "JJBomber" Dötter und zurzeit der 1. Vorsitzende von BBE.',
        'Neben meiner Leidenschaft für League of Legends und zahlreiche Nintendo Franchises arbeite ich derzeit an der Hochschule für angewandtes Management als Dozent im Studiengang eSports-Management und als Kursleiter für League of Legends beim HU Hochschulsport.',
        'Oh, und Psychologie studiere ich auch noch im Master an der HU-Berlin, wodurch ich zu ersten kleinen Studien im Mental- und Physical Health-Bereich inspiriert wurde.',
      ],
    },
    {
      headline: 'Stellvertretende:r Vorsitzende:r',
      subline:
        'Zuständig für Planung und Umsetzung administrativer Abläufe, Unterstützung des Vorsitzes sowie Repräsentation nach Außen.',
      content: [
        "Hallo, mein Name ist Erin und ich bin seit der Gründungsphase des Vereins dabei und begleite ihn seit jeher. An Computerspielen und eSports habe ich seit meiner Kindheit viel Freude gehabt und kam über Rocket League zum Uni eSport. Abseits von Rocket League spiele ich gerne Coop-Spiele, Rollenspiele und Jump'n'Run. Ich habe einen Abschluss in Statistik und arbeite als Wissenschaftliche:r Mitarbeiter:in, nebenbei studiere ich noch Physik.",
      ],
    },
    {
      headline: 'Finanzen',
      subline: 'Zuständig für die Rechnungs- und Buchführung des Vereins, Budgetierung sowie Kontoverwaltung.',
      content: [],
    },
    {
      headline: 'Recht',
      subline: 'Zuständig für alle juristischen Belange des Vereins sowie Kommunikation mit Behörden.',
      content: [],
    },
    {
      headline: 'Strategie',
      subline:
        'Zuständig für Identifizierung und Planung mittel- und langfristiger Optionen des Vereins sowie Unterstützung der strategischen Ausrichtung.',
      content: [
        'Hey, ich bin Marlies "Marley96" Nelle Vorstandsmitglied für Strategie und Abteilungsleitung Overwatch. Ich möchte den Verein in allen eSport Titeln kompetitiv voranbringen, darunter fällt das Aufstellen von wettbewerbsfähigen Teams und die Organisation von Turnieren unter unserem Namen. Selber spiele ich leidenschaftlich gerne Overwatch im kompetitiven Bereich. Aktuell studiere ich Wirtschaftsinformatik und möchte später im Bereich Data Science arbeiten.',
      ],
    },
  ];

  return (
    <BaseTemplate>
      {sections.map(({ headline, subline, content }, i) => (
        <section key={headline} className={classNames('p-6', 'border-b', 'border-primary-500', 'last:border-b-0')}>
          <h1 className={classNames('text-primary-500', 'font-semibold', 'text-lg', 'mb-1')}>{headline}</h1>
          <h2 className={classNames('text-gray-300', 'italic', 'mb-2')}>{subline}</h2>
          {content.map((c, i) => (
            <p key={`headline-content-${i}`} className={classNames('mb-2')}>
              {c}
            </p>
          ))}
        </section>
      ))}
    </BaseTemplate>
  );
};

export default BoardPage;
