import React from 'react';
import {Drawer} from 'react-native-paper';
import {DrawerCollapsedItem} from './drawer_collapsed_Item';

export const DrawerCollapsed = ({
  drawerList,
}: {
  drawerList: Parameters<typeof DrawerCollapsedItem>;
}) => (
  <Drawer.Section title="Some title">
    {drawerList.map(data => (
      <DrawerCollapsedItem {...data} />
    ))}
  </Drawer.Section>
);
