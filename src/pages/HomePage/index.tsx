import {View, Text} from 'react-native';
import React from 'react';

import {defaultStyle} from '@assets/styles';

const cx = defaultStyle();

const HomePage = () => {
  return (
    <View style={cx('container')}>
      <Text style={cx('text backcolor')}>HomePagess</Text>
    </View>
  );
};

export default HomePage;
