import React, {useMemo} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FirstScreen from './first_screen';
import SecondScreen from './second_screen';
import {TopTabScreenType, TopTabParamList} from '@navigation/type';

const Navigation = createMaterialTopTabNavigator<TopTabParamList>();

const ApplyStatusScreen = () => {
  const screens: TopTabScreenType[] = useMemo(
    () => [
      {name: 'First', Component: FirstScreen},
      {name: 'Second', Component: SecondScreen},
    ],
    [],
  );

  return (
    <Navigation.Navigator initialRouteName={'First'}>
      {screens.map((screen, i) => (
        <Navigation.Screen
          key={'toptap' + i}
          name={screen.name}
          component={screen.Component}
        />
      ))}
    </Navigation.Navigator>
  );
};

export default ApplyStatusScreen;
