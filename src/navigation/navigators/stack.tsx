import React from 'react';
import {DefaultScreenType} from '@navigation/type';

export const Stack = <T extends DefaultScreenType>({
  Navigator,
  screens,
}: {
  Navigator;
  screens: T[];
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
