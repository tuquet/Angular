import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validator, Validators } from '@angular/forms'
declare var $: any;
@Component({
  selector: 'application-form',
  templateUrl: './application-form.component.html'
})

export class ApplicationForm implements OnInit {
  appLicationForm: FormGroup;
  checkRadio;
  icheck = 1;
  checkIam = 1;
  hasSubmit: boolean = false;
  hideForm1: boolean = true
  constructor(
    private formBuider: FormBuilder
  ) { }
  ngOnInit() {
    this.initJquery();
    this.buildForm();
  }

  buildForm() {
    this.appLicationForm = this.formBuider.group(
      {
        iCheckPersonal: [this.icheck, Validators.required],
        name: [''],
        phoneHome: [''],
        mobilePhone: [''],
        emailAddress: [''],
        career: [''],
        iAm: [this.checkIam],
        contactName: [''],
        contactPhone: ['']
      }
    )
  }

  onSubmitStep1() {
    $('#step1').hide();
    $('#step2').show();
    let genderValue = this.appLicationForm.value.iCheckPersonal;
    this.appLicationForm.controls['iCheckPersonal'].value;
    console.log("hhihi", this.appLicationForm.value);
  }

  onSubmitStep2() {
    $('#step2').hide();
    $('#step3').show();
  }

  onSubmitStep3() {
    $('#step3').hide();
    $('#step4').show();
  }
  
  backHome(type) {
    if(type == 1) {
      $('#step1').show();
      $('#step2').hide();
    }else if(type == 2) {
      $('#step2').show();
      $('#step3').hide();
    }
  }

  initJquery() {
    let _this = this
    $('.label-icheck input').on('ifChecked', function (event) {
      if (this.value == "A") {
        $('#private_corporation_option_1').show();
        $('#private_corporation_option_2').hide();
      }
      if (this.value == 'B') {
        $('#private_corporation_option_1').hide();
        $('#private_corporation_option_2').show();
      }
      if (this.value == 1) {
        $('#user_checkbox_option_1').show();
        $('#user_checkbox_option_2').hide();
      }
      if (this.value == 2) {
        $('#user_checkbox_option_1').hide();
        $('#user_checkbox_option_2').show();
      }
      if (this.value == 3) {
        $('#cancel_date_option_2').hide();
      }
      if (this.value == 4) {
        $('#cancel_date_option_2').show();
      }
      if (this.value == 5) {
        $('#car_model_option_1').show();
        $('#car_model_option_2').hide();
      }
      if (this.value == 6) {
        $('#car_model_option_1').hide();
        $('#car_model_option_2').show();
      }
      if (this.value == 7) {
        console.log("check7")
      }
      if (this.value == 8) {
        console.log("check8")
      }
      if (this.value == 12) {
        console.log("check12")
      }
      if (this.value == 13) {
        console.log("check13")
      }
    });

    $('input[type=radio][name=payment_method]').on('ifChecked', function (event) {
      console.log(this.value)
      if (this.value == '9') {
        $('.payment_method_option').not('#payment_method_option_1').hide();
        $('#payment_method_option_1').show();
      }
      else if (this.value == '10') {
        $('.payment_method_option').not('#payment_method_option_2').hide();
        $('#payment_method_option_2').show();
      }
      else if (this.value == '11') {
        $('.payment_method_option').not('#payment_method_option_3').hide();
        $('#payment_method_option_3').show();
      }
    });
    this.buildForm();
  }

  onSubmit() {
    this.hideForm1 = false;
    this.hasSubmit = true;
    let genderValue = this.appLicationForm.value.iCheckPersonal;
    this.appLicationForm.controls['iCheckPersonal'].value;
    console.log("hhihi",this.appLicationForm.value);
  }

  click() {
    console.log('checkRadio');
  }

}
