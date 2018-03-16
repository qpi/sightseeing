import { RouteService } from '../route/route.service';
import { SightseeingRoute } from '../route/sightseeing-route';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-routes',
  templateUrl: './my-routes.component.html',
  styleUrls: ['./my-routes.component.less']
})
export class MyRoutesComponent implements OnInit {

  constructor(private _routeService: RouteService, private _router: Router) { }

  public routes: SightseeingRoute[] = new Array<SightseeingRoute>();

  public isLoading = false;

  public load( route: SightseeingRoute ) {
    this._routeService.loadRoute(route);
    this._router.navigate(['route']);
  }

  ngOnInit() {
    this.isLoading = true;
    this._routeService.getRoutes(false).subscribe( ( routes: SightseeingRoute[] ) => {
      this.routes = routes;
      this.isLoading = false;
    }, error => {
      console.error(error);
      this.isLoading = false;
    });
  }

}
