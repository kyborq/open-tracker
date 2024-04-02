import { ChangeEventHandler, forwardRef, Ref } from "react";

import styles from "./Field.module.css";

type Props = {
  left?: React.ReactNode;
  right?: React.ReactNode;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Field = forwardRef(
  (
    { left, placeholder, right, name, value, onChange }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <label className={styles.Field}>
        {left}
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className={styles.Input}
          name={name}
          value={value}
          onChange={onChange}
        />
        {right}
      </label>
    );
  }
);
