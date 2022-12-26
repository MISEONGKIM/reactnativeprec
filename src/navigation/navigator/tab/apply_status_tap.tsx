import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {TopTabScreenType, TopTabParamList} from '@navigation/type';
import {FirstScreen, SecondScreen} from '@navigation/screens/bottom_screens';

const Navigation = createMaterialTopTabNavigator<TopTabParamList>();

export const ApplyStatusTap = () => {
  const screens: TopTabScreenType[] = [
    {name: 'First', Component: FirstScreen},
    {name: 'Second', Component: SecondScreen},
  ];

  return (
    <Navigation.Navigator initialRouteName={'Second'}>
      {screens.map((screen, i) => (
        <Navigation.Screen
          key={'toptap' + i}
          name={screen.name}
          component={screen.Component}
        />
      ))}
    </Navigation.Navigator>
  );
};
