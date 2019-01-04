import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { requiredInput } from 'app/core/common-helper/custom-validate.helper';
import { ResetPasswordService } from 'app/core/services/resetpassword.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'app/core/services/notification.service';
const INVALID_PASSWORD = {
  Required: true,
  message: 'This field is required'
};

@Component({
  selector: 'app-man023',
  templateUrl: './man023.component.html'
})

export class Man023Component implements OnInit {

  public formReset: FormGroup;
  public isShow: boolean = false;
  public isSubmited: boolean = false;
  showTypePassword = 'password';
  showTypeConfirmPassWord = 'password';
  showPassWordChange = 'btn btn-none btn-icon btn-password-showhide';
  showRePassWordChange = 'btn btn-none btn-icon btn-password-showhide';
  public token;
  constructor(private reset: FormBuilder,
    private resetpassService: ResetPasswordService,
    private router: Router,
    public activatedRoute: ActivatedRoute, 
    private notification: NotificationService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(data => {
      this.token = data['token'];
      console.log('tokennn ', this.token);
    });
    this.formReset = this.reset.group({
      password: ['', this.passwordValidation],
      confirmPassword: ['', requiredInput]
    });
  }

  showPassword() {
    if (this.showTypePassword == 'password') {
      this.showTypePassword = 'text';
      this.showPassWordChange = 'btn btn-none btn-icon btn-password-showhide show';
      return;
    }
    if (this.showTypePassword == 'text') {
      this.showTypePassword = 'password';
      this.showPassWordChange = 'btn btn-none btn-icon btn-password-showhide';
      return;
    }
  }

  showConfirmPassWord() {
    if (this.showTypeConfirmPassWord == 'password') {
      this.showTypeConfirmPassWord = 'text';
      this.showRePassWordChange = 'btn btn-none btn-icon btn-password-showhide show';
      return;
    }
    if (this.showTypeConfirmPassWord == 'text') {
      this.showTypeConfirmPassWord = 'password';
      this.showRePassWordChange = 'btn btn-none btn-icon btn-password-showhide';
      return;
    }
  }

  onSubmit() {
    this.isSubmited = true;
    if (this.formReset.invalid) {
      this.isShow = false;
      this.notification.showNotification('wrong validation of password', 2);
      return;
    }
    if(this.formReset.controls['password'].value.length < 8 || this.formReset.controls['password'].value.length > 20) {
      this.notification.showNotification('Length of password must be > 8 and < 20', 2);
    }
    if (this.formReset.controls['password'].value == this.formReset.controls['confirmPassword'].value) {
      this.isShow = true;
    } else {
      this.isShow = false;
      this.notification.showNotification('Please check Repassword', 2);
    }

    let parrams = {
      "token": this.token,
      "password": this.formReset.controls['confirmPassword'].value
    }

    this.resetpassService.resetPassWord(parrams).subscribe(response => {
      if (response.status == 200) {
        this.router.navigate(['/reset_password_success']);
      }

    })
  }

  
  passwordValidation(control: AbstractControl) {
    if (!control.value || typeof control.value === 'string' && !control.value.trim()) {
      return INVALID_PASSWORD;
    }
    if(control.value.search(/[a-z]/) < 0) {
      console.log('11111');
      return INVALID_PASSWORD;
    } else 
    if (control.value.search(/[A-Z]/) < 0) {
      console.log('222222');
      return INVALID_PASSWORD
    } else
    if (control.value.search(/[0-9]/) < 0) {
      console.log('3333333')
      return INVALID_PASSWORD;
    }
    // if ((control.value.length < 10 || control.value.length > 15)) {
    //   return INVALID_PASSWORD;
    // }
    return null;
  }
}