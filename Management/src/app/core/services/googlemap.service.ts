import { AppSettings, GOOGLE_MAP_API } from './api.setting';
import { ApiService } from './api.service';
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
export class GooglemapService {

  constructor(private apiService: ApiService,
              private httpClient: HttpClient) { }

  getAddress(parrams) {
    return this.httpClient.get(environment.api_google_map + AppSettings.API_SEARCH_GOOGLE_MAP + "?address=" + parrams + "&key="+ GOOGLE_MAP_API)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return new Observable((observer: InnerSubscriber<any, any>) => {
            observer.next(error)
          });
        })
      );
  }
}
