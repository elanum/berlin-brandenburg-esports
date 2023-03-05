import classNames from 'classnames';
import { NextPage } from 'next';
import BaseTemplate from '../../templates/BaseTemplate';

const SocietyPage: NextPage = () => {
  const sections: Array<{ headline: string; content: string }> = [
    {
      headline: 'Geschichte',
      content:
        'Gegründet wurde der Verein im November 2021. Dies geschah jedoch nicht einfach aus dem Nichts. Vielmehr gehen dem mehr als drei Jahre voraus, in denen sich universitärer eSport langsam etabliert hat. Einige der Gründungsmitglieder hatten zuvor an ihren jeweiligen Hochschulen eine Gaming Community etabliert. Nun galt es, aus vielen einzelnen Communities eine große zu schaffen. So setzten sich Vertreter:innen des eSports der Humboldt-Universität, Freien Universität, Technischen Universität, Hochschule für Wirtschaft und Recht und weiteren zusammen, um gemeinsam eine Institution für eSport zu schaffen, die einen besonderen Fokus auf die Studierenden ihrer Region legt.',
    },
    {
      headline: 'Mission',
      content:
        'Das Ziel bei der Gründung war, eine große, gemeinsame Institution zu schaffen, die den Gaming und eSport in Berlin und Brandenburg bündelt und vor allem, aber nicht ausschließlich, Student:innen anspricht. Deshalb möchten wir sowohl im Casual als auch im Competitive Bereich aufgestellt sein und Menschen einen Raum und einen Rahmen bieten, sich zu vernetzen, gemeinsam zu spielen, besser zu werden und etwas zu erreichen. Wir möchten so viele universitäre Communities wie möglich unter unserem Dach vereinen. Darüber hinaus sehen wir uns auch einem Bildungsauftrag verpflichtet, um Menschen aller Altersklassen den eSport näher zu bringen, über Chancen und Vorteile aufzuklären, aber auch Risiken zu vermitteln.',
    },
    {
      headline: 'Angebot',
      content:
        'Um unserer Mission gerecht zu werden, repräsentieren wir bereits jetzt diverse Hochschulen Berlins. Wir möchten weiterhin wachsen und so viele regionale Communities wie möglich vereinen. Bereits jetzt stellen wir in einigen Spielen zahlreiche Teams über verschieden Spielniveaus hinweg, so dass Hobbyspieler:innen ihren Platz finden, aber auch herausragende Spieler:innen etwas mit uns erreichen können. So konnten wir bereits jetzt einige Erfolge im kompetitiven Bereich verbuchen. Außerdem ist es uns wichtig, Menschen miteinander zu verbinden, weshalb wir verschiedene Angebote online und offline schaffen, wie zum Beispiel Vereinstreffen, Stammtische, Public Viewing oder Turniere.',
    },
  ];

  return (
    <BaseTemplate title="Über Uns">
      {sections.map(({ headline, content }) => (
        <section key={headline} className={classNames('container')}>
          <h1>{headline}</h1>
          <p>{content}</p>
        </section>
      ))}
    </BaseTemplate>
  );
};

export default SocietyPage;
