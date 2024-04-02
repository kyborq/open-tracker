import { ChangeEventHandler, forwardRef, Ref } from "react";

import { classes } from "../../utils/classes.util";
import styles from "./Field.module.css";

type Props = {
  left?: React.ReactNode;
  right?: React.ReactNode;
  placeholder?: string;
  padding?: number;
  name?: string;
  min?: string | number;
  max?: string | number;
  type?: string;
  value?: string;
  primary?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Field = forwardRef(
  (
    {
      left,
      placeholder,
      right,
      name,
      padding,
      value,
      max,
      min,
      type,
      primary,
      onChange,
    }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <label
        className={classes(styles.Field, primary && styles.Primary)}
        style={{ padding }}
      >
        {left}
        <input
          ref={ref}
          max={max}
          min={min}
          type={type || "text"}
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
