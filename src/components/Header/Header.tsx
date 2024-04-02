import LogoIcon from "../../assets/logo.svg?react";
import { Button } from "../Button";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <LogoIcon />
      <Button label="Create list" />
    </header>
  );
};
