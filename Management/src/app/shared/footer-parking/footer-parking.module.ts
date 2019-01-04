import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterParkingComponent } from './footer-parking.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ FooterParkingComponent ],
    exports: [ FooterParkingComponent ]
})

export class FooterParkingModule {}
