import React from 'react';
import {SearchInput} from '@ui/inputs';
import styled from 'styled-components/native';
import {SearchViewUnivList} from './lists';

const _SerchView = styled.View`
  padding: 5px;
  border-bottom-width: 1px;
`;

export const SearchView = () => {
  return (
    <_SerchView>
      <SearchInput />
      <SearchViewUnivList />
    </_SerchView>
  );
};
