import {univSearchInput} from '@constants/placeholder';
import React from 'react';
import styled from 'styled-components/native';

const _Input = styled.TextInput`
  height: 40px;
  border-width: 1px;
  margin: 12px;
  padding: 10px;
`;

export const UniveNameSearchInput = () => (
  <_Input placeholder={univSearchInput} onChangeText={() => {}} value={''} />
);
