import classNames from 'classnames';
import { IconType } from 'react-icons';

interface Props {
  icon: IconType;
  label: string;
}

const IconBox = ({ icon: Icon, label }: Props): JSX.Element => (
  <div className={classNames('flex', 'flex-col', 'justify-center', 'items-center', 'gap-2')}>
    <Icon size={48} className={classNames('text-primary-500')} />
    <div className={classNames('text-lg')}>{label}</div>
  </div>
);

export default IconBox;
