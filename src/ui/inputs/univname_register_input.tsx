import React, {useState} from 'react';
import {univRegisterInput} from '@constants/placeholder';
import styled from 'styled-components/native';
import {validationUnivName} from '@utils/validation';
import {View} from 'react-native';

const _Input = styled.TextInput`
  height: 40px;
  border-width: 1px;
  margin: 12px;
  padding: 10px;
`;

const _TextWhenWrongInfo = styled.Text`
  color: red;
`;

export const UnivnameRegisterInput = ({
  onChangeText,
}: {
  onChangeText: (newText: string) => void;
}) => {
  const [isVisibleText, setIsVisibleText] = useState(false);
  const setIsVisibleTextFor = (value: boolean) => setIsVisibleText(value);
  return (
    <View>
      <_Input
        placeholder={univRegisterInput}
        onChangeText={newText => {
          validationUnivName(newText)
            ? setIsVisibleTextFor(false)
            : setIsVisibleTextFor(true);
        }}
      />
      {isVisibleText && (
        <_TextWhenWrongInfo>
          등록되지 않은 정보입니다.다시 확인해주세요.
        </_TextWhenWrongInfo>
      )}
    </View>
  );
};
