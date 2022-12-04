import classNames from 'classnames';
import Link from 'next/link';

const Footer = (): JSX.Element => {
  const links: Array<{ label: string; href: string }> = [
    { label: 'Beitragsordnung', href: '/docs/bbe-beitragsordnung.pdf' },
    { label: 'Satzung', href: '/docs/bbe-satzung.pdf' },
  ];

  return (
    <div className={classNames('flex', 'flex-col', 'gap-4', 'items-center', 'py-6', 'text-center')}>
      <div className={classNames('flex', 'divide-x', 'text-sm')}>
        {links.map(({ label, href }) => (
          <Link
            key={`footer-link-${href}`}
            href={href}
            download
            target="_blank"
            className={classNames('px-2', 'hover:text-primary-500', 'transition-colors')}
          >
            {label}
          </Link>
        ))}
      </div>
      <span className={classNames('text-xs', 'text-gray-500')}>&copy; 2022 Berlin-Brandenburg eSports e.V.</span>
    </div>
  );
};

export default Footer;
