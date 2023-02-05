import classNames from 'classnames';
import { NextPage } from 'next';
import Image, { StaticImageData } from 'next/image';
import { ErinImage, JakobImage, MarliesImage } from '../../components/Images';
import BaseTemplate from '../../templates/BaseTemplate';

const BoardPage: NextPage = () => {
  const sections: Array<{
    headline: string;
    subline: string;
    image?: {
      src: StaticImageData;
      alt: string;
      className?: string;
    };
    content: string[];
  }> = [
    {
      headline: 'Vorsitzende:r',
      subline:
        'Zuständig für die strategische Ausrichtung des Vereins, administrative Belange, Koordination des Vorstands sowie Repräsentation nach Außen.',
      image: { src: JakobImage, alt: 'Jakob', className: classNames('object-top') },
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
      image: { src: ErinImage, alt: 'Erin', className: classNames('object-[40%]') },
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
      image: { src: MarliesImage, alt: 'Marlies', className: classNames('object-top') },
      content: [
        'Hey, ich bin Marlies "Marley96" Nelle Vorstandsmitglied für Strategie und Abteilungsleitung Overwatch. Ich möchte den Verein in allen eSport Titeln kompetitiv voranbringen, darunter fällt das Aufstellen von wettbewerbsfähigen Teams und die Organisation von Turnieren unter unserem Namen. Selber spiele ich leidenschaftlich gerne Overwatch im kompetitiven Bereich. Aktuell studiere ich Wirtschaftsinformatik und möchte später im Bereich Data Science arbeiten.',
      ],
    },
  ];

  return (
    <BaseTemplate title="Über den Vorstand">
      {sections.map(({ headline, subline, content, image }) => (
        <section
          key={headline}
          className={classNames(
            'grid',
            'md:grid-flow-col',
            'justify-items-center',
            'md:justify-items-start',
            'items-center',
            'gap-6'
          )}
        >
          {image && (
            <Image
              width={160}
              height={160}
              src={image.src}
              placeholder="blur"
              alt={image.alt}
              className={classNames('rounded-full', 'object-cover', 'aspect-square', image.className)}
            />
          )}

          <div>
            <h1>{headline}</h1>
            <h2 className={classNames('text-gray-300', 'italic')}>{subline}</h2>
            {content.map((c, i) => (
              <p key={`headline-content-${i}`}>{c}</p>
            ))}
          </div>
        </section>
      ))}
    </BaseTemplate>
  );
};

export default BoardPage;
