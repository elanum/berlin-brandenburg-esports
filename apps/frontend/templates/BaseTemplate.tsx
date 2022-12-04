import classNames from 'classnames';
import { NextSeo, NextSeoProps } from 'next-seo';
import { ReactNode } from 'react';
import Logo from '../components/Header/Logo';

interface BaseTemplateProps
  extends Pick<NextSeoProps, 'title' | 'description'> {
  children: ReactNode;
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

const BaseTemplate = ({ children, ...seo }: BaseTemplateProps): JSX.Element => {
  return (
    <>
      <NextSeo {...generateSeo(seo)} />
      <header className={classNames('container', 'py-6')}>
        <Logo />
      </header>
      <main
        className={classNames(
          'flex-grow',
          'relative',
          'bg-gray-800',
          'container'
        )}
      >
        {children}
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default BaseTemplate;
