import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from './layouts/full/full-layout.component';
import { ContentLayoutComponent } from './layouts/content/content-layout.component';

import { Full_ROUTES } from './shared/routes/full-layout.routes';
import { CONTENT_ROUTES } from './shared/routes/content-layout.routes';

import { AuthGuard } from './shared/auth/auth-guard.service';
import { ErrorPageComponent } from './auth/error/error-page.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: ContentLayoutComponent,
    data: { title: 'content Views' },
    children: CONTENT_ROUTES,
    canActivate: []
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: { title: 'full Views' },
    children: Full_ROUTES,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes)
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      useHash: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
