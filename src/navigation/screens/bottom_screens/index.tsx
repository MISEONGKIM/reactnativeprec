import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab} from '@navigation/navigators';
import {
  MainBottomTabNavigator,
  MainBottomTabParamList,
  MainBottomTabScreenType,
} from '@navigation/type';

import MainScreen from '../appy_status_screens';
import ApplyStatusScreen from './main_screen';
import MyPageScreen from './my_pages_screen';

const bottomTabnavigator = createBottomTabNavigator<MainBottomTabParamList>();

const BottomScreen = () => {
  const screens: MainBottomTabScreenType[] = [
    {
      name: 'ApplyStatus',
      Component: ApplyStatusScreen,
    },
    {
      name: 'Main',
      Component: MainScreen,
    },
    {
      name: 'MyPage',
      Component: MyPageScreen,
    },
  ];
  return (
    <Tab<MainBottomTabNavigator, MainBottomTabScreenType>
      Navigation={bottomTabnavigator}
      initialRouteName={'Main'}
      screens={screens}
    />
  );
};

export default BottomScreen;
