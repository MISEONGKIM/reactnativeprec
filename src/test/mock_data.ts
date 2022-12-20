export const interviewListData: InterviewListType[] = [
  {
    code: 1,
    univName: 'First Item',
    ipsiYear: '2023',
    ipsigubun: '수시모집',
    startDate: '2022-01-01',
    endDate: '2022-02-21',
    isCheck: true,
  },
  {
    code: 2,
    univName: 'Second Item',
    ipsiYear: '2023',
    ipsigubun: '모의모집',
    startDate: '2022-01-01',
    endDate: '2022-02-21',
    isCheck: true,
  },
  {
    code: 3,
    univName: 'Third Item',
    ipsiYear: '2023',
    ipsigubun: '수시모집',
    startDate: '2022-01-01',
    endDate: '2022-02-21',
    isCheck: false,
  },
];

export interface InterviewListType {
  code: number;
  univName: string;
  ipsiYear: string;
  ipsigubun: string;
  startDate: string;
  endDate: string;
  isCheck: boolean;
}

export const ticketListData: TicketType[] = [
  {
    univName: '대학명1',
    selTypeName: '전형명1',
    majorName: '모집단위명1',
    indenfityNumber: '123',
    name: '이름1',
  },
  {
    univName: '대학명2',
    selTypeName: '전형명2',
    majorName: '모집단위명2',
    indenfityNumber: '223',
    name: '이름2',
  },
];

export interface TicketType {
  univName: string;
  selTypeName: string;
  majorName: string;
  indenfityNumber: string;
  name: string;
}

export const univeNameData: string[] = [
  '가대학교',
  '나대학교',
  '다대학교',
  '라대학교',
  '마대학교',
  '바대학교',
];
