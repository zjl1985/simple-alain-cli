import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SettingsService, MenuService } from '@delon/theme';


@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {

  constructor(private router: Router,
    private settingService: SettingsService,
    private menuService: MenuService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const menu = this.menuService.menus[0];
    if (menu.children === undefined || menu.children.length === 0) {
      this.router.navigateByUrl('/passport/login');
      return false;
    }
    const name = this.settingService.user.name;
    if (name === undefined || name === null) {
      this.router.navigateByUrl('/passport/login');
      return false;
    }
    if (name === '超级管理员') {
      this.router.navigateByUrl('/basic/customer/list');
    }
    return true;
  }
}
