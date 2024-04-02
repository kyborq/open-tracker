import styles from "./Card.module.css";

type Props = {
  title: string;
  text?: string;
  children?: React.ReactNode;
};

export const Card = ({ title, text, children }: Props) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Header}>
        <h2 className={styles.Title}>{title}</h2>
        {!!text && <span className={styles.Description}>{text}</span>}
      </div>
      {children}
    </div>
  );
};
