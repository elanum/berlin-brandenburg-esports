import classNames from 'classnames';
import { NextPage } from 'next';
import { LeagueOfLegendsHeader } from '../../components/Images';
import BaseTemplate from '../../templates/BaseTemplate';

const LeagueOfLegendsPage: NextPage = () => {
  return (
    <BaseTemplate title="League of Legends" hero={{ ...LeagueOfLegendsHeader, alt: 'League of Legends' }}>
      <section className={classNames('container')}>
        <h1>League of Legends</h1>
        <p>
          Unsere Teams spielen bei Amazon University eSports, in der Uniliga, in der Prime League und weiteren
          Turnieren. Unser bestes Team konnte sich einen Platz in der Prime League Division 4 erspielen. Um mit uns in
          einem Team zu spielen, ist dein Rank aber egal. Wenn du dich verbessern und etwas lernen möchtest, bieten wir
          Coaching von erfahrenen Spielern an. Du kannst dich außerdem freuen, über spannende offline Events, Inhouse
          Turniere und Casual Events.
        </p>
      </section>
      <section className={classNames('container')}>
        <h1>Teamnamen nach Ligen aufgeteilt</h1>
        <ul className="ul">
          <li>
            8 Prime League = 41 Spieler (BBE TURBOFLEXER, BBE TBA, BBE PORO BIBITUR, BBE §118 OWIG, BBE VAN BAITHOVEN,
            BBE FullMantra, BBE Inting in the Disco, BBE Runterrennen eSports)
          </li>
          <li>3 Uniliga = 23 (BBE-FU Volibearlins, BBE-HU JJBombersquad, BBE-TUnfähig)</li>
          <li>1 Amazon = 5 (Berlin-Brandenburg eSports)</li>
        </ul>
        <p>Ohne doppelte Zählung sind es (geschätzt): 62 Spieler</p>
      </section>
      <section className={classNames('container')}>
        <h1>Erfolge</h1>
        <ul className="ul">
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
