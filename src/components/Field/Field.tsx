import { ChangeEventHandler, forwardRef, Ref } from "react";

import { classes } from "../../utils/classes.util";
import styles from "./Field.module.css";

type Props = {
  left?: React.ReactNode;
  right?: React.ReactNode;
  placeholder?: string;
  name?: string;
  value?: string;
  primary?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Field = forwardRef(
  (
    { left, placeholder, right, name, value, primary, onChange }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <label className={classes(styles.Field, primary && styles.Primary)}>
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
