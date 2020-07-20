import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  payments$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) { }

  
  get(params?: { page?: number; per_page?: number; quotation_id?: number }) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    this.http
      .get<any[]>(`payments`, { params: parseParams })
      .subscribe(payments => {
        this.payments$.next(payments);
      });
  }

  show(index: number) {
    return this.http.get(`payments/${index}`);
  }

  add(params) {
    return this.http.post(`payments`, params);
  }

  update(
    id: number,
    params
  ) {
    return this.http.put(`payments/${id}`, params);
  }

  delete(role: number) {
    return this.http.delete(`payments/${role}`);
  }
  download(id) {
    // Para Probar
   
    this.http
      .get(`payments/export/${id}?format=pdf`, {responseType: 'blob' })
      .subscribe(response => {
        saveAs(  response,
          'payments.pdf');
      });
  }
}
