import classNames from 'classnames';
import Button, { ButtonProps } from './index';

const IconButton = ({ className, ...props }: ButtonProps): JSX.Element => {
  return <Button variant="text" className={classNames('text-2xl', className)} {...props} />;
};

export default IconButton;
