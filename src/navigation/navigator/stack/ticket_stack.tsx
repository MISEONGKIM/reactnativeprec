import React from 'react';
import {TicketStackParamList, TicketStackScreenType} from '@navigation/type';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  TicketScreen,
  IdentityVerificationScreen,
} from '@navigation/screens/top_screens';

const Navigator = createNativeStackNavigator<TicketStackParamList>();

export const TicketStack = () => {
  const screens: TicketStackScreenType[] = [
    {
      name: 'Ticket',
      Component: TicketScreen, ///이것도 손봐야함
    },
    {
      name: 'IdenfityVerification',
      Component: IdentityVerificationScreen,
    },
  ];
  return (
    <Navigator.Navigator
      initialRouteName="Ticket"
      screenOptions={{headerShown: false}}>
      {screens.map((screen, i) => (
        <Navigator.Screen
          key={'TicketStack' + i}
          name={screen.name}
          component={screen.Component}
          options={screen.options}
          // initialParams={screen.initialParams}  이거 필요할까
        />
      ))}
    </Navigator.Navigator>
  );
};
