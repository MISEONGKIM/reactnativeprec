import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from '@navigation/type';
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
  return (
    <NavigationContainer ref={navigationRef} theme={MyTheme}>
      <Navigator.Navigator initialRouteName="Bottom">
        <Navigator.Screen
          key={'Bottom'}
          name={'Bottom'}
          component={BottomTab}
          options={{
            headerRight: () => [
              <Button
                key={1}
                onPress={
                  () =>
                    navigationRef.navigate('TicketStack', {
                      id: 'root에서 버튼클릭',
                    }) /// 후ㅠ...
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
          }}
        />

        <Navigator.Screen
          key={'TicketStack'}
          name={'TicketStack'}
          component={TicketStack}
          options={{
            headerShown: false,
            headerRight: () => (
              <Button
                onPress={() => navigationRef.goBack()}
                title="Back"
                color="#333"
              />
            ),
          }}
        />

        <Navigator.Screen
          key={'Alram'}
          name={'Alram'}
          component={AlramScreen}
        />

        <Navigator.Screen
          key={'AssayAnswerPhoto'}
          name={'AssayAnswerPhoto'}
          component={EssayAnswerPhotoScreen}
          options={{
            headerShown: false,
          }}
        />
      </Navigator.Navigator>
    </NavigationContainer>
  );
};
