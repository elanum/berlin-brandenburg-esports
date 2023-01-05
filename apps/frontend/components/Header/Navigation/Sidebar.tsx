import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import IconButton from '../../Button/IconButton';
import routes from './routes';

interface SidebarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

// fixed bg-indigo-600 text-white shadow-lg top-0 right-0 w-full max-w-sm h-screen p-5

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
              'py-6'
            )}
          >
            <IconButton className={classNames('mb-4')} onClick={() => setOpen((sideBar) => !sideBar)}>
              <IoMdClose />
            </IconButton>

            <ul>
              {routes.map(({ href, label }) => (
                <li key={`sidebar-${href}`} className={classNames('flex', 'w-full')}>
                  <Link
                    href={href}
                    className={classNames('w-full', 'uppercase', 'font-play', 'px-4', 'py-3', 'text-lg', {
                      'text-primary-500': pathname === href,
                    })}
                    onClick={() => setOpen((sideBar) => !sideBar)}
                  >
                    {label}
                  </Link>
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
