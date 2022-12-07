import React from 'react';
import {DefaultScreenType, NavigatorType} from '@navigation/type';

export const Stack = <T1 extends NavigatorType, T2 extends DefaultScreenType>({
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
