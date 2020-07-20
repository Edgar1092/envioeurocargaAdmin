import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
    passengers$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  get(params) {
    let parseParams = new HttpParams();
    Object.keys(params).forEach(p => {
      parseParams = parseParams.append(p, params[p]);
    });
    this.http
      .get<any[]>(`passengers`, { params: parseParams })
      .subscribe(passengers => {
        this.passengers$.next(passengers);
      });
  }

  getAll() {
    return this.http.get<any[]>(`passengers`)
  }

  show(index: number) {
    return this.http.get(`passengers/${index}`);
  }

  add(params) {
    return this.http.post(`passengers`, params);
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
    return this.http.put(`passengers/${id}`, params);
  }

  delete(role: number) {
    return this.http.delete(`passengers/${role}`);
  }
  download(id) {
    // Para Probar
   
    this.http
      .get(`passengers/export/${id}?format=pdf`, {responseType: 'blob' })
      .subscribe(response => {
        saveAs(  response,
          'passenger.pdf');
      });
  }

}
