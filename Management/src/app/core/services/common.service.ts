import { ApiService } from './api.service';
import { AppSettings } from './api.setting';
import { Injectable } from '@angular/core';
import { map, catchError } from "rxjs/operators";
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  constructor(private router: Router,
    private httpClient: HttpClient) { }

  createPartitionGroup(params: any): Observable<any> {
    return this.httpClient.post(environment.api_url + AppSettings.API_CREATE_PARTITION_GROUP, params,{observe: 'response'})
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return new Observable((observer: InnerSubscriber<any, any>) => {
            observer.next(error);
          });
        })
      );
  }
  updatePartitionGroup(params: any,id): Observable<any> {
    return this.httpClient.put(environment.api_url + AppSettings.API_GET_DETAIL_PARTITION_GROUP + `${id}/`,params,{observe: 'response'})
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return new Observable((observer: InnerSubscriber<any, any>) => {
            observer.next(error);
          });
        })
      );
  }
  getListPartitionGroup(id: any): Observable<any> {
    return this.httpClient.get(environment.api_url + AppSettings.API_GET_LIST_PARKING_LOT + `${id}`,{observe: 'response'})
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return new Observable((observer: InnerSubscriber<any, any>) => {
            observer.next(error);
          });
        })
      );
  }
  getListParkingLot(): Observable<any> {
    return this.httpClient.get(environment.api_url + AppSettings.API_GET_LIST_PARKING_LOT ,{observe: 'response'})
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return new Observable((observer: InnerSubscriber<any, any>) => {
            observer.next(error);
          });
        })
      );
  }
  getDetailPartitionGroup(params:any): Observable<any> {
    return this.httpClient.get(environment.api_url + AppSettings.API_GET_DETAIL_PARTITION_GROUP + `${params}`,{observe: 'response'})
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return new Observable((observer: InnerSubscriber<any, any>) => {
            observer.next(error);
          });
        })
      );
  }
  
  createParcel(params: any): Observable<any> {
    return this.httpClient.post(environment.api_url + AppSettings.API_CREATE_PARCEL, params,{observe: 'response'})
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return new Observable((observer: InnerSubscriber<any, any>) => {
            observer.next(error);
          });
        })
      );
  }
}
