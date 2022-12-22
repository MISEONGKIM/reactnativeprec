import {useState} from 'react';

export const useDialog = () => {
  const [visible, setVisible] = useState(false);
  const hideDialog = () => setVisible(false);
  const showDialog = () => setVisible(true);

  return {visible, hideDialog, showDialog};
};
