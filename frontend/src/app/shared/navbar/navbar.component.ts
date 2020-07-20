import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LayoutService } from '../services/layout.service';
import { ConfigService } from '../services/config.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  currentLang = 'en';
  toggleClass = 'ft-maximize';
  placement = 'bottom-right';
  public isCollapsed = true;
  @Output()
  toggleHideSidebar = new EventEmitter<Object>();

  public config: any = {};

  constructor(
    public translate: TranslateService,
    private layoutService: LayoutService,
    private configService: ConfigService,
    private auth: AuthService,
    private router: Router,
    private toast: ToastrService
  ) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'es');
  }

  ngOnInit() {
    this.config = this.configService.templateConf;
  }

  ngAfterViewInit() {
    if (this.config.layout.dir) {
      const dir = this.config.layout.dir;
      if (dir === 'rtl') {
        this.placement = 'bottom-left';
      } else if (dir === 'ltr') {
        this.placement = 'bottom-right';
      }
    }
  }

  ChangeLanguage(language: string) {
    this.translate.use(language);
  }

  ToggleClass() {
    if (this.toggleClass === 'ft-maximize') {
      this.toggleClass = 'ft-minimize';
    } else {
      this.toggleClass = 'ft-maximize';
    }
  }

  toggleNotificationSidebar() {
    this.layoutService.emitChange(true);
  }

  toggleSidebar() {
    const appSidebar = document.getElementsByClassName('app-sidebar')[0];
    if (appSidebar.classList.contains('hide-sidebar')) {
      this.toggleHideSidebar.emit(false);
    } else {
      this.toggleHideSidebar.emit(true);
    }
  }

  logout() {
    this.auth.logout().then(response => {
      if (response) {
        this.toast.success(response['message']);
        this.router.navigate(['auth/login']);
      } else {
        this.toast.error(JSON.stringify(response));
      }
       console.log(response);
       
    });
  }

  goToMyProfile() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.router.navigate(['/admin/user/', user['id']]);
    }
  }
}
