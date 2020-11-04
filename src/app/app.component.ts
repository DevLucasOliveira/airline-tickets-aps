import { Component } from '@angular/core';

import { User } from 'src/shared/user';
import { CacheService } from 'src/shared/services/cache.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {

  user: User;

  constructor(
    private cacheService: CacheService<User>,
  ) {
    this.verifyUserAreLogged();
  }

  verifyUserAreLogged() {
    this.user = this.cacheService.get("user");
  }

  getOut() {
    this.cacheService.remove("user");
  }

  isLogged() {
    return this.cacheService.get("user");;
  }

}
