import classNames from 'classnames';
import { NextPage } from 'next';
import { ValorantHeader } from '../../components/Images';
import BaseTemplate from '../../templates/BaseTemplate';

const ValorantPage: NextPage = () => {
  return (
    <BaseTemplate title="Valorant" hero={ValorantHeader}>
      <section className={classNames('container')}>
        <h1>Valorant</h1>
        <p>
          Unsere Valorant Teams spielen bei Amazon University eSports, in der Uniliga und weiteren Turnieren und Ligen.
          Für jeden Rank gibt es hier einen Platz. Wir befinden uns aktuell noch im Aufbau des Bereichs.
        </p>
      </section>
    </BaseTemplate>
  );
};

export default ValorantPage;
