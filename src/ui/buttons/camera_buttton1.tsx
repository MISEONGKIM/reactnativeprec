import React from 'react';
import styled from 'styled-components/native';
const _View = styled.View`
  flex: 0;
  flex-direction: row;
  justify-content: center;
`;
const _Text = styled.Text`
font-size = 14;
`;

const _TouchableOpacity = styled.TouchableOpacity`
  flex: 0;
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  padding-horizontal: 20px;
  align-self: center;
  margin: 20px;
`;

export const CameraButton1 = ({onPress}: {onPress: () => void}) => {
  return (
    <_View>
      <_TouchableOpacity onPress={onPress}>
        <_Text> SNAP </_Text>
      </_TouchableOpacity>
    </_View>
  );
};
