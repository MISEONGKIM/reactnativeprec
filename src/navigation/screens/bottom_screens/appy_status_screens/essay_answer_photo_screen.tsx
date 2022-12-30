import {CameraView} from '@components';
import {useIsForeground} from '@hooks';
import {TicketStackScreenProps} from '@navigation/type';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {detect} from '@utils/camera';

import React, {useCallback, useRef, useState} from 'react';
import {Button} from 'react-native-paper';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {Camera, useFrameProcessor} from 'react-native-vision-camera';
import styled from 'styled-components/native';

const _View = styled.View`
  background-color: black;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;

export const EssayAnswerPhotoScreen = () => {
  const camera = useRef<Camera>(null);
  const [isCameraInitialized, setIsCameraInitialized] = useState(false);
  // const isFocussed = useIsFocused();
  // const isForeground = useIsForeground();
  // const isActive = isFocussed && isForeground;
  const navigation =
    useNavigation<
      TicketStackScreenProps<'IdenfityVerification'>['navigation']
    >();

  const onInitialized = useCallback(() => {
    console.log('Camera initialized!');
    setIsCameraInitialized(true);
  }, []);

  const catBounds = useSharedValue({top: 0, left: 0, right: 0, bottom: 0});

  const frameProcessor = useFrameProcessor(frame => {
    console.log('dfdfd');
    // 'worklet';
    detect(frame);
  }, []);
  const boxOverlayStyle = useAnimatedStyle(
    () => ({
      position: 'absolute',
      borderWidth: 1,
      borderColor: 'red',
      ...catBounds.value,
    }),
    [catBounds],
  );
  return (
    <_View>
      <CameraView
        camera={camera}
        onInitialized={onInitialized}
        type={'back'}
        frameProcessor={frameProcessor}
      />
      <Animated.View style={boxOverlayStyle} />

      <Button onPress={() => navigation.goBack()}>back</Button>
    </_View>
  );
};
