import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';
import { RouteService } from '../route/route.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor( private _authService: AuthService, private _router: Router, private _routeService: RouteService ) {}

  public user: User = new User();

  public errorMessage = '';

  public onSubmit() {
    this.user.getFormGroup().disable();
    this._authService.login(this.user).subscribe( userSession => {
      this.errorMessage = '';
      this._routeService.emptyRoute();
      this._router.navigate(['route']);
    }, error => {
      console.log(this._authService.getCurrentUser());
      this._authService.getCurrentUser().getSession( session => {
        console.log(session);
      });
      console.log(error);
      this.user.getFormGroup().enable();
      this.errorMessage = error.message;
    });
  }

  ngOnInit() {
  }

}
