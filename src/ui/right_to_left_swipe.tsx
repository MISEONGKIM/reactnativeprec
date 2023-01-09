import React, {ReactNode, useRef, useState} from 'react';
import {PanResponder, useWindowDimensions} from 'react-native';
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

export const RightToLeftSwipe = ({
  children,
  renderRightActions,
  onSwipeableRightOpen,
}: {
  children: ReactNode;
  renderRightActions: ReactNode;
  onSwipeableRightOpen: () => void;
}) => {
  const dimensions = useWindowDimensions();
  const [width, setWidth] = useState(dimensions.width);

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
        setWidth(dimensions.width - Math.abs(dx));
      },
      onPanResponderRelease: (evt, gestureState) => {
        const {dx, moveY, y0} = gestureState;
        if (
          dimensions.width - Math.abs(dx) < dimensions.width / 4 &&
          Math.abs(moveY - y0) < 50
        ) {
          onSwipeableRightOpen();
        }
        setWidth(dimensions.width);
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderTerminate: () => {
        setWidth(dimensions.width);
      },
    }),
  ).current;

  return (
    <_ViewContainer {...panResponder.panHandlers}>
      <_DefaultView widthPercent={width}>{children}</_DefaultView>
      <_SwipeView widthPercent={dimensions.width - width}>
        {renderRightActions}
      </_SwipeView>
    </_ViewContainer>
  );
};
