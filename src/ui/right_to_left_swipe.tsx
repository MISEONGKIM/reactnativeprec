import React, {ReactNode, useRef, useState} from 'react';
import {Dimensions, PanResponder} from 'react-native';
import styled from 'styled-components/native';

const _ViewContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-self: stretch;
  margin-bottom: 5px;
  height: 120px;
`;

const _DefaultView = styled.View`
  justify-content: center;
  width: ${({widthPercent}: {widthPercent: number}) => widthPercent}px;
`;

const _SwipeView = styled.View`
  background-color: red;
  justify-content: flex-end;
  width: ${({widthPercent}: {widthPercent: number}) => widthPercent}px;
`;

const DIMENSIONS_WIDTH = Dimensions.get('screen').width;

export const RightToLeftSwipe = ({
  children,
  renderRightActions,
  onSwipeableRightOpen,
}: {
  children: ReactNode;
  renderRightActions: ReactNode;
  onSwipeableRightOpen: () => void;
}) => {
  const [width, setWidth] = useState(DIMENSIONS_WIDTH);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return gestureState.dx < 0;
      },
      onPanResponderMove: (evt, gestureState) => {
        const {dx, moveY, y0} = gestureState;

        if (Math.abs(moveY - y0) > 50) {
          return;
        }
        setWidth(DIMENSIONS_WIDTH - Math.abs(dx));
      },
      onPanResponderRelease: (evt, gestureState) => {
        const {dx, moveY, y0} = gestureState;
        if (
          DIMENSIONS_WIDTH - Math.abs(dx) < DIMENSIONS_WIDTH / 4 &&
          Math.abs(moveY - y0) < 50
        ) {
          onSwipeableRightOpen();
        }
        setWidth(DIMENSIONS_WIDTH);
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderTerminate: () => {
        setWidth(DIMENSIONS_WIDTH);
      },
    }),
  ).current;

  return (
    <_ViewContainer {...panResponder.panHandlers}>
      <_DefaultView widthPercent={width}>{children}</_DefaultView>
      <_SwipeView widthPercent={DIMENSIONS_WIDTH - width}>
        {renderRightActions}
      </_SwipeView>
    </_ViewContainer>
  );
};
