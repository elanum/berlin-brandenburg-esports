import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { BBECircle } from '../Images';

interface Props {
  className?: string;
}

const Logo = ({ className }: Props): JSX.Element => (
  <Link href="/" className={classNames('flex', 'items-center', 'gap-x-1', 'lg:gap-x-2', className)}>
    <Image src={BBECircle} alt="BBE" className={classNames('w-12', 'h-12', 'md:w-14', 'md:h-14')} />
    <pre className={classNames('font-play', 'text-sm', 'lg:text-xl')}>{'Berlin-Brandenburg\neSports'}</pre>
  </Link>
);

export default Logo;
