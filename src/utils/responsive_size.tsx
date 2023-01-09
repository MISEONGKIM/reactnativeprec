import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const DESIGN_WINDOW_WIDTH = 360;
const DESIGN_WINDOW_HEIGHT = 833.6;

export const widthPercentage = (width: number) => {
  return responsiveWidth((width / DESIGN_WINDOW_WIDTH) * 100);
};

export const heightPercentage = (height: number) => {
  return responsiveHeight((height / DESIGN_WINDOW_HEIGHT) * 100);
};

export const fontPercentage = (size: number) => {
  return responsiveFontSize(size * 0.135);
};
