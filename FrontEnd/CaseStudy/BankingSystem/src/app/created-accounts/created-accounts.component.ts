import { Component, OnInit } from '@angular/core';
import { Account } from '../account/account.model';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-created-accounts',
  templateUrl: './created-accounts.component.html',
  styleUrls: ['./created-accounts.component.css']
})
export class CreatedAccountsComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.accountService.getAccounts().subscribe((data: Account[]) => {
      this.accounts = data;
    });
  }

}
