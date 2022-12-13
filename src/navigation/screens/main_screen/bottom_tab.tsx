import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab} from '@navigation/navigators';
import {FirstScreen} from '../first_screen';
import {SecondScreen} from '../second_screen';
import {
  MainBottomTabNavigator,
  MainBottomTabParamList,
  MainBottomTabScreenType,
} from '@navigation/type';

const bottomTabnavigator = createBottomTabNavigator<MainBottomTabParamList>();

export const BottomTab = () => {
  const screens: MainBottomTabScreenType[] = useMemo(
    () => [
      {name: 'First', Component: FirstScreen},
      {name: 'Second', Component: SecondScreen},
    ],
    [],
  );

  return (
    <Tab<MainBottomTabNavigator, MainBottomTabScreenType>
      Navigation={bottomTabnavigator}
      initialRouteName={'First'}
      screens={screens}
    />
  );
};

export default BottomTab;
