import {useChecked} from '@hooks/useChecked';
import React from 'react';
import {RadioButton, Text} from 'react-native-paper';
import styled from 'styled-components/native';

const _View = styled.View`
  flex-direction: row;
`;
const RadioButton1 = ({
  value,
  text,
  checkedState,
}: {
  value: string;
  text: string;
  checkedState: ReturnType<typeof useChecked>;
}) => {
  return (
    <_View>
      <RadioButton
        value={value}
        status={value === checkedState.checked ? 'checked' : 'unchecked'}
        onPress={() => checkedState.setChecked(value)}
      />
      <Text>{text}</Text>
    </_View>
  );
};

export default RadioButton1;
