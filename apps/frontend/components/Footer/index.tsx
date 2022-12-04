import classNames from 'classnames';
import Link from 'next/link';

const Footer = (): JSX.Element => {
  const links = ['Beitragsordnung', 'Satzung'];

  return (
    <div className={classNames('flex', 'flex-col', 'gap-4', 'items-center', 'py-6', 'text-center')}>
      <div className={classNames('flex', 'divide-x', 'text-sm')}>
        {links.map((link) => (
          <Link
            key={`footer-link-${link}`}
            href={`/${link.toLowerCase()}`}
            className={classNames('px-2', 'hover:text-primary-500', 'transition-colors')}
          >
            {link}
          </Link>
        ))}
      </div>
      <span className={classNames('text-xs', 'text-gray-500')}>&copy; 2022 Berlin-Brandenburg eSports e.V.</span>
    </div>
  );
};

export default Footer;
