import classNames from 'classnames';
import Link, { LinkProps as NextLinkProps } from 'next/link';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & NextLinkProps;
type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  href?: never;
};

type Props = LinkProps | ButtonProps;

const Button = ({ className, href, children, ...props }: Props): JSX.Element => {
  const styles = classNames('button', className);

  if (href) {
    return (
      <Link href={href} className={styles} {...(props as LinkProps)}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={styles} {...(props as ButtonProps)}>
      {children}
    </button>
  );
};

export default Button;
