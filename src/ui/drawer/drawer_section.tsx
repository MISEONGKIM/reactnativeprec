import React from 'react';
import {Drawer} from 'react-native-paper';
import {DrawerCollapsedItem} from './drawer_CollapsedItem';

export const DrawerSection = ({
  drawerList,
}: {
  drawerList: Parameters<typeof DrawerCollapsedItem>;
}) => {
  <Drawer.Section title="Some title">
    {drawerList.map(data => (
      <DrawerCollapsedItem {...data} />
    ))}
  </Drawer.Section>;
};
