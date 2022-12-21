import {useState, useEffect} from 'react';
import {AppStateStatus, AppState} from 'react-native';

export const useIsForeground = (): boolean => {
  const [isForeground, setIsForeground] = useState(true);

  useEffect(() => {
    const listener = AppState.addEventListener(
      'change',
      (state: AppStateStatus) => {
        setIsForeground(state === 'active');
      },
    );
    return () => listener.remove();
  }, [setIsForeground]);

  return isForeground;
};
