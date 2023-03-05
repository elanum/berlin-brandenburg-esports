import classNames from 'classnames';
import { NextPage } from 'next';
import { RocketLeagueHeader } from '../../components/Images';
import BaseTemplate from '../../templates/BaseTemplate';

const RocketLeaguePage: NextPage = () => {
  return (
    <BaseTemplate title="Rocket League" hero={RocketLeagueHeader}>
      <section className={classNames('container')}>
        <h1>Rocket League</h1>
        <p>
          Unsere Rocket League Teams spielen bei Amazon University eSports, Uniliga und weiteren Turnieren und Ligen.
          Unser professionelles Team Berlin Phoenix ist 5-facher Deutscher und Europa Hochschulmeister und hat sich 2022
          und 2023 zur Collegiate World Championship qualifiziert. Es ist dennoch für jedes Skill Level etwas dabei.
          Wenn du Lust hast etwas zu lernen und dich zu verbessern, wird bei uns Coaching von erfahrenen und
          professionellen Spielern angeboten. Auch gesellige offline Events finden in Berlin statt.
        </p>
      </section>
    </BaseTemplate>
  );
};

export default RocketLeaguePage;
