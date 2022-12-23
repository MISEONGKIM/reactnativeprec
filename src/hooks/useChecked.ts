import {useState} from 'react';

export const useChecked = (value: string) => {
  const [checked, setChecked] = useState(value);

  return {checked, setChecked};
};
