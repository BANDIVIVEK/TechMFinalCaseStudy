import { Injectable } from '@angular/core';
import { Customer } from '../customer/customer.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://localhost:7289/api/Customers';
  private customer: Customer | null = null;


  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<Customer | null> {
    
    return this.http.post<Customer>('https://localhost:7289/api/Customers/login', { email, password });
  }

  setCustomer(customer: Customer) {
    this.customer = customer;
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  updateCustomer(id: number, customer: Customer): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
