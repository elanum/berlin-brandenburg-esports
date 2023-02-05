import { NextPage } from 'next';
import { LeagueOfLegendsHeader } from '../../components/Images';
import BaseTemplate from '../../templates/BaseTemplate';

const LeagueOfLegendsPage: NextPage = () => {
  return (
    <BaseTemplate title="League of Legends" hero={{ ...LeagueOfLegendsHeader, alt: 'League of Legends' }}>
      <section>
        <h1>League of Legends</h1>
        <p>Der League of Legends Bereich gehört neben Overwatch zu den größten in BBE.</p>
        <p>
          Derzeit treten unsere insgesamt 11 Teams mit ca. 62 Spielern in folgenden Ligen an: Uniliga, Prime League,
          Amazon University Esports.
        </p>
        <p>
          Neben organisiertem Teamplay hosted die LoL-Abteilung regelmäßige fun Challenges, Coachings und andere Events!
          Fragen könnt ihr jederzeit an die Abteilungsleiter @Bastorianus#6402 (Team- und Ligaorga) und @Maik |
          Sasorizahebi#6635 (Events und alles andere) stellen.
        </p>
      </section>
      <section>
        <h1>Teamnamen nach Ligen aufgeteilt</h1>
        <ul>
          <li>
            8 Prime League = 41 Spieler (BBE TURBOFLEXER, BBE TBA, BBE PORO BIBITUR, BBE §118 OWIG, BBE VAN BAITHOVEN,
            BBE FullMantra, BBE Inting in the Disco, BBE Runterrennen eSports)
          </li>
          <li>3 Uniliga = 23 (BBE-FU Volibearlins, BBE-HU JJBombersquad, BBE-TUnfähig)</li>
          <li>1 Amazon = 5 (Berlin-Brandenburg eSports)</li>
        </ul>
        <p>Ohne doppelte Zählung sind es (geschätzt): 62 Spieler</p>
      </section>
      <section>
        <h1>Erfolge</h1>
        <ul>
          <li>tbd: Berlin-Brandenburg eSports 1./2.Platz Amazon UNIVERSITY Esports Germany 2022</li>
          <li>BBE Volibearlins Qualifikation 1. Uniliga + Playoffs Div 3-4 Prime League</li>
          <li>BBE Volibearlins 5. Platz Amazon UNIVERSITY Esports Germany 2022</li>
          <li>BBE Turboflexer Div 4 Prime League</li>
        </ul>
      </section>
    </BaseTemplate>
  );
};

export default LeagueOfLegendsPage;
