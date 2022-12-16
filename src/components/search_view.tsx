import React from 'react';
import {SearchInput} from '@ui/inputs';
import styled from 'styled-components/native';
import {SearchViewInterviewList} from './lists';
import {Link} from '@react-navigation/native';

const _SerchView = styled.View`
  padding: 5px;
  border-bottom-width: 1px;
`;
const _LinkView = styled.View`
  justify-content: flex-end;
`;
export const SearchView = ({tabTitle}: {tabTitle: string}) => {
  return (
    <_SerchView>
      <SearchInput />
      <_LinkView>
        <Link to={{screen: 'InterviewList', params: {title: tabTitle}}}>
          전체보기
        </Link>
      </_LinkView>
      <SearchViewInterviewList />
    </_SerchView>
  );
};
