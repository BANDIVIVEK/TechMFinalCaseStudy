import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction.model';
import { TransactionService } from '../service/transaction.service';
import { AccountService } from '../service/account.service';
import { Account } from '../account/account.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transaction: Transaction = new Transaction();
  accounts: Account[] = [];

  constructor(private transactionService: TransactionService,
    private accountService: AccountService) { }
  ngOnInit(): void {
    
  }

  onSubmit(ngForm:any) {
    this.transactionService.createTransaction(this.transaction).subscribe(response => {
      if (response){
        alert("Transaction successful");
        console.log('Transaction successful:', response);

        this.updateAccountBalance(this.transaction.accountNumber, this.transaction.amount);
      }
    }, 
    error => {
      console.error('Error while transaction:', error);
      alert("Transaction Failure");
    });
  }
  updateAccountBalance(accountNumber: string, amount: number): void {
    console.log(this.transaction.transactionType)
    this.accountService.getAccountByNumber(accountNumber).subscribe((account) => {
      console.log("into meth")
      if (this.transaction.transactionType == 'Withdrawal' || this.transaction.transactionType == 'Transfer') {
        console.log("into wd")
        account.balance -= this.transaction.amount;
      } else if (this.transaction.transactionType === 'Deposit') {
        account.balance += this.transaction.amount;
      }

      this.accountService.updateAccount(account).subscribe(() => {
        alert("Account balance updated successfully");
        this.transaction = new Transaction();
      }, 
      error => {
        console.error('Error updating account balance:', error);
        alert("Error occurred while updating account balance");
      });
    });
  }

}
