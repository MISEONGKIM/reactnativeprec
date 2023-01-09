import {heightPercentage, widthPercentage} from '@utils/responsive_size';
import React from 'react';
import styled from 'styled-components/native';

const _TopView = styled.View`
  position: absolute;
  top: 0px;
  background-color: black;
  height: ${heightPercentage(250)}px;
  width: ${widthPercentage(360)}px;
`;
const _LeftView = styled.View`
  position: absolute;
  left: 0px;
  background-color: black;
  height: ${heightPercentage(834)}px;
  width: ${widthPercentage(20)}px;
`;
const _RightView = styled.View`
  position: absolute;
  right: 0px;
  background-color: black;
  height: ${heightPercentage(834)}px;
  width: ${widthPercentage(20)}px;
`;
const _BottomView = styled.View`
  position: absolute;
  bottom: 0px;
  background-color: black;
  height: ${heightPercentage(350)}px;
  width: ${widthPercentage(360)}px;
`;
const _MiddleView = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const EssayCameraGuideView = () => {
  return (
    <>
      <_TopView />
      <_MiddleView>
        <_LeftView />
        <_RightView />
      </_MiddleView>
      <_BottomView />
    </>
  );
};
