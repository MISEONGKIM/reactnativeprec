import {View} from 'react-native';
import React from 'react';
import {SearchView, SecondPageApplyItvList, SwitchView} from '@components';
import {interviewListData} from '@test/mock_data';

export const SecondScreen = () => {
  const data = interviewListData.filter(item => item.isCheck);
  return (
    <View>
      <SearchView tabTitle={'두번째 면접'} />
      <SwitchView text="두번째 시험" />
      <SecondPageApplyItvList data={data} />
    </View>
  );
};
