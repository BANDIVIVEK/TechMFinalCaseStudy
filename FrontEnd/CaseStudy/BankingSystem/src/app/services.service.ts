import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Customer } from './customer/customer.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  Loggedin_User:any;

  CustomerUrl: string ='https://localhost:7289/api/Customers';

  constructor(private http: HttpClient) { }

  getAllCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.CustomerUrl);
  }

  validateUser(username: string, password: string): Observable<boolean> {
    this.Loggedin_User = username;

    return this.getAllCustomers().pipe(
      map(users => {
        const user = users.find(u => u.email === username && u.password === password);
        return !!user;
      })
    );
  }
}
