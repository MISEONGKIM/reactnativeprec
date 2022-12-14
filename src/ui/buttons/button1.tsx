import React from 'react';
import styled from 'styled-components/native';
/// 얘도 안먹히는데 ?
const _Button = styled.Button`
  border-radius: 12px;
  text-align: center;
  background-color: #04aa6d;
  color: white;
  width: 10px;
`;
export const Button1 = ({
  children,
  onPress,
  disabled,
}: {
  children: string;
  onPress: () => void;
  disabled: boolean;
}) => {
  return <_Button title={children} onPress={onPress} disabled={disabled} />;
};
