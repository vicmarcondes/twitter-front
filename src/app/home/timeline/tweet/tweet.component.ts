import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TimelineService } from 'src/app/timeline.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  @Input('tweetData') tweet: any;
  timeSince: string = "";

  constructor(
    private timelineService: TimelineService
  ) { }

  ngOnInit(): void {
    this.timeSince = moment(this.tweet.createdAt).fromNow(true);
  }

  likePost() {
    this.tweet.liked = !this.tweet.liked; 
    this.timelineService.likePost(this.tweet.liked, this.tweet.id);
  }

}
