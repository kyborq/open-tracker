import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

import { ModalState } from "../../hooks/useModal";
import styles from "./Popup.module.css";

type Props = {
  state: ModalState;
  width?: number;
  height?: number;
  title?: string;
  children?: React.ReactNode;
};

export const Popup = ({ state, title, width, height, children }: Props) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(popupRef, state.close);

  return (
    <AnimatePresence>
      {state.visible && (
        <motion.div
          ref={popupRef}
          className={styles.Popup}
          style={{ width, height }}
          initial={{ opacity: 0, scale: 0, translateY: 10 }}
          animate={{ opacity: 1, scale: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: -10 }}
        >
          <div className={styles.Content}>
            {!!title && <span className={styles.Title}>{title}</span>}
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
