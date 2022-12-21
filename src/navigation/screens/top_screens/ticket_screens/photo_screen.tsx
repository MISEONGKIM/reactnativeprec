import {TicketStackScreenProps} from '@navigation/type';
import React, {useCallback, useMemo, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
const _View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${({hasMediaLoaded}: {hasMediaLoaded: boolean}) =>
    hasMediaLoaded ? 1 : 0};
`;

export function PhotoScreen({route}: TicketStackScreenProps<'PhotoScreen'>) {
  const {path} = route.params;
  const [hasMediaLoaded, setHasMediaLoaded] = useState(false);
  const source = useMemo(() => ({uri: `file://${path}`}), [path]);

  const onMediaLoadEnd = useCallback(() => {
    console.log('media has loaded.');
    setHasMediaLoaded(true);
  }, []);

  return (
    <_View hasMediaLoaded={hasMediaLoaded}>
      <Image
        source={source}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        onLoadEnd={onMediaLoadEnd}
      />
    </_View>
  );
}
