// import Loading from '@ui/loading';
// import React, {useCallback} from 'react';
// import {Alert, StyleProp, StyleSheet, ViewStyle} from 'react-native';
// import {
//   Camera,
//   CameraRuntimeError,
//   Frame,
//   FrameProcessorPerformanceSuggestion,
//   useCameraDevices,
// } from 'react-native-vision-camera';

// export const CameraView = ({
//   camera,
//   onInitialized,
//   style,
//   type,
//   frameProcessor,
// }: {
//   style?: StyleProp<ViewStyle>;
//   camera: React.RefObject<Camera>;
//   onInitialized: () => void;
//   type: 'front' | 'back';
//   frameProcessor?: (frame: Frame) => void;
// }) => {
//   const device = useCameraDevices();
//   const onFrameProcessorSuggestionAvailable = useCallback(
//     (suggestion: FrameProcessorPerformanceSuggestion) => {
//       console.log(
//         `Suggestion available! ${suggestion.type}: Can do ${suggestion.suggestedFrameProcessorFps} FPS`,
//       );
//     },
//     [],
//   );

//   const onError = useCallback((error: CameraRuntimeError) => {
//     console.error(error);
//     Alert.alert(error.message);
//   }, []);
//   if (device[type] == null) {
//     return <Loading />;
//   }
//   return (
//     <Camera
//       ref={camera}
//       photo={true}
//       onInitialized={onInitialized}
//       style={style ?? StyleSheet.absoluteFill}
//       device={device[type]!}
//       isActive={true}
//       onError={onError}
//       enableZoomGesture={false}
//       frameProcessor={
//         device[type]?.supportsParallelVideoProcessing
//           ? frameProcessor
//           : undefined
//       }
//       onFrameProcessorPerformanceSuggestionAvailable={
//         onFrameProcessorSuggestionAvailable
//       }
//     />
//   );
// };
