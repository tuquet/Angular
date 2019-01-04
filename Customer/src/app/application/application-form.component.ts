import { Component, OnInit, ElementRef, } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validator, Validators, FormControl } from '@angular/forms'
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { requiredInput, emailValidation, salaryInput } from 'app/core/common-helper/custom-validate.helper';
declare var $: any;
@Component({
  selector: 'application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss'],
})

export class ApplicationForm implements OnInit {
  public appLicationForm: FormGroup;
  public arrYearStart: any;
  public arrMonth: any;
  public arrDay: any;
  public arrDateEnd: any;
  public arrDayEnd: any;
  public selectYearDate: any = new Date().getFullYear();
  public selectYearDateEnd: any = new Date().getFullYear();
  public selectMonth: any = new Date().getMonth() + 1;
  public selectMonthEnd: any = new Date().getMonth() + 1;
  public customerType: number = 1;
  public userType: number = 1;
  public submitStep: number = 0;
  public submitted: boolean = false;
  public selectDayStart;
  public selectDayEnd
  public month: number = 12;
  public testDate: number = 1;

  constructor(
    private formBuider: FormBuilder,
    private el: ElementRef
  ) {
    this.startDateOption();
    this.endDateOption();

  }

  ngOnInit() {
    console.log("sdfsdfds")
    this.buildForm();
    if (this.submitted) {
      this.buildForm2();
      $('input[type=radio][name=car_model]').on('ifChecked', function (event) {
        console.log("sdfsd", this.value)
        if (this.value == '1') {
          $('#car_model_option_1').show();
          $('#car_model_option_2').hide();
        }
        else if (this.value == '2') {
          $('#car_model_option_1').hide();
          $('#car_model_option_2').show();
        }
      });

    }

  }

  buildForm() {
    this.appLicationForm = this.formBuider.group(
      {
        customer_type: ['1'],
        home_phone_number: ['', salaryInput],
        email: ['', emailValidation],
        user_type: ['1'],
        emergency_contact_name: ['', requiredInput],
        emergency_phone_number: ['', salaryInput],
        office_phone_number: ['', salaryInput],
        profession_company_name: ['', requiredInput],
        profession_company_phone_number: ['', requiredInput],
        other_user_name: [''],
        other_user_phone_number: [''],
        pesonal_name: ['', requiredInput],
        profession: ['', requiredInput],
        corporate_url: ['', requiredInput],
        corporate_name: ['', requiredInput],
        department_name: ['', requiredInput],
        person_in_charge: ['', requiredInput],
        post_code: ['', requiredInput],
        address: ['', requiredInput],
        payment_infor: this.formBuider.group({})
      }
    )
    // if (this.customerType == 1) {
    //   this.appLicationForm = this.formBuider.group({
    //     ...this.appLicationForm.controls,
    //     pesonal_name: ['', requiredInput],
    //     profession: ['', requiredInput],
    //   })
    // }
    // if (this.customerType == 2) {
    //   this.appLicationForm = this.formBuider.group({
    //     ...this.appLicationForm.controls,
    //     corporate_url: ['', requiredInput],
    //     corporate_name: ['', requiredInput],
    //     department_name: ['', requiredInput],
    //     person_in_charge: ['', requiredInput],
    //     post_code: ['', requiredInput],
    //     address: ['', requiredInput],

    //   })
    // }
  }

  buildForm2() {
    this.appLicationForm = this.formBuider.group({
      ...this.appLicationForm.controls,
      payment_infor: this.formBuider.group({
        customer_application_id: [],
        desired_start_date: [],
        cancel_date: [''],
        expected_finish_date_type: [''],
        issue_aggrement_flg: ["1"],
        note: [""],
        driver_license_front_side: [""],  // bằng lái xe 
        driver_license_back_side: [""],
        planned_car_list: this.formBuider.array([
          this.createCarLists()
        ]),
      })
    })
  }

  createCarLists() {
    return this.formBuider.group({
      customer_application_id: [''],
      car_model: ['1'],
      holding_status: [''],
      registration_number: [''],
      vehicle_inspection_certificate: [''],
      created_user: [''],
      created_datetime: [''],
      updated_user: [''],
      updated_datetime: [''],
      srcImg: [''],
    });

  }
  createMonthFlg() {
    return this.formBuider.group({
      payment_type: [''],
      first_month_flg: [''],
      righteous_person: [''],
      card_number: [''],
    })
  }

  createAfterMonthSecond() {
    return this.formBuider.group({
      bank_code: ['']
    })
  }
  addCarList() {
    const carList = this.createCarLists();
    this.carList.push(carList);
  }

  get f() { return this.appLicationForm.controls; }
  get paymentInfor(): FormGroup { return this.appLicationForm.get('payment_infor') as FormGroup }
  get carList(): FormArray {
    return this.paymentInfor.get('planned_car_list') as FormArray
  }

  uploadAll(file, type, index) {
    var input = file.target;
    var reader = new FileReader();
    reader.onload = function () {
      if (type == 1) {
        $(`#output${index}`)[0].attributes.src.nodeValue = reader.result;
        $(`#title-img__${index}`)[0].innerHTML = file.target.files[0].name
      } else if (type == 2) {
        $(`#frontSide`)[0].attributes.src.nodeValue = reader.result;
        $(`#title-img__front`)[0].innerHTML = file.target.files[0].name
      } else {
        $(`#backSide`)[0].attributes.src.nodeValue = reader.result;
        $(`#title-img__back`)[0].innerHTML = file.target.files[0].name
      }
    };
    reader.readAsDataURL(input.files[0]);
  };
  onSubmitStep1() {
    this.submitted = true
    console.log(this.appLicationForm)
    console.log(this.appLicationForm.value)
    if (this.appLicationForm.invalid) {
      return;
    }else {
      this.submitStep = 1;
      console.log(this.appLicationForm.value)
      this.buildForm2()
      window.scroll(0, 0)
    }
    
  }

  onSubmitStep2() {
    console.log(this.appLicationForm.value)
    let desiredStart = `${this.selectYearDate}/${this.selectMonth}/${this.selectDayStart}`;
    let expectedFinishDateType = `${this.selectYearDateEnd}/${this.selectMonthEnd}/${this.selectDayEnd}`;
    this.paymentInfor.controls['desired_start_date'].setValue(desiredStart);
    this.paymentInfor.controls['expected_finish_date_type'].setValue(expectedFinishDateType);
    $('#step2').hide();
    $('#step3').show();
    window.scroll(0, 0)
  }

  onSubmitStep3() {
    $('#step3').hide();
    $('#step4').show();
    window.scroll(0, 0)
  }

  backHome(type) {
    if (type == 1) {
      $('#step1').show();
      $('#step2').hide();
    } else if (type == 2) {
      $('#step2').show();
      $('#step3').hide();
    }
  }

  onSelectCareer(event) {
    if(event.target.value != '') {
      $('#career_company_info').show();
    }else {
      $('#career_company_info').hide();
    }

  }
  changeCombiniCode(event) {
    // 6 bank
    console.log(event)
  }
  changeDepositCategory() {
    console.log(event)
  }
  changeUpdateUser() {
    console.log(event)
  }
  checkCustomerType(event) {
    console.log(event.target.value)
    if (event.target.value == "1") {
      this.customerType = 1
    }else {
      this.customerType = 2
    }
  }
  checkUserType(event) {
    if (event.target.value == "1"){
      this.userType = 1
    }else {
      this.userType = 2
    }
  }
  changePayType(event) {
    if (event.target.value == '1') {
      $('.payment_method_option').not('#payment_method_option_1').hide();
      $('#payment_method_option_1').show();
    }
    else if (event.target.value == '2') {
      $('.payment_method_option').not('#payment_method_option_2').hide();
      $('#payment_method_option_2').show();
    }
    else if (event.target.value == '3') {
      $('.payment_method_option').not('#payment_method_option_3').hide();
      $('#payment_method_option_3').show();
    }
  }
  changeDate(event) {
    if (event.target.value == 1) {
      this.testDate = 1
      $('#cancel_date_option_2').hide();
    }
    else if (event.target.value == 2) {
      this.testDate = 2
      $('#cancel_date_option_2').show();
    }
  }
  checkModel(event, index) {
    if (event.target.value == '1') {
      $(`#car_model_option_1${index}`).show();
      $(`#car_model_option_2${index}`).hide();
    }
    else if (event.target.value == '2') {
      $(`#car_model_option_1${index}`).hide();
      $(`#car_model_option_2${index}`).show();
    }
  }
  changeDay(event, type) {
    if (type == 1) {
      this.selectDayStart = parseInt(event.target.value);
    } else {
      this.selectDayEnd = parseInt(event.target.value);
    }
  }
  changeYear(event, type) {
    if (type == 1) {
      this.selectYearDate = event.target.value;
      this.startDateOption()
    } else {
      this.selectYearDateEnd = event.target.value;
      this.endDateOption()
    }
  }
  changeMonth(event, type) {
    if (type == 1) {
      this.selectMonth = parseInt(event.target.value);
      this.startDateOption();
    } else {
      this.selectMonthEnd = parseInt(event.target.value);
      this.endDateOption()
    }
  }
  startDateOption() {
    let allMonth = 12
    let year = new Date().getFullYear() - 1950;
    this.arrYearStart = []
    for (let i = 0; i < year; i++) {
      this.arrYearStart.push(new Date().getFullYear() - i)
    }
    this.arrMonth = [];
    for (let i = 0; i < allMonth; i++) {
      this.arrMonth.push(12 - i);
    }
    this.arrDay = []
    let dataMonth = [1, 3, 5, 7, 8, 10, 12];
    let dayOnMonth = 30;
    if ((this.selectYearDate % 4 === 0 && this.selectYearDate % 100 !== 0 && this.selectYearDate % 400 !== 0) || (this.selectYearDate % 100 === 0 && this.selectYearDate % 400 === 0)) {
      if (dataMonth.indexOf(parseInt(this.selectMonth)) > -1) {
        dayOnMonth = 31;
      } else if ((this.selectMonth == 2)) {
        dayOnMonth = 28;
      } else {
        dayOnMonth = 30;
      }
    } else {
      if (dataMonth.indexOf(this.selectMonth) > -1) {
        dayOnMonth = 31;
      } else if ((this.selectMonth == 2)) {
        dayOnMonth = 29;
      } else {
        dayOnMonth = 30;
      }
    }
    for (let i = 0; i < dayOnMonth; i++) {
      this.arrDay.push(dayOnMonth - i);
    }
  }
  endDateOption() {
    let allMonth = 12
    let date = new Date().getFullYear() - 1950;
    this.arrDateEnd = []
    for (let i = 0; i < date; i++) {
      this.arrDateEnd.push(new Date().getFullYear() - i)
    }
    this.arrMonth = [];
    for (let i = 0; i < allMonth; i++) {
      this.arrMonth.push(12 - i);
    }
    this.arrDayEnd = []
    let dataMonth = [1, 3, 5, 7, 8, 10, 12];
    let dayMonthEnd = 30;
    if ((this.selectYearDateEnd % 4 === 0 && this.selectYearDateEnd % 100 !== 0 && this.selectYearDateEnd % 400 !== 0) || (this.selectYearDateEnd % 100 === 0 && this.selectYearDateEnd % 400 === 0)) {
      if (dataMonth.indexOf(parseInt(this.selectMonthEnd)) > -1) {
        dayMonthEnd = 31;
      } else if ((this.selectMonthEnd == 2)) {
        dayMonthEnd = 28;
      } else {
        dayMonthEnd = 30;
      }
    } else {
      if (dataMonth.indexOf(this.selectMonthEnd) > -1) {
        dayMonthEnd = 31;
      } else if ((this.selectMonthEnd == 2)) {
        dayMonthEnd = 29;
      } else {
        dayMonthEnd = 30;
      }
    }
    for (let i = 0; i < dayMonthEnd; i++) {
      this.arrDayEnd.push(dayMonthEnd - i);
    }
  }

}
