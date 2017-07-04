import { Component } from '@angular/core';
import { AuthService} from '../services';

@Component({
  selector: 'actual-stuff',
  template: `
    <div [routerLink]="['auth']">Auth</div>
    <div>
      REAL IMPORTANT THINGS
    </div>
    <button (click)="signout()">Sign Out!!!</button>
  `,
  styles: ['']
})

export class ActualStuff {
  constructor(private auth: AuthService) { }

  signout() {
    this.auth.signout();
  }
}
