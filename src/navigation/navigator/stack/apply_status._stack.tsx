import React from 'react';
import {ApplyStatusStackParamList} from '@navigation/type';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {InterviewListScreen} from '@navigation/screens/bottom_screens';
import {ApplyStatusTap} from '../tab';

const Navigator = createNativeStackNavigator<ApplyStatusStackParamList>();

export const ApplyStatusStack = () => {
  return (
    <Navigator.Navigator
      initialRouteName="ApplyStatusTap"
      screenOptions={{headerShown: false}}>
      <Navigator.Screen
        key={'ApplyStatusTap'}
        name={'ApplyStatusTap'}
        component={ApplyStatusTap}
      />

      <Navigator.Screen
        key={'InterviewListScreen'}
        name={'InterviewList'}
        component={InterviewListScreen}
      />
    </Navigator.Navigator>
  );
};
