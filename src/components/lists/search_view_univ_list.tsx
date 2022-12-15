import React from 'react';
import {HorizontalFlatList} from '@ui/lists/horizontal_flat_list';
import {SearchViewUniv} from '@components';
import {univList} from '@test/mock_data';

export const SearchViewUnivList = () => {
  return <HorizontalFlatList data={univList} RenderItem={SearchViewUniv} />;
};
