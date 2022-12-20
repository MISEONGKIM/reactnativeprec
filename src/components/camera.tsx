import Loading from '@ui/loading';
import {useCameraDevice} from '@utils/camera';
import React from 'react';
import {Camera} from 'react-native-vision-camera';

export const CameraView = () => {
  const {frontCameraDevice} = useCameraDevice();
  if (frontCameraDevice == null) {
    return <Loading />;
  }
  return <Camera device={frontCameraDevice!} isActive={true} />;
};
