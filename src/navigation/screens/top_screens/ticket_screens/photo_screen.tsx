import {TicketStackScreenProps} from '@navigation/type';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';

import styled from 'styled-components/native';
const _View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${({hasMediaLoaded}: {hasMediaLoaded: boolean}) =>
    hasMediaLoaded ? 1 : 0};
`;
const _Button = styled.Button`
  flex: 0;
  flex-direction: row;
  justify-content: center;
`;
const _Image = styled.Image`
  flex: 1;
  width: 300px;
  height: 500px;
`;
export function PhotoScreen({route}: TicketStackScreenProps<'PhotoScreen'>) {
  const {path} = route.params;
  const navigation =
    useNavigation<TicketStackScreenProps<'PhotoScreen'>['navigation']>();
  const [hasMediaLoaded, setHasMediaLoaded] = useState(false);
  const source = useMemo(() => ({uri: path}), [path]);

  const onMediaLoadEnd = useCallback(() => {
    console.log('media has loaded.');
    setHasMediaLoaded(true);
  }, []);

  return (
    <_View hasMediaLoaded={hasMediaLoaded}>
      <_Button
        title="next"
        onPress={() => {
          navigation.pop(2);
        }}
      />

      <_Image source={source} resizeMode="cover" onLoadEnd={onMediaLoadEnd} />
    </_View>
  );
}
