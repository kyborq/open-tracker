import styles from "./PageHeader.module.css";

type Props = {
  title: string;
  text?: string;
  children?: React.ReactNode;
};

export const PageHeader = ({ title, text, children }: Props) => {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderTitle}>
        <h3 className={styles.Title}>{title}</h3>
        {!!text && <span className={styles.Text}>{text}</span>}
      </div>
      {children}
    </div>
  );
};
