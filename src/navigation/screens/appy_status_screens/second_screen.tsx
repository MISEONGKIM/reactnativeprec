import {View} from 'react-native';
import React from 'react';
import {SearchView, SecondPageInterviewList, SwitchView} from '@components';
import {univList} from '@test/mock_data';

const SecondScreen = () => {
  const data = univList.filter(item => item.isCheck);
  return (
    <View>
      <SearchView />
      <SwitchView text="두번째 시험" />
      <SecondPageInterviewList data={data} />
    </View>
  );
};
export default SecondScreen;
