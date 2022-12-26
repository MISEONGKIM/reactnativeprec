import React from 'react';
import {
  ApplyStatusStackParamList,
  ApplyStatusStackScreenType,
} from '@navigation/type';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  EssayAnswerPhotoScreen,
  InterviewListScreen,
} from '@navigation/screens/bottom_screens';
import {ApplyStatusTap} from '../tab';

const Navigator = createNativeStackNavigator<ApplyStatusStackParamList>();

export const ApplyStatusStack = () => {
  const screens: ApplyStatusStackScreenType[] = [
    {
      name: 'ApplyStatusTap',
      Component: ApplyStatusTap,
    },
    {
      name: 'InterviewList',
      Component: InterviewListScreen, /// 내일하자
    },
    {
      name: 'AssayAnswerPhoto',
      Component: EssayAnswerPhotoScreen,
    },
  ];
  return (
    <Navigator.Navigator
      initialRouteName="ApplyStatusTap"
      screenOptions={{headerShown: false}}>
      {screens.map((screen, i) => (
        <Navigator.Screen
          key={'ApplyStatusStack' + i}
          name={screen.name}
          component={screen.Component}
        />
      ))}
    </Navigator.Navigator>
  );
};
