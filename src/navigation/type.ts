import React from 'react';
import {ParamListBase} from '@react-navigation/native';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {MaterialTopTabNavigationOptions} from '@react-navigation/material-top-tabs';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

interface ScreenType<T, T2> {
  name: keyof T;
  Component: React.ComponentType;
  options?: T2;
}

export interface RootStackParamList extends ParamListBase {
  Main: undefined;
  ApplyStatus: undefined;
  MyPage: undefined;
}
export type RootStackScreenType = ScreenType<
  RootStackParamList,
  NativeStackNavigationOptions
>;

export interface TopTabParamList extends ParamListBase {
  First: undefined;
  Second: undefined;
}
export type TopTabScreenType = ScreenType<
  TopTabParamList,
  MaterialTopTabNavigationOptions
>;

export interface BottomTabParamList extends ParamListBase {
  Bottom1: undefined;
  Bottom2: undefined;
  Bottom3: undefined;
}
export type BottomTabScreenType = ScreenType<
  BottomTabParamList,
  BottomTabNavigationOptions
>;
