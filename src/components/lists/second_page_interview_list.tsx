import React from 'react';
import {VerticalFlatList} from '@ui/lists';
import {SecondPageApplyItvCard} from '@components';
import {InterviewListType} from '@test/mock_data';
import {RootStackScreenProps} from '@navigation/type';
import {useNavigation} from '@react-navigation/native';
import {ListRenderItemInfo} from 'react-native';

export const SecondPageApplyItvList = ({data}: {data: InterviewListType[]}) => {
  const navigation =
    useNavigation<RootStackScreenProps<'Bottom'>['navigation']>();
  const registerBtnOnPress = () => {
    navigation.navigate('AssayAnswerPhoto');
  };

  return (
    <VerticalFlatList<InterviewListType>
      data={data}
      renderItem={(props: ListRenderItemInfo<InterviewListType>) => (
        <SecondPageApplyItvCard
          item={props.item}
          onPress={registerBtnOnPress}
        />
      )}
    />
  );
};

//ProTypes 필요하징낳을까 ? ㅠ.ㅠ
