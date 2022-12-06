import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenType} from '../type';
const StackNavigator = createNativeStackNavigator();

export const Stack = ({screens}: {screens: ScreenType[]}) => (
  <StackNavigator.Navigator>
    {screens.map((screen, i) => (
      <StackNavigator.Screen
        key={'Stack' + i}
        name={screen.name}
        component={screen.Component}
        options={screen.options}
      />
    ))}
  </StackNavigator.Navigator>
);
