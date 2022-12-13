import {StatusBar} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const _VerticalFlatList = styled.FlatList`
  margintop: ${StatusBar.currentHeight} || 0;
`;

export const VerticalFlatList = ({
  data,
  RenderItem,
}: {
  data: Record<string, any>[];
  RenderItem: any; //일단 보류
}) => {
  return <_VerticalFlatList data={data} renderItem={RenderItem} />;
};
/*어떤 array 가 올지 알고 ?  */
VerticalFlatList.prototype = {
  data: PropTypes.array.isRequired,
};
