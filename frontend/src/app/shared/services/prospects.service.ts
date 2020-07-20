import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProspectsService {
  prospects$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  get(params?: { page?: number; per_page?: number }) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    this.http
      .get<any[]>(`prospects`, { params: parseParams })
      .subscribe(prospects => {
        this.prospects$.next(prospects);
      });
  }

  show(index: number) {
    return this.http.get(`prospects/${index}`);
  }

  add(params) {
    return this.http.post(`prospects`, params);
  }

  update(
    id: number,
    params
  ) {
    return this.http.put(`prospects/${id}`, params);
  }

  delete(role: number) {
    return this.http.delete(`prospects/${role}`);
  }

  convertToClient(id: number, params: { services: any[] }) {
    return this.http.post(`prospects/convert_to_client/${id}`, params);
  }
}
