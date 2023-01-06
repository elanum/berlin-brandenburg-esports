import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import IconButton from '../../Button/IconButton';
import routes, { Route } from './routes';

interface SidebarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface SubRouteProps extends Route {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SubRoute = ({ href, label: title, subroutes, setOpen: setSidebar }: SubRouteProps): JSX.Element => {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={classNames('px-4', 'py-3', 'cursor-pointer', 'w-full')}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onTouchStart={() => setOpen(!open)}
      onTouchMove={() => setOpen(false)}
    >
      <span
        className={classNames('hover:text-primary-500', 'transition-colors', 'w-full', {
          'text-primary-500': (pathname.length > 2 && pathname.includes(href)) || open,
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
            className={classNames('mt-2', 'ml-2', 'overflow-hidden')}
          >
            {subroutes.map(({ href, label }) => (
              <li
                key={`sidebar-link-${title}-${label}`}
                className={classNames('flex', 'w-full', 'text-md', 'hover:text-primary-500', 'transition-colors')}
              >
                <Link
                  href={href}
                  className={classNames('w-full', 'px-3', 'py-2', {
                    'text-primary-500': pathname === href,
                  })}
                  onClick={() => setSidebar((sideBar) => !sideBar)}
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

const Sidebar = ({ open, setOpen }: SidebarProps): JSX.Element => {
  const { pathname } = useRouter();

  useEffect(() => {
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = open ? 'hidden' : 'unset';
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.nav
            initial={{ width: 0 }}
            animate={{ width: 260 }}
            exit={{ width: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
            className={classNames(
              'md:hidden',
              'overflow-scroll',
              'absolute',
              'shadow-lg',
              'top-0',
              'bottom-0',
              'right-0',
              'h-screen',
              'bg-black',
              'bg-opacity-80',
              'z-50',
              'flex',
              'flex-col',
              'py-6',
              'select-none'
            )}
          >
            <IconButton className={classNames('mb-4')} onClick={() => setOpen((sideBar) => !sideBar)}>
              <IoMdClose />
            </IconButton>

            <ul>
              {routes.map(({ href, label, subroutes = [] }) => (
                <li
                  key={`sidebar-link-${label}`}
                  className={classNames('flex', 'w-full', 'uppercase', 'font-play', 'text-lg')}
                >
                  {!subroutes.length ? (
                    <Link
                      href={href}
                      className={classNames('w-full', 'px-4', 'py-3', 'hover:text-primary-500', 'transition-colors', {
                        'text-primary-500': pathname === href,
                      })}
                      onClick={() => setOpen((sideBar) => !sideBar)}
                    >
                      {label}
                    </Link>
                  ) : (
                    <SubRoute href={href} label={label} subroutes={subroutes} setOpen={setOpen} />
                  )}
                </li>
              ))}
            </ul>
          </motion.nav>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
            onClick={() => setOpen((sideBar) => !sideBar)}
            className={classNames(
              'md:hidden',
              'bg-black',
              'bg-opacity-50',
              'backdrop-blur-sm',
              'fixed',
              'w-screen',
              'h-screen',
              'inset-0',
              'z-40'
            )}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
