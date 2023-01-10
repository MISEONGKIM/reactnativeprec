import React from 'react';
import {Drawer, DrawerCollapsedItemProps} from 'react-native-paper';
export const DrawerCollapsedItem = (props: DrawerCollapsedItemProps) => {
  return <Drawer.CollapsedItem {...props} />;
};
