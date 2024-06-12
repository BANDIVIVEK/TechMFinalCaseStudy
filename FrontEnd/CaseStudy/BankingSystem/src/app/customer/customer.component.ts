import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from './customer.model';
import { Router } from '@angular/router';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer = new Customer();
  confirmPassword: string = '';
  

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    // Any initialization logic can go here
  }

  onSubmit(cust:Customer) {
    this.customerService.createCustomer(cust).subscribe(response => {
      if (response){
        alert("Customer Registered successfully");
        console.log('Customer registered:', response);
        this.router.navigate(['/login']);
      }
      }, 
      error => {
        console.error('Error registering customer:', error);
        alert("Error occured while registering");
      }
    );
  }

}
