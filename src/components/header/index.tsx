import {View, Text} from 'react-native';
import React from 'react';

export const Header = ({title}: {title: string}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
