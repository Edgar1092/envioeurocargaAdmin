import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FielsService {
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
    return this.http.get(`fiels`, { params: parseParams });
  }

  show(index: number) {
    return this.http.get(`fiels/${index}`);
  }

  add(params: {
    client_id: number;
    expiration_date: string;
    observation?: string;
    file: string;
  }) {
    return this.http.post(`fiels`, params);
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
    return this.http.put(`fiels/${id}`, params);
  }

  delete(role: number) {
    return this.http.delete(`fiels/${role}`);
  }
}
