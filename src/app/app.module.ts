import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Auth, ActualStuff } from './ui';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    Auth,
    ActualStuff
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
