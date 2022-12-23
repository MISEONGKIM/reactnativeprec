import React from 'react';
import DialogView, {DialogContent, DialogTitle} from '@ui/dialog';
import {DialogStateType} from '@ui/dialog/type';
import {Text, Button} from 'react-native-paper';
import {CheckBox1} from '@ui/buttons';

export const SelTypeCheck = (props: Partial<DialogStateType>) => {
  const checkBoxList = [
    {text: '학생부 종합 전형', checked: false},
    {text: '특기자 전형', checked: false},
  ];
  return (
    <DialogView dialogState={props}>
      <DialogTitle>무슨대학교</DialogTitle>
      <DialogContent>
        <Text>총 2건의 접수내역이 있습니다.</Text>
        <Text>전형선택 해주세요.</Text>
        <CheckBox1 items={checkBoxList} />

        <Button>등록</Button>
      </DialogContent>
    </DialogView>
  );
};
