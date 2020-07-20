import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditCardsService {
  creditCards$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) { }

  get(params?: { page?: number; per_page?: number }) {
    let parseParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(p => {
        parseParams = parseParams.append(p, params[p]);
      });
    }
    this.http
      .get<any[]>(`credit_cards`, { params: parseParams })
      .subscribe(companies => {
        this.creditCards$.next(companies);
      });
  }

  show(index: number) {
    return this.http.get(`credit_cards/${index}`);
  }

  add(params) {
    return this.http.post(`credit_cards`, params);
  }

  update(
    id: number,
    params
  ) {
    return this.http.put(`credit_cards/${id}`, params);
  }

  delete(role: number) {
    return this.http.delete(`credit_cards/${role}`);
  }
}
