import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimelineService } from 'src/app/timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  timeline: any = [];
  tweetText: string = "";
  tweetsSubscrtiption: Subscription;

  constructor(private timelineService: TimelineService) { }

  async ngOnInit() {
    this.getTimeline();
  }

  async getTimeline() {
    this.tweetsSubscrtiption = (await this.timelineService.getTweets()).subscribe((data: any) => {
      if(!data.error) {
        this.timeline = data.posts;        
      }
    })
  }

  async createTweet() {
    let response: any = await this.timelineService.createTweeet(this.tweetText).toPromise();
    
    if(!response.error) {
      alert(response.message);
      this.getTimeline();
    }  
  }


  ngOnDestroy() {
    if(this.tweetsSubscrtiption) {
      this.tweetsSubscrtiption.unsubscribe();
    }
  }
}
