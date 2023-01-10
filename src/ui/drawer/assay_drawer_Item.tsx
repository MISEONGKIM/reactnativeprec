import React from 'react';
import {StyleSheet} from 'react-native';
import {Drawer, DrawerItemProps} from 'react-native-paper';
const style = StyleSheet.create({
  item: {
    backgroundColor: '64ffda',
    color: 'white',
  },
});
export const AssayDrawerItem = (props: Partial<DrawerItemProps>) => (
  <Drawer.Item style={style.item} {...props} />
);
