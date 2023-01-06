export interface Route {
  label: string;
  href: string;
  subroutes?: Route[];
}

const routes: Route[] = [
  { label: 'Home', href: '/' },
  { label: 'News', href: '/news' },
  {
    label: 'Über Uns',
    href: '/ueber-uns',
    subroutes: [
      { label: 'Über den Verein', href: '/ueber-uns/verein' },
      { label: 'Über den Vorstand', href: '/ueber-uns/vorstand' },
    ],
  },
  { label: 'Kontakt', href: '/kontakt' },
];

export default routes;
