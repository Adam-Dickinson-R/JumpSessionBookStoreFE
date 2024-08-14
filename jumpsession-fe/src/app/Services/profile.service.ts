import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Profile } from '../Models/profile';
import { CheckOut } from '../Models/checkOut';


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
          return response;
        }),
        catchError(error => {
          return throwError('Error fetching users, please try again later.');
        })
      );
  }

  createUser(profile: Profile): Observable<Profile> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post<Profile>(`${this.apiUrl}/create-user`, profile, { headers })
      .pipe(
        map(response => {
          return response;
        }),
        catchError(error => {
          console.error('Error creating user:', error);
          return throwError('Error creating user, please try again later.');
        })
      );
  }

  assignBooks(checkOut : CheckOut) : Observable<CheckOut> {
    return this.http.post<CheckOut>(`${this.apiUrl}/checkOut`, checkOut);
  }
}
