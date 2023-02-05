import classNames from 'classnames';
import { NextSeo, NextSeoProps } from 'next-seo';
import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import Footer from '../components/Footer';
import JoinUs from '../components/Header/JoinUs';
import Logo from '../components/Header/Logo';
import Navbar from '../components/Header/Navigation/Navbar';

interface BaseTemplateProps extends Pick<NextSeoProps, 'title' | 'description' | 'noindex'> {
  children: ReactNode;
  className?: string;
  hero?: StaticImageData & { alt: string; className?: string; content?: ReactNode };
}

function generateSeo(seo: NextSeoProps): NextSeoProps {
  const { title, description, ...rest } = seo;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...seo?.openGraph,
    },
    ...rest,
  };
}

const BaseTemplate = ({ className, children, hero, ...seo }: BaseTemplateProps): JSX.Element => {
  const { content, alt, className: heroClassName } = hero || {};

  return (
    <>
      <NextSeo {...generateSeo(seo)} />
      <header>
        <div
          className={classNames(
            'container',
            'py-6',
            'flex',
            'flex-col',
            'gap-4',
            'md:flex-row',
            'justify-between',
            'items-center'
          )}
        >
          <Logo />
          <JoinUs />
        </div>
        <Navbar />
        {hero && (
          <figure className={classNames('relative', 'mt-6')}>
            <Image
              priority
              src={hero}
              alt={alt}
              className={classNames('h-96', 'object-cover', 'w-full', heroClassName)}
            />
            {content && (
              <div className={classNames('md:absolute', 'inset-0', 'flex', 'items-center', 'container')}>{content}</div>
            )}
          </figure>
        )}
      </header>
      <main
        className={classNames(
          'flex-grow',
          'relative',
          'bg-gray-800',
          'container',
          '2xl:max-w-screen-xl',
          'my-6',
          className
        )}
      >
        {children}
      </main>
      <footer>
        <div className={classNames('h-5', 'bg-primary-500', 'w-full')} />
        <Footer />
      </footer>
    </>
  );
};

export default BaseTemplate;
