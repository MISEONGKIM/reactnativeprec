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
import {EssayAnswerPhotoScreen} from '@navigation/screens/bottom_screens';

const Navigator = createNativeStackNavigator<RootStackParamList>();
const navigationRef = createNavigationContainerRef<RootStackParamList>();
const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#6495ED',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(0, 0, 0)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export const RootStack = () => {
  const screens: RootStackScreenType[] = [
    {
      name: 'Bottom',
      Component: BottomTab,
      options: {
        headerRight: () => [
          <Button
            key={1}
            onPress={
              () =>
                navigationRef.navigate('TicketStack', {id: 'root에서 버튼클릭'}) /// 후ㅠ...
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
      name: 'TicketStack',
      Component: TicketStack,
      options: {
        headerShown: false,
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
    },

    {
      name: 'AssayAnswerPhoto',
      Component: EssayAnswerPhotoScreen,
      options: {
        headerShown: false,
      },
    },
  ];
  return (
    <NavigationContainer ref={navigationRef} theme={MyTheme}>
      <Navigator.Navigator initialRouteName="Bottom">
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
