import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  constructor(private http: HttpClient) {}

  get(): Observable<any[]> {
    return this.http.get<any[]>(`roles`);
  }

  show(index: number) {
    return this.http.get(`show/${index}`);
  }

  add(name: string) {
    return this.http.post(`roles`, name);
  }

  update(role: number, name: string) {
    return this.http.put(`roles/${role}`, name);
  }

  delete(role: number) {
    return this.http.delete(`roles/${role}`);
  }
}
