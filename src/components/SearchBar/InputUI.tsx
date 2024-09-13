import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputUIProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: string;
  rightIcon?: string;
  altIcon?: string;
}

export const InputUI = ({
  leftIcon,
  rightIcon,
  altIcon,
  ...props
}: InputUIProps) => {
  return (
    <div className={styles.inputWrapper}>
      {leftIcon ? (
        <img src={leftIcon} alt={altIcon} width={"20px"} height={"20px"} />
      ) : (
        ""
      )}
      <input className={styles.inputStyle} {...props} />
      {rightIcon ? (
        <img src={rightIcon} alt={altIcon} width={"20px"} height={"20px"} />
      ) : (
        ""
      )}
    </div>
  );
};
