import {Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {InterviewListType} from '@test/mock_data';
import {H3} from '@ui/text';

const _CardView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin: 10px;
  padding: 5px;
  border-width: 1px;
`;

const _UnivInfoView = styled.View`
  border-width: 1px;
`;

const _Image = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 10px;
`;

export const SearchViewInterviewCard = ({item}: {item: InterviewListType}) => {
  return (
    <_CardView>
      <_Image source={require('@assets/images/univ.png')} />
      <_UnivInfoView>
        <H3>{item.univName}</H3>
        <Text>{item.ipsiYear}</Text>
        <Text>{item.ipsigubun}</Text>
      </_UnivInfoView>
    </_CardView>
  );
};
