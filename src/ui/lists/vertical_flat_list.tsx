import {StatusBar} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const _VerticalFlatList = styled.FlatList`
  margin-top: ${StatusBar.currentHeight} || 0;
`;

export const VerticalFlatList = ({
  data,
  id,
  renderItem,
}: {
  data: Record<string, any>[];
  id: string;
  renderItem: React.Component;
}) => {
  return (
    <_VerticalFlatList data={data} renderItem={renderItem} keyExtractor={id} />
  );
};

VerticalFlatList.prototype = {
  data: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
};
