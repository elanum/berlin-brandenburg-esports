import classNames from 'classnames';
import { NextSeo, NextSeoProps } from 'next-seo';
import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Header/Navigation/Navbar';

interface BaseTemplateProps extends Pick<NextSeoProps, 'title' | 'description' | 'noindex'> {
  children: ReactNode;
  className?: string;
  hero?: StaticImageData & { alt?: string; className?: string };
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
  return (
    <>
      <NextSeo {...generateSeo(seo)} />
      <Navbar />
      <main className={classNames('flex-grow', 'relative', 'mt-20', className)}>
        {hero && (
          <Image
            priority
            src={hero.src}
            alt={hero.alt || seo.title}
            width={hero.width}
            height={hero.height}
            className={classNames('h-[50vh]', 'object-cover', 'w-full', hero.className)}
          />
        )}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default BaseTemplate;
