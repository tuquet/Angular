import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral } from '@agm/core'
import { } from 'googlemaps';
import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GooglemapService } from 'app/core/services/googlemap.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MouseEvent } from '@agm/core';

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

  searchForm: FormGroup;
  buildFormSeach() {
    this.searchForm = new FormGroup({
      searchCity: new FormControl(''),
      searchTown: new FormControl(''),
      // searchAddress: new FormControl('')
    })
  }

  changeInput1(event) {
    setTimeout(() => {
      // this.messageSuccess = false;
      this.SearchFormSubmmit();
    }, 2000);
  }

  changeInput2(event) {
    setTimeout(() => {
      // this.messageSuccess = false;
      this.SearchFormSubmmit();
    }, 2000);
  }

  mapClicked($event: MouseEvent) {
    this.countParking++;
    if(this.countParking > 1) {
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

  SearchFormSubmmit() {
    console.log('searchFormmm ', this.searchForm.value);
    let parramSearch = this.searchForm.value.searchCity + this.searchForm.value.searchTown;
    console.log('parramSearch ', parramSearch);
    let location: any;
    this.googlemapService.getAddress(parramSearch).subscribe(data => {
      console.log('response  ', data.results);
      if(data.results[0]) {
      this.location.lat = data.results[0].geometry.location.lat;
      this.location.lng = data.results[0].geometry.location.lng;
      this.latitude = data.results[0].geometry.location.lat;
      this.longitude = data.results[0].geometry.location.lng;
      this.originMarker.lat = data.results[0].geometry.location.lat;
      this.originMarker.lng = data.results[0].geometry.location.lng;
      }
    })
    // this.latitude = latlong.lat;
    //     this.longitude = latlong.lng;
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

  @ViewChild('search') public searchElement: ElementRef;
  @ViewChild('AgmMap') agmMap: AgmMap;
  content;

  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private googlemapService: GooglemapService) { }

  ngOnInit() {
    this.buildFormSeach();
    this.content = "";
    this.zoom = 8;
    this.latitude = 39.8282;
    this.latitude = -98.5795;
    this.searchControl = new FormControl();
    this.setCurrentPositiono();
    // this.getPosition();
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

  inputtt;

  getPositionBySeachBox() {
    this.mapsAPILoader.load().then(
      () => {
        var defaultBounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(-33.8902, 151.1759),
          new google.maps.LatLng(-33.8474, 151.2631));

        this.inputtt = this.searchElement.nativeElement;
        var searchBox = new google.maps.places.SearchBox(this.inputtt, {
          bounds: defaultBounds
        });

        searchBox.addListener('places_changed', () => {
          var places = searchBox.getPlaces();
        });
      }
    );

  }


  getPosition() {
    console.log('in in in in ');
    this.mapsAPILoader.load().then(
      () => {
        console.log('2222');
        let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types: [] });
        console.log('autocomplete ', autocomplete);
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            console.log('placeeee ', place);
            if (place.geometry === undefined || place.geometry === null) {
              // var input = document.getElementById('pac-input');
              // var searchBox = new google.maps.places.SearchBox(this.searchElement.nativeElement);
              // searchBox.addListener('places_changed', () => {
              //   var places = searchBox.getPlaces();
              // })
              this.setCurrentPositiono();
              return;
            }
            this.markers = [];
            const latlong = {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
              label: 'Location 0',
              draggable: false,
              iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/library_maps.png'
            };

            this.originMarker.lat = latlong.lat;
            this.originMarker.lng = latlong.lng;
            // this.originMarker = latlong;

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
              label: 'Location 3',
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
            // this.agmMap.mapReady.subscribe(map => {
            //   map.fitBounds(bounds.extend(new google.maps.LatLng(latlong.latitude, latlong.longitude)))
            // })

            // this.searchControl.reset();
          });
        });
      }
    );
  }
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  iconUrl: string;
}
