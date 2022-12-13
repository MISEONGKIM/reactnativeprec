import {useSwitch} from '@hooks';
import {Switch1} from '@ui/switch';
import React from 'react';
import styled from 'styled-components/native';

const _SwitchView = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  padding: 5px;
  border-width: 1px;
`;

const _SwitchViewText = styled.Text`
  width: 100px;
`;
export const SwitchView = ({text}: {text: string}) => {
  const {isEnabled, toggleSwitch} = useSwitch();

  return (
    <_SwitchView>
      <_SwitchViewText>{text}</_SwitchViewText>
      <Switch1 isEnabled={isEnabled} onValueChange={toggleSwitch} />
    </_SwitchView>
  );
};
