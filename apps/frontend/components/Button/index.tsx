import classNames from 'classnames';
import Link, { LinkProps as NextLinkProps } from 'next/link';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type HTMLLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & NextLinkProps;
type HTMLButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  href?: never;
};

export type ButtonProps = (HTMLLinkProps | HTMLButtonProps) & { variant?: 'contained' | 'text' };

const Button = ({ className, href, children, variant = 'contained', ...props }: ButtonProps): JSX.Element => {
  const styles = classNames('button', { 'button-contained': variant === 'contained' }, className);

  if (href) {
    return (
      <Link href={href} className={styles} {...(props as HTMLLinkProps)}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={styles} {...(props as HTMLButtonProps)}>
      {children}
    </button>
  );
};

export default Button;
