import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';

import {RootStackParamList, RootScreenType} from '@navigation/type';

import {MainScreen} from '../main_screen';
import {SettingScreen} from '../setting_screen';
import {Button} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const StackNavigator = createNativeStackNavigator<RootStackParamList>();
const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const RootScreen = () => {
  const screens: RootScreenType[] = [
    {
      name: 'Main',
      Component: MainScreen,
      options: {
        headerTitle: 'title',
        headerTitleAlign: 'center',
        headerRight: () => (
          <Button
            onPress={() => navigationRef.navigate('Setting')}
            title="Info"
            color="#333"
          />
        ),
      },
    },
    {
      name: 'Setting',
      Component: SettingScreen,
      options: {
        headerRight: () => (
          <Button
            onPress={() => navigationRef.goBack()}
            title="Back"
            color="#333"
          />
        ),
      },
    },
  ];
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};
