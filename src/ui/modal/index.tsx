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

const ModalView = (props: Partial<ModalStateType>, children: ReactNode) => {
  return (
    <Portal>
      <Modal
        visible={props.visible!}
        onDismiss={props.hideModal}
        contentContainerStyle={containerStyle}>
        {children}
      </Modal>
    </Portal>
  );
};

export default ModalView;
