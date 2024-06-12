import { Component, OnInit } from '@angular/core';
import { Account } from './account.model';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  
  newAccount: Account = new Account();

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    
  }

  onSubmit(acc:Account) {
    
    this.accountService.createAccount(acc).subscribe(response => {
     
        alert("New account created");
        console.log('New account created:'+ response);
        this.newAccount = new Account();
    },
    error => {
      console.error('Error creating account:', error);
      alert("Error occured while creating account");
    }
  );
  }


}
