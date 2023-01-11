import classNames from 'classnames';
import { NextPage } from 'next';
import { FaExchangeAlt } from 'react-icons/fa';
import { GiHealthNormal } from 'react-icons/gi';
import { RiShieldFill, RiSwordFill } from 'react-icons/ri';
import BaseTemplate from '../../templates/BaseTemplate';

interface OverwatchTeam {
  name: string;
  skill?: number;
  members: {
    tank: string[];
    dps: string[];
    support: string[];
    flex: string[];
  };
  management?: {
    headCoach?: string;
    assistantCoach?: string;
    manager?: string;
  };
  tournaments: Array<{ name: string; result: string }>;
}

const OverwatchPage: NextPage = () => {
  const teams: OverwatchTeam[] = [
    {
      name: 'Berlin-Brandenburg eSport',
      members: {
        tank: ['Snazzy', 'Jack'],
        dps: ['kuah', 'Tricky'],
        support: ['pandi', 'FNG'],
        flex: [],
      },
      management: {
        headCoach: 'Loyn',
        assistantCoach: 'Predo',
        manager: 'blits',
      },
      tournaments: [{ name: 'EMEA Open Division 22 Season 2', result: 'Top 24' }],
    },
    {
      name: 'BBE Kräuter-Knoblauch',
      skill: 4.4,
      members: {
        tank: ['EGO', 'Predo', 'Damien'],
        dps: ['List', 'Amir', 'Scrux'],
        support: ['Kat', 'Saletolix'],
        flex: [],
      },
      tournaments: [
        { name: 'AUE Community Cup Winter 22 by BBE', result: '1. Platz' },
        { name: 'Uniliga Winter 22', result: 'TBA' },
        { name: 'Uniliga Sommer 22 1. Liga', result: '1. Platz' },
        { name: 'Overwatch Watchpoint: RCADIA 10.06.22', result: '5./6. Platz' },
        { name: 'Uniliga Winter 21 1. Liga', result: '2. Platz' },
        { name: 'Uniliga Sommer 21 1. Liga', result: '1. Platz' },
        { name: 'Uniliga Winter 20 1. Liga', result: '4. Platz' },
      ],
    },
    {
      name: 'BBE Pommes-Schranke',
      skill: 4.4,
      members: {
        tank: ['Robin', 'slan'],
        dps: ['Jango', 'LingLing', 'skam'],
        support: ['Niro', 'Taboo', 'Marley96'],
        flex: [],
      },
      tournaments: [
        { name: 'AUE Community Cup Winter 22', result: '2. Platz' },
        { name: 'Uniliga Winter 22', result: 'TBA' },
        { name: 'Uniliga Sommer 22 1. Liga', result: '2. Platz' },
        { name: 'Uniliga Winter 21 1. Liga', result: '4. Platz' },
      ],
    },
    {
      name: 'BBE Monkes',
      skill: 3,
      members: {
        tank: ['JPU'],
        dps: ['Noxic', 'Burdn'],
        support: ['MsNaikles', 'Hans', 'Konsticraft'],
        flex: ['Hox', 'Percival'],
      },
      tournaments: [
        { name: 'Uniliga Winter 22', result: 'TBA' },
        { name: 'Uniliga Sommer 22 2. Liga', result: '2. Platz' },
        { name: 'Uniliga Winter 21 2. Liga', result: '10. Platz' },
      ],
    },
    {
      name: 'BBE Kräuter Scharf',
      skill: 3.5,
      members: {
        tank: ['BlazingSFire', 'Drimalus'],
        dps: ['LucaviGER', 'ThatsM1ch1'],
        support: ['Lostcarrot', 'denistovic', 'DragonVs', 'Gneh'],
        flex: [],
      },
      tournaments: [
        { name: 'Uniliga Winter 22', result: 'TBA' },
        { name: 'Uniliga Sommer 22 2. Liga', result: '6. Platz' },
        { name: 'EMEA Open Division 22 Season 1', result: 'TBA' },
      ],
    },
  ];

  return (
    <BaseTemplate title="Overwatch">
      <section>
        <h1>Overwatch</h1>
        <p>
          Wir möchten in der Overwatch Abteilung kompetitives wie casual Teamplay unterstützen. Unsere Teams nehmen
          regelmäßig an studentischen und anderen Turnieren teil. Unsere besten Spieler stehen dabei für Coaching zur
          Verfügung. Für unseren Top Teams bieten wir professionelles Coaching an. Wir organisieren regelmäßige
          Teamtreffen und Events.
        </p>
      </section>
      <section>
        <h1>Teams:</h1>
        <div className={classNames('columns-sm', 'gap-6')}>
          {teams.map(({ name, skill, members, management, tournaments }) => (
            <div key={name} className={classNames('break-inside-avoid', 'mb-6')}>
              <div
                className={classNames(
                  'rounded-lg',
                  'bg-gray-900',
                  'p-4',
                  'shadow-lg',
                  'hover:scale-105',
                  'transition-transform'
                )}
              >
                <hgroup>
                  <h2 className={classNames('text-xl')}>{name}</h2>
                  <span className={classNames('text-gray-300')}>{skill && `Team Skill: ${skill}K`}</span>
                </hgroup>
                <h3 className={classNames('mb-1')}>Spieler</h3>
                <ul className={classNames('unstyled')}>
                  <li className={classNames('flex', 'items-center', 'gap-2')}>
                    <RiSwordFill /> {members.dps.join(', ')}
                  </li>
                  <li className={classNames('flex', 'items-center', 'gap-2')}>
                    <GiHealthNormal /> {members.support.join(', ')}
                  </li>
                  <li className={classNames('flex', 'items-center', 'gap-2')}>
                    <RiShieldFill /> {members.tank.join(', ')}
                  </li>
                  {!!members.flex.length && (
                    <li className={classNames('flex', 'items-center', 'gap-2')}>
                      <FaExchangeAlt /> {members.flex.join(', ')}
                    </li>
                  )}
                </ul>

                {management && Object.keys(management).length && (
                  <>
                    <h3>Management</h3>
                    <ul>
                      {!!management.manager && <li>Manager: {management.manager}</li>}
                      {!!management.headCoach && <li>Head Coach: {management.headCoach}</li>}
                      {!!management.assistantCoach && <li>Assistant Coach: {management.assistantCoach}</li>}
                    </ul>
                  </>
                )}

                <h4 className={classNames('text-xl')}>Turniere und Ergebnisse</h4>
                <ul>
                  {tournaments.map(({ name: tname, result }) => (
                    <li key={`${name}-${tname}`}>
                      {tname} - {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </BaseTemplate>
  );
};

export default OverwatchPage;
