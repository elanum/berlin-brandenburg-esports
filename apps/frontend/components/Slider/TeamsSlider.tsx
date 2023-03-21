import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import LeagueOfLegendsLogo from '../../public/images/lol-logo.png';
import Overwatch2Logo from '../../public/images/ow2-logo.png';
import RocketLeagueLogo from '../../public/images/rl-logo.png';
import ValorantLogo from '../../public/images/valo-logo.png';

interface Slide {
  src: StaticImageData;
  alt: string;
  className?: string;
  href: `/${string}`;
}

const TeamsSlider = (): JSX.Element => {
  const slides: Slide[] = [
    { src: LeagueOfLegendsLogo, alt: 'League of Legends', className: 'bg-black', href: '/games/league-of-legends' },
    { src: Overwatch2Logo, alt: 'Overwatch 2', className: 'bg-white p-12', href: '/games/overwatch-2' },
    { src: RocketLeagueLogo, alt: 'Rocket League', className: 'bg-[#FDBC08]', href: '/games/rocket-league' },
    { src: ValorantLogo, alt: 'Valorant', className: 'bg-[#A73A3A]', href: '/games/valorant' },
  ];

  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{ 640: { slidesPerView: 3 } }}
      autoplay
      modules={[Autoplay, Pagination]}
      className="group"
      pagination={{ dynamicBullets: true }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={`team-slide-${slide.alt}`}>
          <Link href={slide.href}>
            <Image
              src={slide.src}
              placeholder="blur"
              alt={slide.alt}
              className={classNames(
                'object-contain',
                'aspect-video',
                'p-4',
                'md:group-hover:opacity-70',
                'ease-in-out',
                'duration-300',
                'md:transition-opacity',
                'md:hover:!opacity-100',
                slide.className
              )}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamsSlider;
