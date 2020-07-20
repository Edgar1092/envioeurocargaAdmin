import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SealsService {
  constructor(private http: HttpClient) {}

  get(params?: {
    office_id?: string;
    client_id?: number;
    branch_office_id?: string;
    limit?: number;
    offset?: number;
    order_by?:
      | 'expiration_date'
      | 'obsevation'
      | 'trade_name'
      | 'business_name'
      | 'rfc'
      | 'email'
      | 'zip_code'
      | 'direction'
      | 'phone_1'
      | 'phone_2';
    order_type?: 'asc' | 'desc';
  }) {
    let parseParams = new HttpParams();
    Object.keys(params).forEach(p => {
      parseParams = parseParams.append(p, params[p]);
    });
    return this.http.get(`seals`, { params: parseParams });
  }

  show(index: number) {
    return this.http.get(`seals/${index}`);
  }

  add(params: {
    client_id: string;
    branch_office_id: string;
    expiration_date: string;
    observation?: string;
    file: string;
  }) {
    return this.http.post(`seals`, params);
  }

  update(
    id: number,
    params: {
      client_id: string;
      branch_office_id: string;
      expiration_date: string;
      observation?: string;
      file: string;
    }
  ) {
    return this.http.put(`seals/${id}`, params);
  }

  delete(role: number) {
    return this.http.delete(`seals/${role}`);
  }
}
