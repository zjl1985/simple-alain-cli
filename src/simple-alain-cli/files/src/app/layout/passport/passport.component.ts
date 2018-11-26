import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInfo } from './login-info';
@Component({
  selector: 'layout-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.less'],
})
export class LayoutPassportComponent {
  links = [
    {
      title: '帮助',
      href: '',
    },
    {
      title: '隐私',
      href: '',
    },
    {
      title: '条款',
      href: '',
    },
  ];

  loginInfo: LoginInfo;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loginInfo=new LoginInfo();
    this.loginInfo.title = '';
    this.loginInfo.desc = '';
    this.loginInfo.company = '';
    this.http.get('assets/tmp/login-info.json').subscribe((data: LoginInfo) => {
      if (data.title) this.loginInfo.title = data.title;
      if (data.desc) this.loginInfo.desc = data.desc;
      if (data.company) this.loginInfo.company = data.company;
    });
  }
}
