import React from 'react';
import {ViewProps} from 'react-native';
import {
  State,
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';
import {Camera, PhotoFile, TakePhotoOptions} from 'react-native-vision-camera';
import styled from 'styled-components/native';
const _Button = styled.View`
  width: 78px;
  height: 78px;
  border-radius: 39px;
  border-width: 7.8px;
  border-color: white;
  position: absolute;
  align-self: center;
  bottom: 15px;
`;

interface Props extends ViewProps {
  camera: React.RefObject<Camera>;
  onMediaCaptured: (media: PhotoFile) => void;

  enabled: boolean;
}

export const CameraButton = ({camera, onMediaCaptured, enabled}: Props) => {
  const takePhotoOptions: TakePhotoOptions = {
    qualityPrioritization: 'speed',
    skipMetadata: true,
  };

  const takePhoto = async () => {
    try {
      if (camera.current == null) {
        throw new Error('Camera ref is null!');
      }

      console.log('Taking photo...');
      const photo = await camera.current.takePhoto(takePhotoOptions);
      onMediaCaptured(photo);
    } catch (e) {
      console.error('Failed to take photo!', e);
    }
  };

  const onHandlerStateChanged = (event: TapGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      takePhoto();
    }
  };

  return (
    <TapGestureHandler
      enabled={enabled}
      onHandlerStateChange={onHandlerStateChanged}>
      <_Button />
    </TapGestureHandler>
  );
};
