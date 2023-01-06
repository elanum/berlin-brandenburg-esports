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
];

export default routes;
