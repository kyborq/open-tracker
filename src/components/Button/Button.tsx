import styles from "./Button.module.css";

type Props = {
  label: string;
};

export const Button = ({ label }: Props) => {
  return <button className={styles.Button}>{label}</button>;
};
