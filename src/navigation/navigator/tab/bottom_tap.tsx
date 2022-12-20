import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList, BottomTabScreenType} from '@navigation/type';
import {ApplyStatusTap} from './apply_status_tap';
import {MainScreen, MyPageScreen} from '@navigation/screens/bottom_screens';

const Navigation = createBottomTabNavigator<BottomTabParamList>();

export const BottomTab = () => {
  const screens: BottomTabScreenType[] = [
    {
      name: 'ApplyStatus',
      Component: ApplyStatusTap,
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
