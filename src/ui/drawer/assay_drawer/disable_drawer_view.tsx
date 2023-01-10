import {heightPercentage} from '@utils/responsive_size';
import React from 'react';
import styled from 'styled-components/native';

const _TitleView = styled.View`
  flex-direction: row;
  position: absolute;
  z-index: 1;
`;
const _TextView1 = styled.View`
  width: 12px;
  height: ${heightPercentage(834)}px;
  background-color: gray;
`;

const _TextView2 = styled.View`
  top: 10px;
  padding: 5px;
  width: 50px;
  height: 50px;
  background-color: gray;
`;
const _Title = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;
export const DisableAssayDrawer = ({title}: {title: string}) => (
  <_TitleView>
    <_TextView1 />
    <_TextView2>
      <_Title>{title}</_Title>
    </_TextView2>
  </_TitleView>
);
