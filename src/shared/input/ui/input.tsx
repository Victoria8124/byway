import type { IInput } from '../model/input.type';
import styles from './input.module.scss';
import cx from 'classnames';

const Input = ({
  leftIcon,
  rightIcon,
  className,
  placeholder,
  ...props
}: IInput) => {
  return (
    <div className={cx(styles.inputWrapper, className)}>
      <div className={styles.inputInner}>
        {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
        <input
          placeholder={placeholder}
          aria-label="Search"
          className={styles.input}
          {...props}
        />
        {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
      </div>
    </div>
  );
};

export default Input;
