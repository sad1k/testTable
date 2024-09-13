import { ReactNode } from "react";
import styles from "./Modal.module.css";
import close from "../../assets/close.svg";

interface ModalProps {
  active: boolean;
  onClose: () => void;
  children: ReactNode;
  closeOnBackgroundClick?: boolean;
}

export const ModalUI = ({
  active,
  children,
  onClose,
  closeOnBackgroundClick,
}: ModalProps) => {
  
  return (
    <div
      className={styles.modal + " " + (active ? styles.active : "")}
      onClick={closeOnBackgroundClick ? onClose : () => {}}
    >
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
        <button className={styles.closeButton} onClick={onClose}>
          <img width="20px" height="20px" src={close} alt="close" />
        </button>
          {children}
        </div>
    </div>
  );
};
