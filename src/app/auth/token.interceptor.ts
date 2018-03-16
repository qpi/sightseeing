import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public _authservice: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if ( request.url.indexOf('amazonaws') >= 0 ) {
      const idToken: string = this._authservice.getIdToken();
      const accessToken: string = this._authservice.getAccessToken();
      if ( idToken ) {
        request = request.clone({
          setHeaders: {
            Authorization: idToken
          },
          setParams: {
            accessToken : accessToken
          }
        });
      }
    }
    return next.handle(request);
  }
}
