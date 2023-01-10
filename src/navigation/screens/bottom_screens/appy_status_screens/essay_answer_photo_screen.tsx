import {AssayQuestionDrawer} from '@components';
import {useCamera} from '@hooks/useCamera';
import {CameraButton1} from '@ui/buttons';
import {CameraView} from '@ui/camera';
import {EssayCameraGuideView} from '@ui/essay_camera_guide_view';
import React from 'react';

export const EssayAnswerPhotoScreen = () => {
  const {camera, takePicture} = useCamera();

  const takePictureNext: Parameters<typeof takePicture>[0] = path => {
    // navigation.navigate('PhotoScreen', {path});
  };
  return (
    <CameraView cameraRef={camera} type={'back'}>
      <AssayQuestionDrawer />
      <EssayCameraGuideView />
      <CameraButton1 onPress={takePicture(takePictureNext)} />
    </CameraView>
  );
};
