import React from 'react';
import {univRegisterInput} from '@constants/placeholder';
import styled from 'styled-components/native';

const _Input = styled.TextInput`
  height: 40px;
  border-width: 1px;
  margin: 12px;
  padding: 10px;
`;

export const UnivnameRegisterInput = () => (
  <_Input placeholder={univRegisterInput} onChangeText={() => {}} value={''} />
);
