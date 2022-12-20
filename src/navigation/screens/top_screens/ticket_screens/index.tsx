import React from 'react';
import {
  RootStackScreenProps,
  TicketStackParamList,
  TicketStackScreenType,
} from '@navigation/type';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IdentityVerificationScreen} from './identity_verification_screen';
import {TicketScreen} from './ticket_screen';

const Navigator = createNativeStackNavigator<TicketStackParamList>();

export const TicketStackScreen = ({
  route,
}: RootStackScreenProps<'TicketStack'>) => {
  const screens: TicketStackScreenType[] = [
    {
      name: 'Ticket',
      Component: TicketScreen, //이것도 손봐야함
      initialParams: route.params,
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
        />
      ))}
    </Navigator.Navigator>
  );
};
