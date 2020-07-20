import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusesService {
  status$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) { }


  get(params?) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    // parseParams = parseParams.append('office_id', this.auth.main_office$.value);
    this.http
      .get<any[]>(`statuses`, { params: parseParams })
      .subscribe(status => {
        this.status$.next(status);
      });
  }

  show(index: number) {
    return this.http.get(`statuses/${index}`);
  }
}
