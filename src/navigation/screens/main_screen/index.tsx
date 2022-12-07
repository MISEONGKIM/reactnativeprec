import React, {useMemo} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {TopTab} from '@navigation/navigators';
import {FirstScreen} from '../first_screen';
import {SecondScreen} from '../second_screen';
import {MainScreenType, MainTabParamList} from '@navigation/type';
import {Text, View} from 'react-native';

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
    <TopTab<MainScreenType>
      Navigation={navigator}
      initialRouteName={'First'}
      screens={screens}
    />
  );
};
