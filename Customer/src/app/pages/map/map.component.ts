import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral } from '@agm/core'
import { } from 'googlemaps';
import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public zoom: number;
  latitude: number;
  longitude: number;
  latlongs: any[] = [];
  latlong: any = {};
  public searchControl: FormControl;
  inputtt;
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
  content;
  showInfo: boolean = false;
  @ViewChild('search') public searchElement: ElementRef;
  @ViewChild('AgmMap') agmMap: AgmMap;
  

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
    function resize_map() {
      var map_width = $('.site-wrapper').width();
      var map_height = $(window).height() - $('.header-wrapper').height();
      var ratio = (map_height / map_width) * 100;

      $('.map-wrapper .google-maps').css('padding-bottom', ratio + '%');
    }
    resize_map();

    $(window).resize(function () {
      resize_map();
    });
    this.content = "";
    this.zoom = 8;
    this.latitude = 39.8282;
    this.latitude = -98.5795;
    this.searchControl = new FormControl();
    this.setCurrentPositiono();
  }

  clickedMarker(label: string, index: number) {
    this.showInfo = true;
    this.content = label;
    this.markers.forEach(marker => {
      // if (marker.label == "Location 0") {
      //   return;
      // }
      if (marker.label == label) {
        this.selectedMarker = marker;
      }
    })
  }

  mapClicked() {
    
  }

  hideInfo() {
    this.showInfo = false;
  }


  private setCurrentPositiono() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        const latlong = {
          lat: this.latitude,
          lng: this.longitude,
          label: 'Location 0',
          draggable: false,
          iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/library_maps.png'
        };
        // this.originMarker.lat = latlong.lat;
        // this.originMarker.lng = latlong.lng;
        this.originMarker = latlong;

        let marker1 = {
          lat: latlong.lat + 0.001,
          lng: latlong.lng + 0.001,
          label: 'Location 1',
          draggable: false,
          iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
        }
        let marker2 = {
          lat: latlong.lat - 0.001,
          lng: latlong.lng - 0.001,
          label: 'Location 2',
          draggable: false,
          iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
        }
        let marker3 = {
          lat: latlong.lat - 0.002,
          lng: latlong.lng - 0.002,
          label: 'Location 3',
          draggable: false,
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


  // getPosition() {
  //   this.mapsAPILoader.load().then(
  //     () => {
  //       let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types: [] });
  //       autocomplete.addListener("place_changed", () => {
  //         this.ngZone.run(() => {
  //           let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  //           if (place.geometry === undefined || place.geometry === null) {
  //             var input = document.getElementById('pac-input');
  //             var searchBox = new google.maps.places.SearchBox(this.searchElement.nativeElement);
  //             searchBox.addListener('places_changed', () => {
  //               var places = searchBox.getPlaces();
  //             })
  //             return;
  //           }
  //           this.markers = [];
  //           const latlong = {
  //             lat: place.geometry.location.lat(),
  //             lng: place.geometry.location.lng(),
  //             label: 'Location 0',
  //             draggable: false,
  //             iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/library_maps.png'
  //           };

  //           this.originMarker.lat = latlong.lat;
  //           this.originMarker.lng = latlong.lng;
  //           // this.originMarker = latlong;

  //           let marker1 = {
  //             lat: latlong.lat + 0.001,
  //             lng: latlong.lng + 0.001,
  //             label: 'Location 1',
  //             draggable: false,
  //             iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
  //           }
  //           let marker2 = {
  //             lat: latlong.lat - 0.001,
  //             lng: latlong.lng - 0.001,
  //             label: 'Location 2',
  //             draggable: false,
  //             iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
  //           }
  //           let marker3 = {
  //             lat: latlong.lat - 0.002,
  //             lng: latlong.lng - 0.002,
  //             label: 'Location 3',
  //             draggable: false,
  //             iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
  //           }
  //           let marker4 = {
  //             lat: marker3.lat - 0.002,
  //             lng: marker3.lng - 0.002,
  //             label: 'Location 3',
  //             draggable: false,
  //             iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
  //           }
  //           // let bounds: any;
  //           this.latitude = latlong.lat;
  //           this.longitude = latlong.lng;
  //           this.markers.push(latlong);
  //           this.markers.push(marker1);
  //           this.markers.push(marker2);
  //           this.markers.push(marker3);
  //           this.markers.push(marker4);
  //           // this.agmMap.mapReady.subscribe(map => {
  //           //   map.fitBounds(bounds.extend(new google.maps.LatLng(latlong.latitude, latlong.longitude)))
  //           // })

  //           // this.searchControl.reset();
  //         });
  //       });
  //     }
  //   );
  // }
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  iconUrl: string;
}
