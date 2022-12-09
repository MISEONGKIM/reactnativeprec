import React from 'react';
import {StackScreenType, StackNavigatorType} from '@navigation/type';

export const Stack = <
  T1 extends StackNavigatorType,
  T2 extends StackScreenType,
>({
  Navigator,
  screens,
}: {
  Navigator: T1;
  screens: T2[];
}) => {
  return (
    <Navigator.Navigator>
      {screens.map((screen, i) => (
        <Navigator.Screen
          key={'Stack' + i}
          name={screen.name}
          component={screen.Component}
          options={screen.options}
        />
      ))}
    </Navigator.Navigator>
  );
};
