import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from "rxjs/Rx";
import { TOKEN, LANGUAGE } from '../../core/store/actions/appActions';

@Injectable()
export class AuthService {

    constructor(
        private _router: Router
    ) { }

    isTokenExpired(): Observable<boolean> | boolean {
        const token = JSON.parse(localStorage.getItem(TOKEN));
        if (token) {
            return true
        } else {
            this._router.navigateByUrl('/login');
            return false;
        }
    }

    isLogin(): Observable<boolean> | boolean {
        const token = JSON.parse(localStorage.getItem(TOKEN));
        if (token) {
            this._router.navigateByUrl('/');
            return false;
        }
        return true;
    }

    setLanguageToken(obj) {
        localStorage.setItem(LANGUAGE, JSON.stringify(obj));
    }
}