import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutes } from './admin-parking.routing';
import { MapComponent } from 'app/pages/map/map.component';
import { Man023Component } from '../../app/pages/man023/man023.component';
import { Man021Component } from '../../app/pages/man021/man021.component';
import { Man022Component } from '../../app/pages/man022/man022.component';
import { Man024Component } from '../../app/pages/man024/man024.component';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'
import { LoginComponent } from '../../app/pages/login/login.component';
import { GOOGLE_MAP_API } from 'app/core/services/api.setting';

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(AdminRoutes),
        AgmCoreModule.forRoot({
            apiKey: GOOGLE_MAP_API,
            libraries: ["places"]
        }),
        AgmDirectionModule
    ],

    providers: [],
    declarations: [LoginComponent, MapComponent, Man023Component, Man021Component, Man022Component, Man024Component],
})

export class AdminParkingModule { }
