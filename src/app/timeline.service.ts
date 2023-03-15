import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { query } from '@angular/animations';


const API: string = "http://localhost:3001";

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  tokenData: any;
  constructor(private httpClient: HttpClient) {
    let token: any = localStorage.getItem('token');
    this.tokenData = JSON.parse(token);
   }

  async getTweets() {
    return this.httpClient.get(`${API}/posts`, {params: {user_id: this.tokenData.user_id}});
  }

  createTweeet(text: string) {
    let username = this.tokenData.username;

    return this.httpClient.post(`${API}/posts`, {username, text})
  }

  likePost(is_liked: boolean, post_id: string) {
    return this.httpClient.patch(`${API}/like`, 
      {is_liked, user_id: this.tokenData.user_id, post_id}
    ).toPromise();
  }

}
