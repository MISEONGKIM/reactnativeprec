import {Frame} from 'react-native-vision-camera';

export const detect = (frame: Frame) => {
  console.log('Frame', frame);
};

// import cv, { boundingRect, computeCorrespondEpilines, Scalar } from "@techstark/opencv-js";
// import { loadDataFile } from "./cvDataFile";

// const msize = new cv.Size(0, 0);
// let faceCascade;

// export async function loadHaarFaceModels() {
//   console.log("=======start downloading Haar-cascade models=======");
//   return loadDataFile(
//     "haarcascade_frontalface_default.xml",
//     "models/haarcascade_frontalface_default.xml"
//   )
//     .then(
//       () =>
//         new Promise((resolve) => {
//           setTimeout(() => {
//             // load pre-trained classifiers
//             faceCascade = new cv.CascadeClassifier();
//             faceCascade.load("haarcascade_frontalface_default.xml");
//             resolve();
//           }, 2000);
//         })
//     )
//     .then(() => {
//       console.log("=======downloaded Haar-cascade models=======");
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// /**
//  * Detect faces from the input image.
//  * See https://docs.opencv.org/master/d2/d99/tutorial_js_face_detection.html
//  * @param {cv.Mat} img Input image
//  * @returns the modified image with detected faces drawn on it.
//  */
// export function detectHaarFace(img, faceImgRef) {
//   // const newImg = img.clone();
//   const newImg = img;

//   const gray = new cv.Mat();
//   const thresh = new cv.Mat();
//   cv.cvtColor(newImg, gray, cv.COLOR_RGBA2GRAY, 0);
//   //이진화
//   cv.threshold(gray, thresh, 177, 200, cv.THRESH_BINARY);

//   const contours = new cv.MatVector();
//   const hierarchy = new cv.Mat();
//   //외곽선 정보 얻기, 바깥쪽,전체점
//   cv.findContours(
//     thresh,
//     contours,
//     hierarchy,
//     cv.RETR_EXTERNAL,
//     cv.CHAIN_APPROX_SIMPLE
//   );

//   for (let i = 0; i < contours.size(); ++i) {
//    //외곽선, 곡선 근사화
//     const approx =  new cv.Mat();
//     const arclen = 0.02 * cv.arcLength(contours.get(i), true);
//    cv.approxPolyDP(contours.get(i), approx, arclen, true);
//     console.log('d',approx );
//    if (approx.size() === 4) {
//    const rc = boundingRect(approx);
//    cv.rectangle(newImg, rc, new cv.Scalar(255, 0, 255), 2);
//    }
//    approx.delete();
//   }

//   gray.delete();
//   thresh.delete();
//   contours.delete();
//   hierarchy.delete();

//   return newImg;
// }
