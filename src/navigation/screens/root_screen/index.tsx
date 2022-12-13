import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';

import {
  RootStackNavigator,
  RootStackParamList,
  RootStackScreenType,
} from '@navigation/type';
import {Button} from 'react-native';

import {MainScreen} from '../main_screen';
import {MyPageScreen} from '../my_page_screen';
import {ApplyStatusScreen} from '../apply_status_screen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Stack} from '@navigation/navigators';

const navigator = createNativeStackNavigator<RootStackParamList>();
const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const RootScreen = () => {
  const screens: RootStackScreenType[] = [
    {
      name: 'Main',
      Component: MainScreen,
      options: {
        headerTitle: 'title',
        headerTitleAlign: 'center',
        headerRight: () => (
          <Button
            onPress={() => {
              navigationRef.navigate('Setting');
            }}
            title="Info"
            color="#333"
          />
        ),
      },
    },
    {
      name: 'ApplyStatus',
      Component: ApplyStatusScreen,
      options: {
        headerRight: () => (
          <Button
            onPress={() => navigationRef.goBack()}
            title="Back"
            color="#333"
          />
        ),
      },
    },
    {
      name: 'MyPage',
      Component: MyPageScreen,
      options: {
        headerRight: () => (
          <Button
            onPress={() => navigationRef.goBack()}
            title="Back"
            color="#333"
          />
        ),
      },
    },
  ];
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack<RootStackNavigator, RootStackScreenType>
        Navigator={navigator}
        screens={screens}
      />
    </NavigationContainer>
  );
};
