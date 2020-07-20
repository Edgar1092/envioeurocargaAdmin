import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { OnesignalService } from './onesignal.service';

@Injectable()
export class AuthService {
  user$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  main_office$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  roles$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  token: string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private onesignal: OnesignalService
  ) {
    this.token = localStorage.getItem('token');
    const roles: any[] = JSON.parse(localStorage.getItem('roles'));
    if (localStorage.getItem('roles')) {
      this.roles$.next(roles);
    }
  }

  login(params: { email: string; password: string }) {
    return this.http.post('auth/login', params).pipe(
      map(authData => {
        if (authData) {
          console.log('aqui esta authdata',authData)
          localStorage.setItem('token', authData['token']);
          this.token = authData['token'];
          localStorage.setItem('user', JSON.stringify(authData));
          this.onesignal.logIn(authData['id']);
          localStorage.setItem(
            'roles',
            JSON.stringify('Administrador')
          );
        }
        return authData;
      })
    );
  }
  register(params) {
    return this.http.post('auth/register', params);
  }
  logout() {
    
  
    return new Promise((resolve, reject) => {
      localStorage.clear();
      this.onesignal.logOut();
      this.token = undefined;
      resolve(true)
    });
  
  }

  geToken(): string {
    return localStorage.getItem('token');
  }

  resetPassword(params: {
    password: string;
    password_confirmation: string;
    token: string;
  }) {
    return this.http.post(`password/reset`, params);
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    // here you can check if user is authenticated or not through his token
    const haveToken = this.token ? true : false;
    return haveToken;
  }


  isAdmin(): boolean {
    const roles = JSON.parse(localStorage.getItem('roles'));
    if (roles) {
      const admin = roles.find(rol => rol['name'] === 'Administrador');
      if (admin) {
        return true;
      }
    }
    return false;
  }
}
