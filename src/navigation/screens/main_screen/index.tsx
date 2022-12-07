import React, {useMemo} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {TopTab} from '@navigation/navigators';
import {FirstScreen} from '../first_screen';
import {SecondScreen} from '../second_screen';
import {
  MainTabNavigator,
  MainScreenType,
  MainTabParamList,
} from '@navigation/type';

const navigator = createMaterialTopTabNavigator<MainTabParamList>();

export const MainScreen = () => {
  const screens: MainScreenType[] = useMemo(
    () => [
      {name: 'First', Component: FirstScreen},
      {name: 'Second', Component: SecondScreen},
    ],
    [],
  );
  return (
    <TopTab<MainTabNavigator, MainScreenType>
      Navigation={navigator}
      initialRouteName={'First'}
      screens={screens}
    />
  );
};
