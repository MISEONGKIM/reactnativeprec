import React from 'react';
import PropTypes from 'prop-types';
import {DefaultScreenType, NavigatorType} from '../type';

export const TopTab = <T1 extends NavigatorType, T2 extends DefaultScreenType>({
  Navigation,
  initialRouteName,
  screens,
}: {
  Navigation: T1;
  initialRouteName: string;
  screens: T2[];
}) => (
  <Navigation.Navigator initialRouteName={initialRouteName}>
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
