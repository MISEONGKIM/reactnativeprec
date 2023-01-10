import React from 'react';
import {AssayDrawerItem} from './assay_drawer_Item';
import {DisableAssayDrawer} from './disable_drawer_view';
import {EnableAssayDrawer} from './enable_drawer_view';

export const AssayDrawer = ({
  drawerList,
  disable,
  activeValue,
}: {
  drawerList: Array<Parameters<typeof AssayDrawerItem>[0]>;
  disable: boolean;
  activeValue: string;
}) =>
  disable ? (
    <DisableAssayDrawer title={activeValue} />
  ) : (
    <EnableAssayDrawer drawerList={drawerList} title={activeValue} />
  );
