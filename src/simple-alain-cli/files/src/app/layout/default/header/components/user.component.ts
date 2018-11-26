import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { HttpClient } from '@angular/common/http';
import { NzModalService } from 'ng-zorro-antd';
import { changePassWordComponent } from '../changePassWord/changePassWord.component';

@Component({
  selector: 'header-user',
  template: `
  <nz-dropdown nzPlacement="bottomRight">
    <div class="alain-default__nav-item d-flex align-items-center px-sm" nz-dropdown>
      <nz-avatar [nzSrc]="settings.user.avatar" nzSize="small" class="mr-sm"></nz-avatar>
      {{settings.user.name}}
    </div>
    <div nz-menu class="width-sm">
      <div nz-menu-item (click)="changPwd()"><i class="anticon anticon-form mr-sm"></i>修改密码</div>
      <div nz-menu-item (click)="logout()"><i class="anticon anticon-setting mr-sm"></i>退出登录</div>
    </div>
  </nz-dropdown>
  `,
})
export class HeaderUserComponent {
  constructor(
    public settings: SettingsService,
    private router: Router,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private http: HttpClient,
    private modalService: NzModalService) {
  }

  logout() {
    this.http.get('/xinhai/logout');
    this.tokenService.clear();
    this.settings.setUser(null);
    this.router.navigateByUrl(this.tokenService.login_url);
  }

  changPwd() {
    this.modalService.create({
      nzTitle: '修改密码：',
      nzContent: changePassWordComponent,
      nzFooter: null
    });
  }
}
