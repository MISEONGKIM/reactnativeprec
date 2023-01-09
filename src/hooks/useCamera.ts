import {useRef} from 'react';
import {RNCamera} from 'react-native-camera';

export const useCamera = () => {
  const camera = useRef<RNCamera>(null);

  const takePicture = (nextExecute: (path: string) => void) => async () => {
    if (camera.current) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.current!.takePictureAsync(options);
      nextExecute(data.uri);
    }
  };
  return {camera, takePicture};
};
