import {View} from 'react-native';
import React from 'react';
import {SearchView, SecondPageCardList, SwitchView} from '@components';

export const SecondScreen = () => {
  return (
    <View>
      <SearchView />
      <SwitchView />
      <SecondPageCardList />
    </View>
  );
};
