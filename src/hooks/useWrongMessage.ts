import {useState} from 'react';

export const useWrongMessage = () => {
  const [isWrongMessage, setIsWrongMessage] = useState(false);
  const showWrongMessage = () => setIsWrongMessage(true);
  const hideWrongMessage = () => setIsWrongMessage(false);
  return {isWrongMessage, showWrongMessage, hideWrongMessage};
};
