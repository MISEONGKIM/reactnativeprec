import React, {ReactNode} from 'react';
import {Pressable} from 'react-native';

export const PressableBGRed = ({
  children,
  onPress,
}: {
  children: ReactNode;
  onPress: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'red' : 'white',
        },
      ]}>
      {children}
    </Pressable>
  );
};
