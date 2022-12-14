import {View, Text} from 'react-native';
import React from 'react';
import {SearchView} from '@components/search_view';
import {SwitchView} from '@components';

const FirstScreen = () => {
  return (
    <View>
      <SearchView />
      <SwitchView text="첫번째 시험" />
      <Text>FirstScreen</Text>
    </View>
  );
};

export default FirstScreen;
