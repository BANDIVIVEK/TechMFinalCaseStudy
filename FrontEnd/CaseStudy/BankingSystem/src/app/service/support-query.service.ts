import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SupportQuery } from '../support-query/support-query.model';

@Injectable({
  providedIn: 'root'
})
export class SupportQueryService {

  private apiUrl = 'https://localhost:7289/api/SupportQueries';

  constructor(private http: HttpClient) { }

  submitQuery(newQuery: SupportQuery): Observable<any> {
    return this.http.post(this.apiUrl, newQuery);
  }
}
