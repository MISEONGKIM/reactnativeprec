import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';

import ModalView from '@ui/modal';
import {ModalStateType} from '@ui/modal/type';
import {H1, H3} from '@ui/text';
import {UnivnameRegisterInput} from '@ui/inputs';

const _TitleView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

const _TitleButton = styled.Button`
  width: 10px;
  height: 10px;
`;

const _QuestionText = styled(H3)`
  font-weight: 100;
  color: tomato;
`;

export const UnivnameRegisterModal = (props: Partial<ModalStateType>) => {
  return (
    <ModalView {...props}>
      <View>
        <_TitleView>
          <_TitleButton title="뒤로" onPress={props.hideModal} />
          <H1>티켓 등록</H1>
        </_TitleView>
        <_QuestionText>지원하는 학교명을 입력해주세요.</_QuestionText>
        <UnivnameRegisterInput />
      </View>
    </ModalView>
  );
};
