import { classes } from "../../utils/classes.util";
import styles from "./View.module.css";

type Props = {
  gap?: number;
  wrap?: boolean;
  direction?: "column" | "row";
  children?: React.ReactNode;
  centered?: boolean;
  flex?: number;
};

export const View = ({
  children,
  direction,
  gap,
  wrap,
  centered,
  flex,
}: Props) => {
  return (
    <div
      className={classes(styles.View, centered && styles.Centered)}
      style={{
        flexDirection: direction,
        flexWrap: wrap ? "wrap" : undefined,
        alignContent: wrap && !centered ? "flex-start" : undefined,
        flex,
        gap,
      }}
    >
      {children}
    </div>
  );
};
