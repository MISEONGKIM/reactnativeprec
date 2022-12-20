import React from 'react';
import styled from 'styled-components/native';

const _TextWhenWrongInfo = styled.Text`
  color: red;
`;
export const WrongMessage = ({visible}: {visible: boolean}) => {
  return visible ? (
    <_TextWhenWrongInfo>
      등록되지 않은 정보입니다.다시 확인해주세요.
    </_TextWhenWrongInfo>
  ) : (
    <></>
  );
};
