import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { requiredInput, emailValidation } from 'app/core/common-helper/custom-validate.helper';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { Router } from '@angular/router';
import { NotificationService } from 'app/core/services/notification.service';
declare const $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public showMessageErr: boolean = false;
  public isSubmited: boolean = false;
  public showAlertSuccess: boolean = false;
  public showType = 'password';
  public showPasswordIcon = 'btn btn-none btn-icon btn-password-showhide';

  constructor(private login: FormBuilder,
    private authenService: AuthenticationService,
    private router: Router,
    private notification: NotificationService) { }

  ngOnInit() {
    $('.label-icheck input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%'
    });
    this.formLogin = this.login.group({
      username: ['deadpool@example.com', [requiredInput]],
      password: ['bottomsecret', requiredInput]
    });

  }

  showPassWord() {
    if (this.showType == 'password') {
      this.showPasswordIcon = 'btn btn-none btn-icon btn-password-showhide show';
      this.showType = 'text';
      return;
    }
    if (this.showType == 'text') {
      this.showType = 'password';
      this.showPasswordIcon = "btn btn-none btn-icon btn-password-showhide";
      return;
    }
  }

  onSubmit() {
    this.isSubmited = true;
    if (this.formLogin.invalid) {
      this.showMessageErr = true;
      return;
    }

    let parrams = {
      "email": this.formLogin.controls['username'].value,
      "password": this.formLogin.controls['password'].value
    }
    this.authenService.login(parrams).subscribe(response => {
      if (response.status == '200') {
        // this.notification.showNotification('ログアウトが完了しました');
        this.router.navigate(['/manage/home']);
      }
      if (response.status == '401') {
        this.notification.showNotification('Failed', 2);
        this.showMessageErr = true;
      }
    })
  }
}

