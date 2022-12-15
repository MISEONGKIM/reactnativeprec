import React from 'react';
import {VerticalFlatList} from '@ui/lists';
import {SecondPageInterview} from '@components';
import {InterviewListType} from '@test/mock_data';

export const SecondPageInterviewList = ({
  data,
}: {
  data: InterviewListType[];
}) => {
  return <VerticalFlatList data={data} RenderItem={SecondPageInterview} />;
};

//ProTypes 필요하징낳을까 ? ㅠ.ㅠ
