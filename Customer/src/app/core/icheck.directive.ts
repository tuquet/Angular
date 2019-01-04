import { OnInit, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { } from 'jquery';
import { ICheckOptions } from 'icheck';
declare var $: any;

@Directive({
  selector: '[appIcheck]'
})
export class IcheckDirective implements OnInit {
  icheck
  $: any = $;
  constructor(private el: ElementRef) {
  }
  ngOnInit() {
    // call iCheck
    this.$(this.el.nativeElement).iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%'
  })
    $('.label-icheck input').on('ifChecked', function (event) {
      $(this).parents('.label-icheck').addClass('current');
    });
  
    $('.label-icheck input').on('ifUnchecked', function (event) {
      $(this).parents('.label-icheck').removeClass('current');
    });
    // $('input[type=radio][name=car_model]').on('ifChecked', function (event) {
    //   if (this.value == '1') {
    //     $('#car_model_option_1').show();
    //     $('#car_model_option_2').hide();
    //   }
    //   else if (this.value == '2') {
    //     $('#car_model_option_1').hide();
    //     $('#car_model_option_2').show();
    //   }
    // });
  }
  

}
