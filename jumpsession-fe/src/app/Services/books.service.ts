import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Book } from '../Models/book';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'http://localhost:8080/api/book';

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.get<Book[]>(`${this.apiUrl}/get-books`, { headers })
      .pipe(
        map(response => {
          return response; // Assuming the response is an array of books
        }),
        catchError(error => {
          console.error('Error fetching users:', error);
          return throwError('Error fetching users, please try again later.');
        })
      );
  }
}
