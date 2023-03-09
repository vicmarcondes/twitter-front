import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API: string = "http://localhost:3001";

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private httpClient: HttpClient) { }

  async getTweets() {
    return this.httpClient.get(`${API}/posts`);
  }

  createTweeet(text: string) {
    let tokenData: any = localStorage.getItem('token');
    let username = tokenData.username;

    return this.httpClient.post(`${API}/posts`, {username, text})
  }

}
