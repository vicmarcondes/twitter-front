import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  context: any = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.context = this.router.url;
  }

}
