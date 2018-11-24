import { Routes } from '@angular/router';

import { UserComponent } from './user.component';

export const UserRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'my-profile',
            component: UserComponent
        }],

    },
    {
        path: '',
        children: [{
            path: 'edit-profile',
            component: UserComponent
        }],

    },
    {
        path: '',
        children: [{
            path: 'settings',
            component: UserComponent
        }],

    }
];
