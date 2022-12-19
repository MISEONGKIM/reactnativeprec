import type {CompositeScreenProps} from '@react-navigation/native';
import type {
  NativeStackScreenProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import type {
  BottomTabScreenProps as TabScreenProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import type {
  MaterialTopTabScreenProps,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import {ReactNode} from 'react';

type ScreenType<T, T2> = {
  name: keyof T;
  Component: ReactNode;
  options?: T2;
};

export type RootStackParamList = {
  Ticket: {id: string};
  Bottom: undefined;
  Alram: undefined;
  InterviewList: {title: string};
};

export type RootStackScreenType = ScreenType<
  RootStackParamList,
  NativeStackNavigationOptions
>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type BottomTabParamList = {
  ApplyStatus: undefined;
  Main: undefined;
  MyPage: undefined;
};

export type BottomTabScreenType = ScreenType<
  BottomTabParamList,
  BottomTabNavigationOptions
>;
export type BottomTabScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    TabScreenProps<BottomTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type TopTabParamList = {
  First: undefined;
  Second: undefined;
};

export type TopTabScreenType = ScreenType<
  TopTabParamList,
  MaterialTopTabNavigationOptions
>;
export type TopTabScreenProps<T extends keyof TopTabParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<TopTabParamList, T>,
    BottomTabScreenProps<keyof BottomTabParamList>
  >;
