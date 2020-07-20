import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  activities$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  get(params?: {
    user_id?: number;
    office_id?: string;
    client_id?: number;
    limit?: number;
    offset?: number;
  }) {
    let parseParams = new HttpParams();
    Object.keys(params).forEach(p => {
      parseParams = parseParams.append(p, params[p]);
    });
    this.http
      .get<any[]>(`activities`, { params: parseParams })
      .subscribe(activities => {
        this.activities$.next(activities);
      });
  }

  show(index: number) {
    return this.http.get(`activities/${index}`);
  }

  add(params: {
    office_id: number;
    client_id: number;
    service_id: number;
    time: string;
    branch_office_id?: string;
    observation?: string;
  }) {
    return this.http.post(`activities`, params);
  }

  update(
    id: number,
    params: {
      office_id: number;
      client_id: number;
      service_id: number;
      time: string;
      observation?: string;
    }
  ) {
    return this.http.put(`activities/${id}`, params);
  }

  delete(role: number) {
    return this.http.delete(`activities/${role}`);
  }
}
