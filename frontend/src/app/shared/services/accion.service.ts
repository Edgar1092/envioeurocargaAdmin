import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
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
      .get<any[]>(`lista/get`, { params: parseParams })
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
    return this.http.post(`lista/getLista`, params);
  }

  add(params) {
    return this.http.post(`lista/create`, params, {
      headers: new HttpHeaders({
        "Accept" : "application/json",
      })
    });
  }
  edit(params) {
    return this.http.post(`lista/update`, params, {
      headers: new HttpHeaders({
        "Accept" : "application/json",
      })
    });
  }

  activarInactivar(params) {
    return this.http.post(`lista/activarInactivar`, params);
  }

  delete(id) {
    let params = {id : id}
    return this.http.post(`lista/delete`,params);
  }

  borrar(id) {
    let params = {id : id}
    return this.http.post(`lista/borrar`,params);
  }
  usuario() {
  
    return this.http.post(`users/usuarios`,1);
  }
}
