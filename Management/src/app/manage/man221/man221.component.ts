import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral } from '@agm/core'
import { } from 'googlemaps';
import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { GooglemapService } from 'app/core/services/googlemap.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MouseEvent } from '@agm/core';
declare var $: any;
import { ICheckOptions } from 'icheck';
import { requiredInput } from 'app/core/common-helper/custom-validate.helper';
import { ParkingService } from 'app/core/services/parking.service';
import { Router } from '@angular/router';
import { NotificationService } from 'app/core/services/notification.service';

@Component({
  selector: 'app-man221',
  templateUrl: './man221.component.html',
  styleUrls: ['./man221.component.scss']
})

export class Man221Component implements OnInit {

  public zoom: number;
  latitude: number;
  longitude: number;
  latlongs: any[] = [];
  latlong: any = {};
  public searchControl: FormControl;
  countParking: number = 0;
  selectedMarker: any = {
    lat: '',
    lng: '',
    label: '',
    draggable: true,
    iconUrl: ''
  };
  
  originMarker: any = {
    lat: '',
    lng: '',
    label: 'Location 0',
    draggable: true,
    iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
  }
  location: any = {
    lat: '',
    lng: ''
  }
  postalCode: any = '';
  searchForm: FormGroup;
  registerForm: FormGroup;
  lat: number = 51.673858;
  lng: number = 7.815982;
  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'Location 1',
      draggable: false,
      iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'Location 2',
      draggable: false,
      iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/library_maps.png'
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'Location 3',
      draggable: false,
      iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/library_maps.png'
    },
    //My location (Hà Nội, Việt Nam)
    // {
    //   lat: 21.017597199999997,
    //   lng: 105.78286,
    //   label: 'D',
    //   draggable: true
    // }
  ]
  isClicked: boolean = false;

  @ViewChild('search') public searchElement: ElementRef;
  @ViewChild('AgmMap') agmMap: AgmMap;
  content;
  isSubmitted: boolean = false;
  isSubmittedForm: boolean = false;
  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private googlemapService: GooglemapService,
    private parkingService: ParkingService,
    private router: Router,
    private notification: NotificationService) { }

  ngOnInit() {
    this.buildFormSeach();
    this.buildFormRegister();
    this.content = "";
    this.zoom = 8;
    this.latitude = 39.8282;
    this.latitude = -98.5795;
    this.searchControl = new FormControl();
    this.setCurrentPositiono();
    // this.getPosition();
  }

  submitForm() {
    this.isSubmitted = true;
    this.isSubmittedForm = true;
    
    if(this.searchForm.invalid || this.registerForm.invalid) {
      return;
    }
    if(this.isClicked == false) {
      console.log('please fill the addresss');
      return;
    }
    if(this.originMarker.lat == '' || this.originMarker.lng) {
      return;
    }
    console.log('searchForm ', this.searchForm.value);
    console.log('registerForm ', this.registerForm.value);
    let parram = {
      "parking_lot_name": this.registerForm.controls['baseName'].value,
      "image_1": "image_1 url path",
      "image_2": "image_2 url path",
      "image_3": "image_3 url path",
      "post_code": this.searchForm.controls['postalCode'].value,
      "city": this.searchForm.controls['searchCity'].value,
      "municipality": this.searchForm.controls['searchPrefecture'].value,
      "address": this.searchForm.controls['searchTown'].value,
      "location": this.searchForm.controls['searchPrefecture'].value,
      "renewal_period": this.registerForm.controls['renewalPeriod'].value,
      "note": this.registerForm.controls['note'].value,
      "status": this.registerForm.controls['publicStatus'].value
    }
    this.parkingService.createParkingLot(parram).subscribe(response => {
      console.log('responseeee ');
      this.notification.showNotification('テキストメッセージ');
      this.router.navigate(['']);
    })
  }
  
  buildFormSeach() {
    this.searchForm = new FormGroup({
      postalCode: new FormControl('', requiredInput),
      searchPrefecture: new FormControl('', requiredInput),
      searchCity: new FormControl('', requiredInput),
      searchTown: new FormControl('', requiredInput),
      // searchAddress: new FormControl('')
    })
  }

  buildFormRegister() {
    this.registerForm = new FormGroup({
      publicStatus: new FormControl('', requiredInput),
      manageNumber: new FormControl('', requiredInput),
      baseName: new FormControl('', requiredInput),
      renewalPeriod: new FormControl('1'),
      note: new FormControl('')
    })
  }

  mapClicked($event: MouseEvent) {
    this.countParking++;
    if (this.countParking > 1) {
      return;
    }
    console.log('$event.coords.lat ', $event.coords.lat);
    console.log('$event.coords.lng ', $event.coords.lng);
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      label: 'Location Newwww',
      draggable: true,
      iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/library_maps.png'
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  getAddressByPostalCode() {
    let postal_code = require('japan-postal-code');
    postal_code.get(this.postalCode, (address) => {
      console.log('address ', address);
      console.log(address.prefecture); // => "東京都"
      console.log(address.city); // => "千代田区"
      console.log(address.area); // => "千代田"
      console.log(address.street); // => ""
      this.searchForm.controls['searchPrefecture'].setValue(address.prefecture);
      this.searchForm.controls['searchCity'].setValue(address.city);
      this.searchForm.controls['searchTown'].setValue(address.prefecture);
    },
    );
  }

  SearchFormSubmmit() {
    this.isClicked = true;
    this.isSubmitted = true;
    if(this.searchForm.invalid) {
      return;
    }
    let parramSearch = this.searchForm.controls['searchPrefecture'].value + this.searchForm.controls['searchCity'].value + this.searchForm.controls['searchTown'].value;
    this.googlemapService.getAddress(parramSearch).subscribe(data => {
      if (data.results[0]) {
        this.location.lat = data.results[0].geometry.location.lat;
        this.location.lng = data.results[0].geometry.location.lng;
        this.latitude = data.results[0].geometry.location.lat;
        this.longitude = data.results[0].geometry.location.lng;
        this.originMarker.lat = data.results[0].geometry.location.lat;
        this.originMarker.lng = data.results[0].geometry.location.lng;
      }
    })
  }

  clickedMarker(label: string, index: number) {
    this.content = label;
    this.markers.forEach(marker => {
      if (marker.label == "Location 0") {
        return;
      }
      if (marker.label == label) {
        this.selectedMarker = marker;
      }
    })
  }

  Search() {

  }

  private setCurrentPositiono() {
    this.markers = [];
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        const latlong = {
          lat: this.latitude,
          lng: this.longitude,
          label: 'Location 0',
          draggable: true,
          iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/library_maps.png'
        };
        // this.originMarker.lat = latlong.lat;
        // this.originMarker.lng = latlong.lng;
        this.originMarker = latlong;

        let marker1 = {
          lat: latlong.lat + 0.001,
          lng: latlong.lng + 0.001,
          label: 'Location 1',
          draggable: true,
          iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
        }
        let marker2 = {
          lat: latlong.lat - 0.001,
          lng: latlong.lng - 0.001,
          label: 'Location 2',
          draggable: true,
          iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
        }
        let marker3 = {
          lat: latlong.lat - 0.002,
          lng: latlong.lng - 0.002,
          label: 'Location 3',
          draggable: true,
          iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
        }
        let marker4 = {
          lat: marker3.lat - 0.002,
          lng: marker3.lng - 0.002,
          label: 'Location 4',
          draggable: false,
          iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
        }
        // let bounds: any;
        this.latitude = latlong.lat;
        this.longitude = latlong.lng;
        this.markers.push(latlong);
        this.markers.push(marker1);
        this.markers.push(marker2);
        this.markers.push(marker3);
        this.markers.push(marker4);
      });
    }
  }
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  iconUrl: string;
}