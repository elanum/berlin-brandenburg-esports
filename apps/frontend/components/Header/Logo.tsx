import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { BBECircle } from '../Images';

const Logo = (): JSX.Element => {
  return (
    <Link href="/">
      <figure className={classNames('flex', 'items-center', 'px-4')}>
        <Image src={BBECircle} alt="BBE" width={90} height={90} />
        <figcaption
          className={classNames('ml-2', 'flex', 'flex-col', 'text-2xl', 'sm:text-3xl', 'font-play', 'font-normal')}
        >
          <span>Berlin-Brandenburg</span>
          <span>eSports</span>
        </figcaption>
      </figure>
    </Link>
  );
};

export default Logo;
