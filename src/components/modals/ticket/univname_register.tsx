import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';

import ModalView from '@ui/modal';
import {ModalStateType} from '@ui/modal/type';
import {H1, H3, WrongMessage} from '@ui/text';
import {UnivnameRegisterInput} from '@ui/inputs';
import {Button1} from '@ui/buttons';
import {useWrongMessage} from '@hooks';
import {validationUnivName} from '@utils/validation';
import {useNavigation} from '@react-navigation/native';
import {TicketStackScreenProps} from '@navigation/type';
import {View} from 'react-native';

const _TitleView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

const _TitleButton = styled.Button`
  width: 10px;
  height: 10px;
`;

export const UnivnameRegisterModal = (props: Partial<ModalStateType>) => {
  const {isWrongMessage, showWrongMessage, hideWrongMessage} =
    useWrongMessage();
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const navigation =
    useNavigation<TicketStackScreenProps<'Ticket'>['navigation']>();

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
        <H3>지원하는 학교명을 입력해주세요.</H3>
        <UnivnameRegisterInput onChangeText={onChangeText} />
        <WrongMessage visible={isWrongMessage} />
        <Button1
          disabled={isDisabledButton}
          onPress={async () => {
            props.hideModal!();
            setIsDisabledButton(true);
            hideWrongMessage();
            navigation.navigate('IdenfityVerification');
          }}>
          계속
        </Button1>
      </View>
    </ModalView>
  );
};
