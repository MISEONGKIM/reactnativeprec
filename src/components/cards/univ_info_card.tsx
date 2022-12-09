import {Text, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import type {SecondPageListType} from '@test/mock_data';
import {PressableBGRed} from '@ui/pressable_red';

const _CardView = styled.View`
  flex: 1;
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

export const UnivInfoCard = ({item}: {item: SecondPageListType}) => {
  const itemText = (Object.keys(item) as Array<keyof SecondPageListType>).map(
    (key, i) => <Text key={'univInfoCard' + i}>{item[key]}</Text>,
  );
  return (
    <PressableBGRed
      onPress={() => {
        throw new Error('Function not implemented.');
      }}>
      <_CardView>
        <_Image source={require('@assets/images/univ.png')} />
        <View>{itemText}</View>
      </_CardView>
    </PressableBGRed>
  );
};
