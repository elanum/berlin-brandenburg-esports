import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import Button from '../../Button';
import IconButton from '../../Button/IconButton';
import Logo from '../Logo';
import routes, { Route } from './routes';
import Sidebar from './Sidebar';

const SubRoute = ({ href, label: title, subroutes }: Route): JSX.Element => {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={classNames('w-full', 'flex', 'relative', 'text-center', 'select-none', 'group')}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onTouchStart={() => setOpen(!open)}
      onTouchMove={() => setOpen(false)}
    >
      <span
        className={classNames(
          'group-hover:text-gray-800',
          'group-hover:bg-gray-200',
          'p-2',
          'transition-colors',
          'w-full',
          {
            [classNames('text-gray-800', 'bg-gray-200')]: open,
            'text-primary-500': pathname.length > 2 && pathname.includes(href),
          }
        )}
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
              'overflow-hidden'
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
                  className={classNames('w-full', 'px-4', 'py-3', {
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
  const [open, setOpen] = useState(false);

  return (
    <header className={classNames('w-full', 'bg-black', 'fixed', 'top-0', 'h-20', 'z-10', 'flex', 'items-center')}>
      <nav className={classNames('container', 'flex', 'items-center', 'h-full', 'gap-8')}>
        <Logo className={classNames('flex-grow')} />
        <Sidebar open={open} setOpen={setOpen} />
        <ul className={classNames('lg:grid', 'h-full', 'flex-grow', 'grid-cols-4', 'hidden')}>
          {routes.map(({ href, label, subroutes = [] }) => (
            <li
              key={`navbar-link-${label}`}
              className={classNames('w-full', 'flex', 'mb-0', 'whitespace-nowrap', 'items-center')}
            >
              {!subroutes.length ? (
                <Link
                  className={classNames(
                    'w-full',
                    'text-center',
                    'hover:bg-gray-200',
                    'transition-colors',
                    'hover:text-gray-800',
                    'p-2',
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
          <li className={classNames('flex', 'items-center', 'justify-end')}>
            <Button href="/docs/bbe-antrag.pdf" download target="_blank">
              Mitglied werden
            </Button>
          </li>
        </ul>
        <IconButton className={classNames('lg:hidden')} onClick={() => setOpen(true)}>
          <RiMenu3Fill />
        </IconButton>
      </nav>
    </header>
  );
};

export default Navbar;
