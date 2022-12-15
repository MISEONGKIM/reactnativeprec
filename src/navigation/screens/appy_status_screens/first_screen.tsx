import {View} from 'react-native';
import React from 'react';
import {SearchView} from '@components/search_view';
import {SwitchView} from '@components';
import {Link} from '@react-navigation/native';

const FirstScreen = () => {
  return (
    <View>
      <SearchView />
      <SwitchView text="첫번째 시험" />

      <Link to={{screen: 'Ticket', params: {id: 'hey~'}}}>Ticket Link</Link>
    </View>
  );
};

export default FirstScreen;
