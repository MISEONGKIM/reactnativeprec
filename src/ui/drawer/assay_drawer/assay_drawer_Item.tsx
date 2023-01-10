import React from 'react';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';
const Item = styled(Button)`
  width: 60px;
  background-color: ${({
    active,
    isFilmComplete,
  }: {
    active: boolean;
    isFilmComplete: boolean;
  }) => (active ? 'blue' : isFilmComplete ? 'gray' : 'black')};
`;

export const AssayDrawerItem = ({
  label,
  isFilmComplete,
  active,
  onPress,
}: {
  label: string;
  isFilmComplete: boolean;
  active: boolean;
  onPress: () => void;
}) => (
  <Item active={active} isFilmComplete={isFilmComplete} onPress={onPress}>
    {label}
  </Item>
);
