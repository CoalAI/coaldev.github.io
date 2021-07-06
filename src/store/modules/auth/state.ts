import { User } from '@/store/models/user';
import { Company } from '@/store/models/company';
import { Transaction } from '@/store/models/transaction';

export type State = {
    user: User;
    token: string;
    listOfUsers: User[];
    ListOfVendors: User[];
    // eslint-disable-next-line
    types: any[];
    companies: Company[];
    transactions: Transaction[];
    expense: Transaction;
    socket: any;
    notifications: Notification[];
    error: any;

};

export const state: State = {
  user: {},
  token: '',
  listOfUsers: [],
  ListOfVendors: [],
  types: [],
  companies: [],
  transactions: [],
  expense: {},
  socket: {},
  notifications: [],
  error: {},
  
};