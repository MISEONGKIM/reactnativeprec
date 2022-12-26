import {CameraView} from '@components';
import {useIsForeground} from '@hooks';
import {TicketStackScreenProps} from '@navigation/type';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import React, {useCallback, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

import {Camera, PhotoFile} from 'react-native-vision-camera';
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

  const onMediaCaptured = useCallback(
    (media: PhotoFile) => {
      navigation.navigate('PhotoScreen', {
        path: media.path,
      });
    },
    [navigation],
  );

  return (
    <_View>
      <CameraView camera={camera} onInitialized={onInitialized} />

      <Button onPress={() => navigation.goBack()}>back</Button>
    </_View>
  );
};
