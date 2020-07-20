import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit
} from '@angular/core';

import { ROUTES, ADMIN_ROUTES } from './sidebar-routes.config';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { customAnimations } from '../animations/custom-animations';
import { ConfigService } from '../services/config.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  animations: customAnimations
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('toggleIcon') toggleIcon: ElementRef;
  public menuItems: any[];
  depth: number;
  activeTitle: string;
  activeTitles: string[] = [];
  expanded: boolean;
  nav_collapsed_open = false;
  logoUrl = 'assets/img/logos/MGP_SINFONDO.png';
  public config: any = {};

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private route: ActivatedRoute,
    public translate: TranslateService,
    private configService: ConfigService,
    private auth: AuthService
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
      this.expanded = true;
    }
  }

  ngOnInit() {
    this.config = this.configService.templateConf;

    /**
     * En caso de ser administrador se cargan las rutas admin
     * sino las default
     */
    // this.menuItems = this.auth.isAdmin() ? ADMIN_ROUTES : ROUTES;
    // if(this.auth.isAdmin()){
      this.menuItems =ADMIN_ROUTES;
    // }

    if (this.config.layout.sidebar.backgroundColor === 'white') {
      this.logoUrl = 'assets/img/logos/logo_horizontal.png';
    } else {
      this.logoUrl = 'assets/img/logos/logo_horizontal.png';
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.config.layout.sidebar.collapsed !== undefined) {
        if (this.config.layout.sidebar.collapsed === true) {
          this.expanded = false;
          this.renderer.addClass(
            this.toggleIcon.nativeElement,
            'ft-toggle-left'
          );
          this.renderer.removeClass(
            this.toggleIcon.nativeElement,
            'ft-toggle-right'
          );
          this.nav_collapsed_open = true;
        } else if (this.config.layout.sidebar.collapsed === false) {
          this.expanded = true;
          this.renderer.removeClass(
            this.toggleIcon.nativeElement,
            'ft-toggle-left'
          );
          this.renderer.addClass(
            this.toggleIcon.nativeElement,
            'ft-toggle-right'
          );
          this.nav_collapsed_open = false;
        }
      }
    }, 0);
  }

  toggleSlideInOut() {
    this.expanded = !this.expanded;
  }

  handleToggle(titles) {
    this.activeTitles = titles;
  }

  // NGX Wizard - skip url change
  ngxWizardFunction(path: string) {
    if (path.indexOf('forms/ngx') !== -1) {
      this.router.navigate(['forms/ngx/wizard'], { skipLocationChange: false });
    }
  }
}
