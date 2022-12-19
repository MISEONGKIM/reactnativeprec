import React from 'react';
import {TicketType} from '@test/mock_data';
import {HorizontalFlatList} from '@ui/lists';
import {TicketCard} from '@components';

export const TicketList = ({data}: {data: TicketType[]}) => (
  <HorizontalFlatList data={data} RenderItem={TicketCard} />
);
