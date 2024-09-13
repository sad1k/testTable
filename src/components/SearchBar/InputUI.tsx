import { InputHTMLAttributes } from "react";
import styles from './SearchBar.module.css'
import searchIcon from '../../assets/search.svg'

export const InputUI = ({...props}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={styles.inputWrapper}>
    <input className={styles.inputStyle} {...props} />
    <img src={searchIcon} alt="search" width={'20px'} height={'20px'} />
    </div>
  );
};
