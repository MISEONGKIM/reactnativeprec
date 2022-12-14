import React from 'react';
import DialogView, {DialogContent, DialogTitle} from '@ui/dialog';
import {DialogStateType} from '@ui/dialog/type';
import {Text, Button} from 'react-native-paper';
import {RadioButton1} from '@ui/buttons';

export const MajorCheckDialog = ({
  dialogState,
  onPressOK,
}: {
  dialogState: Partial<DialogStateType>;
  onPressOK: () => void;
}) => {
  const radioButtonList = [
    {value: '1', text: '영어영문학과'},
    {value: '2', text: '경영학과'},
  ];
  return (
    <DialogView dialogState={dialogState}>
      <DialogTitle>무슨대학교</DialogTitle>
      <DialogContent>
        <Text>정확한 본인인증을 위해 아래 질문에 답해주세요.</Text>
        <Text>학과명 선택해주세요</Text>
        <RadioButton1 items={radioButtonList} initValue={'1'} />
        <Button onPress={onPressOK}>등록</Button>
      </DialogContent>
    </DialogView>
  );
};
