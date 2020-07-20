import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloodTypesService {
  blood$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  get(params?) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    this.http
      .get<any[]>(`blood_types`, { params: parseParams })
      .subscribe(blood => {
        this.blood$.next(blood);
      });
  }

}
