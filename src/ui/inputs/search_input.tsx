import {searchInput} from '@constants/placeholder';
import React from 'react';
import styled from 'styled-components/native';

const _SearchInput = styled.TextInput`
  height: 40px;
  border-width: 1px;
  margin: 12px;
  padding: 10px;
`;

export const SearchInput = () => {
  return (
    <_SearchInput
      placeholder={searchInput}
      onChangeText={() => {}}
      value={''}
    />
  );
};
