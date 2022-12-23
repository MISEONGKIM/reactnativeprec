import {View, Text, Button} from 'react-native';
import React from 'react';
import {TicketStackScreenProps} from '@navigation/type';
import {UniveNameSearchInput} from '@ui/inputs';
import {ticketListData} from '@test/mock_data';
import {TicketList} from '@components';
import {useDialog, useModal} from '@hooks';
import {
  MajorCheck,
  SelTypeCheck,
  UnivnameRegisterModal,
} from '@components/modals/ticket';

export const TicketScreen = ({route}: TicketStackScreenProps<'Ticket'>) => {
  const {visible, hideModal, showModal} = useModal();
  const {visible: visibleDialog, hideDialog, showDialog} = useDialog();
  console.log('route.params : ', route.params);
  return (
    <View>
      <Text>{route.params?.id ?? ''}</Text>
      <UniveNameSearchInput />
      <TicketList data={ticketListData} />
      <Button
        onPress={() => {
          showDialog();
        }}
        title="등록"
      />
      <UnivnameRegisterModal visible={visible} hideModal={hideModal} />
      <MajorCheck visible={visibleDialog} hideDialog={hideDialog} />
      <SelTypeCheck visible={visibleDialog} hideDialog={hideDialog} />
    </View>
  );
};
