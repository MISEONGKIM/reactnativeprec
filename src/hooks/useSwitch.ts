import {useState} from 'react';

export const useSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  //usecallback 해야할까 ?
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  return {isEnabled, toggleSwitch};
};
