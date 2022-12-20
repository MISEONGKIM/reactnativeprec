import {View, Text, Button} from 'react-native';
import React from 'react';
import {TicketStackScreenProps} from '@navigation/type';
import {useNavigation} from '@react-navigation/native';

export const IdentityVerificationScreen = () => {
  const navigation =
    useNavigation<
      TicketStackScreenProps<'IdenfityVerification'>['navigation']
    >();
  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="back" />
      <Text>IdentityVerificationScreen</Text>
    </View>
  );
};
