import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './cus021.component.html',
  styleUrls: ['./cus021.component.scss']
})
export class DetailComponent implements OnInit {

  constructor() { }

  arr = ['tao','le','oi'];

  ngOnInit() {
    console.log(this.arr)
  }

}
