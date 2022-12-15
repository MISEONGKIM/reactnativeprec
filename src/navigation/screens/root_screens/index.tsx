import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList, RootStackScreenType} from '@navigation/type';
import {Button} from 'react-native';

import BottomScreen from '../bottom_screens';
import {AlramScreen, TicketScreen} from '../top_screens';

const Navigator = createNativeStackNavigator<RootStackParamList>();
const navigationRef = createNavigationContainerRef<RootStackParamList>();
export const RootScreen = () => {
  const screens: RootStackScreenType[] = [
    {
      name: 'Bottom',
      Component: BottomScreen,
      options: {
        headerRight: () => [
          <Button
            key={1}
            onPress={() =>
              navigationRef.navigate('Ticket', {id: 'root에서 버튼클릭'})
            }
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
      name: 'Ticket',
      Component: TicketScreen, //내일하자
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
      <Navigator.Navigator>
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
