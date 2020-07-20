import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { saveAs } from 'file-saver';
import { FilesService } from './files.service';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {
  quotations$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
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
      .get<any[]>(`quotations`, { params: parseParams })
      .subscribe(quotations => {
        this.quotations$.next(quotations);
      });
  }
  getNote(params?) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    this.http
      .get<any[]>(`quotation_notes`, { params: parseParams })
      .subscribe(quotations => {
        this.quotations$.next(quotations);
      });
  }

  show(index: number) {
    return this.http.get(`quotations/${index}`);
  }

  add(params) {
    return this.http.post(`quotations`, params);
  }
  addNote(params) {
    return this.http.post(`quotation_notes`, params);
  }
  addPassenger(id,params) {
    return this.http.post(`quotations/sync_passengers/${id}`, params);
  }
  update(
    id: number,
    params
  ) {
    return this.http.put(`quotations/${id}`, params);
  }

  delete(id: number) {
    return this.http.delete(`quotations/${id}`);
  }
  deleteNote(id: number) {
    return this.http.delete(`quotation_notes/${id}`);
  }


  aprove(id: number,comment) {
    return this.http.post(`quotations/approve/${id}`,comment);
  }
  reject(id: number,comment) {
    return this.http.post(`quotations/reject/${id}`,comment);
  }

  search(params: {
    office_id: any;
    text?: string;
    type: 'client' | 'prospect';
  }) {
    return this.http.get('quotations', { params });
  }
  download(id) {
    // Para Probar
    this.http
      .get(`quotations/pdf/${id}`, { responseType: 'blob' })
      .subscribe(response => {
        saveAs(  response,
          'cotizacion.pdf');
      });
  }
  download3(id) {
    // Para Probar
    this.http
      .get(`quotations/balance/${id}?format=pdf`, { responseType: 'blob' })
      .subscribe(response => {
        saveAs(  response,
          'balance.pdf');
      });
  }



}
