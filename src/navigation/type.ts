import type {
  CompositeScreenProps,
  NavigatorScreenParams,
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

type ScreenType<T, T2> = {
  name: keyof T;
  Component: React.ComponentType;
  initialParams?: any; /// 이건어떻게 ?
  options?: T2;
};

export type RootStackParamList = {
  TicketStack: NavigatorScreenParams<TicketStackParamList>;
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

export type TicketStackParamList = {
  Ticket: {id: ''};
  IdenfityVerification: undefined;
};

export type TicketStackScreenType = ScreenType<
  TicketStackParamList,
  NativeStackNavigationOptions
>;

export type TicketStackScreenProps<T extends keyof TicketStackParamList> =
  NativeStackScreenProps<TicketStackParamList, T>;
