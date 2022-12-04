import classNames from 'classnames';
import Image from 'next/image';
import { BBECircle } from '../Images';

const Logo = (): JSX.Element => {
  return (
    <figure className={classNames('flex', 'items-center')}>
      <Image src={BBECircle} alt="BBE" width={90} height={90} />
      <figcaption
        className={classNames(
          'ml-2',
          'flex',
          'flex-col',
          'text-3xl',
          'font-play',
          'font-normal'
        )}
      >
        <span>Berlin-Brandenburg</span>
        <span>eSports</span>
      </figcaption>
    </figure>
  );
};

export default Logo;
