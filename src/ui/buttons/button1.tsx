import React from 'react';
import styled from 'styled-components/native';
/// 얘도 안먹히는데 ?
const _Button = styled.Button`
  border-radius: 12px;
  text-align: center;
  background-color: #04aa6d;
  color: white;
`;
export const Button1 = ({
  children,
  onPress,
}: {
  children: string;
  onPress: () => void;
}) => {
  return <_Button title={children} onPress={onPress} />;
};
