import React from 'react';
import styled from 'styled-components/native';

const _H3 = styled.Text`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;
export const H3 = ({children}: {children: string}) => {
  return <_H3>{children}</_H3>;
};
