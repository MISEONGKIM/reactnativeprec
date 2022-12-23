import {Text} from 'react-native';
import React from 'react';
import {Checkbox} from 'react-native-paper';
import styled from 'styled-components/native';

const _View = styled.View`
  flex-direction: row;
`;

const _CheckBox = ({initValue}: {initValue: boolean}) => {
  const [checked, setChecked] = React.useState(initValue);

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

export const CheckBox1 = ({
  items,
}: {
  items: Array<{text: string; checked: boolean}>;
}) => (
  <>
    {items.map((item, i) => (
      <_View key={'checkBox1' + i}>
        <_CheckBox initValue={item.checked} />
        <Text>{item.text}</Text>
      </_View>
    ))}
  </>
);
