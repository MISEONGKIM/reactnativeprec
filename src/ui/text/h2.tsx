import React from 'react';
import styled from 'styled-components/native';

const _H2 = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
export const H2 = ({children}: {children: string}) => {
  return <_H2>{children}</_H2>;
};
