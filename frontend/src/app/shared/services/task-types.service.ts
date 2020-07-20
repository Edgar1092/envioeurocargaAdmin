import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskTypesService {
  taskTypes$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) { }

  get() {
    this.http
      .get<any[]>(`task_types`)
      .subscribe(taskTypes => {
        this.taskTypes$.next(taskTypes);
      });
  }

  show(index: number) {
    return this.http.get(`task_types/${index}`);
  }
}
