import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
const _View = styled.View`
  flex: 0;
  flex-direction: row;
  justify-content: center;
  bottom: 40px;
`;

const _TouchableOpacity = styled.TouchableOpacity`
  flex: 0;
  background-color: #fff;
  border-radius: 50px;
  padding: 15px;
  padding-horizontal: 20px;
  align-self: center;
  margin: 20px;
`;

export const CameraButton1 = ({onPress}: {onPress: () => void}) => {
  return (
    <_View>
      <_TouchableOpacity onPress={onPress}>
        <Text>SNAP</Text>
      </_TouchableOpacity>
    </_View>
  );
};
