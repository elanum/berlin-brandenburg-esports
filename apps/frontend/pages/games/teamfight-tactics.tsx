import classNames from 'classnames';
import { NextPage } from 'next';
import { TFTHeader } from '../../components/Images';
import BaseTemplate from '../../templates/BaseTemplate';

const TeamFightTacticsPage: NextPage = () => {
  return (
    <BaseTemplate title="Teamfight Tactics" hero={TFTHeader}>
      <section className={classNames('container')}>
        <h1>Teamfight Tactics</h1>
        <p>
          Unsere TFT Spieler beteiligen sich an der Uniliga. Der Spaß steht hier im Vordergrund. Mit regelmäßigen
          spannenden Events wie Inhouse-Turniere, Spieleabende und Gewinnspiele ist für jeden etwas dabei. Der
          kompetitive Bereich befindet sich zur Zeit noch im Aufbau.
        </p>
      </section>
    </BaseTemplate>
  );
};

export default TeamFightTacticsPage;
