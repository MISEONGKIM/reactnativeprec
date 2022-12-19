import {Text, Dimensions} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {TicketType} from '@test/mock_data';
import {H2} from '@ui/text';

const _CardView = styled.View`
  border-bottom-width: 1px;
  background-color: #ffcad5;
  height: ${Dimensions.get('window').height * 0.7}px;
  width: ${Dimensions.get('window').width * 0.95}px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
`;

export const TicketCard = ({item}: {item: TicketType}) => {
  return (
    <_CardView>
      <H2>{item.univName}</H2>
      <Text>{item.selTypeName}</Text>
      <Text>{item.majorName}</Text>
      <Text>{item.indenfityNumber}</Text>
      <Text>{item.name}</Text>
    </_CardView>
  );
};
