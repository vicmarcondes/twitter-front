import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  usernameRoute: any;

  constructor(
    private authService: AuthService,
    private router: Router  
  ) { }

  ngOnInit(): void {
    let token: any = this.authService.getUserDataFromCache();
    this.usernameRoute = [`/${token.username}`];
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
