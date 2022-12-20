import {View, Button} from 'react-native';
import React from 'react';
import {TicketStackScreenProps} from '@navigation/type';
import {useNavigation} from '@react-navigation/native';
import {CameraView} from '@components';

export const IdentityVerificationScreen = () => {
  const navigation =
    useNavigation<
      TicketStackScreenProps<'IdenfityVerification'>['navigation']
    >();
  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="back" />
      <CameraView />
    </View>
  );
};
