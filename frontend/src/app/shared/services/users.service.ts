import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {
    this.get();
  }

  get(params?) {
    this.http.get<any[]>(`users`, { params }).subscribe(users => {
      this.users$.next(users);
    });
  }

  show(index: number) {
    return this.http.get(`users/${index}`);
  }

  add(params) {
    return this.http.post(`users/create`, params);
  }

  update(
    params
  ) {
    return this.http.post(`users/update`, params);
  }

  delete(id: number) {
    return this.http.delete(`users/${id}`);
  }
  countReferidos(id: number) {
    let param
    param={id:id};
    return this.http.post(`referidos`,param);
  }
  obtenerPatrocinador(id: number) {
    let param
    param={id:id};
    return this.http.post(`patrocinador`,param);
  }
}
