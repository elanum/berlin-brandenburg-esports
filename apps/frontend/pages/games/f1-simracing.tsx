import { NextPage } from 'next';
import { F1Header } from '../../components/Images';
import BaseTemplate from '../../templates/BaseTemplate';

const F1SimracingPage: NextPage = () => {
  return (
    <BaseTemplate title="F1/Simracing" hero={{ ...F1Header, alt: 'F1 2022' }}>
      <section>
        <h1>F1/Simracing</h1>
        <p>
          F1/Simracing ist die Abteilung, die sich mit Simulationsrennspielen (wie F1 2021) beschäftigt. In den meisten
          Fällen gibt es in dieser eSports-Branche keine Teams, die zusammen antreten. Daher nehmen wir uns primär zur
          Aufgabe, über die Teilnahme an F1/Simracing Events zu informieren und für Fragen zur Verfügung stehen.
          Weitergehend soll Teilnehmenden eine Plattform zur Verfügung gestellt werden, sich mit anderen Fahrern
          auszutauschen und zu verbessern.
        </p>
      </section>
    </BaseTemplate>
  );
};

export default F1SimracingPage;
