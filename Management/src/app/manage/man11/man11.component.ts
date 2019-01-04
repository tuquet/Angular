import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-man11',
  templateUrl: './man11.component.html',
  styleUrls: ['./man11.component.scss']
})
export class Man11Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#tb-3rows tbody tr.last td > a').click(function(e){
      e.preventDefault();
      $('#tb-3rows tbody tr.last').remove();
      $('#tb-3rows tbody tr').css('display','table-row');
  });
  //Demo Load More
  $('#tb-5rows tbody tr.last td > a').click(function(e){
      e.preventDefault();
      $('#tb-5rows tbody tr.last').remove();
      $('#tb-5rows tbody tr').css('display','table-row');
  })
  }

}
