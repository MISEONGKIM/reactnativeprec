import React from 'react';
import {HorizontalFlatList} from '@ui/lists/horizontal_flat_list';
import {SearchViewInterviewCard} from '@components';
import {interviewList} from '@test/mock_data';

export const SearchViewInterviewList = () => {
  return (
    <HorizontalFlatList
      data={interviewList}
      RenderItem={SearchViewInterviewCard}
    />
  );
};
