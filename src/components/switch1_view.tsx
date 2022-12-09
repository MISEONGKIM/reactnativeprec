import {useSwitch} from '@hooks';
import {Switch1} from '@ui/switch';
import React from 'react';
import styled from 'styled-components/native';

const _SwitchView = styled.View`
  justify-content: flex-end;
  padding: 5px;
  border-width: 1px;
`;
export const SwitchView = () => {
  const {isEnabled, toggleSwitch} = useSwitch();

  return (
    <_SwitchView>
      <Switch1 isEnabled={isEnabled} onValueChange={toggleSwitch} />
    </_SwitchView>
  );
};
