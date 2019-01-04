import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonsService } from 'app/core/services/common.service';
import { ActivatedRoute } from '@angular/router';
declare var $: any
@Component({
  selector: 'app-man2321',
  templateUrl: './man2321.component.html',
  styleUrls: ['./man2321.component.scss']
})
export class Man2321Component implements OnInit, AfterViewInit {
  public listPartitionGroup: any
  public detailParkingLot: any
  public parking_lot_id;
  public listParcel = [];
  public hideButton: boolean = false;
  originMarker: any = {
    lat: '',
    lng: '',
    label: 'Location 0',
    draggable: false,
    iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
  }
  constructor(
    private commonsService: CommonsService,
    private activatedRoute: ActivatedRoute
  ) { }
  ngAfterViewInit() {
    
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.parking_lot_id = params.parking_lot_id
      // this.getDetailPartiton()
    })
    this.getListPartitionGroup();
    this.setCurrentPositiono()
    var list_status_data = [{
      id: 0,
      text: '<span class="badge badge-success badge-status">&nbsp;</span> 空車',
      html: '<span class="badge badge-success badge-status">&nbsp;</span> 空車'
    }, {
      id: 1,
      text: '<span class="badge badge-warning-light badge-status">&nbsp;</span> 要相談',
      html: '<span class="badge badge-warning-light badge-status">&nbsp;</span> 要相談'
    }, {
      id: 2,
      text: '<span class="badge badge-danger badge-status">&nbsp;</span> 満車',
      html: '<span class="badge badge-danger badge-status">&nbsp;</span> 満車'
    }];
    $("#status-select1").select2({
      data: list_status_data,
      escapeMarkup: function (markup) {
        return markup;
      },
      templateResult: function (data) {
        return data.html;
      },
      templateSelection: function (data) {
        return data.text;
      }
    });
  }
  getListPartitionGroup() {
    this.commonsService.getListPartitionGroup(this.parking_lot_id).subscribe(data => {
      if (data.status == 200) {
        this.detailParkingLot = data.body;
        this.listPartitionGroup = data.body.partition_list;
        if (this.listPartitionGroup.length > 0) {
          for (let i = 0; i < this.listPartitionGroup.length; i++) {
            const result = this.listPartitionGroup[i].parcel_list.filter((item, index) => index + 1 <= this.listPartitionGroup[i].number_of_unit)
            this.listPartitionGroup[i].parcel_list = result;
          }
        }
        // anh set lại lat vs lng của nó, đây em đang để vị trí của mình
        // this.originMarker.lat =  data.body.latitude;
        // this.originMarker.lng = data.body.longitude;
      }
    })
  }

  private setCurrentPositiono() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.originMarker.lat = position.coords.latitude;
        this.originMarker.lng = position.coords.longitude;
      });
    }
  }
}
