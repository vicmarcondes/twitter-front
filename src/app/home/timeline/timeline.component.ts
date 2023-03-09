import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  timeline: any = [];
  tweetText: string = "";

  constructor(private timelineService: TimelineService) { }

  async ngOnInit() {
    this.getTimeline();
  }

  async getTimeline() {
    (await this.timelineService.getTweets()).subscribe((data: any) => {
      if(!data.error) {
        this.timeline = data.posts;        
      }
    })
  }

  async createTweet() {
    console.log('>>> this.tweetText', this.tweetText);
    this.timelineService.createTweeet(this.tweetText).subscribe((data: any) => {
      if(!data.error) {
        alert(data.message);
        this.getTimeline();
      }
    })
  }

}
