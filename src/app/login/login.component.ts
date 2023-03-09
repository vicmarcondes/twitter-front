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
    let response: any = await this.authService.signup(this.signupForm.value).toPromise();
    if(!response.error) {
      alert('Conta criada com sucesso!');
    } else {
      alert('Erro: ' + response.message);
    }    
  }
  
  async login() {
    let response: any = await this.authService.login(this.loginForm.value).toPromise();

    if(!response.error) {
      alert("Login feito com sucesso!");
      this.authService.setToken(response.access_token);
      this.router.navigate([""]);
    } else {
      alert('Erro: ' + response.message);
    }
  }

}
