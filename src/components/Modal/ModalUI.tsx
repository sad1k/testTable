import { ReactNode } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  active: boolean;
  setActive: (value) => void;
  children: ReactNode;
}

export const ModalUI = ({ active, setActive, children }: ModalProps) => {
  return (
    <div
      className={styles.modal + " " + (active ? styles.active : "")}
      onClick={() => setActive(false)}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
