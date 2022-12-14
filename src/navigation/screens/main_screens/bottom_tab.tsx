import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab} from '@navigation/navigators';
import {
  MainBottomTabNavigator,
  MainBottomTabParamList,
  MainBottomTabScreenType,
} from '@navigation/type';

const bottomTabnavigator = createBottomTabNavigator<MainBottomTabParamList>();

export const BottomTab = () => {
  const screens: MainBottomTabScreenType[] = useMemo(() => [], []);

  return (
    <Tab<MainBottomTabNavigator, MainBottomTabScreenType>
      Navigation={bottomTabnavigator}
      initialRouteName={'First'}
      screens={screens}
    />
  );
};

export default BottomTab;
