import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppFormRouting } from './application-form.routing';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';
import { ApplicationForm } from './application-form.component'
import { IcheckDirective } from 'app/core/icheck.directive';

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(AppFormRouting),
        ReactiveFormsModule
    ],
    declarations: [ApplicationForm,IcheckDirective],
})

export class ApplicationFormModule { }
