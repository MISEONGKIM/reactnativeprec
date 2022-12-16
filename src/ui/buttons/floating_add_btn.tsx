import React from 'react';
import {Button} from 'react-native-paper';

export const FloatingAddBtn = ({onPress}: {onPress: () => void}) => {
  return (
    <Button mode="contained" onPress={onPress}>
      +
    </Button>
  );
};
