import { FormHTMLAttributes, forwardRef } from "react";
import { InputUI } from "../SearchBar/InputUI";
import styles from "./EditForm.module.css";

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  data: Record<string, unknown>;
}

export const EditFormUI = forwardRef<HTMLFormElement, Props>(
  ({ data, onSubmit, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={styles.editForm}
        onSubmit={onSubmit}
        {...props}
      >
        {Object.entries(data).map(([key, value]) => {
          if (typeof value === "string") {
            return (
              <label
                key={`form-${key}`}
                id={`form-${key}`}
                htmlFor={`form-${key}`}
              >
                <div style={{ textTransform: "capitalize" }}>{key}</div>
                <InputUI name={key} />
              </label>
            );
          }
        })}
        <button>Save</button>
      </form>
    );
  }
);
