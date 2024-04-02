import styles from "./View.module.css";

type Props = {
  gap?: number;
  wrap?: boolean;
  direction?: "column" | "row";
  children?: React.ReactNode;
};

export const View = ({ children, direction, gap, wrap }: Props) => {
  return (
    <div
      className={styles.View}
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
