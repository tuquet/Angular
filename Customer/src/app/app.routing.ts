import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { ParkingLayoutComponent } from './layouts/parking/parking-layout.component';
import { componentFactoryName } from '@angular/compiler';
import { AdminParkingModule } from './admin/admin-parking.module';
import { Cus071Component } from './shared/404/cus071.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: ParkingLayoutComponent,
        children: [{
            path: '',
            loadChildren: './admin/admin-parking.module#AdminParkingModule',
        },
        {
            path: '**',
            component: Cus071Component
        }],
    },
    
    // {
    //     path: '',
    //     component: AdminLayoutComponent,
    //     children: [
    //         {
    //             path: '',
    //             loadChildren: './dashboard/dashboard.module#DashboardModule',
    //         }, {
    //             path: 'components',
    //             loadChildren: './components/components.module#ComponentsModule',
    //         }, {
    //             path: 'forms',
    //             loadChildren: './forms/forms.module#Forms',
    //         }, {
    //             path: 'tables',
    //             loadChildren: './tables/tables.module#TablesModule',
    //         }, {
    //             path: 'maps',
    //             loadChildren: './maps/maps.module#MapsModule',
    //         }, {
    //             path: 'widgets',
    //             loadChildren: './widgets/widgets.module#WidgetsModule',
    //         }, {
    //             path: 'charts',
    //             loadChildren: './charts/charts.module#ChartsModule',
    //         }, {
    //             path: 'calendar',
    //             loadChildren: './calendar/calendar.module#CalendarModule',
    //         }, {
    //             path: '',
    //             loadChildren: './userpage/user.module#UserModule',
    //         }, {
    //             path: '',
    //             loadChildren: './timeline/timeline.module#TimelineModule',
    //         }
    //     ],
    // }, {
    //     path: '',
    //     component: AuthLayoutComponent,
    //     children: [{
    //         path: '',
    //         loadChildren: './pages/pages.module#PagesModule',
    //     }],
    // }

];
