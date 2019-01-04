import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteMenuComponent } from './site-menu.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SiteMenuComponent ],
    exports: [ SiteMenuComponent ]
})

export class SiteMenuModule {}
