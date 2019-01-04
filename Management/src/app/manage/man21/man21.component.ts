import { Component, OnInit } from '@angular/core';
import { CommonsService } from 'app/core/services/common.service';

declare var $:any

@Component({
  selector: 'app-man21',
  templateUrl: './man21.component.html',
  styleUrls: ['./man21.component.scss']
})
export class Man21Component implements OnInit {
public listParkingLot: any
  constructor(
    private commonsService:CommonsService
  ) { }

  ngOnInit() {
    this.getListParkingLot()
    $('.datatable').DataTable({
      dom:'t<"hr">p<"text-right text-secondary"i>',
      searching: false,
      lengthChange: false,
      oLanguage: {
        oPaginate: {
          sFirst: '<span class="oi oi-arrow-thick-left"></span>', // This is the link to the first page
          sPrevious: '<span class="oi oi-caret-left"></span>', // This is the link to the previous page
          sNext: '<span class="oi oi-caret-right"></span>', // This is the link to the next page
          sLast: '<span class="oi oi-arrow-thick-right"></span>' // This is the link to the last page
        },
        sInfo: "件中_TOTAL_  _START_ 〜 _END_件",
      }
    });
  }

  getListParkingLot() {
    this.commonsService.getListParkingLot().subscribe(data => {
      console.log(data)
      if(data.status == 200) {
        this.listParkingLot = data.body.results;
      }
    })
  }
  routerLink() {
    console.log("sfds")
  }
}
