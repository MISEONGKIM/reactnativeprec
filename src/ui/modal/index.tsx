import React, {ReactNode} from 'react';
import {Modal, Portal} from 'react-native-paper';
import styled from 'styled-components/native';
import {ModalStateType} from './type';

const _Modal = styled.Modal`
  background-color: #c8d7ff;
  padding: 20px;
`;
const containerStyle = {
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
}) => {
  return (
    <Portal>
      <Modal
        visible={modalState.visible!}
        onDismiss={modalState.hideModal}
        contentContainerStyle={containerStyle}>
        {children}
      </Modal>
    </Portal>
  );
};

export default ModalView;
