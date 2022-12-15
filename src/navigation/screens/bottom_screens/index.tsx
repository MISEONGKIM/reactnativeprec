import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList, BottomTabScreenType} from '@navigation/type';

import ApplyStatusScreen from '../appy_status_screens';
import MainScreen from './main_screen';
import MyPageScreen from './my_pages_screen';

const Navigation = createBottomTabNavigator<BottomTabParamList>();

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
    <Navigation.Navigator
      initialRouteName={'Main'}
      screenOptions={{headerShown: false}}>
      {screens.map((screen, i) => (
        <Navigation.Screen
          key={'bottomtap' + i}
          name={screen.name}
          component={screen.Component}
        />
      ))}
    </Navigation.Navigator>
  );
};

export default BottomScreen;
