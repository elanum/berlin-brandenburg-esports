import classNames from 'classnames';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaDiscord, FaEnvelope, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';

const Footer = (): JSX.Element => {
  const links: Array<{ label: string; href: string }> = [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'Beitragsordnung', href: '/docs/bbe-beitragsordnung.pdf' },
    { label: 'Satzung', href: '/docs/bbe-satzung.pdf' },
  ];

  const socialMedia: Array<{ label: string; href: string; Icon: IconType }> = [
    { label: 'Discord', href: 'https://discord.gg/3HCzRgChHs', Icon: FaDiscord },
    { label: 'Instagram', href: 'https://instagram.com/berlin_brandenburg_esports', Icon: FaInstagram },
    { label: 'Twitter', href: 'https://twitter.com/bbesports_ev', Icon: FaTwitter },
    { label: 'Twitch', href: 'https://twitch.tv/bbesports_ev', Icon: FaTwitch },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className={classNames('py-6', 'bg-primary-500', 'text-sm', 'text-white')}>
      <div className={classNames('grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-12', 'container')}>
        <div className={classNames('flex', 'flex-col', 'justify-between', 'text-center', 'md:text-left')}>
          <div>
            Kontakt:
            <a
              href="mailto:info@bbesports.de"
              target="_blank"
              rel="noreferrer"
              className={classNames(
                'flex',
                'gap-2',
                'items-center',
                'hover:opacity-90',
                'transition-opacity',
                'justify-center',
                'md:justify-start'
              )}
            >
              <FaEnvelope />
              info@bbesports.de
            </a>
          </div>
          <span className={classNames('opacity-80')}>&copy; {year} Berlin-Brandenburg eSports e.V.</span>
        </div>
        <div className={classNames('flex', 'flex-col', 'gap-2', 'text-sm', 'text-center')}>
          {links.map(({ label, href }) => (
            <Link
              key={`footer-link-${href}`}
              href={href}
              download={href.endsWith('.pdf')}
              target={href.endsWith('.pdf') ? '_blank' : undefined}
              className={classNames('hover:opacity-90', 'transition-opacity')}
            >
              {label}
            </Link>
          ))}
        </div>
        <div
          className={classNames(
            'md:place-self-end',
            'md:self-start',
            'place-self-center',
            'text-center',
            'md:text-left'
          )}
        >
          Folge uns:
          <div className={classNames('flex', 'gap-3', 'py-2')}>
            {socialMedia.map(({ label, href, Icon }) => (
              <a
                href={href}
                key={`social-${href}`}
                title={label}
                className={classNames('hover:opacity-90', 'transition-opacity')}
                target="_blank"
                rel="noreferrer"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
