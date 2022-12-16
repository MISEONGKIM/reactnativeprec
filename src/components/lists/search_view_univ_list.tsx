import React from 'react';
import {HorizontalFlatList} from '@ui/lists';
import {SearchViewInterviewCard} from '@components';
import {interviewListData} from '@test/mock_data';

export const SearchViewInterviewList = () => {
  return (
    <HorizontalFlatList
      data={interviewListData}
      RenderItem={SearchViewInterviewCard}
    />
  );
};
