import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { Customer } from '../customer/customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  email: string = '';
  password: string = '';

  constructor(private customerService: CustomerService, private router: Router) { }

 
  onSubmit() {
    this.customerService.login(this.email, this.password).subscribe(
      response => {
        if (response) {
          alert('Login successful');
          this.customerService.setCustomer(response);
          this.router.navigate(['/index']);
        } else {
          alert('Invalid email or password');
        }
      },
      error => {
        console.error('Error occurred during login', error); // Log the error
        alert('Error occurred during login');
      }
    );
  }

}
