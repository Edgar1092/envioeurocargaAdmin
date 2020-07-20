import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropoalsService {
  propoals$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}


  get(params?) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    this.http
      .get<any[]>(`propoals`, { params: parseParams })
      .subscribe(propoals => {
        this.propoals$.next(propoals);
      });
  }
  getNote(params?) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    this.http
      .get<any[]>(`propoal_notes`, { params: parseParams })
      .subscribe(propoals => {
        this.propoals$.next(propoals);
      });
  }

  show(propoal_id) {
    return this.http.get(`propoals/${propoal_id}`);
  }

  add(params) {
    return this.http.post(`propoals`, params);
  }
  addNote(params) {
    return this.http.post(`propoal_notes`, params);
  }

  update(id: any, params) {
    return this.http.put(`propoals/${id}`, params);
  }

  delete(propoal_id: any) {
    return this.http.delete(`propoals/${propoal_id}`);
  }
  deleteNote(propoal_id: any) {
    return this.http.delete(`propoal_notes/${propoal_id}`);
  }
}
