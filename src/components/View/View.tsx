import { classes } from "../../utils/classes.util";
import styles from "./View.module.css";

type Props = {
  gap?: number;
  wrap?: boolean;
  direction?: "column" | "row";
  children?: React.ReactNode;
  centered?: boolean;
};

export const View = ({ children, direction, gap, wrap, centered }: Props) => {
  return (
    <div
      className={classes(styles.View, centered && styles.Centered)}
      style={{
        flexDirection: direction,
        flexWrap: wrap ? "wrap" : undefined,
        gap,
      }}
    >
      {children}
    </div>
  );
};
