import React from 'react';
import {StyleSheet} from 'react-native';
import {Drawer} from 'react-native-paper';
import {AssayDrawerItem} from './assay_drawer_Item';
const style = StyleSheet.create({
  section: {
    position: 'absolute',
    zIndex: 1000000,
    backgroundColor: 'red',
    width: 60,
  },
});
export const AssayDrawer = ({
  drawerList,
}: {
  drawerList: Array<Parameters<typeof AssayDrawerItem>[0]>;
}) => (
  <Drawer.Section title="Some title" style={style.section}>
    {drawerList.map(data => (
      <AssayDrawerItem key={'Drawer' + data.label} {...data} />
    ))}
  </Drawer.Section>
);
