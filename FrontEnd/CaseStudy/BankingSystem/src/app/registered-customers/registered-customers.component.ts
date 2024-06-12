import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer/customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-registered-customers',
  templateUrl: './registered-customers.component.html',
  styleUrls: ['./registered-customers.component.css']
})
export class RegisteredCustomersComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getCustomers().subscribe(
      customers => {
        this.customers = customers;
      },
      error => {
        console.error('Error loading customers:', error);
        // Handle error
      }
    );
  }

}
