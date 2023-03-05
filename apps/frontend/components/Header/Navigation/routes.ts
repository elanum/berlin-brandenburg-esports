export interface Route {
  label: string;
  href: string;
  subroutes?: Route[];
}

const routes: Route[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Über Uns',
    href: '/ueber-uns',
    subroutes: [
      { label: 'Über den Verein', href: '/ueber-uns/verein' },
      { label: 'Über den Vorstand', href: '/ueber-uns/vorstand' },
    ],
  },
  {
    label: 'Games',
    href: '/games',
    subroutes: [
      {
        label: 'League of Legends',
        href: '/games/league-of-legends',
      },
      {
        label: 'Overwatch 2',
        href: '/games/overwatch-2',
      },
      {
        label: 'Valorant',
        href: '/games/valorant',
      },
      {
        label: 'Rocket League',
        href: '/games/rocket-league',
      },
      {
        label: 'Teamfight Tactics',
        href: '/games/teamfight-tactics',
      },
      {
        label: 'F1/Simracing',
        href: '/games/f1-simracing',
      },
    ],
  },
];

export default routes;
