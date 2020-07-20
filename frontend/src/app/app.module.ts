import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import {
  NgbModule,
  NgbDateAdapter,
  NgbDateNativeAdapter
} from '@ng-bootstrap/ng-bootstrap';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from './layouts/content/content-layout.component';
import { FullLayoutComponent } from './layouts/full/full-layout.component';

import { AuthGuard } from './shared/auth/auth-guard.service';
import { ApiUrlInterceptor } from 'interceptor/api_url.interceptor';
import { environment } from 'environments/environment';

import { AuthModule } from './auth/auth.module';
import { JwtInterceptor } from 'interceptor/jwt.interceptor';
import { AuthService } from './shared/auth/auth.service';
import { AdminModule } from './admin/admin.module';
import { ServiceWorkerModule } from '@angular/service-worker';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, FullLayoutComponent, ContentLayoutComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    AdminModule,
    HttpClientModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    PerfectScrollbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.serviceWorker
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    AuthService,
    AuthGuard,

    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
