import {View} from 'react-native';
import React from 'react';
import {TopTab, Screen} from '@navigation';
import {FirstPage} from './first_page';
import {SecondPage} from './second_page';
import {ThirdPage} from './third_page';

const MainPage = () => {
  return (
    <View>
      <TopTab
        initialRouteName={'first'}
        screens={[
          <Screen name={'first'} component={FirstPage} />,
          <Screen name={'second'} component={SecondPage} />,
          <Screen name={'third'} component={ThirdPage} />,
        ]}
      />
    </View>
  );
};

export default MainPage;
