import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';


const API: string = "http://localhost:3001";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signup(userData: any) {
    return this.httpClient.post(`${API}/users`, userData);
  }

  login(userData: any) {
    return this.httpClient.post(`${API}/users/login`, userData);
  }

  setToken(token: string) {
    let decodedToken: any = jwt_decode(token);
    
    const item = {
      token,
      user_id: decodedToken.id,
      username: decodedToken.username, 
      fullname: decodedToken.fullname
    }
    
    localStorage.setItem('token', JSON.stringify(item));
  }

  async getToken() {
    return localStorage.getItem('token');
  }
}
