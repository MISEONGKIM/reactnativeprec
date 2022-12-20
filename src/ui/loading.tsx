import {ActivityIndicator} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
const _View = styled.View`
  justify-content: center;
`;
const Loading = () => (
  <_View>
    <ActivityIndicator />
  </_View>
);

export default Loading;
