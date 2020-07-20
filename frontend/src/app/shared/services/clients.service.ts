import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  clients$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  get(params?) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    this.http
      .get<any[]>(`clients`, { params: parseParams })
      .subscribe(clients => {
        this.clients$.next(clients);
      });
  }

  getAll() {
    return this.http.get<any[]>(`clients`);
  }

  show(index: number) {
    return this.http.get(`clients/${index}`);
  }

  add(params) {
    return this.http.post(`clients`, params);
  }

  update(
    id: string,
    params) {
    return this.http.put(`clients/${id}`, params);
  }

  delete(role: number) {
    return this.http.delete(`clients/${role}`);
  }

  addService(params: { services: any[]; enable: any[]; client_id: any }) {
    return this.http.post(`clients/services`, params);
  }

  authorize(client_id: string) {
    return this.http.post(`clients/${client_id}/authorize`, {});
  }
}
