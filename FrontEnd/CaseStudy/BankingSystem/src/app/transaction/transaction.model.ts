export class Transaction {
    id?: number;
    accountNumber: string = '';
    transactionType: string = '';
    amount: number = 0;
    date?: Date;
    description?: string;
  }
  