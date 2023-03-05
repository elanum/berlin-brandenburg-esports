import classNames from 'classnames';
import { NextPage } from 'next';
import { F1Header } from '../../components/Images';
import BaseTemplate from '../../templates/BaseTemplate';

const F1SimracingPage: NextPage = () => {
  return (
    <BaseTemplate title="F1/Simracing" hero={{ ...F1Header, alt: 'F1 2022' }}>
      <section className={classNames('container')}>
        <h1>F1/Simracing</h1>
        <p>
          Die Fahrer unter unserer Flagge treten in der Uniliga und bei Apex Online Racing an. Im Wintersemester 22/23
          konnte der Berliner Fahrer “F1Racer29” den Titel des deutschen Hochschulmeisters nach Hause bringen, sowie in
          der Main AOR Liga den 2. Platz erreichen. Es gibt für jedes Skill Level einen Platz, jeder kann bei uns
          mitfahren. Unser Bereich steht dir dabei zur Seite mit Informationen und Anmeldeguides zu Turnieren. Auch
          spaßige Events dürfen natürlich nicht fehlen.
        </p>
      </section>
    </BaseTemplate>
  );
};

export default F1SimracingPage;
