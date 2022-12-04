import classNames from 'classnames';
import { NextPage } from 'next';
import Image from 'next/image';
import { IconType } from 'react-icons';
import { FaDiscord, FaEnvelope, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';
import { IoIosConstruct } from 'react-icons/io';
import { PlayerImage } from '../components/Images';
import BaseTemplate from '../templates/BaseTemplate';

const HomePage: NextPage = () => {
  const links: Array<{ label: string; href: string; Icon: IconType }> = [
    { label: 'Discord', href: 'https://discord.gg/3HCzRgChHs', Icon: FaDiscord },
    { label: 'Instagram', href: 'https://instagram.com/berlin_brandenburg_esports', Icon: FaInstagram },
    { label: 'Twitter', href: 'https://twitter.com/bbesports_ev', Icon: FaTwitter },
    { label: 'Twitch', href: 'https://twitch.tv/bbesports_ev', Icon: FaTwitch },
    { label: 'Email', href: 'mailto:info@bbesports.de', Icon: FaEnvelope },
  ];

  return (
    <BaseTemplate className={classNames('flex', 'flex-col')}>
      <section id="header-image" className={classNames('pt-6', 'relative')}>
        <figure className={classNames('relative')}>
          <Image
            src={PlayerImage}
            alt="Player"
            height={300}
            priority
            className={classNames(
              'object-cover',
              'w-full',
              'h-96',
              'border-y-2',
              'border-primary-500',
              '-scale-x-100',
              'object-[30%_30%]'
            )}
          />
          <div className={classNames('md:absolute', 'inset-0', 'flex', 'items-center')}>
            <div
              className={classNames(
                'p-10',
                'md:m-10',
                'bg-black',
                'bg-opacity-70',
                'w-full',
                'lg:w-1/2',
                'text-center',
                'flex',
                'flex-col',
                'gap-10'
              )}
            >
              <h1 className={classNames('font-semibold', 'text-primary-500', 'text-2xl')}>
                Willkommen auf unserer Website!
              </h1>
              <p>
                Wir haben Berlin - Brandenburg eSports e.V. für Gaming - begeisterte Menschen in Berlin - Brandenburg
                gegründet.
              </p>
              <p>
                Unser Ziel ist es den eSport in und um Berlin zu stärken und eine Anlaufstelle, besonders für
                Studierende, zu schaffen.
              </p>
            </div>
          </div>
        </figure>
      </section>
      <section
        className={classNames(
          'flex',
          'flex-col',
          'flex-grow',
          'justify-center',
          'items-center',
          'w-full',
          'h-full',
          'relative',
          'inset-0',
          'gap-6',
          'text-center',
          'p-6'
        )}
      >
        <IoIosConstruct className={classNames('text-7xl', 'text-gray-300')} />
        <p>Unsere Website befindet sich aktuell noch im Aufbau.</p>
        <p>Folge uns auf unseren Social Media Kanälen um auf dem aktuellen Stand zu sein:</p>
        <div className={classNames('flex', 'text-2xl', 'gap-6')}>
          {links.map(({ Icon, href, label }) => (
            <a title={label} href={href} key={`social-${href}`} target="_blank" rel="noreferrer noreferrer nofollow">
              <Icon />
            </a>
          ))}
        </div>
      </section>
    </BaseTemplate>
  );
};

export default HomePage;
