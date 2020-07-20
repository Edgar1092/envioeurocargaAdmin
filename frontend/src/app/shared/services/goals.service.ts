import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  goals$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  get(params?) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    this.http
      .get<any[]>(`users/goals`, { params: parseParams })
      .subscribe(goals => {
        this.goals$.next(goals);
      });
  }

  getAll() {
    return this.http.get<any[]>(`users/goals`);
  }

  show(index: number) {
    return this.http.get(`users/goals/${index}`);
  }

  add(params) {
    return this.http.post(`users/goals`, params);
  }

  update(
    id: string,
    params) {
    return this.http.put(`users/goals/${id}`, params);
  }

  delete(role: number) {
    return this.http.delete(`users/goals/${role}`);
  }

}
