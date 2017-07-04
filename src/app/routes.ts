import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Auth, ActualStuff } from './ui';
import { AuthService } from './services';

export const routes: ModuleWithProviders = RouterModule.forRoot([
  { path: '', canActivate: [AuthService], component: ActualStuff },
  { path: 'auth', component: Auth },
  { path: '**', redirectTo: '' }
]);
