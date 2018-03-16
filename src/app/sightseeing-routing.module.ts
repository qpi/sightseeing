import { AuthGuard } from './auth/auth.guard';
import { CommunityRoutesComponent } from './community-routes/community-routes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MyRoutesComponent } from './my-routes/my-routes.component';
import { RouteComponent } from './route/route.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'route',
  component: RouteComponent,
  canActivate: [AuthGuard]
}, {
  path: 'my-routes',
  component: MyRoutesComponent,
  canActivate: [AuthGuard]
}, {
  path: 'community-routes',
  component: CommunityRoutesComponent,
  canActivate: [AuthGuard]
}, {
  path: 'signup',
  component: SignupComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'logout',
  component: LogoutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SightseeingRoutingModule { }
