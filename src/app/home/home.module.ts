import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TweetComponent } from './timeline/tweet/tweet.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { 
        path: 'home',
        component: TimelineComponent
      },
      {
        path: ':username',
        component: ProfileComponent,
      },
    ]
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    TimelineComponent,
    TweetComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class HomeModule { }
