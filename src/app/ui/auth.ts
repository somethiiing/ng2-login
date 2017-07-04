import { Component } from '@angular/core';
import { AuthService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'auth',
  template: `
    <div class="container">
        <div class="card card-container">
            <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" class="profile-name-card"></p>
            <div>{{errorMessage}}</div>
            <form class="form-signin" (submit)="onSubmit()">
                <span id="reauth-email" class="reauth-email"></span>
                <input
                  [(ngModel)]="user.email"
                  name="email"
                  type="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email Address"
                  required autofocus
                >
                <input
                  [(ngModel)]="user.password"
                  name="password"
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  required
                >
                <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">{{mode}}</button>
            </form>
            <p (click)="toggleMode()" class="forgot-password"> {{modeText}} </p>
        </div>
    </div>

  `,
  styleUrls: ['./auth.css']
})

export class Auth {
  user = {
    email: '',
    password: ''
  }

  errorMessage = '';
  mode = 'Sign In!';
  modePath= 'signin';
  modeText = 'Don\'t have an account?';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  toggleMode() {
    if (this.mode === 'Sign Up!') {
      this.modePath = 'signin';
      this.mode = 'Sign In!';
      this.modeText = 'Don\'t have an account?';
    } else {
      this.modePath = 'signup';
      this.mode = 'Sign Up!';
      this.modeText = 'Already have an account?';
    }
  }

  onSubmit() {
    this.auth.authenticate(this.modePath, this.user)
      .subscribe(data => {
        if (data === 'USERORPWNOTCORRECT') {
          this.errorMessage = 'Email or password is incorrect. Please try again!';
        } else if (data === 'USEREXISTS') {
          this.errorMessage = 'User already exists!';
        } else {
          this.router.navigate(['']);
        }
      });
  }
}


