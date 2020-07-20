import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

// COMPONENTS
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotificationSidebarComponent } from './notification-sidebar/notification-sidebar.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';

// DIRECTIVES
import { ToggleFullscreenDirective } from './directives/toggle-fullscreen.directive';
import { SidebarDirective } from './directives/sidebar.directive';
import { SidebarLinkDirective } from './directives/sidebarlink.directive';
import { SidebarListDirective } from './directives/sidebarlist.directive';
import { SidebarAnchorToggleDirective } from './directives/sidebaranchortoggle.directive';
import { SidebarToggleDirective } from './directives/sidebartoggle.directive';
import { SearchPipe } from './pipes/search.pipe';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from './upload/upload.service';
import { FileUploadModule } from 'ng2-file-upload';
import { ServicesClientComponent } from './servicescomponent/services.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  exports: [
    CommonModule,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NotificationSidebarComponent,
    ToggleFullscreenDirective,
    SidebarDirective,
    NgbModule,
    TranslateModule,
    UploadComponent,
    SelectDropDownModule,
    ServicesClientComponent,
    NgxPaginationModule,
    FilterComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    FileUploadModule,
    SelectDropDownModule,
    NgxPaginationModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    ToastrModule.forRoot()
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NotificationSidebarComponent,
    ToggleFullscreenDirective,
    SidebarDirective,
    SidebarLinkDirective,
    SidebarListDirective,
    SidebarAnchorToggleDirective,
    SidebarToggleDirective,
    SearchPipe,
    UploadComponent,
    ServicesClientComponent,
    FilterComponent
  ],
  entryComponents: [UploadComponent, FilterComponent],
  providers: [UploadService, NgbActiveModal]
})
export class SharedModule {}
