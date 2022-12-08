import React from 'react';
import {Switch} from 'react-native';

export const Switch1 = ({
  isEnabled,
  onValueChange,
}: {
  isEnabled: boolean;
  onValueChange: (value: boolean) => void;
}) => {
  return (
    <Switch
      value={isEnabled}
      onValueChange={onValueChange}
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
    />
  );
};
