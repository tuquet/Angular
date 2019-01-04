import { Routes } from '@angular/router';
import { MapComponent } from '../../app/pages/map/map.component';
import { Man023Component } from '../../app/pages/man023/man023.component';
import { Man021Component } from '../../app/pages/man021/man021.component';
import { Man022Component } from "../../app/pages/man022/man022.component";
import { Man024Component } from "../../app/pages/man024/man024.component";

import { LoginComponent } from '../../app/pages/login/login.component';


export const AdminRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        children: [{
            path: '',
            component: LoginComponent
        }]
    },
    {
        path: 'map',
        component: MapComponent
    },
    {
        path: 'reset_password',
        children: [{
            path: '',
            component: Man023Component
        }]
    },
    {
        path: 'forgot_password',
        children: [{
            path: '',
            component: Man021Component
        }]
    },
    {
        path: 'forgot_password_success',
        children: [{
            path: '',
            component: Man022Component
        }]
    },
    {
        path: 'reset_password_success',
        children: [{
            path: '',
            component: Man024Component
        }]
    },


];
