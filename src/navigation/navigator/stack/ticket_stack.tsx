import React from 'react';
import {RootStackScreenProps, TicketStackParamList} from '@navigation/type';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  TicketScreen,
  IdentityVerificationScreen,
  PhotoScreen,
} from '@navigation/screens/top_screens';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Navigator = createNativeStackNavigator<TicketStackParamList>();

export const TicketStack = () => {
  const rootNavigation =
    useNavigation<RootStackScreenProps<'TicketStack'>['navigation']>();

  return (
    <Navigator.Navigator initialRouteName="Ticket">
      <Navigator.Screen
        key={'StackTicket'}
        name={'Ticket'}
        component={TicketScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => rootNavigation.navigate('Bottom')}
              title="Home"
              color="#333"
            />
          ),
        }}
      />

      <Navigator.Screen
        key={'IdenfityVerification'}
        name={'IdenfityVerification'}
        component={IdentityVerificationScreen}
      />

      <Navigator.Screen
        key={'PhotoScreen'}
        name={'PhotoScreen'}
        component={PhotoScreen}
        options={{
          headerShown: false,
        }}
      />
    </Navigator.Navigator>
  );
};
