import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkordersService {
  constructor(private http: HttpClient) {}

  get(params?: {
    office_id?: string;
    client_id?: string;
    order_by?: string;
    order_type?: 'asc' | 'desc';
  }) {
    let parseParams = new HttpParams();
    Object.keys(params).forEach(p => {
      parseParams = parseParams.append(p, params[p]);
    });
    return this.http.get(`work_orders`, { params: parseParams });
  }

  show(index: number) {
    return this.http.get(`work_orders/${index}`);
  }

  add(params: {
    client_id: number;
    expiration_date: string;
    observation?: string;
    file: string;
  }) {
    return this.http.post(`work_orders`, params);
  }

  update(
    id: number,
    params: {
      client_id: number;
      expiration_date: string;
      observation?: string;
      file: string;
    }
  ) {
    return this.http.put(`work_orders/${id}`, params);
  }

  delete(role: number) {
    return this.http.delete(`work_orders/${role}`);
  }
}
