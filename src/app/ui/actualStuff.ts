import { Component } from '@angular/core';

@Component({
  selector: 'actual-stuff',
  template: `
    <div [routerLink]="['auth']">ACTUAL STUFF</div>
    <div>
      REAL IMPORTANT THINGS
    </div>
  `,
  styles: ['']
})

export class ActualStuff {}
