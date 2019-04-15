import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { StorageService } from '../modules/shared/providers/storage.service';

@Injectable()
export class ActiveGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (StorageService.get('responseData') != null && StorageService.get("JwtToken") != null) {
      return true;
    }
        this.router.navigate(['login']);
        return false;
  }

}