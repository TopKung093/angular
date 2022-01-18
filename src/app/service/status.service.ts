import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  url = 'http://localhost/angular64API/status.php';
  constructor(private httpClient: HttpClient) { }
  public getStatus(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
