import styles from "./View.module.css";

type Props = {
  gap?: number;
  direction?: "column" | "row";
  children?: React.ReactNode;
};

export const View = ({ children, direction, gap }: Props) => {
  return (
    <div className={styles.View} style={{ flexDirection: direction, gap }}>
      {children}
    </div>
  );
};
