import React from 'react';
import {
  RootStackScreenProps,
  TicketStackParamList,
  TicketStackScreenType,
} from '@navigation/type';
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

  const screens: TicketStackScreenType[] = [
    {
      name: 'Ticket',
      Component: TicketScreen, ///이것도 손봐야함
      options: {
        headerRight: () => (
          <Button
            onPress={() => rootNavigation.navigate('Bottom')}
            title="Home"
            color="#333"
          />
        ),
      },
    },
    {
      name: 'IdenfityVerification',
      Component: IdentityVerificationScreen,
      options: {headerShown: false},
    },
    {
      name: 'PhotoScreen',
      Component: PhotoScreen,
      options: {headerShown: false},
    },
  ];
  return (
    <Navigator.Navigator initialRouteName="Ticket">
      {screens.map((screen, i) => (
        <Navigator.Screen
          key={'TicketStack' + i}
          name={screen.name}
          component={screen.Component}
          options={screen.options}
          // initialParams={screen.initialParams}  ///이거 필요할까
        />
      ))}
    </Navigator.Navigator>
  );
};
