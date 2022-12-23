import {useChecked} from '@hooks/useChecked';
import React from 'react';
import {RadioButton, Text} from 'react-native-paper';
import styled from 'styled-components/native';

const _View = styled.View`
  flex-direction: row;
`;

export interface RadioButtonItemType {
  value: string;
  text: string;
}
export const RadioButton1 = ({
  items,
  initValue,
}: {
  items: RadioButtonItemType[];
  initValue: string;
}) => {
  const checkedState = useChecked(initValue);

  return (
    <RadioButton.Group
      onValueChange={newValue => checkedState.setChecked(newValue)}
      value={checkedState.checked}>
      {items.map(item => (
        <_View key={'radio' + item.value}>
          <RadioButton value={item.value} />
          <Text>{item.text}</Text>
        </_View>
      ))}
    </RadioButton.Group>
  );
};
