export const univList: UnivListType[] = [
  {
    univName: 'First Item',
    ipsiYear: '2023',
    ipsigubun: '수시모집',
    startDate: '2022-01-01',
    endDate: '2022-02-21',
    isCheck: true,
  },
  {
    univName: 'Second Item',
    ipsiYear: '2023',
    ipsigubun: '모의모집',
    startDate: '2022-01-01',
    endDate: '2022-02-21',
    isCheck: true,
  },
  {
    univName: 'Third Item',
    ipsiYear: '2023',
    ipsigubun: '수시모집',
    startDate: '2022-01-01',
    endDate: '2022-02-21',
    isCheck: false,
  },
];

export interface UnivListType {
  univName: string;
  ipsiYear: string;
  ipsigubun: string;
  startDate: string;
  endDate: string;
  isCheck: boolean;
}
