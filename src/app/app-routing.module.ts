import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminConsoleComponent } from './admin-console/admin-console.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { ProfilePageComponent} from './profile-page/profile-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
	{path: 'login', component: LoginComponent},
	{path: 'signup', component: SignUpComponent},
	{path: 'app/info', component: InfoPageComponent},
	{path: 'app/profile', component: ProfilePageComponent},
	{path: 'app', component: MainPageComponent},
	{path: 'admin', component: AdminLoginComponent},
	{path: 'adminconsole', component: AdminConsoleComponent},

	{path: '', component: LandingPageComponent},

];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule {}
