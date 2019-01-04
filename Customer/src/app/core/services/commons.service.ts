import { AppSettings } from './api.setting';
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
export class CommonsService {

  constructor(private router: Router,
    private httpClient: HttpClient) { }

  createContact(params: any): Observable<any> {
    return this.httpClient.post(environment.api_url + AppSettings.API_CONTACT_REGISTER, params,{observe: 'response'})
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return new Observable((observer: InnerSubscriber<any, any>) => {
            observer.next(error);
          });
        })
      );
  }
}
