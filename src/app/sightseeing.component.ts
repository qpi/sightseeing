import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './sightseeing.component.html',
  styleUrls: ['./sightseeing.component.less']
})
export class SightseeingComponent implements OnInit {

  title = 'sightseeing';

  constructor(private _authService: AuthService) {}

  public isAuthenticated() {
    return this._authService.isAuthenticated$;
  }

  public getUser() {
    return this._authService.getCurrentUser();
  }

  ngOnInit() {}
}
