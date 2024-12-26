import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiURL = "https://jsonplaceholder.typicode.com/users";


  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiURL);
  }

  getFirstFiveUsers(): Observable<any> {
    return this.http.get(this.apiURL, { params: { _limit: 5 } });
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  submitUserForm(userData: any): Observable<any> {
    return this.http.post(this.apiURL, userData);
  }
  
}
