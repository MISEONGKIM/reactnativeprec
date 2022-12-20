import {univeNameData} from '@test/mock_data';

export const validationUnivName = (value: string) => {
  return value === '' || univeNameData.indexOf(value) > -1;
};
