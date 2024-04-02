import { SmallOvalLoader } from "../../assets/icons";
import { classes } from "../../utils/classes.util";
import styles from "./ActionButton.module.css";

type Props = {
  label: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
};

export const ActionButton = ({
  label,
  disabled,
  isLoading,
  onClick,
}: Props) => {
  return (
    <button
      className={classes(
        styles.ActionButton,
        (disabled || isLoading) && styles.Disabled
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {(isLoading && <SmallOvalLoader />) || label}
    </button>
  );
};
