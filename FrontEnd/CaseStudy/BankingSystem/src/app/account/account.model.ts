export class Account {
  id?: number;
  accountType: string = '';
  accountNumber: string = '';
  customerId: number = 0 ;
  balance: number =0;
  interestRate: number | null | undefined = 0;
  openingDate?: Date;
}
