import React from 'react';
import styled from 'styled-components/native';

const _Switch1 = styled.Switch`
  width: 50px;
`;
export const Switch1 = ({
  isEnabled,
  onValueChange,
}: {
  isEnabled: boolean;
  onValueChange: (value: boolean) => void;
}) => {
  return (
    <_Switch1
      value={isEnabled}
      onValueChange={onValueChange}
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
    />
  );
};
