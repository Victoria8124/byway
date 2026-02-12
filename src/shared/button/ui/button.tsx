import cx from 'classnames';
import styles from './button.module.scss';
import type { IButton } from '../model/button.type';

const Button = ({
  children,
  className,
  color,
  variant = 'primary',
  ...props
}: IButton) => {
  return (
    <button
      className={cx(
        styles.button,
        styles[variant],
        color && styles[color],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
