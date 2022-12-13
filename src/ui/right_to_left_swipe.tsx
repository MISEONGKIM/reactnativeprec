import React, {ReactNode, useRef, useState} from 'react';
import {Animated, Dimensions, PanResponder, View} from 'react-native';
import styled from 'styled-components/native';

const _ViewContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-self: stretch;
  margin-bottom: 5px;
`;

const _DefaultView = styled(Animated.createAnimatedComponent(View))`
  background-color: white;
  justify-content: center;
  width: ${({widthPercent}: {widthPercent: number}) => widthPercent};
`;

const _SwipeView = styled.View`
  background-color: red;
  justify-content: flex-end;
  width: ${({widthPercent}: {widthPercent: number}) => widthPercent};
`;

const DIMENSIONS_WIDTH = Dimensions.get('window').width;

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
  const clear = () => {
    // Animated.spring(pan, {toValue: {x: 0, y: 0}}).start();
    setWidth(DIMENSIONS_WIDTH);
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        const {dx} = gestureState;
        return dx < 0;
      },
      onPanResponderMove: (evt, gestureState) => {
        const {dx} = gestureState;
        setWidth(DIMENSIONS_WIDTH - Math.abs(dx));
      },
      onPanResponderRelease: (evt, gestureState) => {
        console.log('onPanResponderRelease', DIMENSIONS_WIDTH, width);
        if (width < 10) {
          onSwipeableRightOpen();
        }
        clear();
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderTerminate: () => {
        clear();
        console.log('onPanResponderTerminate');
      },
    }),
  ).current;

  return (
    <_ViewContainer>
      <_DefaultView widthPercent={width} {...panResponder.panHandlers}>
        {children}
      </_DefaultView>
      <_SwipeView
        widthPercent={DIMENSIONS_WIDTH - width}
        {...panResponder.panHandlers}>
        {renderRightActions}
      </_SwipeView>
    </_ViewContainer>
  );
};
