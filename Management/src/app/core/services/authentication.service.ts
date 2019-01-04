import { AppSettings } from './api.setting';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map, catchError } from "rxjs/operators";
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { DATACOMMON } from '../store/actions/appActions';
// import { HttpUploadProgressEvent, HttpResponse } from '@angular/common/http/src/response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  dataCommon: any;
  constructor(private apiService: ApiService,
    private router: Router,
    private httpClient: HttpClient) { }

  login(parrams) {
    // console.log('22222');
    // return this.apiService.post(AppSettings.API_LOGIN, parrams)
    //   .pipe(
    //     map((data: any) => {
    //       console.log('dataaaaaaa ', data);
    //       if(data.access_token) {
    //         localStorage.setItem('currentUser', data.access_token);
    //         return data;
    //       }
    //       return null;
    //     })
    //   );
    localStorage.removeItem('currentUser');
    localStorage.removeItem(DATACOMMON);
    return this.httpClient.post(environment.api_url + AppSettings.API_LOGIN, parrams, {observe: 'response'})
      .pipe(
        map((data: any) => {
          console.log('dataaaaaa ', data);
          this.dataCommon = JSON.stringify(data.body.common);
          localStorage.setItem(DATACOMMON, this.dataCommon);
          console.log('22222 ', localStorage.getItem(DATACOMMON));
          if (data.body.access_token) {
            localStorage.setItem('currentUser', data.body.access_token);
            return data;
          }
          return data;
        })
      ).pipe(
        catchError((error: HttpErrorResponse) => {
          if(error.status == 401) {
            return new Observable((observer: InnerSubscriber<any, any>) => {
              observer.next(error);
              this.logout();
            });
          }
          return new Observable((observer: InnerSubscriber<any, any>) => {
            observer.next(error)
          });
        })
      );
  }


  logout() {
    return this.httpClient.post(environment.api_url + AppSettings.API_LOGOUT, {}, {observe: 'response'})
      .pipe(
        map((data: any) => {
         localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
          return data;
        })
      ).pipe(
        catchError((error: HttpErrorResponse) => {
          if(error.status == 401) {
            return new Observable((observer: InnerSubscriber<any, any>) => {
              observer.next(error);
              this.router.navigate(['/login']);
              // this.logout();
            });
          }
          return new Observable((observer: InnerSubscriber<any, any>) => {
            observer.next(error)
          });
        })
      );
  }
}
