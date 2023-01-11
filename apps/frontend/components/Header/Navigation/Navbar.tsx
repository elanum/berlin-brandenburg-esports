import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import routes, { Route } from './routes';

const SubRoute = ({ href, label: title, subroutes }: Route): JSX.Element => {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={classNames('cursor-pointer', 'w-full', 'flex', 'relative', 'text-center')}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onTouchStart={() => setOpen(!open)}
      onTouchMove={() => setOpen(false)}
    >
      <span
        className={classNames('hover:text-gray-800', 'hover:bg-gray-200', 'p-1', 'transition-colors', 'w-full', {
          [classNames('text-gray-800', 'bg-gray-200')]: open,
          'text-primary-500': pathname.length > 2 && pathname.includes(href),
        })}
      >
        {title}
      </span>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ type: 'keyframes' }}
            className={classNames(
              'absolute',
              'top-full',
              'inset-x-0',
              'z-10',
              'bg-gray-700',
              'shadow-lg',
              'overflow-hidden',
              'unstyled'
            )}
          >
            {subroutes.map(({ href, label }) => (
              <li
                key={`sidebar-link-${title}-${label}`}
                className={classNames(
                  'flex',
                  'w-full',
                  'text-md',
                  'hover:text-primary-500',
                  'transition-colors',
                  'mb-0'
                )}
              >
                <Link
                  href={href}
                  className={classNames('w-full', 'px-3', 'py-2', {
                    'text-primary-500': pathname === href,
                  })}
                >
                  {label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Navbar = (): JSX.Element => {
  const { pathname } = useRouter();

  return (
    <nav className={classNames('w-full', 'bg-gray-800', 'hidden', 'md:block')}>
      <ul className={classNames('container', 'flex', 'justify-between', 'unstyled', '!mx-auto')}>
        {routes.map(({ href, label, subroutes = [] }) => (
          <li key={`navbar-link-${label}`} className={classNames('w-full', 'flex', 'mb-0')}>
            {!subroutes.length ? (
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
            ) : (
              <SubRoute href={href} label={label} subroutes={subroutes} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
