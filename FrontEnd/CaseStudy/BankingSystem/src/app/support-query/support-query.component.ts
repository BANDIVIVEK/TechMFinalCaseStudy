import { Component, OnInit } from '@angular/core';
import { SupportQueryService } from '../service/support-query.service';
import { SupportQuery } from './support-query.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-support-query',
  templateUrl: './support-query.component.html',
  styleUrls: ['./support-query.component.css']
})
export class SupportQueryComponent {

  newQuery = { customerId: '', query: '' }; // Object to hold form data

  constructor(private http: HttpClient) { }

  submitQuery(): void {
    if (this.newQuery.customerId && this.newQuery.query) { // Check if fields are not empty
      this.http.post('https://localhost:7289/api/SupportQueries', this.newQuery).subscribe((response: any) => {
          console.log('Query submitted successfully:', response);
          alert("Query Submitted Successfully");
          // Reset form after successful submission
          this.newQuery = { customerId: '', query: '' };
        }, (error) => {
          console.error('Error submitting query:', error);
        });
    } else {
      console.error('Customer ID and Query cannot be empty');
    }
  }
  }



