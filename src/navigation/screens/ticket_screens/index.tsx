import {View, Text, Button} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '@navigation/type';
import {UniveNameSearchInput} from '@ui/inputs';
import {ticketListData} from '@test/mock_data';
import {TicketList} from '@components';
import {useModal} from '@hooks';
import {UnivnameRegisterModal} from '@components/modals/ticket';

export const TicketScreen = ({route}: RootStackScreenProps<'Ticket'>) => {
  const {visible, hideModal, showModal} = useModal();
  return (
    <View>
      <Text>{route.params?.id ?? ''}</Text>
      <UniveNameSearchInput />
      <TicketList data={ticketListData} />
      <Button
        onPress={() => {
          showModal();
        }}
        title="등록"
      />
      <UnivnameRegisterModal visible={visible} hideModal={hideModal} />
    </View>
  );
};
