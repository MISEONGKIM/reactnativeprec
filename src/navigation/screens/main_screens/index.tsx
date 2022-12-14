import React, {useMemo} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Tab} from '@navigation/navigators';
import FirstScreen from './first_screen';
import SecondScreen from './second_screen';
import {
  MainTopTabNavigator,
  MainTopTabScreenType,
  MainTopTabParamList,
} from '@navigation/type';

const topTabNavigator = createMaterialTopTabNavigator<MainTopTabParamList>();

export const MainScreen = () => {
  const screens: MainTopTabScreenType[] = useMemo(
    () => [
      {name: 'First', Component: FirstScreen},
      {name: 'Second', Component: SecondScreen},
    ],
    [],
  );

  return (
    <Tab<MainTopTabNavigator, MainTopTabScreenType>
      // option={{swipeEnabled: false}} 일단패스
      Navigation={topTabNavigator}
      initialRouteName={'First'}
      screens={screens}
    />
  );
};
