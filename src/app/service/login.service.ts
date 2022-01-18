import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost/angular64API/login.php';
  constructor(private httpClient: HttpClient) { }
  public getlogin(username: string, password: string): Observable<any> {
    return this.httpClient.get(this.url + '?username='+ username + '&password='+ password);
  }
  public postlogin(username: string, password: string): Observable<any> {
    return this.httpClient.post(this.url, {username, password});
  }
}
