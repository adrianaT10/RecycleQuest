import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { ButtonModule } from '@syncfusion/ej2-ng-buttons';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule} from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import {AgmCoreModule} from '@agm/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminConsoleComponent } from './admin-console/admin-console.component';

import { AdminService } from './admin-console/admin.service';
import { AuthenticationService } from './authentication.service';
import { CentersSearchService } from './admin-console/centers-search.service';
import { RecyclingCentersService } from './recycling-center/recycling-centers.service';
import { UserService } from './user/user.service';
import { UserUtilsService } from './user/user-utils.service';




@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    NavbarComponent,
    MainPageComponent,
    ProfilePageComponent,
    InfoPageComponent,
    SignUpComponent,
    AdminLoginComponent,
    AdminConsoleComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCe0MGtImrF8Wwr4ICcqWqEZ1pCakPUCu4'
    }),
    AppRoutingModule,
  	BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    AdminService,
    AuthenticationService,
    CentersSearchService,
    RecyclingCentersService,
    UserService,
    UserUtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
