import React from 'react';
import {VerticalFlatList} from '@ui/lists';
import {SecondPageInterview} from '@components';
import {UnivListType} from '@test/mock_data';

export const SecondPageInterviewList = ({data}: {data: UnivListType[]}) => {
  return <VerticalFlatList data={data} RenderItem={SecondPageInterview} />;
};

//ProTypes 필요하징낳을까 ? ㅠ.ㅠ
