import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  @Input('tweetData') tweet: any;


  constructor() { }

  ngOnInit(): void {
    // console.log('>>> this.tweet', this.tweet);
  }

}
