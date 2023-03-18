import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  routeUsername: any;
  routeSubscription: Subscription;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      this.routeUsername = params.get('username');
      this.getUserData();
    });
  }


  ngOnDestroy() {
    if(this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  async getUserData() {
    let response: any = await this.profileService.getUser(this.routeUsername).toPromise();
    if(response.error) {
      alert(response.message);
    } else {
      this.user = response.user;
    }
  }

}
