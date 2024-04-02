import { SmallOvalLoader } from "../../assets/icons";
import { classes } from "../../utils/classes.util";
import styles from "./ActionButton.module.css";

type Props = {
  label?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  primary?: boolean;
  onClick?: () => void;
};

export const ActionButton = ({
  label,
  disabled,
  isLoading,
  icon,
  primary,
  onClick,
}: Props) => {
  return (
    <button
      className={classes(
        styles.ActionButton,
        primary && styles.Primary,
        (disabled || isLoading) && styles.Disabled
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {(isLoading && <SmallOvalLoader />) || (
        <>
          {icon}
          {label}
        </>
      )}
    </button>
  );
};
