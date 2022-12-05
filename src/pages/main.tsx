import React, {useMemo} from 'react';
import {ScreenType, TopTab} from '@navigation';
import {FirstPage} from './first_page';
import {SecondPage} from './second_page';
import {ThirdPage} from './third_page';

const MainPage = () => {
  const screens: ScreenType[] = useMemo(
    () => [
      {name: 'first', Component: FirstPage},
      {name: 'second', Component: SecondPage},
      {name: 'third', Component: ThirdPage},
    ],
    [],
  );
  return <TopTab initialRouteName={'first'} screens={screens} />;
};

export default MainPage;
