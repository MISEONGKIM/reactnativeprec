import type {NavigatorScreenParams} from '@react-navigation/native';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import type {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import type {MaterialTopTabNavigationOptions} from '@react-navigation/material-top-tabs';

type ScreenType<T, T2> = {
  name: keyof T;
  Component: React.ComponentType;
  options?: T2;
};

export type RootStackParamList = {
  Bottom: NavigatorScreenParams<BottomTabParamList>;
  Ticket: undefined;
  Alram: undefined;
};

export type RootStackScreenType = ScreenType<
  RootStackParamList,
  NativeStackNavigationOptions
>;

export type BottomTabParamList = {
  Main: NavigatorScreenParams<TopTabParamList>;
  ApplyStatus: undefined;
  MyPage: undefined;
};

export type BottomTabScreenType = ScreenType<
  BottomTabParamList,
  BottomTabNavigationOptions
>;

export type TopTabParamList = {
  First: undefined;
  Second: undefined;
};

export type TopTabScreenType = ScreenType<
  TopTabParamList,
  MaterialTopTabNavigationOptions
>;
