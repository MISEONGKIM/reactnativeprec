import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
const _UnivFlatList = styled.FlatList`
  margin-top: ${StatusBar.currentHeight} || 0;
`;
export const UnivFlatList = ({data}) => {
  return (
    <_UnivFlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};
