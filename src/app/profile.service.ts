import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API: string = "http://localhost:3001";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  tokenData: any;
  constructor(private httpClient: HttpClient) {
    let token: any = localStorage.getItem('token');
    this.tokenData = JSON.parse(token);
   }

  getUser(username: string) {
    return this.httpClient.get(`${API}/users/${username}`);
  }


}
