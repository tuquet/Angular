import { Routes } from '@angular/router';
import { Cus011Component } from '../../app/pages/home/cus011.component';
import { SearchProvince } from '../../app/pages/search_province/cus014-1.component';
import { SearchCity } from '../../app/pages/search_city/cus014-2.component';
import { Cus015Component } from '../../app/pages/search_list/cus015.component';
import { MapComponent } from 'app/pages/map/map.component';
import { ContractComponent } from '../../app/pages/contract/contract.component';
import { DetailComponent } from 'app/pages/detail/cus021.component';
import { SearchList2Component } from 'app/pages/search_list2/cus015-2.component';
import { SearchList3Component } from 'app/pages/search_list3/cus015-3.component';
import { ApplicationForm } from 'app/application/application-form.component';
import { CustomersComponent } from 'app/pages/customers/customers.component';
import { QuestionCompletedComponent } from 'app/pages/question_completed/cus017.component';
import { FlowContractForm } from 'app/pages/flow_contract/cus023.component';
import { Cus191Component } from 'app/pages/search_init/cus191.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'application',
        redirectTo: 'application/register',
        pathMatch: 'full'
    },
    {
        path: 'home',
        children: [{
            path: '',
            component: Cus011Component
        }]
    },
    {
        path: 'search_area',
        children: [{
            path: '',
            component: SearchProvince
        }]
    },
    {
        path: 'search_city',
        children: [{
            path: '',
            component: SearchCity
        }]
    },
    {
        path: 'search_list',
        children: [{
            path: '',
            component: Cus015Component
        }]
    },
    {
        path: 'search_list2',
        children: [{
            path: '',
            component: SearchList2Component
        }]
    },
    {
        path: 'search_list3',
        children: [{
            path: '',
            component: SearchList3Component
        }]
    },
    {
        path: 'map',
        component: MapComponent
    },
    {
        path: 'contract',
        children: [{
            path: '',
            component: ContractComponent
        }]
    },
    {
        path: 'application',
        children: [{
            path: 'register',
            component: ApplicationForm
        }]
    },
    {
        path: 'detail',
        children: [{
            path: '',
            component: DetailComponent
        }]
    },
    {
        path: 'contact',
        children: [{
            path: 'register',
            component: CustomersComponent
        }]
    },
    {
        path: 'question_completed',
        children: [{
            path: '',
            component: QuestionCompletedComponent 
        }]
    },
    {
        path: 'search_init',
        children: [{
            path: '',
            component: Cus191Component
        }]
    },
    {
        path: 'flow_contract',
        children: [{
            path: '',
            component: FlowContractForm
        }]
    },


];
