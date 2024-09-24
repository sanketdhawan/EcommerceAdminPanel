import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApisService {
  path = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpclient: HttpClient) {}

  getUsers() {
    return this.httpclient.get<any[]>(this.path);
  }
}
