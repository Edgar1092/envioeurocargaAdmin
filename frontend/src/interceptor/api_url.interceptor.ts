import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { TranslateCompiler } from '@ngx-translate/core';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const url: string = environment.apiUrl;
    const splitRequest = req.url.split('/');

    // En caso de que la llamada venga de la librería Ngx-Translate
    // entonces no parseo la url
    if (splitRequest.find(r => r === 'i18n')) {
      return next.handle(req);
    }
    req = req.clone({ url: this.prepareUrl(req.url, url) });
    // console.log(req);
    return next.handle(req);
  }

  private isAbsoluteUrl(url: string): boolean {
    const absolutePattern = /^https?:\/\//i;
    return absolutePattern.test(url);
  }

  private prepareUrl(url: string, apiUrl: string): string {
    url = this.isAbsoluteUrl(url) ? url : apiUrl + '/' + url;
    return url.replace(/([^:]\/)\/+/g, '$1');
  }
}
