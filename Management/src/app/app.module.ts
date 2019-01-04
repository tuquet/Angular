import { ErrorInterceptor } from './core/helper/error.intercepter';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarParkingModule } from './shared/navbar-parking/navbar-parking.module';
import { FooterParkingModule } from './shared/footer-parking/footer-parking.module';
import { SiteMenuModule } from './shared/site-menu/site-menu.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FixedpluginModule } from './shared/fixedplugin/fixedplugin.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { ParkingLayoutComponent } from './layouts/parking/parking-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthRequestOptions } from './core/auth/auth-request'
import { AppRoutes } from './app.routing';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './core/helper/AppHttpInterceptor';
import { Cus071Component } from './shared/404/cus071.component';
import { SlideBarComponent } from './layouts/slide-bar/slide-bar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ManageLayoutComponent } from './layouts/manage-layout/manage-layout.component';
import { AuthGuard } from './core/services/auth.guard';
import { NotificationService } from './core/services/notification.service';





const Routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes, { preloadingStrategy: PreloadAllModules });

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [],

})
export class MaterialModule { }

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    MaterialModule,
    MatNativeDateModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedpluginModule,
    NavbarParkingModule,
    FooterParkingModule,
    SiteMenuModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    Routing
  ],
  declarations: [
    AppComponent,
    ParkingLayoutComponent,
    ManageLayoutComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    Cus071Component,
    SlideBarComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    AuthGuard, NotificationService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true
    }
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}