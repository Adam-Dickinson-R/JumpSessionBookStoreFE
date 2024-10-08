import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) { }

  //ToDo: write Login endpoint to handle log in, leave this as is for them to fix with correct endpoint, Maybe
  login(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.get<any>(`${this.apiUrl}/get-admins`, { headers })
      .pipe(map(response => {
        for (let admin of response) {
          if (admin.username === username && admin.password === password) {
            return true;
          }
        }
        return false;
      }));
  }
}
