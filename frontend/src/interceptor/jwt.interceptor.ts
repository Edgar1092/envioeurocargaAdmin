import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  contentType;
  constructor(public route: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.headers.has('Content-Type')) {
      this.contentType = request.headers.get('Content-Type');
    }
    // add authorization header with jwt token if available
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    if (currentUser && token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).do(
      (event: HttpEvent<any>) => {},
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          // console.log(err);
          // do error handling here
          if (err.status === 500) {
            if (err.message === 'Unauthenticated') {
              this.route.navigate(['/auth/login']);
            }
          }
          if (err.status === 401) {
            localStorage.clear();
            this.route.navigate(['/auth/login']);
          }
        }
      }
    );
  }
}
