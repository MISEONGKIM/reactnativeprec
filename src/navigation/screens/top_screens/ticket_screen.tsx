import {View, Text} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '@navigation/type';

export const TicketScreen = ({route}: RootStackScreenProps<'Ticket'>) => {
  return (
    <View>
      <Text>{route.params?.id ?? ''}</Text>
    </View>
  );
};
