import { AppSettings } from './api.setting';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private apiService: ApiService) { }

  login(parrams) {
    console.log('parrams ', parrams);
    console.log('AppSettings.API_LOGIN ', AppSettings.API_LOGIN);
    return this.apiService.post(AppSettings.API_LOGIN, parrams)
      .pipe(
        map((data: any) => {
          if(data.access_token) {
            localStorage.setItem('currentUser', data.access_token);
            return data;
          }
          return null;
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
