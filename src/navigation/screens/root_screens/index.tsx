import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList, RootStackScreenType} from '@navigation/type';
import {Button} from 'react-native';

import BottomScreen from '../bottom_screens';
import {AlramScreen} from '../top_screens';
import {TicketScreen} from '../ticket_screens';
import InterviewListScreen from '../appy_status_screens/interview_list_screen'; ///이것도 위치 손봐야할거같은데

const Navigator = createNativeStackNavigator<RootStackParamList>();
const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const RootScreen = () => {
  const screens: RootStackScreenType[] = [
    {
      name: 'Ticket',
      Component: TicketScreen, /// 내일하자
      options: {
        headerRight: () => (
          <Button
            //onPress={() => navigationRef.goBack()}
            onPress={() => navigationRef.navigate('Bottom')}
            title="Back"
            color="#333"
          />
        ),
      },
    },
    {
      name: 'Bottom',
      Component: BottomScreen,
      options: {
        headerRight: () => [
          <Button
            key={1}
            onPress={() =>
              navigationRef.navigate('Ticket', {id: 'root에서 버튼클릭'})
            }
            title="Ticket"
            color="#333"
          />,
          <Button
            key={2}
            onPress={() => navigationRef.navigate('Alram')}
            title="Alram"
            color="#333"
          />,
        ],
      },
    },

    {
      name: 'Alram',
      Component: AlramScreen,
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
      name: 'InterviewList',
      Component: InterviewListScreen, /// 내일하자
      options: {},
    },
  ];
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator.Navigator>
        {screens.map((screen, i) => (
          <Navigator.Screen
            key={'Stack' + i}
            name={screen.name}
            component={screen.Component}
            options={screen.options}
          />
        ))}
      </Navigator.Navigator>
    </NavigationContainer>
  );
};
