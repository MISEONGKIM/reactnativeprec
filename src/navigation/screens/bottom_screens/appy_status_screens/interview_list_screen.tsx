import {View, Text} from 'react-native';
import React from 'react';
import {ApplyStatusStackScreenProps} from '@navigation/type';

///이페이지 이동했을 때 headertitle 변경되어야함 !
export const InterviewListScreen = ({
  route,
}: ApplyStatusStackScreenProps<'InterviewList'>) => {
  return (
    <View>
      <Text>{route.params?.title ?? ''}</Text>
    </View>
  );
};
