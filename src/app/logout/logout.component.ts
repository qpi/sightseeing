import { AuthService } from '../auth/auth.service';
import { RouteService } from '../route/route.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.less']
})
export class LogoutComponent implements OnInit {

  constructor(private _authservice: AuthService, private _router: Router, private _routeService: RouteService) { }

  ngOnInit() {
    this._authservice.logout();
    this._routeService.emptyRoute(true);
    this._router.navigate(['login']);
  }

}
