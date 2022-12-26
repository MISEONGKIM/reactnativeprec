import {Alert, Text, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import type {InterviewListType} from '@test/mock_data';
import {RightToLeftSwipe} from '@ui/right_to_left_swipe';
import {Button} from 'react-native-paper';
const _CardView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin: 10px;
  padding: 5px;
  border-width: 1px;
`;
const _Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 10px;
`;

const RightSwipe = () => {
  return <Text>삭제</Text>;
};

export const SecondPageApplyItvCard = ({
  item,
  onPress,
}: {
  item: InterviewListType;
  onPress: () => void;
}) => {
  const itemText = (Object.keys(item) as Array<keyof InterviewListType>)
    .filter(key => key !== 'code')
    .map((key, i) => <Text key={'univInfoCard' + i}>{item[key]}</Text>);
  return (
    <RightToLeftSwipe
      onSwipeableRightOpen={function (): void {
        Alert.alert(item.univName + '삭제했음 ! ');
      }}
      renderRightActions={<RightSwipe />}>
      <_CardView>
        <_Image source={require('@assets/images/univ.png')} />
        <View>{itemText}</View>
        <Button mode="contained" onPress={onPress}>
          입장
        </Button>
      </_CardView>
    </RightToLeftSwipe>
  );
};
