import { Routes } from '@angular/router';
import { ApplicationForm } from './application-form.component'

export const AppFormRouting: Routes = [
    {
        path: '',
        children: [ {
          path: 'register',
          component: ApplicationForm
      }]}, 
      
];
