import { Component, OnInit, OnDestroy, ViewChild, HostListener, AfterViewInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-parking',
  templateUrl: './parking-layout.component.html'
})

export class ParkingLayoutComponent implements OnInit {
    ngOnInit(){
      function login_layout() {
        var height = $(window).height() - $('.footer-wrapper').outerHeight();
        $('.login-container > .row.align-items-center').css('min-height', height);
      }
      login_layout();
  
      $(window).resize(function () {
        login_layout();
      });
    }
 }