import {useState} from 'react';

export const useModal = () => {
  const [visible, setVisible] = useState(false);
  const hideModal = () => setVisible(false);
  const showModal = () => setVisible(true);

  return {visible, hideModal, showModal};
};
