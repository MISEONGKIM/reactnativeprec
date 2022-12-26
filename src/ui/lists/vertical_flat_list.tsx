import {StatusBar} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const _VerticalFlatList = styled.FlatList`
  margintop: ${StatusBar.currentHeight} || 0;
`;

export const VerticalFlatList = <T extends Record<string, any>>({
  data,
  renderItem,
}: {
  data: Array<T>;
  renderItem: React.Component; ///ㅠㅠㅠ
}) => {
  return <_VerticalFlatList data={data} renderItem={renderItem} />;
};
/*어떤 array 가 올지 알고 ?  */
VerticalFlatList.prototype = {
  data: PropTypes.array.isRequired,
};
