import {View} from 'react-native';
import React from 'react';
import {VerticalFlatList} from '@ui/lists';
import {secondPageList} from '@test/mock_data';
import {UnivInfoCard} from '@components';

export const SecondPageCardList = () => {
  return (
    <View>
      <VerticalFlatList data={secondPageList} RenderItem={UnivInfoCard} />
    </View>
  );
};
