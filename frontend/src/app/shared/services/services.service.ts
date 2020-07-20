import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  services$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient, private auth: AuthService) {}

  get(params?) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    // parseParams = parseParams.append('office_id', this.auth.main_office$.value);
    this.http
      .get<any[]>(`services?orderBy=name`, { params: parseParams })
      .subscribe(services => {
        this.services$.next(services);
      });
  }

  show(index: number) {
    return this.http.get(`services/${index}`);
  }

  add(params: {
    office_id: string;
    name: string;
    type: 'client' | 'prospect';
  }) {
    return this.http.post(`services`, params);
  }

  update(
    id: number,
    params: {
      office_id: number;
      name: string;
      type: 'client' | 'prospect';
    }
  ) {
    return this.http.put(`services/${id}`, params);
  }

  delete(id: number) {
    return this.http.delete(`services/${id}`);
  }

  search(params: {
    office_id: any;
    text?: string;
    type: 'client' | 'prospect';
  }) {
    return this.http.get('services', { params });
  }
}
