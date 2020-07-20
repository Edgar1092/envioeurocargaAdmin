import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfficesService {
  offices$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {
    this.get();
  }

  // get(params?) {
  //   this.http.get<any[]>(`offices`, { params }).subscribe(office => {
  //     this.offices$.next(office);
  //   });
  // }

  get(params?) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    this.http
      .get<any[]>(`offices`, { params: parseParams })
      .subscribe(offices => {
        this.offices$.next(offices);
      });
  }

  show(id: number) {
    return this.http.get(`offices/${id}`);
  }

  add(params: {
    name: string;
    contact?: string;
    email?: string;
    zip_code?: string;
    phone_1?: string;
    phone_2?: string;
    city?: string;
    street?: string;
    colony?: string;
    observation?: string;
    responsible_id?: string;
  }) {
    return this.http.post(`offices`, params);
  }

  update(
    id: number,
    params: {
      name: string;
      contact?: string;
      email?: string;
      zip_code?: string;
      phone_1?: string;
      phone_2?: string;
      city?: string;
      street?: string;
      colony?: string;
      observation?: string;
      responsible_id?: string;
    }
  ) {
    return this.http.put(`offices/${id}`, params);
  }

  delete(id: number) {
    return this.http.delete(`offices/${id}`);
  }
}
