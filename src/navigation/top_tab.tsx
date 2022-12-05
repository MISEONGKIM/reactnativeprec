import React from 'react';
import PropTypes from 'prop-types';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ScreenType} from './type';

const TopTabNavigator = createMaterialTopTabNavigator();

export const TopTab = ({
  initialRouteName,
  screens,
}: {
  initialRouteName: string;
  screens: ScreenType[];
}) => (
  <TopTabNavigator.Navigator initialRouteName={initialRouteName}>
    {screens.map((screen, i) => (
      <TopTabNavigator.Screen
        key={'TopTab' + i}
        name={screen.name}
        component={screen.Component}
      />
    ))}
  </TopTabNavigator.Navigator>
);

/*런타임 시 변화될 거 같은 값들만 proptypes에 추가하면 될듯  */
TopTab.propTypes = {
  initialRouteName: PropTypes.string.isRequired,
};
