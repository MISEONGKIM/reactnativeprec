import {View, Text, Alert} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '@navigation/type';
import {SearchInput} from '@ui/inputs';
import {ticketListData} from '@test/mock_data';
import {TicketList} from '@components';
import {FloatingAddBtn} from '@ui/buttons';

export const TicketScreen = ({route}: RootStackScreenProps<'Ticket'>) => {
  return (
    <View>
      <Text>{route.params?.id ?? ''}</Text>
      <SearchInput />
      <TicketList data={ticketListData} />
      <FloatingAddBtn
        onPress={() => {
          Alert.alert('추가한다');
        }}
      />
    </View>
  );
};
