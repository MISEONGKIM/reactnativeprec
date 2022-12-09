import React from 'react';
import PropTypes from 'prop-types';
import {TabScreenType, TabNavigatorType} from '../type';

export const TopTab = <T1 extends TabNavigatorType, T2 extends TabScreenType>({
  Navigation,
  initialRouteName,
  screens,
}: {
  Navigation: T1;
  initialRouteName: string;
  screens: T2[];
}) => (
  <Navigation.Navigator
    initialRouteName={initialRouteName}
    screenOptions={{swipeEnabled: false}}>
    {screens.map((screen, i) => (
      <Navigation.Screen
        key={'TopTab' + i}
        name={screen.name}
        component={screen.Component}
      />
    ))}
  </Navigation.Navigator>
);

/*런타임 시 변화될 거 같은 값들만 proptypes에 추가하면 될듯  */
TopTab.propTypes = {
  initialRouteName: PropTypes.string.isRequired,
};
