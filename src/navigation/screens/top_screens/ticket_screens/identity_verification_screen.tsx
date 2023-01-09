import {useCamera} from '@hooks/useCamera';
import {TicketStackScreenProps} from '@navigation/type';
import {useNavigation} from '@react-navigation/native';
import {CameraButton1} from '@ui/buttons';
import {CameraView} from '@ui/camera';
import React from 'react';
export const IdentityVerificationScreen = () => {
  const {camera, takePicture} = useCamera();
  const navigation =
    useNavigation<
      TicketStackScreenProps<'IdenfityVerification'>['navigation']
    >();

  const takePictureNext: Parameters<typeof takePicture>[0] = path => {
    navigation.navigate('PhotoScreen', {path});
  };
  return (
    <CameraView cameraRef={camera} type={'front'}>
      <CameraButton1 onPress={takePicture(takePictureNext)} />
    </CameraView>
  );
};
