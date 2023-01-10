import React, {useMemo, useState} from 'react';
import {AssayDrawer} from '@ui/drawer';

export const AssayQuestionDrawer = () => {
  const [active, setActive] = useState('1-1');
  const drawerList = useMemo(
    () => [
      {
        label: '1-1',
        isFilmComplete: false,
        active: active === '1-1',
        onPress: () => setActive('1-1'),
      },
      {
        label: '1-2',
        isFilmComplete: false,
        active: active === '1-2',
        onPress: () => setActive('1-2'),
      },
      {
        label: '1-3',
        isFilmComplete: true,
        active: active === '1-3',
        onPress: () => setActive('1-3'),
      },
      {
        label: '2-1',
        isFilmComplete: true,
        active: active === '2-1',
        onPress: () => setActive('2-1'),
      },
      {
        label: '2-2',
        isFilmComplete: true,
        active: active === '2-2',
        onPress: () => setActive('2-2'),
      },
      {
        label: '2-3',
        isFilmComplete: false,
        active: active === '2-3',
        onPress: () => setActive('2-3'),
      },
      {
        label: '3-1',
        isFilmComplete: true,
        active: active === '3-1',
        onPress: () => setActive('3-1'),
      },
      {
        label: '3-2',
        isFilmComplete: false,
        active: active === '3-2',
        onPress: () => setActive('3-2'),
      },
      {
        label: '3-3',
        isFilmComplete: false,
        active: active === '3-3',
        onPress: () => setActive('3-3'),
      },
      {
        label: '4-1',
        isFilmComplete: false,
        active: active === '4-1',
        onPress: () => setActive('4-1'),
      },
      {
        label: '4-2',
        isFilmComplete: false,
        active: active === '4-2',
        onPress: () => setActive('4-2'),
      },
      {
        label: '4-3',
        isFilmComplete: false,
        active: active === '4-3',
        onPress: () => setActive('4-3'),
      },
    ],
    [active],
  );
  return (
    <AssayDrawer drawerList={drawerList} disable={false} activeValue={active} />
  );
};
