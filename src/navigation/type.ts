import React from 'react';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import type {MaterialTopTabNavigationOptions} from '@react-navigation/material-top-tabs';

type ScreenType<T, T2> = {
  name: keyof T & string;
  Component: React.ComponentType;
  options?: T2;
};

export type RootStackParamList = {
  Main: undefined;
  Setting: undefined;
};
export type RootScreenType = ScreenType<
  RootStackParamList,
  NativeStackNavigationOptions
>;

export type MainTabParamList = {
  First: undefined;
  Second: undefined;
};
export type MainScreenType = ScreenType<
  MainTabParamList,
  MaterialTopTabNavigationOptions
>;

export type DefaultScreenType = RootScreenType | MainScreenType;
