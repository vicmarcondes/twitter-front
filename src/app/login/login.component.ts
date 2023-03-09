import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  signupMode: boolean = false;

  signupForm = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('teste')
  }

  async onSubmit() {
    (await this.authService.signup(this.signupForm.value)).subscribe((data: any) => {
      if(!data.error) {
        alert('Conta criada com sucesso!');
      } else {
        alert('Erro: ' + data.message);
      }
    });
  }
  
  async login() {
    (await this.authService.login(this.loginForm.value)).subscribe((data: any) => {
      if(!data.error) {
        alert("Login feito com sucesso!");
        this.authService.setToken(data.access_token);
        this.router.navigate([""]);
      } else {
        alert('Erro: ' + data.message);
      }
    })
  }

}
