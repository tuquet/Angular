import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cus191',
  templateUrl: './cus191.component.html',
  styleUrls: ['./cus191.component.scss']
})
export class Cus191Component implements OnInit {
  showNormalSearch: boolean = false;
  search: any = "";
  showDetail: boolean = false;
  searchForm: FormGroup;
  searchResult1: any [] = [
    {
      type: 1,
      text: '111'
    },
    {
      type: 1,
      text: '222'
    },
    {
      type: 1,
      text: '333'
    }
  ]

  searchResult2: any [] = [
    {
      type: 2,
      text: '444'
    },
    {
      type: 2,
      text: '555'
    },
    {
      type: 2,
      text: '666'
    }
  ]

  searchResult3: any [] = [
    {
      type: 3,
      text: '444'
    },
    {
      type: 3,
      text: '555'
    },
    {
      type: 3,
      text: '666'
    }
  ]
  
  constructor(private router: Router) { }

  ngOnInit() {
    function view(){
      var window_height = $(window).height();        
      var keyboard_height = $('.keyboard-wrapper').height();
      $('#site-content').css({
        'min-height': window_height,
        'padding-bottom':keyboard_height
      });

      $('.keyboard-wrapper').css({
        'position':'absolute',
        'left':'0',
        'bottom':'0',
        'width':'100%'
      });
    }
    view();        

    $(window).resize(function(){
      view();
    })

    this.showNormalSearch = true;
    // this.showDetail = true;
    this.buildFormSeach();
  }

  searchInit() {
    console.log(this.search.length);
    this.showDetail = false; 
    if(this.search.length < 2) {
      this.showNormalSearch = true;
    } else {
      this.showNormalSearch = false;
    }
  }

  buildFormSeach() {
    this.searchForm = new FormGroup({
      rentType1: new FormControl(''),
      rentType2: new FormControl(''),
      size: new FormControl(''),
      position: new FormControl(''),
      device: new FormControl(''),
      facility: new FormControl(''),
      parkingType: new FormControl(false),
      other: new FormControl(false)
    })
    
  }

  searchByBus() {
    // this.showDetail = true;
    this.searchForm.reset();
  }

  searchByLocation() {
    this.showDetail = true;
    this.searchForm.reset();
  }

  searchByCar() {
    this.showDetail = true;
    this.searchForm.reset();
  }

  back() {
    this.showDetail = false;
    this.searchForm.reset();
  }

  submit() {
    console.log('in in in ', this.searchForm.value);
  }

  resetSearch() {
    this.search = "";
    this.searchInit();                                               
  }
}
