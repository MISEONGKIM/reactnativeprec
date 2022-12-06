import React from 'react';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import type {MaterialTopTabNavigationOptions} from '@react-navigation/material-top-tabs';

export type DefaultScreenType = RootScreenType | MainScreenType;

export type RootStackParamList = {
  Main: undefined;
  Setting: undefined;
};
export type RootScreenType = {
  name: Extract<keyof RootStackParamList, string>;
  Component: React.ComponentType;
  options?: NativeStackNavigationOptions;
};

export type MainTabParamList = {
  First: undefined;
  Second: undefined;
};
export type MainScreenType = {
  name: Extract<keyof MainTabParamList, string>;
  Component: Element;
  options?: MaterialTopTabNavigationOptions;
};
