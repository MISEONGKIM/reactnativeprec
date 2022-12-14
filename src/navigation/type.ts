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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

type ScreenType<T, T2> = {
  name: keyof T & string;
  Component: React.ComponentType;
  options?: T2;
};

export type RootStackNavigator = ReturnType<typeof createNativeStackNavigator>;
export interface RootStackParamList extends ParamListBase {
  Main: undefined;
  ApplyStatus: undefined;
  MyPage: undefined;
}
export type RootStackScreenType = ScreenType<
  RootStackParamList,
  NativeStackNavigationOptions
>;

export type TopTabNavigator = ReturnType<typeof createMaterialTopTabNavigator>;
export interface TopTabParamList extends ParamListBase {
  First: undefined;
  Second: undefined;
}
export type TopTabScreenType = ScreenType<
  TopTabParamList,
  MaterialTopTabNavigationOptions
>;

export type MainBottomTabNavigator = ReturnType<
  typeof createBottomTabNavigator
>;
export interface MainBottomTabParamList extends ParamListBase {
  Bottom1: undefined;
  Bottom2: undefined;
  Bottom3: undefined;
}
export type MainBottomTabScreenType = ScreenType<
  MainBottomTabParamList,
  MainBottomTabNavigator
>;

export type StackNavigatorType = RootStackNavigator;
export type StackScreenType = RootStackScreenType;

export type TabNavigatorType = TopTabNavigator | MainBottomTabNavigator;
export type TabScreenType = TopTabScreenType | MainBottomTabScreenType;
