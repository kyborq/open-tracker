import LogoGithub from "../../assets/logo-github.svg?react";
import LogoSmallIcon from "../../assets/logo-small.svg?react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Logo}>
        <LogoSmallIcon />
        <span className={styles.Label}>OpenTracker 2024</span>
      </div>
      <LogoGithub />
    </footer>
  );
};
