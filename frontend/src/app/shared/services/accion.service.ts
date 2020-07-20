import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccionService {

  blogs$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {
  }
  get(params?) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    this.http
      .get<any[]>(`accion/get`, { params: parseParams })
      .subscribe(preguntas => {
        this.blogs$.next(preguntas);
      });
  }
  // get(params) {
  //   this.http.post<any[]>(`accion/get`, params ).subscribe(blogs => {
  //     this.blogs$.next(blogs);
  //   });
  // }

  show(index: number) {
    let params = {id : index}
    return this.http.post(`accion/getAccion`, params);
  }

  add(params) {
    return this.http.post(`accion/create`, params);
  }

  aprobar(params) {
    return this.http.post(`accion/aprobar`, params);
  }

  delete(id) {
    let params = {id : id}
    return this.http.post(`accion/delete`,params);
  }
}
