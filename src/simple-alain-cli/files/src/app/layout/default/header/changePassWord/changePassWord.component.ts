import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { ChangePassWordService } from '../changePassWord.service';
import { MD5 } from './md5';
import { Router} from '@angular/router';

@Component({
  selector: 'app-passWord',
  templateUrl: './changePassWord.component.html',
  styleUrls: ['./changePassWord.component.less']
})
export class changePassWordComponent implements OnInit {
  isSpinning: boolean = false;
  constructor(private fb: FormBuilder,
    private modal: NzModalRef,
    private message: NzMessageService,
    private pwdService: ChangePassWordService,
    private router: Router) { }


  confirmPassWord = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.pwdForm.controls.newPwd.value) {
      return { confirmPassWord: true, error: true };
    }
  };

  // 初始化form表单
  pwdForm: FormGroup = this.fb.group({
    origin: [null, [Validators.required]],
    newPwd: [null, [Validators.required, Validators.minLength(6)]],
    checkPassword: [null, [Validators.required, this.confirmPassWord]]
  })

  ngOnInit() {

  }

  //关闭
  closeForm(e: MouseEvent): void {
    e.preventDefault();
    this.pwdForm.reset();
    this.modal.destroy();
  };

  submitForm() {
    this.pwdForm.value.origin = MD5.hex_md5(this.pwdForm.value.origin);
    this.pwdForm.value.newPwd = MD5.hex_md5(this.pwdForm.value.newPwd);
    this.pwdService.changePwd(this.pwdForm.value)
      .subscribe(res => {
        if (res.errmsg) {
          this.pwdForm.reset();
          this.message.error(res.errmsg);
        } else {
          this.router.navigateByUrl('/passport/login');
        }
      });
  }


}
