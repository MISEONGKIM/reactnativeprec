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

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Stack} from '@navigation/navigators';
import BottomScreen from '../bottom_screens';
import {AlramScreen, TicketScreen} from '../top_screens';

const navigator = createNativeStackNavigator<RootStackParamList>();
const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const RootScreen = () => {
  const screens: RootStackScreenType[] = [
    {
      name: 'Bottom',
      Component: BottomScreen,
      options: {
        headerRight: () => [
          <Button
            onPress={() => navigationRef.navigate('Ticket')}
            title="Ticket"
            color="#333"
          />,
          <Button
            onPress={() => navigationRef.navigate('Alram')}
            title="Alram"
            color="#333"
          />,
        ],
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
