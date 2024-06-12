import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  Username: string = '';
  Password: string = '';

  constructor( private router: Router) { }

  onSubmit() {
    if (this.Username === 'admin' && this.Password === 'admin') {
      console.log('Login successful');
      this.router.navigate(['/home']);
    } else {
      console.error('Login failed');
      alert('Invalid credentials');}
  }

}
