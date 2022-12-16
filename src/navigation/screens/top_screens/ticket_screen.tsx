import {View, Text} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '@navigation/type';
import {SearchInput} from '@ui/inputs';

export const TicketScreen = ({route}: RootStackScreenProps<'Ticket'>) => {
  return (
    <View>
      <Text>{route.params?.id ?? ''}</Text>
      <SearchInput />
    </View>
  );
};
