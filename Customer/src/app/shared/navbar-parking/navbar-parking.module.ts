import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarParkingComponent } from './navbar-parking.component';
import { MatButtonModule } from '@angular/material';
@NgModule({
    imports: [RouterModule, CommonModule, MatButtonModule],
    declarations: [NavbarParkingComponent],
    exports: [NavbarParkingComponent]
})

export class NavbarParkingModule { }
