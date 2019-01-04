import { Routes } from '@angular/router';
// import { ApplicationForm } from './application-form.component'

export const AppFormRouting: Routes = [
    {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [{
            path: 'register',
          
        }]
    },

];
