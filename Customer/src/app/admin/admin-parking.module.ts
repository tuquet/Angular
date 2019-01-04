import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Cus011Component } from '../../app/pages/home/cus011.component';
import { AdminRoutes } from './admin-parking.routing';
import { SearchProvince } from '../../app/pages/search_province/cus014-1.component';
import { SearchCity } from '../../app/pages/search_city/cus014-2.component';
import { Cus015Component } from '../../app/pages/search_list/cus015.component';
import { MapComponent } from 'app/pages/map/map.component';
import { ContractComponent } from '../../app/pages/contract/contract.component';
import { SearchList2Component } from 'app/pages/search_list2/cus015-2.component';
import { SearchList3Component } from 'app/pages/search_list3/cus015-3.component';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'
import { DetailComponent } from 'app/pages/detail/cus021.component';
import { IcheckDirective } from 'app/core/icheck.directive';
import { ApplicationForm } from 'app/application/application-form.component';
import { CustomersComponent } from 'app/pages/customers/customers.component';
import { QuestionCompletedComponent } from 'app/pages/question_completed/cus017.component';
import { FlowContractForm } from 'app/pages/flow_contract/cus023.component';
import { Cus191Component } from 'app/pages/search_init/cus191.component';

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(AdminRoutes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAjUHpiDhHJwK0vCMayeOTvEB08RXI1YCg',
            libraries: ["places"]
        }),
        AgmDirectionModule
    ],

    providers: [],
    declarations: [
        Cus011Component, 
        SearchProvince, 
        SearchCity, 
        SearchCity,
        Cus015Component, 
        SearchList2Component, 
        SearchList3Component, 
        MapComponent, 
        ContractComponent, 
        DetailComponent,
        ApplicationForm,
        CustomersComponent,
        IcheckDirective, 
        QuestionCompletedComponent, 
        FlowContractForm,
        QuestionCompletedComponent,
        Cus191Component
    ],
})

export class AdminParkingModule { }
