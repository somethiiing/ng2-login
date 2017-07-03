import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'auth',
  template: `
    <div [routerLink]="['']">ACTUAL STUFF</div>
    <h3>{{mode}}</h3>
    <div>
      <form>
        <input
          [(ngModel)]="user.email"
          name="email"
          type="email"
          placeholder="email"
        >
        <input
          [(ngModel)]="user.password"
          name="password"
          placeholder="password"
          type="password"
        >
        <button>{{mode}}</button>
      </form>
      <div (click)="toggleMode()">{{modeText}}</div>
    </div>


  `,
  styles: ['']
})

export class Auth {
  user = {
    email: '',
    password: ''
  }
  mode = 'Sign In!';
  modeText = 'Don\'t have an account?';

  toggleMode() {
    if (this.mode === 'Sign Up!') {
      this.mode = 'Sign In!';
      this.modeText = 'Don\'t have an account?';
    } else {
      this.mode = 'Sign Up!';
      this.modeText = 'Already have an account?';
    }
  }
}


