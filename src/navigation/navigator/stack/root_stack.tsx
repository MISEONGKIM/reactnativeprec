import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList, RootStackScreenType} from '@navigation/type';
import {Button} from 'react-native';
import {BottomTab} from '../tab';
import {TicketStack} from './ticket_stack';
import {AlramScreen} from '@navigation/screens/top_screens';

const Navigator = createNativeStackNavigator<RootStackParamList>();
const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const RootStack = () => {
  const screens: RootStackScreenType[] = [
    {
      name: 'Bottom',
      Component: BottomTab,
      options: {
        headerRight: () => [
          <Button
            key={1}
            // onPress={() =>
            //   navigationRef.navigate('Ticket', {id: 'root에서 버튼클릭'})
            // }
            title="Ticket"
            color="#333"
          />,
          <Button
            key={2}
            onPress={() => navigationRef.navigate('Alram')}
            title="Alram"
            color="#333"
          />,
        ],
      },
    },
    {
      name: 'TicketStack',
      Component: TicketStack,
      options: {
        headerShown: false,
        headerRight: () => (
          <Button
            //onPress={() => navigationRef.goBack()}
            onPress={() => navigationRef.navigate('Bottom')}
            title="Back"
            color="#333"
          />
        ),
      },
    },
    {
      name: 'Alram',
      Component: AlramScreen,
    },
  ];
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator.Navigator initialRouteName="TicketStack">
        {screens.map((screen, i) => (
          <Navigator.Screen
            key={'Stack' + i}
            name={screen.name}
            component={screen.Component}
            options={screen.options}
          />
        ))}
      </Navigator.Navigator>
    </NavigationContainer>
  );
};
