import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.get<any[]>(`${this.apiUrl}/get-users`, { headers })
      .pipe(
        map(response => {
          return response; // Assuming the response is an array of users
        }),
        catchError(error => {
          console.error('Error fetching users:', error);
          return throwError('Error fetching users, please try again later.');
        })
      );
  }
}
