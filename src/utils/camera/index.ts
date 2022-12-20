import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {CameraPermissionStatusCls} from './permission_status';

export const cameraPermissionCheck = async () => {
  const cameraPermission = await Camera.getCameraPermissionStatus();
  return CameraPermissionStatusCls.createPermissionStatus(
    cameraPermission,
  ).nextStep();
};

export const useCameraDevice = () => {
  const devices = useCameraDevices();
  return {frontCameraDevice: devices.front};
};
