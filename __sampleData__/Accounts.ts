// An array of AccountWrapper objects, {accountType: string;  total: number; accounts: account[]}
// account object: {id: string; name: string; balance: number, simplePerformance: number, subType: string}

import { Account } from '../src/Account';
import { AccountWrapper } from '../src/AccountGroup';

// This is the data that will be used to populate the Accounts screen

export const Accounts: AccountWrapper[] = [
  {
    accountType: 'Cash',
    total: 7435,
    accounts: [
      {
        id: '1',
        name: 'Checking',
        balance: 7435,
        simplePerformance: undefined,
        subType: 'Checking',
      },
    ],
  },
  {
    accountType: 'TFSA',
    total: 35881.68,
    accounts: [
      {
        id: '2',
        name: 'TFSA',
        balance: 31761.48,
        simplePerformance: 20.09,
        subType: 'Managed',
      },
      {
        id: '3',
        name: 'TFSA',
        balance: 4120.2,
        simplePerformance: 12.22,
      },
    ],
  },
  {
    accountType: 'Non-registered',
    total: 23232.13,
    accounts: [
      {
        id: '4',
        name: 'Non-registered',
        balance: 18011.08,
        simplePerformance: 26.75,
      },
      {
        id: '5',
        name: 'Venture Fund I',
        balance: 5221.05,
        simplePerformance: 4.41,
        subType: 'Alt Investments',
      },
      {
        id: '6',
        name: 'Private Equity',
        balance: 0,
        simplePerformance: 4.41,
        subType: 'Alt Investments',
        status: 'In Progress',
      },
    ],
  },
];
