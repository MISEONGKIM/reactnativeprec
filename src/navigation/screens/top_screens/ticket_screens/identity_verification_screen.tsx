import React, {useCallback, useRef, useState} from 'react';
import {TicketStackScreenProps} from '@navigation/type';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {CameraView} from '@components';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';
import {CameraButton} from '@ui/buttons';
import {Camera, PhotoFile} from 'react-native-vision-camera';
import {useIsForeground} from '@hooks';
const _View = styled.View`
  background-color: black;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;

const _Image = styled.Image`
  position: absolute;
  alignself: center;
  top: 200px;
  left: 30px;
  width: 300px;
  height: 300px;
`;

export const IdentityVerificationScreen = () => {
  const camera = useRef<Camera>(null);
  const [isCameraInitialized, setIsCameraInitialized] = useState(false);
  const isFocussed = useIsFocused();
  const isForeground = useIsForeground();
  const isActive = isFocussed && isForeground;
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
      <_Image source={require('@assets/images/user.png')} />
      <CameraButton
        camera={camera}
        onMediaCaptured={onMediaCaptured}
        enabled={isCameraInitialized && isActive}
      />
      <Button onPress={() => navigation.goBack()}>back</Button>
    </_View>
  );
};
