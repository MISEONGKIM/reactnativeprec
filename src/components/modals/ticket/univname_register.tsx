import ModalView from '@ui/modal';
import {ModalStateType} from '@ui/modal/type';
import {H1} from '@ui/text';
import React from 'react';
import {View, Text, Button} from 'react-native';

export const UnivnameRegisterModal = (props: Partial<ModalStateType>) => {
  return (
    <ModalView modalState={props}>
      <View>
        <H1>티켓 등록</H1>
        <Text>모달</Text>
        <Button title="닫기" onPress={props.hideModal} />
      </View>
    </ModalView>
  );
};
