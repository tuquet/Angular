import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import { Observable } from "rxjs/Rx";
import { Router } from '@angular/router';
import { TOKEN, AUTH_PREFIX, AUTH_HEADER_KEY } from '../../core/store/actions/appActions';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public userToken: any;
  public headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

  constructor(private http: HttpClient,
    private router: Router
  ) { 
  }

  logOut() {
    const token = JSON.parse(localStorage.getItem(TOKEN));
    if (!token) {
      this.router.navigate(['/login'])
    }
  }

//   login(username: string, password: string) {
//     return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
//         .pipe(map(user => {
//             // login successful if there's a jwt token in the response
//             if (user && user.token) {
//                 // store user details and jwt token in local storage to keep user logged in between page refreshes
//                 localStorage.setItem('currentUser', JSON.stringify(user));
//             }

//             return user;
//         }));
// }

  private handleError = (error: any, caught: Observable<any>) => {
    // if (error.status === 401) {
    //   this.logOut();
    // }
    return new ErrorObservable(error.error);
  }

  getAddress(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_google_map}${path}`, { params, headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { params })
      .pipe(catchError(this.handleError));
  }

  put(path: string, body: Object = {}): Observable<any> {
    // body = JSON.stringify(body);
    return this.http.put(
      `${environment.api_url}${path}`, body)
      .pipe(catchError(this.handleError));
  }

  post(path: string, body: Object = {}): Observable<any> {
    // body = JSON.stringify(body);
    return this.http.post(
      `${environment.api_url}${path}`, body
    ).pipe(catchError(this.handleError));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`
    ).pipe(catchError(this.handleError));
  }

  patch(path: string, body: Object = {}): Observable<any> {
    body = JSON.stringify(body);
    return this.http.patch(
      `${environment.api_url}${path}`, body
    ).pipe(catchError(this.handleError));
  }

  getImage(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { params, responseType: 'blob' })
      .pipe(catchError(this.handleError));
  }
}
