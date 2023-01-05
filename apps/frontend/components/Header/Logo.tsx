import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import IconButton from '../Button/IconButton';
import { BBECircle } from '../Images';
import Sidebar from './Navigation/Sidebar';

const Logo = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} />
      <Link href="/">
        <figure className={classNames('flex', 'items-center', 'px-4')}>
          <Image src={BBECircle} alt="BBE" width={90} height={90} />
          <figcaption
            className={classNames('ml-2', 'flex-col', 'text-3xl', 'font-play', 'font-normal', 'hidden', 'md:flex')}
          >
            <span>Berlin-Brandenburg</span>
            <span>eSports</span>
          </figcaption>
        </figure>
      </Link>
      <div className={classNames('flex', 'md:hidden', 'w-full', 'justify-between', 'container', 'px-4')}>
        <div className={classNames('flex-col', 'flex', 'text-2xl')}>
          <span>Berlin-Brandenburg</span>
          <span>eSports</span>
        </div>
        <IconButton className={classNames('md:hidden')} onClick={() => setOpen(true)}>
          <RiMenu3Fill />
        </IconButton>
      </div>
    </>
  );
};

export default Logo;
