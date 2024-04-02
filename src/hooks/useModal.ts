import { useState } from "react";

export type ModalState = {
  visible: boolean;
  open: () => void;
  close: () => void;
};

export const useModal = (): ModalState => {
  const [visible, setVisible] = useState(false);

  const open = () => setVisible(true);
  const close = () => setVisible(false);

  return {
    visible,
    open,
    close,
  };
};
