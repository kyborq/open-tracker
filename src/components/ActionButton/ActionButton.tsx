import { classes } from "../../utils/classes.util";
import styles from "./ActionButton.module.css";

type Props = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
};

export const ActionButton = ({ label, disabled, onClick }: Props) => {
  return (
    <button
      className={classes(styles.ActionButton, disabled && styles.Disabled)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
