import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { RoleAdminGuard } from 'app/guards/role-admin.guard';

// Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  // {
  //   path: 'changelog',
  //   loadChildren: './pages/changelog/changelog.module#ChangeLogModule'
  // },
  // {
  //   path: 'full-layout',
  //   loadChildren: './pages/full-layout-page/full-pages.module#FullPagesModule'
  // }
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivateChild: [RoleAdminGuard]
  }

];
