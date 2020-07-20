import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrachOfficesService {
  constructor(private http: HttpClient) {}

  get(
    id_client: string,
    params: { office_id: string; client_id?: string }
  ): Observable<any[]> {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    return this.http.get<any[]>(`clients/${id_client}/branch_offices`, {
      params: parseParams
    });
  }

  show(client: any, branch_id: any) {
    return this.http.get(`clients/${client}/branch_offices/${branch_id}`);
  }

  add(params: {
    client_id: number | string;
    name: string;
    contact?: string;
    email?: string;
    phone_1?: string;
    phone_2?: string;
    zip_code?: string;
    city?: string;
    street?: string;
    colony?: string;
    observation?: string;
  }) {
    return this.http.post(`clients/${params.client_id}/branch_offices`, params);
  }

  update(
    id: string,
    params: {
      client_id: 1;
      name: string;
      contact?: string;
      email?: string;
      phone_1?: string;
      phone_2?: string;
      zip_code?: string;
      city?: string;
      street?: string;
      colony?: string;
      observation?: string;
    }
  ) {
    return this.http.put(`clients/branch_offices/${id}`, params);
  }

  delete(client_id: any, branch_office_id: any) {
    return this.http.delete(
      `clients/${client_id}/branch_offices/${branch_office_id}`
    );
  }

  authorize(params: { client_id: string; branch_office_id: string }) {
    return this.http.post(
      `clients/${params.client_id}/branch_offices/${
        params.branch_office_id
      }/authorize`,
      {}
    );
  }
}
