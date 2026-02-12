import cx from "classnames";
import styles from "./button.module.scss";
import type { IButton } from "../model/button.type";

const Button = ({ children, className, ...props }: IButton) => {
  return (
    <button className={cx(styles.button, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
