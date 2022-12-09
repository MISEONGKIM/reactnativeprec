import React from 'react';
import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {
  createMaterialTopTabNavigator,
  type MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import {ParamListBase} from '@react-navigation/native';

type ScreenType<T, T2> = {
  name: keyof T & string;
  Component: React.ComponentType;
  options?: T2;
};

export type RootStackNavigator = ReturnType<typeof createNativeStackNavigator>;
export interface RootStackParamList extends ParamListBase {
  Main: undefined;
  Setting: undefined;
}
export type RootStackScreenType = ScreenType<
  RootStackParamList,
  NativeStackNavigationOptions
>;

export type MainTabNavigator = ReturnType<typeof createMaterialTopTabNavigator>;
export interface MainTabParamList extends ParamListBase {
  First: undefined;
  Second: undefined;
}
export type MainTabScreenType = ScreenType<
  MainTabParamList,
  MaterialTopTabNavigationOptions
>;

export type StackNavigatorType = RootStackNavigator;
export type StackScreenType = RootStackScreenType;

export type TabNavigatorType = MainTabNavigator;
export type TabScreenType = MainTabScreenType;
