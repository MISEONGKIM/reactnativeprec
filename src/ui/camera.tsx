import React from 'react';
import {StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import styled from 'styled-components/native';

const _View = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: black;
`;

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export const CameraView = ({
  cameraRef,
  type,
  children,
}: {
  cameraRef: React.LegacyRef<RNCamera>;
  type: 'back' | 'front';
  children: React.ReactElement[] | React.ReactElement;
}) => {
  return (
    <_View>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
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
