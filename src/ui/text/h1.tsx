import React from 'react';
import styled from 'styled-components/native';

const _H1 = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;
export const H1 = ({children}: {children: string}) => {
  return <_H1>{children}</_H1>;
};
