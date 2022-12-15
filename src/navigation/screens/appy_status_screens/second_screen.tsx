import {View} from 'react-native';
import React from 'react';
import {SearchView, SecondPageApplyItvList, SwitchView} from '@components';
import {interviewList} from '@test/mock_data';

const SecondScreen = () => {
  const data = interviewList.filter(item => item.isCheck);
  return (
    <View>
      <SearchView />
      <SwitchView text="두번째 시험" />
      <SecondPageApplyItvList data={data} />
    </View>
  );
};
export default SecondScreen;
