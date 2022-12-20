import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {Alert, View} from 'react-native';

import ModalView from '@ui/modal';
import {ModalStateType} from '@ui/modal/type';
import {H1, H3, WrongMessage} from '@ui/text';
import {UnivnameRegisterInput} from '@ui/inputs';
import {Button1} from '@ui/buttons';
import {useWrongMessage} from '@hooks';
import {validationUnivName} from '@utils/validation';

const _TitleView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

const _TitleButton = styled.Button`
  width: 10px;
  height: 10px;
`;

//이걸 어쩌지
const _QuestionText = styled(H3)`
  font-weight: 100;
  color: tomato;
`;

export const UnivnameRegisterModal = (props: Partial<ModalStateType>) => {
  const {isWrongMessage, showWrongMessage, hideWrongMessage} =
    useWrongMessage();
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  const onChangeText = useCallback(
    (newText: string) => {
      if (!validationUnivName(newText)) {
        showWrongMessage();
        setIsDisabledButton(true);
        return;
      }
      hideWrongMessage();
      setIsDisabledButton(newText === '');
    },
    [hideWrongMessage, showWrongMessage],
  );

  return (
    <ModalView modalState={props}>
      <View>
        <_TitleView>
          <_TitleButton title="뒤로" onPress={props.hideModal} />
          <H1>티켓 등록</H1>
        </_TitleView>
        <_QuestionText>지원하는 학교명을 입력해주세요.</_QuestionText>
        <UnivnameRegisterInput onChangeText={onChangeText} />
        <WrongMessage visible={isWrongMessage} />
        <Button1
          disabled={isDisabledButton}
          onPress={() => {
            Alert.alert('카메라 on');
          }}>
          계속
        </Button1>
      </View>
    </ModalView>
  );
};
