import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import routes from './routes';

const Navbar = (): JSX.Element => {
  const { pathname } = useRouter();

  return (
    <nav className={classNames('w-full', 'bg-gray-800', 'hidden', 'md:block')}>
      <ul className={classNames('container', 'flex', 'justify-between')}>
        {routes.map(({ href, label }) => (
          <li key={href} className={classNames('w-full', 'flex')}>
            <Link
              className={classNames(
                'w-full',
                'text-center',
                'hover:bg-gray-200',
                'transition-colors',
                'hover:text-gray-800',
                'p-1',
                { 'text-primary-500': pathname === href }
              )}
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
