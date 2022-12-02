import React from 'react';
import PropTypes from 'prop-types';

import {Tab} from './constract';

export const TopTab = ({
  initialRouteName,
  screens,
}: {
  initialRouteName: string;
  screens: JSX.Element[];
}) => {
  return (
    <Tab.Navigator initialRouteName={initialRouteName}>{screens}</Tab.Navigator>
  );
};

TopTab.propTypes = {
  initialRouteName: PropTypes.string.isRequired,
  screens: PropTypes.arrayOf(PropTypes.element).isRequired,
};
