import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { RouteComponent } from './route/route.component';  // Add this

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{
  path: 'route',
  component: RouteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SightseeingRoutingModule { }
