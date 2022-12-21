import React, {useCallback, useMemo} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {
  State,
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';
import Reanimated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Camera, PhotoFile, TakePhotoOptions} from 'react-native-vision-camera';
import styled from 'styled-components/native';
const CAPTURE_BUTTON_SIZE = 78;
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  shadow: {
    position: 'absolute',
    width: CAPTURE_BUTTON_SIZE,
    height: CAPTURE_BUTTON_SIZE,
    borderRadius: CAPTURE_BUTTON_SIZE / 2,
    backgroundColor: '#e34077',
  },
  button: {
    width: CAPTURE_BUTTON_SIZE,
    height: CAPTURE_BUTTON_SIZE,
    borderRadius: CAPTURE_BUTTON_SIZE / 2,
    borderWidth: 7.8,
    borderColor: 'white',
  },
});

interface Props extends ViewProps {
  camera: React.RefObject<Camera>;
  onMediaCaptured: (media: PhotoFile) => void;

  enabled: boolean;
}
//////// 소스 전체적으로 이해해야함
export const CameraButton = ({
  camera,
  onMediaCaptured,
  enabled,
  style,
  ...props
}: Props) => {
  const takePhotoOptions = useMemo<TakePhotoOptions>(
    () => ({
      photoCodec: 'jpeg',
      qualityPrioritization: 'speed',
      quality: 90,
      skipMetadata: true,
    }),
    [],
  );
  const isPressingButton = useSharedValue(false);

  //#region Camera Capture
  const takePhoto = useCallback(async () => {
    try {
      if (camera.current == null) throw new Error('Camera ref is null!');

      console.log('Taking photo...');
      const photo = await camera.current.takePhoto(takePhotoOptions);
      onMediaCaptured(photo);
    } catch (e) {
      console.error('Failed to take photo!', e);
    }
  }, [camera, onMediaCaptured, takePhotoOptions]);

  const shadowStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          scale: withSpring(isPressingButton.value ? 1 : 0, {
            mass: 1,
            damping: 35,
            stiffness: 300,
          }),
        },
      ],
    }),
    [isPressingButton],
  );

  const buttonStyle = useAnimatedStyle(() => {
    let scale: number;
    if (enabled) {
      if (isPressingButton.value) {
        scale = withRepeat(
          withSpring(1, {
            stiffness: 100,
            damping: 1000,
          }),
          -1,
          true,
        );
      } else {
        scale = withSpring(0.9, {
          stiffness: 500,
          damping: 300,
        });
      }
    } else {
      scale = withSpring(0.6, {
        stiffness: 500,
        damping: 300,
      });
    }

    return {
      position: 'absolute',
      alignSelf: 'center',
      bottom: 15,
      opacity: withTiming(enabled ? 1 : 0.3, {
        duration: 100,
        easing: Easing.linear,
      }),
      transform: [
        {
          scale: scale,
        },
      ],
    };
  }, [enabled, isPressingButton]);

  const onHandlerStateChanged = useCallback(
    async ({nativeEvent: event}: TapGestureHandlerStateChangeEvent) => {
      console.debug(`state: ${Object.keys(State)[event.state]}`);
      switch (event.state) {
        case State.BEGAN: {
          isPressingButton.value = true;
          return;
        }
        case State.END:
        case State.FAILED:
        case State.CANCELLED: {
          try {
            await takePhoto();
          } finally {
            setTimeout(() => {
              isPressingButton.value = false;
            }, 500);
          }
          return;
        }
        default:
          break;
      }
    },
    [isPressingButton, takePhoto],
  );
  return (
    <TapGestureHandler
      enabled={enabled}
      onHandlerStateChange={onHandlerStateChanged}
      shouldCancelWhenOutside={false}
      maxDurationMs={99999999} // <-- this prevents the TapGestureHandler from going to State.FAILED when the user moves his finger outside of the child view (to zoom)
    >
      <Reanimated.View {...props} style={buttonStyle}>
        <Reanimated.View style={styles.flex}>
          <Reanimated.View style={[styles.shadow, shadowStyle]} />
          <View style={styles.button} />
        </Reanimated.View>
      </Reanimated.View>
    </TapGestureHandler>
  );
};
