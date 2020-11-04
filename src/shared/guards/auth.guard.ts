import { CacheService } from './../services/cache.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private cacheService: CacheService<User>) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const authorized = this.cacheService.get('user');

    if (authorized) {
      return true;
    } else {
      this.router.navigate(["/login"], {
        queryParams: { redirect: state.url },
        replaceUrl: true
      });
      return false;
    }

  }
}
