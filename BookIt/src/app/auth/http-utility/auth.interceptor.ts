import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.auth.currentUser
      .pipe(
        take(1),
        exhaustMap(user => {
          // Make sure we have a user
          console.log(user);
          if (!user) return next.handle(request);
          if (!request.url.toLowerCase().includes("firebase")) return next.handle(request);

          // Modify the req to have access to the token
          const modifiedReq = request.clone({
            params: new HttpParams().set("auth", user.token)
          });

          // Return the modified request
          return next.handle(modifiedReq);
        })
      );
  }
}
