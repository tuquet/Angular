import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { requiredInput, emailValidation } from 'app/core/common-helper/custom-validate.helper';
import { ResetPasswordService } from 'app/core/services/resetpassword.service';
import { Router } from '@angular/router';
import { NotificationService } from 'app/core/services/notification.service';

@Component({
  selector: 'app-man021',
  templateUrl: './man021.component.html',
  // styleUrls: ['./man021.component.scss']
})
export class Man021Component implements OnInit {

  formForgot: FormGroup;
  isSubmited: boolean = false;
  constructor(private fb: FormBuilder,
              private resetPasswordService: ResetPasswordService,
              private router: Router,
              private notification: NotificationService) { }

  ngOnInit() {
    this.formForgot = this.fb.group({
      email: ['', emailValidation]
    })
  }
  onSubmit(){
    this.isSubmited = true;
    if(this.formForgot.invalid) {
      return;
    }
    let parrams = {
      "email": this.formForgot.controls['email'].value
    }
    this.resetPasswordService.forgotPassWord(parrams).subscribe(response => {
      if(response.status == 200 || response.status == 204) {
        this.router.navigate(['/forgot_password_success'])
      } else {
        this.notification.showNotification("wrong emaillllll ", 2);
      }
    })
  }
}
