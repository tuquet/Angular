import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService) { }

    canActivate() {
        return this.authService.isTokenExpired()
    }

}

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(
        private authService: AuthService) { }

    canActivate() {
        return this.authService.isLogin()
    }

}