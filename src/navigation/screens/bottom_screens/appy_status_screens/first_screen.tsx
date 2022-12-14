import {View} from 'react-native';
import React from 'react';
import {SearchView} from '@components/search_view';
import {SwitchView} from '@components';
import {Link} from '@react-navigation/native';

export const FirstScreen = () => {
  return (
    <View>
      <SearchView tabTitle={'첫번째 면접'} />
      <SwitchView text="첫번째 시험" />

      <Link to={{screen: 'Ticket', params: {id: 'hey~'}}}>Ticket Link</Link>
    </View>
  );
};
