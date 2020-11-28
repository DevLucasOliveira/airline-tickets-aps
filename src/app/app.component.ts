import { Component } from '@angular/core';

import { User } from 'src/shared/user';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {

  user: User;

  constructor(
    private authService: AuthService,
  ) {}

  getOut() {
    this.authService.logout();
  }

  isLogged() {
    return this.authService.currentUserValue;
  }

}
