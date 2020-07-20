import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  payment$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  get() {
    let parseParams = new HttpParams();
    this.http
      .get<any[]>(`payment_methods`)
      .subscribe(payment => {
        this.payment$.next(payment);
        
      });
  }

  show(index: number) {
    return this.http.get(`clients/${index}`);
  }

}
