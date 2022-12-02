import React from 'react';
import PropTypes from 'prop-types';

import {Tab} from './constract';

export const Screen = ({
  Component,
  name,
}: {
  Component: React.ComponentType;
  name: string;
}) => <Tab.Screen name={name} component={Component} />;

Screen.propTypes = {
  Component: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
};
