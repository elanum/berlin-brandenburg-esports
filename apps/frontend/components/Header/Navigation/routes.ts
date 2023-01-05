interface Route {
  href: `/${string}`;
  label: string;
}

const routes: Route[] = [
  { label: 'Home', href: '/' },
  { label: 'News', href: '/news' },
  { label: 'Über Uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default routes;
