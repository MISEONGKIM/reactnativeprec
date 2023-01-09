import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import styled from 'styled-components/native';

const _View = styled.View`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;

export const CameraView = ({
  cameraRef,
  type,
  children,
}: {
  cameraRef: React.LegacyRef<RNCamera>;
  type: 'back' | 'front';
  children: ReactNode[];
}) => {
  return (
    <_View>
      <RNCamera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        type={
          type === 'back'
            ? RNCamera.Constants.Type.back
            : RNCamera.Constants.Type.front
        }
        captureAudio={false}
      />
      {children}
    </_View>
  );
};
