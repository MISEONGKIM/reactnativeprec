import {Alert} from 'react-native';
import {Camera, CameraPermissionStatus} from 'react-native-vision-camera';

enum CameraPermissionStatusEum {
  AUTHORIZED = 'authorized',
  NOTDETERMINED = 'not-determined',
  DENIED = 'denied',
  RESTRICTED = 'restricted',
}

export abstract class CameraPermissionStatusCls {
  static createPermissionStatus(status: CameraPermissionStatus) {
    switch (status) {
      case CameraPermissionStatusEum.AUTHORIZED:
        return new AuthorizedStatus();
      case CameraPermissionStatusEum.NOTDETERMINED:
        return new NotDeterminedStatus();
      case CameraPermissionStatusEum.DENIED:
        return new DeniedStatus();
      case CameraPermissionStatusEum.RESTRICTED:
        return new RestrictedStatus();
      default:
        throw new Error('카메라 권한 타입을 찾을 수 없습니다.');
    }
  }
  abstract nextStep(): void;
}

class AuthorizedStatus extends CameraPermissionStatusCls {
  nextStep() {
    return;
  }
}
class NotDeterminedStatus extends CameraPermissionStatusCls {
  async nextStep() {
    const newCameraPermission = await Camera.requestCameraPermission();
    CameraPermissionStatusCls.createPermissionStatus(
      newCameraPermission,
    ).nextStep();
  }
}
class DeniedStatus extends CameraPermissionStatusCls {
  nextStep() {
    Alert.alert('권한 거절했음. 설정가서 카메라 권한 설정해라.');
  }
}
class RestrictedStatus extends CameraPermissionStatusCls {
  nextStep() {
    Alert.alert('아이폰 설정가서 제한 모드 해제해라 ');
  }
}
