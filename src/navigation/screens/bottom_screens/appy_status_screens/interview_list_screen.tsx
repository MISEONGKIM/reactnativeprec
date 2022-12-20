import {View, Text} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '@navigation/type';

export const InterviewListScreen = ({
  route,
}: RootStackScreenProps<'InterviewList'>) => {
  return (
    <View>
      <Text>{route.params?.title ?? ''}</Text>
    </View>
  );
};
