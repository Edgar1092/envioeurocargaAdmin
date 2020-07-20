import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacationsService {
  vacations$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  get(params?) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    this.http
      .get<any[]>(`vacation_records`, { params: parseParams })
      .subscribe(vacations => {
        this.vacations$.next(vacations);
      });
  }

  getAll() {
    return this.http.get<any[]>(`vacation_records`);
  }

  show(index: number) {
    return this.http.get(`vacation_records/${index}`);
  }

  add(params) {
    return this.http.post(`vacation_records`, params);
  }

  update(
    id: string,
    params) {
    return this.http.put(`vacation_records/${id}`, params);
  }

  delete(role: number) {
    return this.http.delete(`vacation_records/${role}`);
  }

}
