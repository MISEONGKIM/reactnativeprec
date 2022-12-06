import {FirstPage, MainPage, SecondPage, ThirdPage} from '@pages';
import {ScreenType} from './type';

export const appScreens: ScreenType[] = [
  {
    name: 'main',
    Component: MainPage,
    options: {
      title: 'mainTitle',
    },
  },
];

export const mainScreens: ScreenType[] = [
  {name: 'first', Component: FirstPage},
  {name: 'second', Component: SecondPage},
  {name: 'third', Component: ThirdPage},
];
