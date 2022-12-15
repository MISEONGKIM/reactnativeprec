import React from 'react';
import {SearchInput} from '@ui/inputs';
import styled from 'styled-components/native';
import {SearchViewInterviewList} from './lists';
import {Link} from '@react-navigation/native';

const _SerchView = styled.View`
  padding: 5px;
  border-bottom-width: 1px;
`;

export const SearchView = () => {
  return (
    <_SerchView>
      <SearchInput />
      <Link>전체보기</Link>
      <SearchViewInterviewList />
    </_SerchView>
  );
};
