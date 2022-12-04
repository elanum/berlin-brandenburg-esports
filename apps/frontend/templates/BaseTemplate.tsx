import classNames from 'classnames';
import { NextSeo, NextSeoProps } from 'next-seo';
import { ReactNode } from 'react';
import Footer from '../components/Footer';
import JoinUs from '../components/Header/JoinUs';
import Logo from '../components/Header/Logo';

interface BaseTemplateProps extends Pick<NextSeoProps, 'title' | 'description'> {
  children: ReactNode;
  className?: string;
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

const BaseTemplate = ({ className, children, ...seo }: BaseTemplateProps): JSX.Element => {
  return (
    <>
      <NextSeo {...generateSeo(seo)} />
      <header
        className={classNames(
          'container',
          'pt-6',
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
      </header>
      <main className={classNames('flex-grow', 'relative', 'bg-gray-800', 'container', 'my-6', className)}>
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
