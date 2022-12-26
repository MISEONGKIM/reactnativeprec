import type {
  CompositeScreenProps,
  NavigatorScreenParams,
  ParamListBase,
} from '@react-navigation/native';
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
import React from 'react';

type ScreenType<T extends ParamListBase, T2> = {
  name: keyof T;
  Component: React.FunctionComponent<NativeStackScreenProps<T, keyof T> | {}>;
  initialParams?: any; /// 이건어떻게 ?
  options?: T2;
};

export type RootStackParamList = {
  Bottom: undefined;
  TicketStack: NavigatorScreenParams<TicketStackParamList>;
  Alram: undefined;
};

export type RootStackScreenType = ScreenType<
  RootStackParamList,
  NativeStackNavigationOptions
>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type BottomTabParamList = {
  ApplyStatusStack: undefined;
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

export type TicketStackParamList = {
  Ticket: {id?: string};
  IdenfityVerification: undefined;
  PhotoScreen: {path: string};
};

export type TicketStackScreenType = ScreenType<
  TicketStackParamList,
  NativeStackNavigationOptions
>;

export type TicketStackScreenProps<T extends keyof TicketStackParamList> =
  NativeStackScreenProps<TicketStackParamList, T>;

export type ApplyStatusStackParamList = {
  ApplyStatusTap: undefined;
  InterviewList: {title: string};
  AssayAnswerPhoto: undefined;
};

export type ApplyStatusStackScreenType = ScreenType<
  ApplyStatusStackParamList,
  NativeStackNavigationOptions
>;

export type ApplyStatusStackScreenProps<
  T extends keyof ApplyStatusStackParamList,
> = NativeStackScreenProps<ApplyStatusStackParamList, T>;
