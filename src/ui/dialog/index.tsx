import React, {ReactNode} from 'react';
import {Portal, Dialog} from 'react-native-paper';
import {DialogStateType} from './type';

export const DialogTitle = ({title}: {title: string}) => (
  <Dialog.Title>{title}</Dialog.Title>
);
export const DialogContent = ({children}: {children: ReactNode}) => (
  <Dialog.Content>{children}</Dialog.Content>
);
export const DialogAction = ({children}: {children: ReactNode}) => (
  <Dialog.Actions>{children}</Dialog.Actions>
);

const DialogView = ({
  children,
  dialogState,
}: {
  children: ReactNode;
  dialogState: Partial<DialogStateType>;
}) => (
  <Portal>
    <Dialog visible={dialogState.visible!} onDismiss={dialogState.hideDialog}>
      {children}
    </Dialog>
  </Portal>
);

export default DialogView;
