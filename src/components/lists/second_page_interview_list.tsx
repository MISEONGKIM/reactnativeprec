import React from 'react';
import {VerticalFlatList} from '@ui/lists';
import {SecondPageApplyItvCard} from '@components';
import {InterviewListType} from '@test/mock_data';

export const SecondPageApplyItvList = ({data}: {data: InterviewListType[]}) => {
  return <VerticalFlatList data={data} RenderItem={SecondPageApplyItvCard} />;
};

//ProTypes 필요하징낳을까 ? ㅠ.ㅠ
