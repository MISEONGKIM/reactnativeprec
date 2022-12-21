import Loading from '@ui/loading';
import {useCameraDevice} from '@utils/camera';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Camera} from 'react-native-vision-camera';

export const CameraView = ({
  camera,
  onInitialized,
}: {
  camera: React.RefObject<Camera>;
  onInitialized: () => void;
}) => {
  const {frontCameraDevice} = useCameraDevice();

  if (frontCameraDevice == null) {
    return <Loading />;
  }
  return (
    <Camera
      ref={camera}
      photo={true}
      onInitialized={onInitialized}
      style={StyleSheet.absoluteFill}
      device={frontCameraDevice!}
      isActive={true}
    />
  );
};
