import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currency$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  get(params?) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    this.http
      .get<any[]>(`currencies`, { params: parseParams })
      .subscribe(currency => {
        this.currency$.next(currency);
      });
  }

  show(index: number) {
    return this.http.get(`currencies/${index}`);
  }

  add(params) {
    return this.http.post(`currencies`, params);
  }

  update(
    id: string,
    params) {
    return this.http.put(`currencies/${id}`, params);
  }

  delete(role: number) {
    return this.http.delete(`currencies/${role}`);
  }

  addService(params: { services: any[]; enable: any[]; client_id: any }) {
    return this.http.post(`currencies/services`, params);
  }

  authorize(client_id: string) {
    return this.http.post(`currencies/${client_id}/authorize`, {});
  }
}
