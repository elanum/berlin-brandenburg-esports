import classNames from 'classnames';
import { NextPage } from 'next';
import { FaCalendar, FaDesktop, FaDumbbell, FaMicroscope, FaTrophy, FaUsers } from 'react-icons/fa';
import IconBox from '../components/IconBox';
import { PlayerImage } from '../components/Images';
import NumberBox from '../components/NumberBox';
import TeamsSlider from '../components/Slider/TeamsSlider';
import Twitch from '../components/TwitchEmbed';
import BaseTemplate from '../templates/BaseTemplate';

const HomePage: NextPage = () => {
  return (
    <BaseTemplate
      className={classNames('flex', 'flex-col')}
      hero={{
        ...PlayerImage,
        alt: 'Willkommen',
        className: classNames('-scale-x-100', 'object-[30%_30%]'),
      }}
    >
      <section className={classNames('container', 'text-center', 'py-24')}>
        <h1>Herzlich Willkommen!</h1>
        <hr />
        <p>
          Wir haben Berlin - Brandenburg eSports e.V. für Gaming - begeisterte Menschen in Berlin - Brandenburg
          gegründet.
        </p>
        <p>
          Unser Ziel ist es den eSport in und um Berlin zu stärken und eine Anlaufstelle, besonders für Studierende, zu
          schaffen.
        </p>
      </section>
      <section className={classNames('bg-gray-100', 'text-center', 'py-24')}>
        <h1 className={classNames('text-black')}>Teams</h1>
        <div className={classNames('py-4')}>
          <TeamsSlider />
        </div>
      </section>
      <section className={classNames('bg-white')}>
        <div className={classNames('container', 'grid', 'grid-cols-1', 'md:grid-cols-4', 'gap-12')}>
          <NumberBox amount={65} hasMore label="Mitglieder" />
          <NumberBox amount={15} hasMore label="Teams" />
          <NumberBox amount={7} label="Games" />
          <NumberBox amount={4} label="eSport Abteilungen" />
        </div>
      </section>
      <section className={classNames('bg-gray-900', 'text-center', 'py-24')}>
        <div className={classNames('container')}>
          <h1>Unsere Angebote</h1>
          <hr />
          <div className={classNames('grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-12', 'py-12')}>
            <IconBox icon={FaDesktop} label="Wöchentliche Streams" />
            <IconBox icon={FaMicroscope} label="Forschung" />
            <IconBox icon={FaTrophy} label="Turniere" />
            <IconBox icon={FaCalendar} label="Lokale Events" />
            <IconBox icon={FaUsers} label="Community" />
            <IconBox icon={FaDumbbell} label="Training" />
          </div>
        </div>
      </section>
      <section className={classNames('container', 'text-center', 'py-24')}>
        <h1>Twitch Stream</h1>
        <hr />
        <div className={classNames('flex', 'justify-center')}>
          <Twitch />
        </div>
      </section>
    </BaseTemplate>
  );
};

export default HomePage;
