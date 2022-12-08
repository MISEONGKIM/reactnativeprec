export const secondPageList: SecondPageListType[] = [
  {
    univName: 'First Item',
    ipsiYear: '2023',
    ipsigubun: '수시모집',
    startDate: '2022-01-01',
    endDate: '2022-02-21',
  },
  {
    univName: 'Second Item',
    ipsiYear: '2023',
    ipsigubun: '수시모집',
    startDate: '2022-01-01',
    endDate: '2022-02-21',
  },
  {
    univName: 'Third Item',
    ipsiYear: '2023',
    ipsigubun: '수시모집',
    startDate: '2022-01-01',
    endDate: '2022-02-21',
  },
];

export interface SecondPageListType {
  univName: string;
  ipsiYear: string;
  ipsigubun: string;
  startDate: string;
  endDate: string;
}
