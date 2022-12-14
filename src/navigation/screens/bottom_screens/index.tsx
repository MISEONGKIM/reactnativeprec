import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab} from '@navigation/navigators';
import {
  BottomTabNavigator,
  BottomTabParamList,
  BottomTabScreenType,
} from '@navigation/type';

import MainScreen from '../appy_status_screens';
import ApplyStatusScreen from './main_screen';
import MyPageScreen from './my_pages_screen';

const bottomTabnavigator = createBottomTabNavigator<BottomTabParamList>();

const BottomScreen = () => {
  const screens: BottomTabScreenType[] = [
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
    <Tab<BottomTabNavigator, BottomTabScreenType>
      Navigation={bottomTabnavigator}
      initialRouteName={'Main'}
      screens={screens}
    />
  );
};

export default BottomScreen;
