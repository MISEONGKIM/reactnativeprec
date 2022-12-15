import {StatusBar} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const _HorizontalFlatList = styled.FlatList``;

export const HorizontalFlatList = ({
  data,
  RenderItem,
}: {
  data: Record<string, any>[];
  RenderItem: any; //일단 보류
}) => {
  return (
    <_HorizontalFlatList
      horizontal={true}
      data={data}
      renderItem={RenderItem}
    />
  );
};

/*어떤 array 가 올지 알고 ?  */
HorizontalFlatList.prototype = {
  data: PropTypes.array.isRequired,
};
