import {View, Text} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '@navigation/type';
import {SearchInput} from '@ui/inputs';
import {ticketListData} from '@test/mock_data';
import {TicketList} from '@components';

export const TicketScreen = ({route}: RootStackScreenProps<'Ticket'>) => {
  return (
    <View>
      <Text>{route.params?.id ?? ''}</Text>
      <SearchInput />
      <TicketList data={ticketListData} />
    </View>
  );
};
