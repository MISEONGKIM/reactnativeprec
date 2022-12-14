import React, {useMemo} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Tab} from '@navigation/navigators';
import FirstScreen from './first_screen';
import SecondScreen from './second_screen';
import {
  TopTabNavigator,
  TopTabScreenType,
  TopTabParamList,
} from '@navigation/type';

const topTabNavigator = createMaterialTopTabNavigator<TopTabParamList>();

const ApplyStatusScreen = () => {
  const screens: TopTabScreenType[] = useMemo(
    () => [
      {name: 'First', Component: FirstScreen},
      {name: 'Second', Component: SecondScreen},
    ],
    [],
  );

  return (
    <Tab<TopTabNavigator, TopTabScreenType>
      // option={{swipeEnabled: false}} 일단패스
      Navigation={topTabNavigator}
      initialRouteName={'First'}
      screens={screens}
    />
  );
};

export default ApplyStatusScreen;
