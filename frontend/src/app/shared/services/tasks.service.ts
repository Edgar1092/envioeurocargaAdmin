import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) { }

    
  get(params?: { page?: number; per_page?: number }) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    this.http
      .get<any[]>(`tasks`, { params: parseParams })
      .subscribe(tasks => {
        this.tasks$.next(tasks);
      });
  }

  show(index: number) {
    return this.http.get(`tasks/${index}`);
  }

  add(params) {
    return this.http.post(`tasks`, params);
  }

  update(
    id: number,
    params
  ) {
    return this.http.put(`tasks/${id}`, params);
  }

  delete(role: number) {
    return this.http.delete(`tasks/${role}`);
  }
}
