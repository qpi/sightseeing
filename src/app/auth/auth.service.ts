import { User } from './user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserSession
} from 'amazon-cognito-identity-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AuthService {

  private _isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly isAuthenticated$ = this._isAuthenticated$.asObservable();

  private _userPool: CognitoUserPool = new CognitoUserPool({
    UserPoolId: 'eu-central-1_1FZPlKyRN',
    ClientId: '7sfb0rfs3v8rrldjnmfmvf1o7r'
  });

  constructor(private router: Router) {
    const session = this.getSession();
    if ( session === null ) {
      this._isAuthenticated$.next(false);
    } else {
      if ( session.isValid() ) {
        this._isAuthenticated$.next(true);
      }
    }

//    if ( this.getCurrentUser() ) {
//      this.getCurrentUser().getSession( ( error, session: CognitoUserSession ) => {
//        if ( error ) {
//          this._isAuthenticated$.next(false);
//        } else if ( session.isValid() ) {
//          console.log(session.getIdToken().getExpiration() - ( new Date().getTime() / 1000 ) );
//          this._isAuthenticated$.next(true);
//        }
//      });
//    }
  }

  public getIdToken(): string {
    if ( this.getSession() ) {
      return this.getSession().getIdToken().getJwtToken();
    }
    this._isAuthenticated$.next(false);
    return null;
  }

  public getAccessToken(): string {
    if ( this.getSession() ) {
      return this.getSession().getAccessToken().getJwtToken();
    }
    this._isAuthenticated$.next(false);
    return null;
  }

  public getSession(): CognitoUserSession {
    let session: CognitoUserSession = null;
    if ( this.getCurrentUser() ) {
      this.getCurrentUser().getSession( ( error, cognitoSession: CognitoUserSession ) => {
        if ( !error ) {
          session = cognitoSession;
          this._isAuthenticated$.next(true);
        }
      });
    }
    return session;
  }

  public signUp(user: User): Observable<CognitoUser> {

    const attrList: CognitoUserAttribute[] = new Array<CognitoUserAttribute>();

    attrList.push(new CognitoUserAttribute({
      Name: 'email',
      Value: user.email
    }));
    attrList.push(new CognitoUserAttribute({
      Name: 'name',
      Value: user.name
    }));

    return Observable.create((observer: Observer<CognitoUser>) => {
      this._userPool.signUp(user.username, user.password, attrList, null, (error, result) => {
        if (error) {
          console.log(error);
          observer.error(error);
        } else {
          observer.next(result.user);
          observer.complete();
        }
      });
    });
  }

  login(user: User): Observable<CognitoUserSession> {
    const authData = {
      Username: user.username,
      Password: user.password
    };
    const authDetails = new AuthenticationDetails(authData);
    const userData = {
      Username: user.username,
      Pool: this._userPool
    };
    const self = this;
    const cognitoUser: CognitoUser = new CognitoUser(userData);
    return Observable.create((observer: Observer<CognitoUserSession>) => {
      cognitoUser.authenticateUser(authDetails, {
        onSuccess (result: CognitoUserSession) {
          self._isAuthenticated$.next(true);
          observer.next(result);
          observer.complete();
        },
        onFailure(error) {
          self._isAuthenticated$.next(false);
          observer.error(error);
        }
      });
    });
  }

  public getCurrentUser(): CognitoUser  {
    if ( this._userPool.getCurrentUser() ) {
      return this._userPool.getCurrentUser();
    }
    
  }

  logout() {
    this._isAuthenticated$.next(false);
    const user = this.getCurrentUser();
    if ( user ) {
      this.getCurrentUser().signOut();
    }
  }
}
