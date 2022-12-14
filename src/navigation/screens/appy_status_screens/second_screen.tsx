import {View} from 'react-native';
import React from 'react';
import {SearchView, SecondPageCardList, SwitchView} from '@components';

const SecondScreen = () => {
  return (
    <View>
      <SearchView />
      <SwitchView text="두번째 시험" />
      <SecondPageCardList />
    </View>
  );
};
export default SecondScreen;