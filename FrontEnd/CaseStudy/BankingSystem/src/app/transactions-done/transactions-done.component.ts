import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction/transaction.model';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-transactions-done',
  templateUrl: './transactions-done.component.html',
  styleUrls: ['./transactions-done.component.css']
})
export class TransactionsDoneComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getTransactions().subscribe((data: Transaction[]) => {
      this.transactions = data;
    });
  }

}
