import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorsService {
  collaborators$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  get(params?) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    this.http
      .get<any[]>(`collaborators`, { params: parseParams })
      .subscribe(collaborators => {
        this.collaborators$.next(collaborators);
      });
  }

  getAll() {
    return this.http.get<any[]>(`collaborators`);
  }

  show(index: number) {
    return this.http.get(`collaborators/${index}`);
  }

  add(params) {
    return this.http.post(`collaborators`, params);
  }

  update(
    id: string,
    params) {
    return this.http.put(`collaborators/${id}`, params);
  }

  delete(role: number) {
    return this.http.delete(`collaborators/${role}`);
  }

}
