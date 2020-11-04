import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { User } from 'src/shared/user';
import { CacheService } from 'src/shared/services/cache.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {

  user: User;
  loggged: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private cacheService: CacheService<User>,
  ) {
    this.initializeApp();
    this.verifyUserAreLogged();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  verifyUserAreLogged() {
    this.user = this.cacheService.get("User");
    if (this.user != null) {
      this.loggged = true;
    }
  }

  getOut() {
    this.cacheService.remove("User");
  }

}
