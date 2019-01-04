import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Man21Component } from 'app/manage/man21/man21.component';
import { Man221Component } from 'app/manage/man221/man221.component';
import { Man2321Component } from 'app/manage/man2321/man2321.component';
import { Man411Component } from 'app/manage/man411/man411.component';
import { Man241Component } from 'app/manage/man241/man241.component';
import { Man251Component } from 'app/manage/man251/man251.component';
import { EditorModule } from 'primeng/editor';
import { PanelModule } from 'primeng/panel';
import { Man3211Component } from 'app/manage/man3211/man3211.component';
import { AgmCoreModule } from '@agm/core';
import { GOOGLE_MAP_API } from 'app/core/services/api.setting';
import { AgmDirectionModule } from 'agm-direction';
import { Man11Component } from 'app/manage/man11/man11.component';
import { LSelect2Module } from 'ngx-select2';

const FullLayoutRoutes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full', },
  {
    path: 'home',
    children: [{
      path: '',
      component: Man11Component
    }]
  },
  {
    path: 'newparking_management',
    children: [{
      path: '',
      component: Man21Component
    }]
  },
  {
    path: 'register_parkinglot',
    children: [{
      path: '',
      component: Man221Component
    }]
  },
  {
    path: 'parkinglot_divisiongroup',
    children: [{
      path: '',
      component: Man2321Component
    }]
  },
  {
    path: 'setting',
    children: [{
      path: '',
      component: Man411Component
    }]
  },
  {
    path: 'parkinglot_division',
    children: [{
      path: '',
      component: Man241Component
    }]
  },
  {
    path: 'division_grouplist',
    children: [{
        path: '',
        component: Man251Component
    }]
  },
  {
    path: 'customer_page',
    children: [{
        path: '',
        component: Man3211Component
    }]
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FullLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    PanelModule,
    LSelect2Module,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_MAP_API,
      libraries: ["places"]
  }),
    AgmDirectionModule

  ],
  declarations: [
    Man21Component,
    Man221Component,
    Man2321Component,
    Man411Component,
    Man241Component,
    Man251Component,
    Man3211Component,
    Man11Component
  ],
  exports: [
    RouterModule,
  ]
})
export class ManageLayoutModule { }
