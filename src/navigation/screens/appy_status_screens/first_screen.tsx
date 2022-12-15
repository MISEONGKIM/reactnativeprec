import {View, Text, Button} from 'react-native';
import React from 'react';
import {SearchView} from '@components/search_view';
import {SwitchView} from '@components';
import {Link, useNavigation} from '@react-navigation/native';
import {TopTabScreenProps} from '@navigation/type';

const FirstScreen = () => {
  const screenProps = useNavigation<TopTabScreenProps<'First'>>();
  return (
    <View>
      <SearchView />
      <SwitchView text="첫번째 시험" />
      <Button
        onPress={() => screenProps.navigation.navigate('Second')}
        title="go Main"
      />
      <Link to={{screen: 'Ticket'}}>Ticket Link</Link>
    </View>
  );
};

export default FirstScreen;
