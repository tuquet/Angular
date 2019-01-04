import { OnInit, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { } from 'jquery';
import { ICheckOptions } from 'icheck';
declare var $: any;

@Directive({
  selector: '[appIcheck]'
})
export class IcheckDirective implements OnInit {
  icheck
  constructor() {
  
  }
  ngOnInit() {
    // call iCheck
    const icheckOptions: ICheckOptions = {
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%'
    };
    this.icheck = $('input').iCheck(icheckOptions);
    $('.label-icheck input').on('ifChecked', function (event) {
      $(this).parents('.label-icheck').addClass('current');
    });
  
    $('.label-icheck input').on('ifUnchecked', function (event) {
      $(this).parents('.label-icheck').removeClass('current');
    });
  }
  

}
