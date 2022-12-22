import React, {ReactNode} from 'react';
import {Modal, Portal} from 'react-native-paper';
import {ModalStateType} from './type';

const containerStyle = {
  borderRadius: 12,
  backgroundColor: '#c8d7ff',
  width: 300,
  height: 300,
  padding: 20,
  margin: 50,
};

const ModalView = ({
  children,
  modalState,
}: {
  children: ReactNode;
  modalState: Partial<ModalStateType>;
}) => (
  <Portal>
    <Modal
      visible={modalState.visible!}
      onDismiss={modalState.hideModal}
      contentContainerStyle={containerStyle}>
      {children}
    </Modal>
  </Portal>
);

export default ModalView;
