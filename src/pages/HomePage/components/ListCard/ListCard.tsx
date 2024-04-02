import { NavLink } from "react-router-dom";

import { ArrowRight } from "../../../../assets/icons";
import styles from "./ListCard.module.css";

type Props = {
  title: string;
  tasks?: number;
  path: string;
};

export const ListCard = ({ title, tasks, path }: Props) => {
  return (
    <div className={styles.ListCard}>
      <div className={styles.Info}>
        <span className={styles.Title}>{title}</span>
        {!!tasks && <span className={styles.Count}>{tasks}</span>}
      </div>
      <ArrowRight stroke="#ced4da" />
      <NavLink to={path} className={styles.Link} />
    </div>
  );
};
