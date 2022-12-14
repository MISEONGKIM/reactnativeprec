import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';

import {
  RootStackNavigator,
  RootStackParamList,
  RootStackScreenType,
} from '@navigation/type';
import {Button} from 'react-native';

import {MainScreen} from '../main_screens';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Stack} from '@navigation/navigators';

const navigator = createNativeStackNavigator<RootStackParamList>();
const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const BottomScreen = () => {
  const screens: RootStackScreenType[] = [
    {
      name: 'Main',
      Component: MainScreen,
      options: {
        headerTitle: 'title',
        headerTitleAlign: 'center',
        headerRight: () => (
          <Button
            onPress={() => {
              navigationRef.navigate('Setting');
            }}
            title="Info"
            color="#333"
          />
        ),
      },
    },
    {
      name: 'Ticket',
      Component: TicketScreen,
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
    {
      name: 'Alram',
      Component: AlramScreen,
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
    <NavigationContainer ref={navigationRef}>
      <Stack<RootStackNavigator, RootStackScreenType>
        Navigator={navigator}
        screens={screens}
      />
    </NavigationContainer>
  );
};
