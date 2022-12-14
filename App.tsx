import React, {useEffect, useState} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
// import {Provider as StoreProvider} from 'react-redux';
// import store from '@redux/store';
import {RootStack} from '@navigation/navigator/stack/root_stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const _GestureHandlerRootView = styled(GestureHandlerRootView)`
  flex: 1;
`;

const windowD = Dimensions.get('window');
const screenD = Dimensions.get('screen');

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dimensions, setDimensions] = useState({windowD, screenD});

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({windowD: window, screenD: screen});
      },
    );
    return () => subscription?.remove();
  });

  return (
    // <StoreProvider store={store}>
    <_GestureHandlerRootView>
      <PaperProvider>
        <RootStack />
      </PaperProvider>
    </_GestureHandlerRootView>
    // </StoreProvider>
  );
};

export default App;
