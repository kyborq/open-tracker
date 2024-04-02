import cat from "../../assets/cat.png";
import styles from "./EmptyView.module.css";

type Props = {
  text: string;
};

export const EmptyView = ({ text }: Props) => {
  return (
    <div className={styles.EmptyView}>
      <img src={cat} className={styles.Image} />
      <span className={styles.Text}>{text}</span>
    </div>
  );
};
