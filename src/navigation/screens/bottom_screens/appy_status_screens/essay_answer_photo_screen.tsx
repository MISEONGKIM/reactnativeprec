import React, {useEffect, useMemo, useRef} from 'react';
import styled from 'styled-components/native';
import '@tensorflow/tfjs-react-native';
import * as tf from '@tensorflow/tfjs';
// import * as cocossd from '@tensorflow-models/coco-ssd';
import {cameraWithTensors} from '@tensorflow/tfjs-react-native';

import {Dimensions, LogBox, Platform} from 'react-native';
import Canvas, {CanvasRenderingContext2D} from 'react-native-canvas';

import {Camera} from 'expo-camera';
const TensorCamera = cameraWithTensors(Camera);

const _View = styled.View`
  flex: 1;
  background-color: #fff;
`;

const _Canvas = styled(Canvas)`
  position: absolute;
  zindex: 10000000;
  width: 100%;
  height: 100%;
`;

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
LogBox.ignoreAllLogs(true);
export const EssayAnswerPhotoScreen = () => {
  const canvas = useRef<Canvas>();
  const context = useRef<CanvasRenderingContext2D>();
  // const [model, setModel] = useState<cocossd.ObjectDetection>();
  const textureDims = useMemo(
    () =>
      Platform.OS == 'ios'
        ? {height: 1920, width: 1080}
        : {height: 1200, width: 1600},
    [],
  );
  const onCameraReady = (images: IterableIterator<tf.Tensor3D>) => {
    const loop = async () => {
      const nextImageTensor = images.next().value;
      // if (!model || !nextImageTensor)
      //   throw new Error('No model or image tensor');
      // await detect(nextImageTensor);
      console.log('nextImageTensor ', nextImageTensor);
      requestAnimationFrame(loop);
    };
    loop();
  };
  // const detect = async (nextImageTensor: any) => {
  //   const predication = await model?.detect(nextImageTensor);
  //   drawRectangle(predication!, nextImageTensor);
  // };
  // const drawRectangle = (
  //   prediction: cocossd.DetectedObject[],
  //   nextImageTensor: any,
  // ) => {
  //   if (!context.current || !canvas.current) {
  //     return;
  //   }
  //   //   //to match the size of camera preview
  //   const scaleWidth = windowWidth / nextImageTensor.shape[1];
  //   const scaleHeight = windowHeight / nextImageTensor.shape[0];
  //   const flipHorizontal = Platform.OS === 'ios' ? false : true;
  //   context.current.clearRect(0, 0, windowWidth, windowHeight);
  //   prediction.map(item => {
  //     const [x, y, width, height] = item.bbox;
  //     const boundingBoxX = flipHorizontal
  //       ? canvas.current!.width - x * scaleWidth - width * scaleHeight
  //       : x * scaleWidth;
  //     const boundingBoxY = y * scaleHeight;
  //     context.current?.strokeRect(
  //       boundingBoxX,
  //       boundingBoxY,
  //       width * scaleWidth,
  //       height * scaleHeight,
  //     );
  //     context.current?.strokeText(
  //       item.class,
  //       boundingBoxX - 5,
  //       boundingBoxY - 5,
  //     );
  //   });
  // };
  const handleCanvas = async (canvasFor: Canvas) => {
    if (!canvasFor) {
      return;
    }
    canvasFor.width = windowWidth;
    canvasFor.height = windowHeight;
    const ctx: CanvasRenderingContext2D = canvasFor.getContext('2d');
    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'red';
    ctx.lineWidth = 3;
    context.current = ctx;
    canvas.current = canvasFor;
  };
  useEffect(() => {
    (async () => {
      await tf.ready();
      // setModel(await cocossd.load());
    })();
  }, []);
  return (
    <_View>
      <TensorCamera
        style={{width: '100%', height: '100%'}}
        cameraTextureHeight={textureDims.height}
        cameraTextureWidth={textureDims.width}
        resizeDepth={3}
        resizeHeight={200}
        resizeWidth={152}
        onReady={onCameraReady}
        autorender={true}
        useCustomShadersToResize={false}
      />
      {/* <_Canvas ref={handleCanvas} /> */}
    </_View>
  );
};
