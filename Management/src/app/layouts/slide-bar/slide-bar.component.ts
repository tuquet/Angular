import { Component, OnInit } from '@angular/core';
import { Pp } from '@angular/core/src/render3';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.scss']
})
export class SlideBarComponent implements OnInit {
  navLinkHome = 'nav-link active';
  navLinkSetting = 'nav-link';
  navLinkManagement = 'nav-link';
  navLinkCustomer = 'nav-link';
  navLinkMessage = 'nav-link';
  constructor() { }

  ngOnInit() {
  }

  activeHome() {
    this.navLinkHome = 'nav-link active';
    this.navLinkSetting = 'nav-link';
    this.navLinkManagement = 'nav-link';
    this.navLinkCustomer = 'nav-link';
    this.navLinkMessage = 'nav-link';
  }

  activeSetting() {
    this.navLinkSetting = 'nav-link active';
    this.navLinkHome = 'nav-link';
    this.navLinkManagement = 'nav-link';
    this.navLinkCustomer = 'nav-link';
    this.navLinkMessage = 'nav-link';
  }

  activeCustomer() {
    this.navLinkSetting = 'nav-link';
    this.navLinkHome = 'nav-link';
    this.navLinkManagement = 'nav-link';
    this.navLinkCustomer = 'nav-link active';
    this.navLinkMessage = 'nav-link';
  }

  activeMessage() {
    this.navLinkSetting = 'nav-link';
    this.navLinkHome = 'nav-link';
    this.navLinkManagement = 'nav-link';
    this.navLinkCustomer = 'nav-link';
    this.navLinkMessage = 'nav-link active';
  }

  activeManagement() {
    this.navLinkSetting = 'nav-link';
    this.navLinkHome = 'nav-link';
    this.navLinkManagement = 'nav-link active';
    this.navLinkCustomer = 'nav-link';
    this.navLinkMessage = 'nav-link';
  }
}
