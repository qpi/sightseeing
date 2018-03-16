import { RouteService } from '../route/route.service';
import { SightseeingRoute } from '../route/sightseeing-route';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community-routes',
  templateUrl: './community-routes.component.html',
  styleUrls: ['./community-routes.component.less']
})
export class CommunityRoutesComponent implements OnInit {

  constructor(private _routeService: RouteService, private _router: Router) { }

  public routes: SightseeingRoute[] = new Array<SightseeingRoute>();

  public isLoading = false;

  public load( route: SightseeingRoute ) {
    this._routeService.loadRoute(route);
    this._router.navigate(['route']);
  }

  ngOnInit() {
    this.isLoading = true;
    this._routeService.getRoutes(true).subscribe( ( routes: SightseeingRoute[] ) => {
      this.routes = routes;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      console.error(error);
    });
  }

}
