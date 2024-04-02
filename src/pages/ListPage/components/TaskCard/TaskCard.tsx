import { Task } from "../../../../api/models/task.model";
import { PlayIcon } from "../../../../assets/icons";
import { ActionButton } from "../../../../components";
import { convertEstimate } from "../../../../utils/estimate.utils";
import styles from "./TaskCard.module.css";

type Props = {
  task: Task;
};

export const TaskCard = ({ task }: Props) => {
  const estimateTime = convertEstimate(task.estimate);
  const spendedTime = convertEstimate(task.spended);

  return (
    <div className={styles.TaskCard}>
      <div className={styles.Checkbox} />
      <span className={styles.Title}>{task.title}</span>
      <div className={styles.Actions}>
        <div className={styles.Time}>
          <span className={styles.Spended}>{spendedTime}</span>
          <span className={styles.Estimate}>/</span>
          <span className={styles.Estimate}>{estimateTime}</span>
        </div>
        {/* <ActionButton icon={<StopIcon />} compact /> */}
        <ActionButton icon={<PlayIcon />} compact />
      </div>
    </div>
  );
};
