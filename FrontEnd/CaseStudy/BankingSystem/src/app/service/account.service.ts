import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../account/account.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'https://localhost:7289/api/Accounts';

  constructor(private http: HttpClient) { }

  getAccountNumbers(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/accountNumbers`);
  }

  getAccountByNumber(accountNumber: string): Observable<Account> {
    return this.http.get<Account>(`${this.apiUrl}/${accountNumber}`);
  }

  updateAccount(account: Account): Observable<Account> {
    return this.http.put<Account>(`${this.apiUrl}/${account.id}`, account);
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiUrl);
  }

  getAccount(id: number): Observable<Account> {
    return this.http.get<Account>(`${this.apiUrl}/${id}`);
  }

  createAccount(newAccount: Account): Observable<Account> {
    return this.http.post<Account>(this.apiUrl, newAccount);
  }

  deleteAccount(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
