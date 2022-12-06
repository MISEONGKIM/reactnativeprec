import React, {useMemo} from 'react';
import {mainScreens, TopTab} from '@navigation';

export const MainPage = () => {
  const screens = useMemo(() => mainScreens, []);
  return <TopTab initialRouteName={'first'} screens={screens} />;
};
