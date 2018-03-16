import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

  constructor( private _authService: AuthService ) {}

  public user: User = new User();

  public errorMessage = '';

  public signupSuccess = false;

  public onSubmit() {
    this.user.getFormGroup().disable();
    this._authService.signUp(this.user).subscribe( user => {
      this.errorMessage = '';
      this.signupSuccess = true;
    }, error => {
      this.user.getFormGroup().enable();
      this.errorMessage = error.message;
      this.signupSuccess = false;
    });
  }

  ngOnInit() {
  }

}
