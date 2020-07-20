import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  companies$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  get(params?: { page?: number; per_page?: number }) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    this.http
      .get<any[]>(`companies`, { params: parseParams })
      .subscribe(companies => {
        this.companies$.next(companies);
      });
  }

  show(index: number) {
    return this.http.get(`companies/${index}`);
  }

  add(params) {
    return this.http.post(`companies`, params);
  }

  update(
    id: number,
    params: {
      office_id: number;
      rfc: string;
      business_name: string;
      trade_name?: string;
      zip_code?: string;
      email?: string;
      phone_1?: string;
      phone_2?: string;
      direction?: string;
    }
  ) {
    return this.http.put(`companies/${id}`, params);
  }

  delete(role: number) {
    return this.http.delete(`companies/${role}`);
  }

  convertToClient(id: number, params: { services: any[] }) {
    return this.http.post(`companies/convert_to_client/${id}`, params);
  }
}
